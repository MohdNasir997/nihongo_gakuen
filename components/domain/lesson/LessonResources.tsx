'use client'

import { useState } from 'react'
import { FileText, Table, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import type { LessonResource } from '@/lib/types/lesson'

/**
 * Props for lesson resources component
 */
interface LessonResourcesProps {
  resources: LessonResource[]
}

/**
 * Lesson resources component
 * Displays downloadable files with icons and download buttons
 */
export function LessonResources({ resources }: LessonResourcesProps) {
  const [downloading, setDownloading] = useState<string | null>(null)

  /**
   * Handle resource download
   * Simulates file download with loading state
   */
  const handleDownload = async (resourceId: string, resourceName: string) => {
    setDownloading(resourceId)

    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log(`Downloading: ${resourceName}`)
    setDownloading(null)

    // TODO: Implement actual file download
  }

  /**
   * Get icon based on resource type
   */
  const getResourceIcon = (type: LessonResource['type']) => {
    switch (type) {
      case 'pdf':
        return <FileText className="size-5 text-red-500" />
      case 'excel':
        return <Table className="size-5 text-blue-500" />
      case 'doc':
        return <FileText className="size-5 text-blue-500" />
      case 'zip':
        return <Download className="size-5 text-orange-500" />
      default:
        return <FileText className="size-5 text-gray-500" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-[#1a212c] p-6 rounded-xl border border-gray-200 dark:border-gray-800"
    >
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <FileText className="size-5 text-primary" />
        Resources
      </h3>

      <div className="space-y-3">
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between p-3 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
          >
            <div className="flex items-center gap-3">
              {getResourceIcon(resource.type)}
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {resource.name}
                </p>
                <p className="text-xs text-gray-500">{resource.size}</p>
              </div>
            </div>
            <Button
              onClick={() => handleDownload(resource.id, resource.name)}
              disabled={downloading === resource.id}
              className="text-primary dark:bg-black hover:bg-primary/10 p-1 rounded"
              aria-label={`Download ${resource.name}`}
            >
              {downloading === resource.id ? (
                <div className="size-4 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
              ) : (
                <Download className="size-4" />
              )}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
