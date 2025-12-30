"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("LocaleSwitcher");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null!);

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#d4a574] transition-colors focus:outline-none"
                aria-label={t("label")}
            >
                <Globe className="w-5 h-5" />
                <span className="uppercase">{locale}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <button
                            onClick={() => switchLocale("en")}
                            className={`block w-full text-left px-4 py-2 text-sm ${locale === "en" ? "bg-neutral-100 text-[#d4a574] font-bold" : "text-neutral-700 hover:bg-neutral-50"
                                }`}
                        >
                            {t("en")}
                        </button>
                        <button
                            onClick={() => switchLocale("ar")}
                            className={`block w-full text-left px-4 py-2 text-sm ${locale === "ar" ? "bg-neutral-100 text-[#d4a574] font-bold" : "text-neutral-700 hover:bg-neutral-50"
                                }`}
                        >
                            {t("ar")}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
