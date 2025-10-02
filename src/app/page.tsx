"use client";

import { useState, useEffect, memo } from "react";
import { Button } from "@/components/ui/Button";
import StepVsl from "./steps/stepVsl";
import Head from "next/head";
const metaPixelNoScript = (
  <noscript>
    <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1326022142455298&ev=PageView&noscript=1" />
  </noscript>
);
// Meta Pixel Code
import Script from "next/script";

export default function MiniStepperFunnel() {

  const [step, setStep] = useState(3);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('newAppVisited');
      if (hasVisited === 'true' && process.env.NODE_ENV !== 'development') {
        window.location.href = '/back1';
        return;
      }
      localStorage.setItem('newAppVisited', 'true');
    }
  }, []);

  // Meta Pixel noscript fallback

  return (
    <>
      <Head>
        <link rel="preload" href="https://player-vz-d164b9ea-ed9.tv.pandavideo.com.br/embed/css/styles.css" as="style" />
        <link rel="prerender" href="https://player-vz-d164b9ea-ed9.tv.pandavideo.com.br/embed/?v=750fe9d6-7a70-4716-af39-30d75b2bc631" />
        <link rel="preload" href="https://player-vz-d164b9ea-ed9.tv.pandavideo.com.br/embed/js/hls.js" as="script" />
        <link rel="preload" href="https://player-vz-d164b9ea-ed9.tv.pandavideo.com.br/embed/js/plyr.polyfilled.min.js" as="script" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-d164b9ea-ed9/750fe9d6-7a70-4716-af39-30d75b2bc631.json" as="fetch" />
        <link rel="preload" href="https://config.tv.pandavideo.com.br/vz-d164b9ea-ed9/config.json" as="fetch" />
        <link rel="preload" href="https://b-vz-d164b9ea-ed9.tv.pandavideo.com.br/750fe9d6-7a70-4716-af39-30d75b2bc631/playlist.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://b-vz-d164b9ea-ed9.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://player-vz-d164b9ea-ed9.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://vz-d164b9ea-ed9.b-cdn.net" />
      </Head>
      {metaPixelNoScript}
      {step === 1 && (
        <div className="flex flex-col min-h-screen bg-black">
          <div className="flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto w-full text-primary font-semibold animate-fadeIn flex-1">
            <div className="bg-white p-6 py-8 rounded-xl shadow-lg w-full">
              <h1 className="text-2xl font-bold mb-3 text-center font-rubik leading-[24px] text-[#00D9E2]">Parabéns</h1>
              <p className="text-lg mb-2 text-center font-bold text-[#183B56] leading-[24px] my-4">
                Você conseguiu um dos acessos disponibilizados pela influenciadora
              </p>
              <p className="mb-4 text-center text-lg text-[#183B56] font-bold leading-[24px] my-6">
                Fique agora com uma demonstração de como funciona o nosso aplicativo do TikTokShop
              </p>
              <div className="text-center text-[#FF2772] font-bold mb-6">(vagas restantes: 03)</div>
              <Button animated onClick={() => setStep(2)} className="w-full text-white text-lg font-bold rounded-full py-2 shadow-md">
                Ver demonstração
              </Button>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col min-h-screen bg-white">
          <div className="flex flex-col items-center px-4 py-8 w-full text-[#183B56] font-semibold animate-fadeIn flex-1">
            <h2 className="text-xl font-bold mb-4 text-center text-[#00D9E2]">Demonstração de como funciona nosso aplicativo</h2>
            <ProgressDemo onComplete={() => setStep(3)} />
          </div>
        </div>
      )}
      {step === 3 && <StepVsl />}
    </>
  );
}

