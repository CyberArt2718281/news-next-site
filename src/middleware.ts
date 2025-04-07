// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Проверяем, является ли текущий путь корневым
    if (request.nextUrl.pathname === '/') {
        // Редиректим на /home
        return NextResponse.redirect(new URL('/home', request.url));
    }
    // Для всех остальных путей ничего не делаем
    return NextResponse.next();
}

export const config = {
    matcher: '/', // Применяем middleware только к корневому пути
};