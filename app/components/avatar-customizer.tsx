"use client"

import { useAvatar } from "./avatar-provider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export function AvatarCustomizer() {
  const { avatarStyle, setAvatarStyle, avatarEmotion, setAvatarEmotion, avatarGender, setAvatarGender } = useAvatar()

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Avatar Customization</h3>

      <Tabs defaultValue="style" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="style">Style</TabsTrigger>
          <TabsTrigger value="emotion">Emotion</TabsTrigger>
          <TabsTrigger value="gender">Gender</TabsTrigger>
        </TabsList>

        <TabsContent value="style" className="pt-4">
          <RadioGroup
            value={avatarStyle}
            onValueChange={(value) => setAvatarStyle(value as any)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="realistic" id="realistic" />
              <Label htmlFor="realistic">Realistic</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cartoon" id="cartoon" />
              <Label htmlFor="cartoon">Cartoon</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="anime" id="anime" />
              <Label htmlFor="anime">Anime</Label>
            </div>
          </RadioGroup>
        </TabsContent>

        <TabsContent value="emotion" className="pt-4">
          <RadioGroup
            value={avatarEmotion}
            onValueChange={(value) => setAvatarEmotion(value as any)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="neutral" id="neutral" />
              <Label htmlFor="neutral">Neutral</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="happy" id="happy" />
              <Label htmlFor="happy">Happy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="serious" id="serious" />
              <Label htmlFor="serious">Serious</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="friendly" id="friendly" />
              <Label htmlFor="friendly">Friendly</Label>
            </div>
          </RadioGroup>
        </TabsContent>

        <TabsContent value="gender" className="pt-4">
          <RadioGroup
            value={avatarGender}
            onValueChange={(value) => setAvatarGender(value as any)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </TabsContent>
      </Tabs>
    </div>
  )
}

