import { Button } from "@/components/ui/Button";
import { memo, useState, useEffect } from "react";
import { MdOutlineSecurity } from "react-icons/md";

const VslUI = memo(() => (
  <div style={{ position: 'relative', width: '100%', height: "53vw", }}>
    <iframe
      id="panda-750fe9d6-7a70-4716-af39-30d75b2bc631"
      src="https://player-vz-d164b9ea-ed9.tv.pandavideo.com.br/embed/?v=750fe9d6-7a70-4716-af39-30d75b2bc631"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
      allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
      allowFullScreen={true}
    ></iframe>
    <div dangerouslySetInnerHTML={{
      __html: `<script>
    const SECONDS_TO_DISPLAY = 19 * 60 + 42;
    const IFRAME_ID = 'panda-750fe9d6-7a70-4716-af39-30d75b2bc631'
    const API_ENDPOINT = 'https://player.pandavideo.com.br/api.v2.js'

    if(!document.querySelector(\`script[src='\${API_ENDPOINT}']\`)) { 
        let s = document.createElement('script'); 
        s.src = API_ENDPOINT; 
        s.async = true; 
        document.head.appendChild(s);
    }

    window.pandascripttag = window.pandascripttag || [];
    window.pandascripttag.push(function () {
        const p = new PandaPlayer(IFRAME_ID , {
            onReady() {
                p.loadButtonInTime({fetchApi: true});
                p.setParentWindowUrl();
                p.onEvent(e => {
                    if (e.message === 'panda_timeupdate') {
                        if (e.currentTime >= SECONDS_TO_DISPLAY) {
                            if (window.showHiddenElements) window.showHiddenElements();
                        }
                    }
                })
            }
        });
    })
</script><div id="c6cd2bc8-f7f3-4bda-a5d6-f754c6762212"></div>` }} />
  </div>
))
const VSLComponent = (({ onComplete }: { onComplete?: () => void }) => {
  const [isVslDone, setIsVslDone] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 19 * 60 + 42; // 19:42 seconds

    const showHiddenElements = function () {
      if (shown) return;
      setShown(true);
      setIsVslDone(true);
      if (onComplete) {
        setTimeout(() => onComplete(), 1000); // Auto advance after 1 second
      }
    };

    // @ts-ignore
    window.showHiddenElements = showHiddenElements;

    const timer = setTimeout(showHiddenElements, SECONDS_TO_DISPLAY * 1000);

    return () => {
      clearTimeout(timer);
      // @ts-ignore
      window.showHiddenElements = undefined;
    };
  }, [onComplete, shown]);

  return (
    <>
      <VslUI />
      {shown && (
        <div className="mt-4">
          <Button
            animated
            onClick={() => window.location.href = "https://go.cinqpay.com.br/o4tkpuebdc"}
            className="w-full text-white text-lg font-bold rounded-full py-2 shadow-md"
          >
            GARANTA SUA VAGA AQUI
          </Button>
        </div>
      )}
    </>
  );
});

export default function StepVsl() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-start relative">
      <div className="w-full bg-cyan-600 text-white py-2">
        <div className="flex items-center justify-center gap-4 px-4">
          <p className="text-center text-sm font-semibold leading-snug">Assista ao vídeo curto abaixo para liberar seu acesso exclusivo!</p>
        </div>
      </div>
      <img src="/logo-rotina.webp" alt="Logo" className="h-[10/12] -mt-2" />

      {/* Card de vídeo */}
      <div style={{
        width: '95%',
        // height: "calc(9 / 16 * 95vw)"
      }} className="relative overflow-hidden mb-6 mx-auto mt-0 border-cyan-400">
        <VSLComponent />
      </div>
      <p className="text-center my-4 flex gap-2 items-center text-cyan-400"><MdOutlineSecurity /> Sua licença será liberada ao final do vídeo</p>

      {/* Rodapé */}
      <div className="w-full flex flex-col items-center mt-12">
        <img src="/selo.webp" alt="Selo Segurança" />
        <div className="flex gap-4 text-xs text-gray-400">
          <span>Privacidade</span>
          <span>Termos de Uso</span>
        </div>
      </div>
    </div>
  );
}
