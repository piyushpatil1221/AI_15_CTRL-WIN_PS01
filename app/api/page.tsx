import { Avatar } from "../components/avatar"
import { ChatInterface } from "../components/chat-interface";
import { LanguageSelector } from "../components/language-selector";
import { AvatarCustomizer } from "../components/avatar-customizer";
import { KnowledgeBaseStatus } from "../components/knowledge-based-status";

import React from "react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="z-10 w-full max-w-6xl flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">
          AI Avatar Assistant
        </h1>
        <p className="text-sm md:text-base text-center mb-8 text-slate-600 dark:text-slate-300">
          Your intelligent guide with human-like interaction
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4">
              <AvatarCustomizer />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4">
              <LanguageSelector />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4">
              <KnowledgeBaseStatus />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 flex items-center justify-center min-h-[300px]">
              <Avatar />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-4">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

