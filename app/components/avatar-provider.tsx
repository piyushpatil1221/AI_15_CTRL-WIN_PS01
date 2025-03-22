"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type AvatarStyle = "realistic" | "cartoon" | "anime"
type AvatarEmotion = "neutral" | "happy" | "serious" | "friendly"
type AvatarGender = "male" | "female"

interface AvatarContextType {
  avatarStyle: AvatarStyle
  avatarEmotion: AvatarEmotion
  avatarGender: AvatarGender
  language: string
  isAvatarSpeaking: boolean
  setAvatarStyle: (style: AvatarStyle) => void
  setAvatarEmotion: (emotion: AvatarEmotion) => void
  setAvatarGender: (gender: AvatarGender) => void
  setLanguage: (language: string) => void
  setIsAvatarSpeaking: (isSpeaking: boolean) => void
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined)

export function AvatarProvider({ children }: { children: React.ReactNode }) {
  const [avatarStyle, setAvatarStyle] = useState<AvatarStyle>("realistic")
  const [avatarEmotion, setAvatarEmotion] = useState<AvatarEmotion>("friendly")
  const [avatarGender, setAvatarGender] = useState<AvatarGender>("female")
  const [language, setLanguage] = useState<string>("en-US")
  const [isAvatarSpeaking, setIsAvatarSpeaking] = useState<boolean>(false)

  return (
    <AvatarContext.Provider
      value={{
        avatarStyle,
        avatarEmotion,
        avatarGender,
        language,
        isAvatarSpeaking,
        setAvatarStyle,
        setAvatarEmotion,
        setAvatarGender,
        setLanguage,
        setIsAvatarSpeaking,
      }}
    >
      {children}
    </AvatarContext.Provider>
  )
}

export function useAvatar() {
  const context = useContext(AvatarContext)
  if (context === undefined) {
    throw new Error("useAvatar must be used within an AvatarProvider")
  }
  return context
}

