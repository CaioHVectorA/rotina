"use client";

import React from "react";

export function Step0() {
    return (
        <div className="flex flex-1 items-center justify-center min-h-dvh">
            <div className="flex flex-col items-center gap-4 text-white">
                <img src="/logo.jpg" alt="Logo" style={{ maxWidth: 160, width: '60%' }} />
                <div className="h-8 w-8 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-label="Carregando" />
                <p className="text-sm opacity-80">Carregando…</p>
            </div>
        </div>
    );
}
