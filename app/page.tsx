'use client'

import React, { useState } from 'react'
import CSVUploader from '@/components/csv-uploader'

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleFilesUploaded = (files: File[]) => {
    setUploadedFiles(prevFiles => [...prevFiles, ...files])
    // Here you would typically start processing the files
    console.log('Files uploaded:', files)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Social Media Campaign Visualization Tool</h1>
      <CSVUploader onFilesUploaded={handleFilesUploaded} />
      {uploadedFiles.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Uploaded Files:</h2>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300">{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}
