import type { Metadata } from 'next';
import ColorCollections from './ColorCollections';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
    title: 'Color Collections - Solids, Wooden & Marble | Al Mahaba HPL',
    description: 'Browse our extensive collection of HPL color swatches including Solids, Wooden, and Marble finishes. Find the perfect color for your project with our interactive color collection gallery.',
    keywords: [
        'HPL color collections',
        'Solids HPL',
        'Wooden HPL',
        'Marble HPL',
        'color swatches',
        'HPL finishes',
        'laminate colors',
        'Formica colors',
        'HPL Egypt',
        'color catalog',
    ],
    openGraph: {
        title: 'Color Collections - Solids, Wooden & Marble | Al Mahaba HPL',
        description: 'Browse our extensive collection of HPL color swatches including Solids, Wooden, and Marble finishes.',
        type: 'website',
        images: [
            {
                url: '/photos/S 0028 SD.webp',
                alt: 'HPL Color Collections - Al Mahaba',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Color Collections - Al Mahaba HPL',
        description: 'Browse our extensive collection of HPL color swatches.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function ColorCollectionsPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <ColorCollections />
            </main>
            <Footer />
        </>
    );
}
