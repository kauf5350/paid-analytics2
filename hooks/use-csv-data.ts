import { useState } from 'react';
import { parseCSV } from '@/lib/csv-parser';

export function useCSVData() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseFiles = async (files: File[]) => {
    setIsLoading(true);
    setError(null);
    try {
      const parsedData = await Promise.all(files.map(file => parseCSV(file)));
      setData(parsedData.flat());
    } catch (err) {
      setError('Error parsing CSV files. Please check the file format and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    parseFiles,
    hasData: data.length > 0,
  };
}
