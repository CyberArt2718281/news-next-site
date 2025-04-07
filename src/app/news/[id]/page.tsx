import { getNewsById } from '@/lib/api';
import Modal from '@/components/Modal';
import { notFound } from 'next/navigation';

export default async function InterceptedNewsPage({ params }: { params: { id: string } }) {
    const newsItem = await getNewsById(params.id);

    if (!newsItem) {
        return notFound();
    }

    return (
        <Modal>
            <h2>{newsItem.text.split('\n')[0]}</h2>
            <time>{new Date(newsItem.date * 1000).toLocaleDateString()}</time>
            <div>{newsItem.text}</div>
        </Modal>
    );
}