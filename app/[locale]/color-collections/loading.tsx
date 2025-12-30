export default function Loading() {
    return (
        <div className="flex min-h-[calc(100vh-5rem)] bg-white">
            {/* Desktop Left Sidebar Skeleton */}
            <div className="hidden lg:block w-64 bg-gray-100 border-r border-gray-200 flex-shrink-0 fixed left-0 top-20 h-[calc(100vh-5rem)] overflow-hidden">
                <div className="p-4">
                    <div className="h-7 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
                    <div className="h-6 bg-gray-200 rounded w-24 mb-4 animate-pulse" />
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
                                <div className="h-5 bg-gray-200 rounded w-20 animate-pulse" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Skeleton */}
            <div className="flex-1 flex flex-col lg:ml-64">
                {/* Header Skeleton */}
                <div className="border-b border-gray-200 bg-white px-3 sm:px-4 md:px-6 py-3 md:py-4">
                    {/* Mobile Header */}
                    <div className="lg:hidden space-y-2">
                        <div className="flex items-center justify-between gap-2">
                            <div className="h-9 bg-gray-200 rounded w-24 animate-pulse" />
                            <div className="h-5 bg-gray-200 rounded w-20 animate-pulse" />
                        </div>
                        <div className="h-9 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-9 bg-gray-200 rounded w-full animate-pulse" />
                    </div>
                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center justify-between gap-4">
                        <div className="h-10 bg-gray-200 rounded w-64 animate-pulse" />
                        <div className="h-5 bg-gray-200 rounded w-24 animate-pulse" />
                        <div className="h-10 bg-gray-200 rounded w-40 animate-pulse" />
                        <div className="h-10 bg-gray-200 rounded w-40 animate-pulse" />
                    </div>
                </div>

                {/* Grid Skeleton */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 bg-white">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="aspect-square bg-gray-200 rounded-lg mb-2" />
                                <div className="h-3 sm:h-4 bg-gray-200 rounded w-12 sm:w-16 mx-auto mb-1" />
                                <div className="h-3 sm:h-4 bg-gray-200 rounded w-20 sm:w-24 mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

