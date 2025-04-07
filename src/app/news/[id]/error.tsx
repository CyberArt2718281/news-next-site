'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="error">
            <h1>Ошибка загрузки новости</h1>
            <button onClick={reset}>Попробовать снова</button>
        </div>
    );
}