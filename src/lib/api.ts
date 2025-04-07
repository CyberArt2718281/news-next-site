import newsData from './newsData.json';
import { NewsItem } from './types'; // Добавляем импорт типа NewsItem

export async function getAllNews(): Promise<NewsItem[]> {
    return newsData;
}

export async function getNewsById(id: string): Promise<NewsItem | null> {
    const news = newsData.find(item => item.id.toString() === id);
    return news || null;
}