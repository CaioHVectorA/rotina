import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rotina Monetizada - Lead',
  description: 'Página de apresentação do projeto Rotina Monetizada'
};

export default function LeadPage() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-800 font-rubik">
      {/* Header (removido logo) */}
      <header className="w-full h-4" />

      {/* Objetivo do projeto */}
      <section className="w-full bg-[linear-gradient(135deg,#006c66,#008f87,#00a79b)] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 md:col-start-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Objetivo do projeto</h1>
            <p className="text-lg leading-relaxed font-medium">
              <strong>O Programa Rotina Monetizada</strong> tem o objetivo de ensinar e ajudar pessoas comuns que não tem renda ou que precisam de uma renda em casa, e principalmente, mulheres, mães, empreendedoras e donas de casa que não tem a possibilidade de sair para trabalhar fora e precisam ganhar dinheiro de uma forma verdadeira e honesta trabalhando de casa, com sua família.
            </p>
          </div>
        </div>
      </section>

      {/* Explicação TikTok Shop */}
      <section className="w-full bg-[linear-gradient(135deg,#008f87,#00a79b,#00bfae)] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-8">
          <p className="text-xl leading-relaxed font-semibold">
            O TikTok Shop é uma funcionalidade dentro do aplicativo TikTok que permite que empresas e criadores de conteúdo vendam produtos diretamente aos usuários da plataforma, através de vídeos, lives e uma guia de vitrine. Os usuários podem descobrir, comprar e finalizar suas compras sem sair do TikTok.
          </p>
        </div>
      </section>

      {/* Como funciona (passos) */}
      <section className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <ol className="space-y-8 text-center text-xl leading-relaxed font-medium">
            <li>
              1- Você cria uma conta gratuita como <strong>afiliado da TikTok Shop.</strong>
            </li>
            <li>
              2- Escolhe os produtos que mais vendem e <strong>que têm boa comissão.</strong>
            </li>
            <li>
              3- Faz vídeos simples mostrando o produto <span className="font-semibold">(pode ser até reaproveitando vídeos que já existem).</span>
            </li>
            <li>
              4- <strong>Posta no TikTok</strong> com o link do produto.
            </li>
            <li>
              5- Toda vez que alguém compra, <strong>o dinheiro cai pra você.</strong>
            </li>
          </ol>
          <p className="mt-12 text-center text-2xl font-bold">Simples assim.</p>
        </div>
      </section>

      {/* Contexto / História */}
      <section className="w-full bg-[linear-gradient(135deg,#006c66,#008f87,#00a79b)] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-10">
          <p className="text-xl leading-relaxed font-semibold">
            O programa de afiliados da TikTok Shop existe desde 8 de maio de 2025. Mas como quase ninguém ensina de forma clara e prática como ganhar dinheiro com ele, a maioria das pessoas simplesmente não sabe por onde começar.
          </p>
          <p className="text-xl leading-relaxed font-extrabold">
            Foi por isso que criamos o Rotina Monetizada. Um método completo, do básico ao avançado, que ensina passo a passo como transformar a TikTok Shop em uma fonte de renda diária, usando apenas um celular e acesso à internet.
          </p>
          <p className="text-xl leading-relaxed font-semibold">
            Esse projeto foi desenvolvido especialmente para pessoas que precisam trabalhar de casa, querem mais tempo com a família e buscam uma renda online real e escalável.
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rotina Monetizada. Todos os direitos reservados.
      </footer>
    </main>
  );
}
