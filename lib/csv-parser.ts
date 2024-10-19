import Papa from 'papaparse';

export interface ParsedCSVData {
  [key: string]: string | number;
}

export async function parseCSV(file: File): Promise<ParsedCSVData[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        resolve(results.data as ParsedCSVData[]);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}
