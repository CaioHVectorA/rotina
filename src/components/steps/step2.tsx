"use client"
import { MdThumbDown, MdThumbsUpDown, MdThumbUp, MdHome, MdAccountBalanceWallet, MdAccountCircle } from "react-icons/md";
import { Button } from "../ui/Button";
import { Product } from "../product";
import { useEffect, useState } from "react";
import { VALUES } from "@/lib/values";
const INDEX = 0
export function Step2({
    nextStep,
    addCurrency,
    currency
}: {
    nextStep: () => void;
    addCurrency: (amount: number) => void;
    currency: number;
}) {
    return (
        <>
            <div className="flex flex-col h-screen items-center flex-1 px-4 py-8 max-w-md mx-auto w-full font-semibold">
                <Product
                    addCurrency={addCurrency}
                    nextStep={nextStep}
                    value={VALUES[INDEX]}
                    img={`/squares/${String(INDEX + 6).padStart(3, '0')}.jpg`}
                    totalCurrency={currency}
                />
            </div>

        </>
    );
}