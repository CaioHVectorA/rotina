"use client";
import { useEffect, useState, useRef } from "react";
import { RiSecurePaymentFill } from "react-icons/ri";

export function CurrencyRetangle({ currency }: { currency: number }) {
    const [displayValue, setDisplayValue] = useState(currency / 100);
    const previousCurrencyRef = useRef(currency);

    useEffect(() => {
        const previous = previousCurrencyRef.current;
        const target = currency / 100;
        const start = previous / 100;
        const difference = target - start;
        if (difference === 0) return;

        const duration = 1000; // 1 second animation
        const steps = 60; // 60 fps
        const increment = difference / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const newValue = start + increment * currentStep;
            setDisplayValue(newValue);
            if (currentStep >= steps) {
                clearInterval(timer);
                setDisplayValue(target);
            }
        }, duration / steps);

        previousCurrencyRef.current = currency;
        return () => clearInterval(timer);
    }, [currency]);

    return (
        <div className="bg-white text-black p-4 mx-2 shadow-sm mb-4 font-rubik">
            <div className="flex justify-between items-center w-full">
                <div>
                    <p className="text-lg">Valor faturado:</p>
                    <p className="text-2xl mt-0 font-bold my-2">
                        {displayValue.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2
                        })}
                    </p>
                </div>
                <div className="bg-primary items-center justify-center text-white rounded-full py-2 px-4 flex">
                    <p className="text-sm">Levantamento</p>
                </div>
            </div>
            <h3 className="mt-2 flex items-center text-lg font-light text-secondary gap-2">
                <RiSecurePaymentFill size={32} />
                Saques 100% seguros
            </h3>
        </div>
    );
}
