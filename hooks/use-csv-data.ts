import { useState, useCallback } from 'react';
import { parseCSV, ParsedCSVData } from '@/lib/csv-parser';

export function useCSVData() {
  const [parsedData, setParsedData] = useState<ParsedCSVData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseFiles = useCallback(async (files: File[]) => {
    setIsLoading(true);
    setError(null);
    try {
      const allParsedData = await Promise.all(files.map(file => parseCSV(file)));
      setParsedData(allParsedData.flat());
    } catch (err) {
      setError('Error parsing CSV files. Please check the file format and try again.');
      console.error('CSV parsing error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { parsedData, isLoading, error, parseFiles };
}
