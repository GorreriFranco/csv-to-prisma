
import fs from 'fs';
import Papa from 'papaparse';

export const readCSV = async <T>(filePath: string): Promise<T[]> => {
  const file = await fs.promises.readFile(filePath, 'utf8');
  const parsed = Papa.parse<T>(file, {
    header: true,
    skipEmptyLines: true
  });

  return parsed.data;
}