const VslUI = memo(() => (<>
  <div
    dangerouslySetInnerHTML={{
      __html: `<div id="vid_68a78b1073788fd7d229ae54" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_68a78b1073788fd7d229ae54" src="https://images.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/68a78b1073788fd7d229ae54/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_68a78b1073788fd7d229ae54" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div> </div>`,
    }}
  />
  <Script
    type="text/javascript"
    id="scr_68a78b1073788fd7d229ae54"
    src="https://scripts.converteai.net/6e06b2fa-daa1-4e58-a731-714580d4c400/players/68a78b1073788fd7d229ae54/player.js"
    async
  />
</>
))
const VSLComponent = (({ onComplete }: { onComplete?: () => void }) => {
  const [isVslDone, setIsVslDone] = useState(false);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 19 * 60 + 42; // 19:42 seconds for demo
    let attempts = 0;

    const showHiddenElements = function () {
      setIsVslDone(true);
      if (onComplete) {
        setTimeout(() => onComplete(), 1000); // Auto advance after 1 second
      }
    };

    console.log('Chegou aqui')
    const startWatchVideoProgress = function () {
      // @ts-ignore
      if (typeof smartplayer === 'undefined' || !smartplayer.instances) {
        if (attempts >= 10) return console.log('no smartplayer found');
        attempts += 1;
        return setTimeout(function () {
          startWatchVideoProgress();
        }, 1000);
      }
      // @ts-ignore
      const instance = smartplayer.instances.find(
        (inst: any) => inst.options.id === '68a78b1073788fd7d229ae54'
      );

      if (!instance) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(function () {
          startWatchVideoProgress();
        }, 1000);
      }
      instance.on('timeupdate', () => {
        // @ts-ignore
        const allTime = instance.video.currentTime;
        console.log({ allTime })
        if (allTime < SECONDS_TO_DISPLAY) return;
        showHiddenElements();
      });
    };

    startWatchVideoProgress();
  }, [onComplete]);
  return (
    <>
      {/* Meta Pixel Script */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1326022142455298');
          fbq('track', 'PageView');
        `}
      </Script>
      {metaPixelNoScript}
      <VslUI />
      {isVslDone && (
        <div className="mt-4">
          <Button
            animated
            onClick={() => window.location.href = "https://go.disruptybr.store/qlmff"}
            className="w-full text-white text-lg font-bold rounded-full py-2 shadow-md"
          >
            GARANTA SUA VAGA AQUI
          </Button>
        </div>
      )}
    </>
  );
});

function ProgressDemo({ onComplete }: { onComplete: () => void }) {
  const steps = [
    "Carregando...",
    "Produto encontrado!",
    "Venda gerada!",
    "Venda paga!",
    "Você recebeu a comissão de R$ 183,90!",
  ];
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (stage < steps.length) {
      const timeout = setTimeout(() => setStage(stage + 1), 1500);
      return () => clearTimeout(timeout);
    } else {
      const done = setTimeout(() => onComplete(), 1200);
      return () => clearTimeout(done);
    }
  }, [stage, steps.length, onComplete]);

  // Tocar som quando "Venda pagada!" for completada (stage 3 -> recebe check quando stage passa para 4)
  useEffect(() => {
    if (stage === 4) {
      const audio = new Audio('/money.mp3');
      audio.play().catch(() => {
        // Ignorar erro se não conseguir tocar (autoplay bloqueado)
      });
    }
  }, [stage]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Imagem do produto */}
      <div className="relative mb-8 w-full max-w-sm">
        <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
          <img
            src="/003.jpg"
            alt="Produto"
            className="w-full h-full object-cover"
          />
          {/* Overlay escuro e ponto de interrogação antes do produto ser encontrado */}
          {stage < 2 && (
            <>
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">?</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Lista de textos com spinner/check */}
      <div className="w-full max-w-sm space-y-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 transition-opacity duration-500 ${index <= stage ? 'opacity-100' : 'opacity-10'
              }`}
          >
            {/* Spinner ou Check */}
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              {index < stage ? (
                // Check verde para passos completados
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : index === stage ? (
                // Spinner animado para o passo atual
                <div className="w-5 h-5 border-2 border-[#00D9E2] border-t-transparent rounded-full animate-spin"></div>
              ) : (
                // Círculo vazio para passos futuros
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
              )}
            </div>

            {/* Texto */}
            <span
              className={`text-[#183B56] font-bold text-base ${index === stage ? 'animate-pulse-opacity' : ''
                }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
