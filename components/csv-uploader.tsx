'use client'

import React, { useState } from 'react'
import { FileUpload } from '@/components/ui/file-upload'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

interface CSVUploaderProps {
  onFilesUploaded: (files: File[]) => void
}

const CSVUploader: React.FC<CSVUploaderProps> = ({ onFilesUploaded }) => {
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (files: File[]) => {
    // Check if files are CSV
    const isValidCSV = files.every(file => file.type === 'text/csv' || file.name.endsWith('.csv'))
    
    if (!isValidCSV) {
      setError('Please upload only CSV files.')
      return
    }

    setError(null)
    onFilesUploaded(files)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <FileUpload onChange={handleFileChange} />
      
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default CSVUploader
