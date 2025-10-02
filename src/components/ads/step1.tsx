"use client"
import { MdThumbDown, MdThumbsUpDown, MdThumbUp, MdHome, MdAccountBalanceWallet, MdAccountCircle } from "react-icons/md";
import { Button } from "../ui/Button";
import { Product } from "../product";
import { useEffect, useState } from "react";
import { VALUES } from "@/lib/values";
import { Footer } from "../ui/footer";

const INDEX = 0

export function AdsStep1({
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
                    img={`/assets/06.jpg`}
                />
            </div>

            <Footer activeSection="home" />
        </>
    );
}
