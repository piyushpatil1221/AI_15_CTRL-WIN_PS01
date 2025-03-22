import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: NextRequest) {
  try {
    const { message, language } = await req.json()

    // First, check if the message can be answered from the knowledge base
    // This would be implemented with a vector database like Pinecone or Supabase
    const knowledgeBaseResponse = await checkKnowledgeBase(message)

    // If knowledge base has an answer, return it
    if (knowledgeBaseResponse) {
      return NextResponse.json({
        response: knowledgeBaseResponse,
        source: "knowledge_base",
      })
    }

    // Otherwise, use the AI model to generate a response
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: message,
      system: `You are an AI assistant for IDMS Infotech's ERP system. 
      Provide helpful, concise, and accurate responses to user queries.
      Respond in ${getLanguageName(language)}.`,
    })

    return NextResponse.json({
      response: text,
      source: "ai_model",
    })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

// This would be replaced with actual knowledge base lookup
async function checkKnowledgeBase(query: string): Promise<string | null> {
  // In a real implementation, this would query a vector database
  // For demo purposes, we'll return null to simulate no match
  return null
}

function getLanguageName(languageCode: string): string {
  const languages: Record<string, string> = {
    "en-US": "English",
    "es-ES": "Spanish",
    "fr-FR": "French",
    "de-DE": "German",
    "zh-CN": "Chinese",
    "ja-JP": "Japanese",
    "ko-KR": "Korean",
    "ar-SA": "Arabic",
    "hi-IN": "Hindi",
  }

  return languages[languageCode] || "English"
}

