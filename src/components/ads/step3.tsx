"use client"
import { MdThumbDown, MdThumbsUpDown, MdThumbUp, MdHome, MdAccountBalanceWallet, MdAccountCircle } from "react-icons/md";
import { Button } from "../ui/Button";
import { Product } from "../product";
import { useEffect, useState } from "react";
import { VALUES } from "@/lib/values";

const INDEX = 2

export function AdsStep3({
    nextStep,
    addCurrency
}: {
    nextStep: () => void;
    addCurrency: (amount: number) => void;
}) {
    return (
        <>
            <div className="flex flex-col h-screen items-center flex-1 px-4 py-8 max-w-md mx-auto w-full font-semibold">
                <Product
                    addCurrency={addCurrency}
                    nextStep={nextStep}
                    value={VALUES[INDEX]}
                    img={`/assets/08.jpg`}
                    onLeft
                />
            </div>

            {/* Fixed Footer */}
            <footer className="w-full bg-[#f7f7f7] fixed bottom-0 border-t border-[#e6e6e6] flex justify-around items-center py-3 gap-8">
                <div className="flex flex-col items-center">
                    <MdHome size={32} className="text-dark" />
                    <span className="text-dark text-xs">Início</span>
                </div>
                <div className="flex flex-col items-center">
                    <MdAccountBalanceWallet size={32} className="text-black" />
                </div>
                <MdAccountCircle size={32} className="text-black" />
            </footer>
        </>
    );
}
