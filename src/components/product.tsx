"use client";
import { Button } from "@/components/ui/Button";
import { useEffect, useState, useRef } from "react";
import Lottie from "lottie-react";
import correctAnimation from "@/animation/correct.json";
import searchAnimation from "@/animation/search.json";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { SiFsecure } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Logo } from "./Logo";
import { CurrencyRetangle } from "./CurrencyRetangle";

export function Product(
    {
        value, img, addCurrency, nextStep, skipLoading = false, skipPopup = false, onLeft = false, totalCurrency = 0
    }: {
        value: number; // in BRL
        img: string;
        addCurrency: (amount: number) => void;
        nextStep: () => void;
        skipLoading?: boolean;
        skipPopup?: boolean;
        onLeft?: boolean;
        totalCurrency?: number; // in centavos
    }
) {
    const [showLoading, setShowLoading] = useState(!skipLoading);
    const [showPopup, setShowPopup] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const lottieRef = useRef<any>(null);
    useEffect(() => {
        if (!skipLoading) {
            const timer = setTimeout(() => {
                setShowLoading(false);
            }, 700);
            return () => clearTimeout(timer);
        } else {
            setShowLoading(false);
        }
    }, [skipLoading]);

    if (showLoading) {
        return (
            <div className="flex flex-col h-screen items-center gap-4">
                <div className="w-52 h-52">
                    <Lottie
                        animationData={searchAnimation}
                        loop={true}
                        autoplay={true}
                    />
                </div>
                <div className="flex opacity-40 items-center gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                    <p className="font-semibold">PROCURANDO NOVA ATUALIZAÇÃO</p>
                </div>
            </div>
        );
    }

    const onButtonClick = () => {
        addCurrency(value * 100); // value is already in BRL, just convert to centavos
        if (skipPopup) {
            nextStep();
        } else {
            setShowPopup(true);
        }
    }

    const Popup = () => {
        if (!showPopup) return null;

        // Ref for audio element
        const audioRef = useRef<HTMLAudioElement>(null);

        useEffect(() => {
            if (showPopup && lottieRef.current) {
                // Set animation speed to 2x
                lottieRef.current.setSpeed(1.4);
                // Play audio
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play();
                }
                const timer = setTimeout(() => {
                    setShowPopup(false);
                    nextStep();
                }, 2000);
                return () => clearTimeout(timer);
            }
        }, [showPopup]);

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <audio ref={audioRef} src="/money.mp3" />
                <div className="fixed inset-0 bg-black opacity-40" />
                <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all animate-fadeIn relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 mb-4">
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={correctAnimation}
                                loop={false}
                                autoplay={true}
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Parabéns!</h2>
                        <p className="text-4xl font-bold text-red-500">{
                            value.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2
                            })
                        }</p>
                        <p className="mt-4 text-lg">Valor ganho:</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            {showPopup && <Popup />}
            <div className="flex flex-col">
                <Logo />
                <CurrencyRetangle currency={totalCurrency} />
                <div className=" bg-white rounded-2xl shadow-xl py-6 px-4">
                    <p className="text-black text-center mb-4 text-xl">
                        Ganhe <span className="font-bold text-secondary">{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2 })}</span>
                    </p>
                    <p className=" opacity-80 text-black text-center mb-6">
                        Por classificar esse produto
                    </p>
                    <div
                        className="rounded-md flex justify-center text-black items-center overflow-hidden relative bg-white w-10/12 mx-auto"
                    >
                        <img
                            src={img}
                            alt="Produto"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <p className="font-bold text-black my-3 mt-6 break-words max-w-xs text-center">Classifique este produto</p>
                    <div className="flex justify-center items-center gap-1 my-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="text-4xl focus:outline-none transition-colors"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                style={{
                                    color: star <= (hoverRating || rating) ? '#fbbf24' : '#d1d5db'
                                }}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button
                            className="w-full max-w-xs disabled:opacity-40"
                            onClick={onButtonClick}
                            disabled={rating === 0}
                        >
                            Enviar Classificação
                        </Button>
                    </div>
                </div>

            </div>
        </>
    );
}