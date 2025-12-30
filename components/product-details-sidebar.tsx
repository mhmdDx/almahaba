"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X, ChevronDown } from "lucide-react"

// Types
export interface ProductDetails {
    id: string;
    src: string;
    badge?: string;
    title: string; // Used for "number" in the original (big bold text)
    name: string; // Used for "name" (secondary text)
    description?: string;
    tags?: string[];
    dimensions?: {
        width: number;
        height: number;
    };
}

// Magnifying Glass Component
function ProductImageWithMagnifier({ product, t, isRTL }: { product: ProductDetails; t: any; isRTL: boolean }) {
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

        const x = e.clientX - imageRect.left;
        const y = e.clientY - imageRect.top;

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

    const zoomLevel = 3;
    const magnifierSize = 220;

    const backgroundPosition = {
        x: imageSize.width > 0 ? -(mousePosition.x * zoomLevel - magnifierSize / 2) : 0,
        y: imageSize.height > 0 ? -(mousePosition.y * zoomLevel - magnifierSize / 2) : 0,
    };

    return (
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden min-h-[180px] md:min-h-0">
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
                <div ref={imageRef} className="relative w-full h-full">
                    {/* Fallback to regular img tag if Next/Image src is external or problematic, 
                but keeping Image for consistency if src is local. 
                Using unoptimized to ensure it works with potential external/absolute paths safely. */}
                    <Image
                        src={product.src}
                        alt={`${product.name} - Detail`}
                        fill
                        className="object-contain select-none"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        quality={90}
                        draggable={false}
                        unoptimized
                    />
                </div>

                {isHovering && imageSize.width > 0 && (
                    <div
                        className="absolute pointer-events-none z-20 rounded-full shadow-2xl overflow-hidden border-4 border-white/90"
                        style={{
                            width: `${magnifierSize}px`,
                            height: `${magnifierSize}px`,
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            backgroundImage: `url('${product.src}')`,
                            backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
                            backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
                            backgroundRepeat: 'no-repeat',
                            transform: 'translate(-50%, -50%)',
                            clipPath: 'circle(50% at 50% 50%)',
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <div className="absolute inset-0 rounded-full border-2 border-gray-400/30" />
                    </div>
                )}

                {/* Helper Hint - Now visible on mobile too */}
                {!isHovering && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full animate-in fade-in duration-300 pointer-events-none whitespace-nowrap z-10">
                        {t('hoverHint') || "Hover or touch to zoom"}
                    </div>
                )}
            </div>
        </div>
    );
}

// Main Sidebar Component
export function ProductDetailsSidebar({
    product,
    onClose,
    isRTL,
    t
}: {
    product: ProductDetails;
    onClose: () => void;
    isRTL: boolean;
    t: any;
}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex justify-end items-stretch" dir={isRTL ? 'rtl' : 'ltr'}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                initial={{ x: isRTL ? '-100%' : '100%' }}
                animate={{ x: 0 }}
                exit={{ x: isRTL ? '-100%' : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
                className={`relative w-full max-w-2xl bg-white shadow-2xl overflow-y-auto flex flex-col h-full will-change-transform ${isRTL ? 'mr-auto' : 'ml-auto'}`}
            >
                <button
                    onClick={onClose}
                    className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-20 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors shadow-sm`}
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="flex-1 flex flex-col">
                    {/* Image Section */}
                    <div className="w-full h-[35vh] sm:h-[50vh] relative bg-gray-50 flex-shrink-0 flex flex-col">
                        <ProductImageWithMagnifier product={product} t={t} isRTL={isRTL} />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col pb-24 md:pb-8">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-2">
                                {product.badge && (
                                    <span className="text-xs font-bold text-[#d4a574] bg-[#d4a574]/10 px-2 py-1 rounded tracking-widest uppercase">{product.badge}</span>
                                )}
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">{product.title}</h2>
                            <h3 className="text-lg text-gray-500 font-light">{product.name}</h3>
                        </div>

                        <div className="space-y-6">
                            {product.description && (
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            )}

                            {/* Tags Grid */}
                            {product.tags && product.tags.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Applications</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags.map((tag, i) => (
                                            <span key={i} className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-auto pt-8">
                            <a
                                href="/Salomil.pdf"
                                target="_blank"
                                className="block w-full text-center px-6 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium tracking-wide"
                            >
                                Download Catalog
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
