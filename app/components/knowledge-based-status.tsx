"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, Database, RefreshCw } from "lucide-react"

export function KnowledgeBaseStatus() {
  const [isConnected, setIsConnected] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [documentCount, setDocumentCount] = useState(0)

  const handleConnect = () => {
    setIsConnected(true)
    setDocumentCount(12) // Mock data
  }

  const handleUpload = () => {
    setIsUploading(true)

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)

      if (progress >= 100) {
        clearInterval(interval)
        setIsUploading(false)
        setDocumentCount((prev) => prev + 3)
      }
    }, 300)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Knowledge Base</h3>

        {isConnected && (
          <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
            Connected
          </Badge>
        )}
      </div>

      {!isConnected ? (
        <Button onClick={handleConnect} className="w-full" variant="outline">
          <Database className="mr-2 h-4 w-4" />
          Connect Knowledge Base
        </Button>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">Documents indexed:</span>
            <span className="font-medium">{documentCount}</span>
          </div>

          {isUploading ? (
            <div className="space-y-2">
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Uploading documents... {uploadProgress}%
              </p>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleUpload} className="flex-1" size="sm" variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Button>

              <Button className="flex-1" size="sm" variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

