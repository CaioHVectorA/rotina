"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNotificationProps {
    amount: string;
    onComplete?: () => void;
}

export function MobileNotification({ amount, onComplete }: MobileNotificationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Detect iOS user agent
        const userAgent = navigator.userAgent;
        const isiOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
        setIsIOS(isiOS);

        // Play notification sound with correct file based on device
        const notification = isiOS ? 'noti-iphone.mp3' : 'noti.mp3';
        const audio = new Audio(`/${notification}`);
        audio.play().catch(error => {
            console.log('Could not play notification sound:', error);
        });

        // Show notification after 1 second
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => {
            clearTimeout(showTimer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4"
                >
                    {isIOS ? (
                        // iOS Style Notification
                        <div
                            className="bg-[#202020]/40 backdrop-blur-sm text-white rounded-3xl shadow-lg p-3 mx-auto max-w-sm cursor-pointer"
                            onClick={() => {
                                if (onComplete) {
                                    onComplete();
                                }
                            }}
                        >
                            <div className="flex items-start space-x-3">
                                {/* Icon */}
                                <div className="flex-shrink-0 mt-1">
                                    <img
                                        src="/assets/nubank.png"
                                        alt="Nubank"
                                        className="w-8 h-8 rounded-lg object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-white truncate">
                                            Transferência Recebida
                                        </p>
                                        <p className="text-xs text-white ml-2">
                                            Agora
                                        </p>
                                    </div>

                                    <p className="text-xs text-white mt-1 line-clamp-2">
                                        Você recebeu uma transferência de R$ {amount} de TikTok Shop App
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Android Style Notification (Original Design)
                        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 mx-auto max-w-sm cursor-pointer"
                            onClick={() => {
                                if (onComplete) {
                                    onComplete();
                                }
                            }}>
                            <div className="flex items-center space-x-3">
                                {/* Notification Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="/assets/nubank.png"
                                                alt="Nubank"
                                                className="w-4 h-4 rounded-[4px] object-cover"
                                            />
                                        </div>
                                        <p className="text-xs text-[#820AD1] truncate font-medium">
                                            Nubank
                                        </p>
                                        <span className="inline-block ml-1 w-1 h-1 rounded-full bg-gray-400" />
                                        <p className="text-xs text-gray-500">
                                            Agora
                                        </p>
                                    </div>

                                    <p className="text-xs font-semibold text-gray-800 mt-1">
                                        Transferência recebida
                                    </p>

                                    <p className="text-xs text-gray-600 line-clamp-1">
                                        Você recebeu uma transferência de R$ {amount} de TikTok Shop App
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
