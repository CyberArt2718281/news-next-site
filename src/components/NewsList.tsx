import { NewsItem } from '@/lib/types';
import NewsCard from './NewsCard';

export default function NewsList({ news }: { news: NewsItem[] }) {
    return (
        <div className="news-list">
            {news.map(item => (
                <NewsCard key={item.id} news={item} />
            ))}
        </div>
    );
}