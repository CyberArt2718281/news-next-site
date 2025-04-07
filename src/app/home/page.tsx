import NewsList from '../../components/NewsList';
import { getAllNews } from '@/lib/api';

export default async function Home() {
    const news = await getAllNews();

    return (
        <main className="container">
            <h1>Новостной хаб</h1>
            <NewsList news={news} />
        </main>
    );
}

export const revalidate = 3600;