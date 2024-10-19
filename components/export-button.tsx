'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { usePDF } from 'react-to-pdf'

interface ExportButtonProps {
  targetRef: React.RefObject<HTMLElement>
}

const ExportButton: React.FC<ExportButtonProps> = ({ targetRef }) => {
  const { toPDF, targetRef: pdfTargetRef } = usePDF({ filename: 'campaign-visualization.pdf' })

  React.useEffect(() => {
    if (targetRef.current) {
      pdfTargetRef.current = targetRef.current
    }
  }, [targetRef, pdfTargetRef])

  return (
    <Button onClick={() => toPDF()} className="mt-4">
      Export as PDF
    </Button>
  )
}

export default ExportButton
