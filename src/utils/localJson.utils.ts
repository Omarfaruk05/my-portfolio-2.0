import fsPromises from 'fs/promises';
import path from 'path'

export const getLocalData = async (endpoint: string) => {
    const filePath = path.join(process.cwd(), `/public/${endpoint}`);

    const jsonData = await fsPromises.readFile(filePath);

    const data = jsonData.toString('utf-8')
    const objectData = JSON.parse(data);
    return objectData;
}