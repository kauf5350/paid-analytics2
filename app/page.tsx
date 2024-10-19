'use client'

import React from 'react'
import CSVUploader from '@/components/csv-uploader'
import { useCSVData } from '@/hooks/use-csv-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  const { isLoading, error, parseFiles } = useCSVData()

  const handleFilesUploaded = (files: File[]) => {
    parseFiles(files)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mb-8 mt-12">Social Media Campaign Visualization</h1>
      <CSVUploader onFilesUploaded={handleFilesUploaded} />
      
      {isLoading && <p className="mt-4">Parsing CSV files...</p>}
      
      {error && (
        <Card className="mt-4 bg-red-100 dark:bg-red-900">
          <CardHeader>
            <CardTitle className="text-red-600 dark:text-red-300">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600 dark:text-red-300">{error}</p>
          </CardContent>
        </Card>
      )}
    </main>
  )
}
