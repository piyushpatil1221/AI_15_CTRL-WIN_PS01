"use client"

import { useState, useEffect, useRef } from "react"
import { useAvatar } from "./avatar-provider"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export function Avatar() {
  const { avatarStyle, avatarEmotion, avatarGender, isAvatarSpeaking } = useAvatar()
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { toast } = useToast()

  // This would normally fetch from D-ID API or similar service
  // For demo purposes, we're using placeholder images/videos
  useEffect(() => {
    if (isAvatarSpeaking && videoRef.current) {
      videoRef.current.play()
    } else if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [isAvatarSpeaking])

  // In a real implementation, this would generate a video URL from the D-ID API
  // based on the avatar style, emotion, and gender
  const getAvatarImageUrl = () => {
    const gender = avatarGender === "male" ? "m" : "f"
    const style = avatarStyle === "realistic" ? "real" : avatarStyle === "cartoon" ? "cartoon" : "anime"

    return `/placeholder.svg?height=400&width=400&text=${style}-${gender}-${avatarEmotion}`
  }

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
      {isLoading ? (
        <Skeleton className="w-full h-full" />
      ) : videoUrl && isAvatarSpeaking ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoUrl}
          loop
          muted={false}
          controls={false}
        />
      ) : (
        <Image
          src={getAvatarImageUrl() || "/placeholder.svg"}
          alt={`${avatarGender} ${avatarStyle} avatar with ${avatarEmotion} expression`}
          fill
          className="object-cover"
        />
      )}

      <div className="absolute bottom-2 right-2 bg-slate-800/70 text-white text-xs px-2 py-1 rounded">
        {isAvatarSpeaking ? "Speaking..." : "Idle"}
      </div>
    </div>
  )
}

