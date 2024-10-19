'use client'

import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, File, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// Define the props for our component
interface CSVUploaderProps {
  onFilesUploaded: (files: File[]) => void
}

const CSVUploader: React.FC<CSVUploaderProps> = ({ onFilesUploaded }) => {
  const [error, setError] = useState<string | null>(null)

  // Use the useCallback hook to memoize the onDrop function
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Check if files are CSV
    const isValidCSV = acceptedFiles.every(file => file.type === 'text/csv' || file.name.endsWith('.csv'))
    
    if (!isValidCSV) {
      setError('Please upload only CSV files.')
      return
    }

    setError(null)
    onFilesUploaded(acceptedFiles)
  }, [onFilesUploaded])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {
    'text/csv': ['.csv']
  }})

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag 'n' drop some CSV files here, or click to select files
        </p>
      </div>

      <Button className="mt-4 w-full" onClick={() => document.querySelector('input')?.click()}>
        Select CSV Files
      </Button>

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
