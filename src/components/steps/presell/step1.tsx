'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import type { TStepsPresell } from "@/types/steps";

interface Step1Props {
    setStep: Dispatch<SetStateAction<TStepsPresell>>;
}

export function Step1({ setStep }: Step1Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasStarted, setHasStarted] = useState(false);
    const [showSkip, setShowSkip] = useState(false);
    const [showPlay, setShowPlay] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        let skipTimer: ReturnType<typeof setTimeout> | null = null;
        let showSkipTimer: ReturnType<typeof setTimeout> | null = null;

        if (video) {
            const handleVideoEnd = () => {
                setTimeout(() => setStep(2), 800);
            };
            const handleVideoError = () => {
                // Falha: mostra overlay de play/erro e não pula automaticamente
                setShowPlay(true);
            };
            const tryEnsureInline = () => {
                try {
                    video.muted = true;
                    // @ts-ignore - attributes for older iOS
                    video.setAttribute?.('playsinline', 'true');
                    // @ts-ignore
                    video.setAttribute?.('webkit-playsinline', 'true');
                    (video as any).playsInline = true;
                } catch { }
            };
            const attemptPlay = () => {
                if (hasStarted) return;
                tryEnsureInline();
                // Força (re)load antes do play em iOS
                try { video.load(); } catch { }
                const p = video.play();
                if (p && typeof p.then === 'function') {
                    p.then(() => {
                        setHasStarted(true);
                        setShowPlay(false);
                    }).catch(() => {
                        // Autoplay bloqueado: mostra overlay de play
                        setShowPlay(true);
                    });
                }
            };
            const handleLoadedMeta = () => attemptPlay();
            const handleCanPlay = () => attemptPlay();

            video.addEventListener('ended', handleVideoEnd);
            video.addEventListener('error', handleVideoError);
            video.addEventListener('canplay', handleCanPlay);
            video.addEventListener('loadedmetadata', handleLoadedMeta);

            // Pré-configura inline/muted e tenta autoplay logo após montar
            tryEnsureInline();
            setTimeout(attemptPlay, 0);

            // Exibe botão de pular só após 10s sem iniciar
            showSkipTimer = setTimeout(() => {
                if (!hasStarted) setShowSkip(true);
            }, 10000);

            return () => {
                video.removeEventListener('ended', handleVideoEnd);
                video.removeEventListener('error', handleVideoError);
                video.removeEventListener('canplay', handleCanPlay);
                video.removeEventListener('loadedmetadata', handleLoadedMeta);
                if (skipTimer) clearTimeout(skipTimer);
                if (showSkipTimer) clearTimeout(showSkipTimer);
            };
        }
    }, [setStep, hasStarted]);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video && !hasStarted) {
            try {
                video.currentTime = 0;
            } catch { }
            try { video.muted = true; } catch { }
            // iOS: gesto do usuário deve liberar o play
            video.play().then(() => {
                setHasStarted(true);
                setShowPlay(false);
            }).catch(() => {
                setShowPlay(true);
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <video
                ref={videoRef}
                src="/roleta.mp4"
                className="w-full h-full object-contain cursor-pointer"
                muted
                playsInline
                // @ts-ignore legacy attribute for iOS
                webkit-playsinline="true"
                preload="auto"
                // iOS costuma permitir autoplay quando muted + playsInline
                autoPlay
                poster="/tiktok.jpg"
                onClick={handleVideoClick}
                onPlay={() => { if (!hasStarted) setHasStarted(true); setShowPlay(false); }}
            />
            {showPlay && (
                <button
                    onClick={handleVideoClick}
                    className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-black flex items-center justify-center shadow"
                    aria-label="Tocar vídeo"
                    style={{ width: 64, height: 64 }}
                >
                    ▶
                </button>
            )}
            {showSkip && (
                <button
                    onClick={() => setStep(2)}
                    className="absolute bottom-6 right-6 bg-white/90 text-black rounded-full px-4 py-2 text-sm font-semibold shadow"
                >
                    Pular
                </button>
            )}
        </div>
    );
}
