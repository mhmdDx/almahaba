import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">Could not find requested resource</p>
            <Link
                href="/"
                className="px-4 py-2 bg-[#d4a574] text-white rounded hover:bg-[#c49564] transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
