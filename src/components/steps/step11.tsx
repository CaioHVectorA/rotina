"use client"
import { Product } from "../product";
import { VALUES } from "@/lib/values";

const INDEX = 9;

export function Step11({
    nextStep,
    addCurrency,
    currency
}: {
    nextStep: () => void;
    addCurrency: (amount: number) => void;
    currency: number;
}) {
    return (
        <div className="flex flex-col h-screen items-center flex-1 px-4 py-8 max-w-md mx-auto w-full font-semibold">
            <Product
                addCurrency={addCurrency}
                nextStep={nextStep}
                value={VALUES[INDEX]}
                img={`/squares/${String(INDEX + 1).padStart(3, '0')}.jpg`}
                totalCurrency={currency}
                onLeft={true}
            />
        </div>
    );
}
