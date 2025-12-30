'use client';

import { useState, useMemo, useCallback, memo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, Settings, ChevronUp, Filter } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
type Category = 'solids' | 'wooden' | 'marble';

interface Product {
    id: string;
    src: string;
    title: string;
    number: string;
    name: string;
    category: Category;
    color?: string[];
    dimensions?: {
        width: number;
        height: number;
    };
}

const products: Product[] = [
    // Solids
    { id: 's1', src: '/photos/S 0028 SD.webp', title: 'S 0028 SD', number: '0028', name: 'S 0028 SD', category: 'solids', color: ['grey'] },
    { id: 's2', src: '/photos/S 0030 SD.webp', title: 'S 0030 SD', number: '0030', name: 'S 0030 SD', category: 'solids', color: ['grey'] },
    { id: 's3', src: '/photos/S 158 SD.webp', title: 'S 158 SD', number: '158', name: 'S 158 SD', category: 'solids', color: ['black'] },
    { id: 's4', src: '/photos/S 1103 SD.webp', title: 'S 1103 SD', number: '1103', name: 'S 1103 SD', category: 'solids', color: ['white'] },
    { id: 's5', src: '/photos/S 1104 SD.webp', title: 'S 1104 SD', number: '1104', name: 'S 1104 SD', category: 'solids', color: ['beige'] },
    { id: 's6', src: '/photos/S 2008 SD.webp', title: 'S 2008 SD', number: '2008', name: 'S 2008 SD', category: 'solids', color: ['grey'] },
    { id: 's7', src: '/photos/S 2010 SD.webp', title: 'S 2010 SD', number: '2010', name: 'S 2010 SD', category: 'solids', color: ['grey'] },
    { id: 's8', src: '/photos/S 2012 SD.webp', title: 'S 2012 SD', number: '2012', name: 'S 2012 SD', category: 'solids', color: ['grey'] },
    { id: 's9', src: '/photos/S 2022 SD.webp', title: 'S 2022 SD', number: '2022', name: 'S 2022 SD', category: 'solids', color: ['grey'] },
    { id: 's10', src: '/photos/S 2029 SD.webp', title: 'S 2029 SD', number: '2029', name: 'S 2029 SD', category: 'solids', color: ['brown'] },
    { id: 's11', src: '/photos/S 2055 SD.webp', title: 'S 2055 SD', number: '2055', name: 'S 2055 SD', category: 'solids', color: ['black'] },
    { id: 's12', src: '/photos/S 2056 SD.webp', title: 'S 2056 SD', number: '2056', name: 'S 2056 SD', category: 'solids', color: ['grey'] },
    { id: 's13', src: '/photos/S 2060 SD.webp', title: 'S 2060 SD', number: '2060', name: 'S 2060 SD', category: 'solids', color: ['grey'] },
    { id: 's14', src: '/photos/S 2071 SD.webp', title: 'S 2071 SD', number: '2071', name: 'S 2071 SD', category: 'solids', color: ['grey'] },
    { id: 's15', src: '/photos/S 2091 SD.webp', title: 'S 2091 SD', number: '2091', name: 'S 2091 SD', category: 'solids', color: ['grey'] },
    { id: 's16', src: '/photos/S 2093 SD.webp', title: 'S 2093 SD', number: '2093', name: 'S 2093 SD', category: 'solids', color: ['grey'] },
    { id: 's17', src: '/photos/S 2094 SD.webp', title: 'S 2094 SD', number: '2094', name: 'S 2094 SD', category: 'solids', color: ['grey'] },
    { id: 's18', src: '/photos/S 2207 SD.webp', title: 'S 2207 SD', number: '2207', name: 'S 2207 SD', category: 'solids', color: ['grey'] },
    { id: 's19', src: '/photos/S 2683 SD.webp', title: 'S 2683 SD', number: '2683', name: 'S 2683 SD', category: 'solids', color: ['grey'] },
    { id: 's20', src: '/photos/S 3005 SD.webp', title: 'S 3005 SD', number: '3005', name: 'S 3005 SD', category: 'solids', color: ['grey'] },

    // Wooden - typically brown/beige tones
    { id: 'w1', src: '/photos/19.webp', title: 'S 703 SD', number: '703', name: 'S 703 SD', category: 'wooden', color: ['brown', 'beige'] },
    { id: 'w2', src: '/photos/20.webp', title: 'S 707 SD', number: '707', name: 'S 707 SD', category: 'wooden', color: ['brown', 'beige'] },
    { id: 'w3', src: '/photos/21.webp', title: 'S 30116 SD', number: '30116', name: 'S 30116 SD', category: 'wooden', color: ['brown'] },
    { id: 'w4', src: '/photos/22.webp', title: 'S 30117 SD', number: '30117', name: 'S 30117 SD', category: 'wooden', color: ['brown'] },
    { id: 'w5', src: '/photos/24.webp', title: 'S 8837 J', number: '8837', name: 'S 8837 J', category: 'wooden', color: ['brown'] },
    { id: 'w6', src: '/photos/26.webp', title: 'S 30123 SD', number: '30123', name: 'S 30123 SD', category: 'wooden', color: ['brown'] },
    { id: 'w7', src: '/photos/27.webp', title: 'S 30110 SD', number: '30110', name: 'S 30110 SD', category: 'wooden', color: ['brown'] },
    { id: 'w8', src: '/photos/28.webp', title: 'S 30114 SD', number: '30114', name: 'S 30114 SD', category: 'wooden', color: ['brown'] },
    { id: 'w9', src: '/photos/29.webp', title: 'S 30115 SD', number: '30115', name: 'S 30115 SD', category: 'wooden', color: ['brown'] },
    { id: 'w10', src: '/photos/30.webp', title: 'S 68066 J', number: '68066', name: 'S 68066 J', category: 'wooden', color: ['brown'] },
    { id: 'w11', src: '/photos/31.webp', title: 'S 30108 SD', number: '30108', name: 'S 30108 SD', category: 'wooden', color: ['brown'] },
    { id: 'w12', src: '/photos/35.webp', title: 'S 30118 SD', number: '30118', name: 'S 30118 SD', category: 'wooden', color: ['brown'] },
    { id: 'w13', src: '/photos/36.webp', title: 'S 701 SD', number: '701', name: 'S 701 SD', category: 'wooden', color: ['brown'] },
    { id: 'w14', src: '/photos/37.webp', title: 'S 30121 SD', number: '30121', name: 'S 30121 SD', category: 'wooden', color: ['brown'] },
    { id: 'w15', src: '/photos/38.webp', title: 'S 709 SD', number: '709', name: 'S 709 SD', category: 'wooden', color: ['brown'] },
    { id: 'w16', src: '/photos/41.webp', title: 'S 6111 J', number: '6111', name: 'S 6111 J', category: 'wooden', color: ['brown'] },
    { id: 'w17', src: '/photos/42.webp', title: 'S 30103 SD', number: '30103', name: 'S 30103 SD', category: 'wooden', color: ['brown'] },
    { id: 'w18', src: '/photos/43.webp', title: 'S 30107 SD', number: '30107', name: 'S 30107 SD', category: 'wooden', color: ['brown'] },
    { id: 'w19', src: '/photos/44.webp', title: 'S 30105 SD', number: '30105', name: 'S 30105 SD', category: 'wooden', color: ['brown'] },
    { id: 'w20', src: '/photos/45.webp', title: 'S 713 SD', number: '713', name: 'S 713 SD', category: 'wooden', color: ['brown'] },
    { id: 'w21', src: '/photos/52.webp', title: 'S 5942 J', number: '5942', name: 'S 5942 J', category: 'wooden', color: ['brown'] },
    { id: 'w22', src: '/photos/53.webp', title: 'S 24301 J', number: '24301', name: 'S 24301 J', category: 'wooden', color: ['brown'] },
    { id: 'w23', src: '/photos/54.webp', title: 'S 2847 J', number: '2847', name: 'S 2847 J', category: 'wooden', color: ['brown'] },
    { id: 'w24', src: '/photos/55.webp', title: 'S 6104 J', number: '6104', name: 'S 6104 J', category: 'wooden', color: ['brown'] },
    { id: 'w25', src: '/photos/56.webp', title: 'S 6133 J', number: '6133', name: 'S 6133 J', category: 'wooden', color: ['brown'] },
    { id: 'w26', src: '/photos/62.webp', title: 'S 6130 J', number: '6130', name: 'S 6130 J', category: 'wooden', color: ['brown'] },
    { id: 'w27', src: '/photos/63.webp', title: 'S 6114 J', number: '6114', name: 'S 6114 J', category: 'wooden', color: ['brown'] },
    { id: 'w28', src: '/photos/64.webp', title: 'S 6113 J', number: '6113', name: 'S 6113 J', category: 'wooden', color: ['brown'] },
    { id: 'w29', src: '/photos/65.webp', title: 'S 6123 J', number: '6123', name: 'S 6123 J', category: 'wooden', color: ['brown'] },
    { id: 'w30', src: '/photos/77.webp', title: 'S 30106 SD', number: '30106', name: 'S 30106 SD', category: 'wooden', color: ['brown'] },
    { id: 'w31', src: '/photos/78.webp', title: 'S 9726 J', number: '9726', name: 'S 9726 J', category: 'wooden', color: ['brown'] },
    { id: 'w32', src: '/photos/79.webp', title: 'S 30100 SD', number: '30100', name: 'S 30100 SD', category: 'wooden', color: ['brown'] },
    { id: 'w33', src: '/photos/80.webp', title: 'S 4239 J', number: '4239', name: 'S 4239 J', category: 'wooden', color: ['brown'] },
    { id: 'w34', src: '/photos/81.webp', title: 'S 30122 SD', number: '30122', name: 'S 30122 SD', category: 'wooden', color: ['brown'] },
    { id: 'w35', src: '/photos/82.webp', title: 'S 30113 SD', number: '30113', name: 'S 30113 SD', category: 'wooden', color: ['brown'] },

    // Marble - typically grey/white tones
    { id: 'm1', src: '/photos/91.webp', title: 'S 5448 G', number: '5448', name: 'S 5448 G', category: 'marble', color: ['grey', 'white'] },
    { id: 'm2', src: '/photos/93.webp', title: 'S 5449 G', number: '5449', name: 'S 5449 G', category: 'marble', color: ['grey', 'white'] },
    { id: 'm3', src: '/photos/94.webp', title: 'S 5450 G', number: '5450', name: 'S 5450 G', category: 'marble', color: ['grey', 'white'] },
];


