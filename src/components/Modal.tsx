// src/components/Modal.tsx
'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: ReactNode }) {
    const router = useRouter();

    return (
        <div className="modal" onClick={() => router.back()}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => router.back()}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}