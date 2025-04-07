'use client';

import Link from 'next/link';
import { NewsItem } from '@/lib/types';

export default function NewsCard({ news }: { news: NewsItem }) {
    return (
        <Link href={`/news/${news.id}`} className="news-card">
            <h2 title={news.text.split('\n')[0]}>
                {news.text.split('\n')[0].length > 50
                    ? news.text.split('\n')[0].substring(0, 47) + '...'
                    : news.text.split('\n')[0]}
            </h2>
            <time>{new Date(news.date * 1000).toLocaleDateString()}</time>
            {news.attachments[0]?.image && (
                <img src={news.attachments[0].image.src} alt="" />
            )}
        </Link>
    );
}