// Memoized Product Card Component for better performance
// Product Card Component - Optimized
const ProductCard = memo(({ product, index, onClick }: { product: Product; index: number; onClick: (product: Product) => void }) => {
    // Only prioritize LCP candidates (top 4-5 on desktop)
    const isAboveFold = index < 6;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
            className="group cursor-pointer"
            onClick={() => onClick(product)}
        >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 border border-gray-200 mb-2 shadow-sm hover:shadow-md transition-all duration-300 will-change-transform">
                <Image
                    src={product.src}
                    alt={`${product.name} - HPL Color Swatch`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    loading={isAboveFold ? 'eager' : 'lazy'}
                    priority={isAboveFold}
                    quality={80}
                />
                {/* subtle overlay on hover to make text pop if we had it over image, but here it adds depth */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
            <div className="text-center">
                <p className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">{product.name}</p>
            </div>
        </motion.div>
    );
});

ProductCard.displayName = 'ProductCard';

// Magnifying Glass Component for Product Image
const ProductImageWithMagnifier = memo(({ product }: { product: Product }) => {
    const t = useTranslations('ColorCollections');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateImageSize = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                setImageSize({ width: rect.width, height: rect.height });
            }
        };

        // Defer initial calculation to allow animation to start smoothly
        const timer = setTimeout(() => {
            requestAnimationFrame(updateImageSize);
        }, 100);

        window.addEventListener('resize', updateImageSize);
        return () => {
            window.removeEventListener('resize', updateImageSize);
            clearTimeout(timer);
        };
    }, [product]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || !imageRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();

        // حساب الموضع النسبي داخل الصورة
        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;

        // التأكد من أن الموضع داخل حدود الصورة
        const clampedX = Math.max(0, Math.min(x, imageRect.width));
        const clampedY = Math.max(0, Math.min(y, imageRect.height));

        setMousePosition({ x: clampedX, y: clampedY });
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current || !imageRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();

        const touch = e.touches[0];
        const x = touch.clientX - imageRect.left;
        const y = touch.clientY - imageRect.top;

        const clampedX = Math.max(0, Math.min(x, imageRect.width));
        const clampedY = Math.max(0, Math.min(y, imageRect.height));

        setMousePosition({ x: clampedX, y: clampedY });
    }, []);

    const zoomLevel = 3; // مستوى التكبير
    const magnifierSize = 220; // حجم العدسة المكبرة

    // حساب موضع الخلفية المكبرة بناءً على حجم الصورة الفعلي
    const backgroundPosition = {
        x: imageSize.width > 0
            ? -(mousePosition.x * zoomLevel - magnifierSize / 2)
            : 0,
        y: imageSize.height > 0
            ? -(mousePosition.y * zoomLevel - magnifierSize / 2)
            : 0,
    };

    return (
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden min-h-[200px] md:min-h-0">
            <div
                ref={containerRef}
                className="relative w-full h-full max-w-2xl cursor-crosshair touch-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchStart={(e) => {
                    setIsHovering(true);
                    handleTouchMove(e);
                }}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => setIsHovering(false)}
            >
                {/* الصورة الأساسية */}
                <div ref={imageRef} className="relative w-full h-full">
                    <Image
                        src={product.src}
                        alt={`${product.name} - HPL Color Swatch Detail`}
                        fill
                        className="object-contain select-none"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        quality={90}
                        draggable={false}
                    />
                </div>

                {/* العدسة المكبرة - تظهر عند التمرير */}
                {isHovering && imageSize.width > 0 && (
                    <div
                        className="absolute pointer-events-none z-20 rounded-full shadow-2xl overflow-hidden border-4 border-white/90"
                        style={{
                            width: `${magnifierSize}px`,
                            height: `${magnifierSize}px`,
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            backgroundImage: `url(${product.src})`,
                            backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
                            backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
                            backgroundRepeat: 'no-repeat',
                            transform: 'translate(-50%, -50%)',
                            clipPath: 'circle(50% at 50% 50%)',
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        {/* حلقة داخلية للعدسة */}
                        <div className="absolute inset-0 rounded-full border-2 border-gray-400/30" />
                    </div>
                )}

                {/* Dimensions overlay */}
                <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} text-xs text-gray-500 z-10`}>
                    <div className="bg-white/80 px-2 py-1 rounded">{t('fullSheet')}</div>
                    <div className="bg-white/80 px-2 py-1 rounded mt-1">{t('dimensions')}</div>
                </div>

                {/* تلميح عند التمرير - يظهر فقط على الشاشات الكبيرة */}
                {!isHovering && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full animate-in fade-in duration-300 pointer-events-none whitespace-nowrap z-10">
                        {t('hoverHint')}
                    </div>
                )}
            </div>
        </div>
    );
});

ProductImageWithMagnifier.displayName = 'ProductImageWithMagnifier';

// FilterSidebar Component - Extracted to prevent re-renders
const FilterSidebar = ({
    onClose,
    isCategoriesOpen,
    setIsCategoriesOpen,
    selectedCategories,
    toggleCategory,
    categoryOptions,
    isRTL,
    t
}: {
    onClose?: () => void;
    isCategoriesOpen: boolean;
    setIsCategoriesOpen: (v: boolean) => void;
    selectedCategories: Category[];
    toggleCategory: (c: Category) => void;
    categoryOptions: { value: Category; label: string }[];
    isRTL: boolean;
    t: any;
}) => {
    return (
        <div className="h-full flex flex-col">
            <div className={`p-4 border-b border-gray-200 flex items-center ${isRTL ? 'flex-row-reverse' : 'justify-between'} lg:justify-start`}>
                <h2 className={`text-lg font-semibold text-gray-900 ${isRTL ? 'ml-auto' : ''}`}>{t('swatchFilters')}</h2>
                {onClose && (
                    <button
                        onClick={onClose}
                        className={`lg:hidden p-2 hover:bg-gray-100 rounded-full ${isRTL ? 'mr-auto' : 'ml-auto'}`}
                        aria-label="Close filters"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                {/* Categories Section */}
                <div className="mb-4">
                    <button
                        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                        className={`w-full flex items-center ${isRTL ? 'flex-row-reverse' : 'justify-between'} text-sm font-medium text-gray-700 hover:text-gray-900 mb-2`}
                    >
                        <span>{t('categories')}</span>
                        {isCategoriesOpen ? (
                            <ChevronUp className="w-4 h-4" />
                        ) : (
                            <ChevronDown className="w-4 h-4" />
                        )}
                    </button>

                    {isCategoriesOpen && (
                        <div className="space-y-2 mt-3">
                            {categoryOptions.map((category) => (
                                <label
                                    key={category.value}
                                    className={`flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    <Checkbox
                                        checked={selectedCategories.includes(category.value)}
                                        onCheckedChange={() => toggleCategory(category.value)}
                                    />
                                    <span className="text-sm text-gray-700">{category.label}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Product Details Slide-Over Sidebar
const ProductDetailsSidebar = ({
    product,
    onClose,
    isRTL,
    t
}: {
    product: Product;
    onClose: () => void;
    isRTL: boolean;
    t: any;
}) => {
    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex justify-end items-stretch" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Slide-over Panel */}
            <motion.div
                initial={{ x: isRTL ? '-100%' : '100%' }}
                animate={{ x: 0 }}
                exit={{ x: isRTL ? '-100%' : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
                className={`relative w-full max-w-2xl bg-white shadow-2xl overflow-y-auto flex flex-col h-full will-change-transform ${isRTL ? 'mr-auto' : 'ml-auto'}`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-20 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors shadow-sm`}
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="flex-1 flex flex-col">
                    {/* Top Image Area */}
                    <div className="w-full h-[40vh] sm:h-[50vh] relative bg-gray-50 flex-shrink-0 flex flex-col">
                        <ProductImageWithMagnifier product={product} />
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{t('fullSheet')}</span>
                                <span className="text-xs text-gray-400 font-mono">{t('dimensions')}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-1">{product.number}</h2>
                            <h3 className="text-xl text-gray-600">{product.name}</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-black rounded-full" />
                                    {t('note')}
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {t('noteText')}
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-900 mb-3">{t('availableIn')}</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="border border-gray-200 p-3 rounded-md text-sm text-center">
                                        <span className="block text-gray-500 text-xs mb-1">{t('patterns')}</span>
                                        <span className="font-medium text-gray-900">Standard</span>
                                    </div>
                                    <div className="border border-gray-200 p-3 rounded-md text-sm text-center cursor-pointer hover:border-black transition-colors relative group">
                                        <span className="block text-gray-500 text-xs mb-1">{t('finishes')}</span>
                                        <span className="font-medium text-gray-900 flex items-center justify-center gap-1">
                                            Matte <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-8">
                            <a
                                href="/Salomil.pdf"
                                target="_blank"
                                className="block w-full text-center px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
                            >
                                {t('downloadCatalogue')}
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ColorCollections() {
    const t = useTranslations('ColorCollections');
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [sortBy, setSortBy] = useState('new');
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Category options with translations
    const categoryOptions: { value: Category; label: string }[] = useMemo(() => [
        { value: 'solids', label: t('solids') },
        { value: 'wooden', label: t('wooden') },
        { value: 'marble', label: t('marble') },
    ], [t]);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products;

        // Filter by search term
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(searchLower) ||
                p.number.toLowerCase().includes(searchLower) ||
                p.name.toLowerCase().includes(searchLower)
            );
        }

        // Filter by selected categories
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(p =>
                selectedCategories.includes(p.category)
            );
        }

        // Sort products
        const sorted = [...filtered];
        switch (sortBy) {
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'number':
                sorted.sort((a, b) => {
                    const numA = parseInt(a.number) || 0;
                    const numB = parseInt(b.number) || 0;
                    return numA - numB;
                });
                break;
            case 'new':
            default:
                // Keep original order
                break;
        }

        return sorted;
    }, [searchTerm, selectedCategories, sortBy]);

    const toggleCategory = useCallback((category: Category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    }, []);

    const handleProductClick = useCallback((product: Product) => {
        setSelectedProduct(product);
    }, []);

    const handleResetFilters = useCallback(() => {
        setSearchTerm('');
        setSelectedCategories([]);
    }, []);

    return (
        <>
            <div className={`flex min-h-[calc(100vh-5rem)] bg-white ${isRTL ? 'flex-row-reverse' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                {/* Mobile Filter Overlay */}
                {isMobileFilterOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                            onClick={() => setIsMobileFilterOpen(false)}
                        />
                        <div className="fixed left-0 top-20 w-80 max-w-[85vw] h-[calc(100vh-5rem)] bg-white border-r border-gray-200 z-50 lg:hidden shadow-xl">
                            <FilterSidebar
                                onClose={() => setIsMobileFilterOpen(false)}
                                isCategoriesOpen={isCategoriesOpen}
                                setIsCategoriesOpen={setIsCategoriesOpen}
                                selectedCategories={selectedCategories}
                                toggleCategory={toggleCategory}
                                categoryOptions={categoryOptions}
                                isRTL={isRTL}
                                t={t}
                            />
                        </div>
                    </>
                )}

                {/* Desktop Sidebar - Swatch Filters */}
                <div className={`hidden lg:block w-64 bg-gray-50/50 ${isRTL ? 'border-l' : 'border-r'} border-gray-200 flex-shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-hidden`}>
                    <FilterSidebar
                        isCategoriesOpen={isCategoriesOpen}
                        setIsCategoriesOpen={setIsCategoriesOpen}
                        selectedCategories={selectedCategories}
                        toggleCategory={toggleCategory}
                        categoryOptions={categoryOptions}
                        isRTL={isRTL}
                        t={t}
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Header */}
                    <div className="border-b border-gray-200 bg-white px-3 sm:px-4 md:px-6 py-3 md:py-4">
                        {/* Mobile: Top row with filter button and count */}
                        <div className={`lg:hidden flex items-center ${isRTL ? 'flex-row-reverse' : 'justify-between'} gap-2 mb-3`}>
                            <button
                                onClick={() => setIsMobileFilterOpen(true)}
                                className={`flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}
                            >
                                <Filter className="w-4 h-4" />
                                <span>{t('filters')}</span>
                                {(selectedCategories.length > 0) && (
                                    <span className="bg-gray-800 text-white text-xs rounded-full px-2 py-0.5">
                                        {selectedCategories.length}
                                    </span>
                                )}
                            </button>
                            <div className="text-xs sm:text-sm font-medium text-gray-700">
                                {filteredAndSortedProducts.length} {t('products')}
                            </div>
                        </div>

                        {/* Desktop: Full header row */}
                        <div className={`hidden lg:flex items-center ${isRTL ? 'flex-row-reverse' : 'justify-between'} gap-4`}>
                            {/* Search */}
                            <div className="flex-1 max-w-md relative">
                                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5`} />
                                <input
                                    type="text"
                                    placeholder={t('searchTerm')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
                                />
                            </div>

                            {/* Count */}
                            <div className="text-sm font-medium text-gray-700">
                                {filteredAndSortedProducts.length} {t('products')}
                            </div>

                            {/* Sort */}
                            <div className="w-40">
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="new">{t('newSort')}</SelectItem>
                                        <SelectItem value="name">{t('nameAZ')}</SelectItem>
                                        <SelectItem value="name-desc">{t('nameZA')}</SelectItem>
                                        <SelectItem value="number">{t('number')}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Swatch Settings */}
                            <div className="w-40">
                                <Select>
                                    <SelectTrigger>
                                        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                            <Settings className="w-4 h-4" />
                                            <SelectValue placeholder={t('swatchSettings')} />
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="default">{t('default')}</SelectItem>
                                        <SelectItem value="large">{t('largeSwatches')}</SelectItem>
                                        <SelectItem value="small">{t('smallSwatches')}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Close/Reset */}
                            {(searchTerm || selectedCategories.length > 0) && (
                                <button
                                    onClick={handleResetFilters}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                    aria-label="Reset filters"
                                >
                                    <X className="w-5 h-5 text-gray-600" />
                                </button>
                            )}
                        </div>

                        {/* Mobile: Search and controls row */}
                        <div className="lg:hidden space-y-2">
                            {/* Search */}
                            <div className="relative">
                                <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5`} />
                                <input
                                    type="text"
                                    placeholder={t('searchProducts')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`w-full ${isRTL ? 'pr-9 sm:pr-10 pl-4' : 'pl-9 sm:pl-10 pr-4'} py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
                                />
                            </div>

                            {/* Mobile: Sort and Reset */}
                            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="flex-1">
                                    <Select value={sortBy} onValueChange={setSortBy}>
                                        <SelectTrigger className="h-9 text-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="new">{t('newSort')}</SelectItem>
                                            <SelectItem value="name">{t('nameAZ')}</SelectItem>
                                            <SelectItem value="name-desc">{t('nameZA')}</SelectItem>
                                            <SelectItem value="number">{t('number')}</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {(searchTerm || selectedCategories.length > 0) && (
                                    <button
                                        onClick={handleResetFilters}
                                        className="p-2 hover:bg-gray-100 rounded-full"
                                        aria-label="Reset filters"
                                    >
                                        <X className="w-4 h-4 text-gray-600" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Grid of Swatches */}
                    <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 bg-white">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                            <AnimatePresence mode="popLayout">
                                {filteredAndSortedProducts.map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        index={index}
                                        onClick={handleProductClick}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredAndSortedProducts.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                {t('noProductsFound')}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Detail Slide-Over */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductDetailsSidebar
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        isRTL={isRTL}
                        t={t}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
