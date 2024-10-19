'use client'

import React from 'react'
import { useCSVData } from '@/hooks/use-csv-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart'
import { BarChart, LineChart, PieChart } from 'recharts'

export default function VisualizePage() {
  const { data } = useCSVData()

  // TODO: Process data for charts

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Data Visualization</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Engagement by Influencer</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px]">
              <BarChart
                data={[
                  { name: 'Influencer 1', engagement: 1000 },
                  { name: 'Influencer 2', engagement: 2000 },
                  { name: 'Influencer 3', engagement: 1500 },
                ]}
              >
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px]">
              <LineChart
                data={[
                  { name: 'Jan', engagement: 500 },
                  { name: 'Feb', engagement: 800 },
                  { name: 'Mar', engagement: 1200 },
                  { name: 'Apr', engagement: 1000 },
                  { name: 'May', engagement: 1500 },
                ]}
              >
                <ChartTooltip content={<ChartTooltipContent />} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px]">
              <PieChart
                data={[
                  { name: 'Likes', value: 300 },
                  { name: 'Comments', value: 50 },
                  { name: 'Shares', value: 100 },
                ]}
              >
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
