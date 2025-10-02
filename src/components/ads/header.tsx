import { useEffect, useState } from "react";

export function AdsHeader({ currency }: { currency: number }) {
    const [displayValue, setDisplayValue] = useState(currency);

    useEffect(() => {
        if (currency !== displayValue) {
            const diff = currency - displayValue;
            const steps = 20; // Number of steps for the animation
            const increment = diff / steps;
            let current = displayValue;

            const interval = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= currency) ||
                    (increment < 0 && current <= currency)) {
                    setDisplayValue(currency);
                    clearInterval(interval);
                } else {
                    setDisplayValue(current);
                }
            }, 25); // 25ms intervals for smooth animation

            return () => clearInterval(interval);
        }
    }, [currency]);

    return (
        <header className="w-full bg-white">
            <div className="flex justify-between px-4 py-3">
                <div className="flex items-center">
                    <img src="/assets/logo.png" alt="Logo" className="h-14" />
                </div>
                <div className="font-semibold flex flex-col justify-items items-end">
                    <h3 className="text-secondary text-2xl font-bold">
                        {(displayValue / 100).toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2
                        })}
                    </h3>
                </div>
            </div>
            <hr className="w-full" />
        </header>
    );
}
