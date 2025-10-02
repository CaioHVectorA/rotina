#!/bin/bash

# Script para exportar apenas o new-app
echo -e "\033[32mIniciando build do new-app...\033[0m"

# Limpar pastas antigas
if [ -d "./public_html" ]; then
    rm -rf "./public_html"
    echo -e "\033[33mPasta public_html removida\033[0m"
fi

if [ -d "./.next" ]; then
    rm -rf "./.next"
    echo -e "\033[33mPasta .next removida\033[0m"
fi

if [ -d "./out" ]; then
    rm -rf "./out"
    echo -e "\033[33mPasta out removida\033[0m"
fi

# Build do Next.js
echo -e "\033[34mExecutando build...\033[0m"
bun run next build
if [ $? -ne 0 ]; then
    echo -e "\033[31mErro no build\033[0m"
    exit 1
fi

# Criar estrutura do public_html com new-app na raiz
echo -e "\033[34mCriando estrutura public_html...\033[0m"
mkdir -p "./public_html"
mkdir -p "./public_html/back1"
mkdir -p "./public_html/upsell"

# Copiar arquivos do new-app para a raiz
echo -e "\033[34mCopiando arquivos do new-app para raiz...\033[0m"

# Copiar pagina principal do new-app para index.html da raiz
if [ -f "./out/new-app.html" ]; then
    cp "./out/new-app.html" "./public_html/index.html"
    echo -e "\033[32mindex.html copiado (new-app na raiz)\033[0m"
fi

# Copiar pagina back1
if [ -f "./out/new-app/back1.html" ]; then
    cp "./out/new-app/back1.html" "./public_html/back1/index.html"
    echo -e "\033[32mback1/index.html copiado\033[0m"
fi

# Copiar pagina upsell
if [ -f "./out/new-app/upsell.html" ]; then
    cp "./out/new-app/upsell.html" "./public_html/upsell/index.html"
    echo -e "\033[32mupsell/index.html copiado\033[0m"
fi

# Copiar arquivos estaticos necessarios
echo -e "\033[34mCopiando arquivos estaticos...\033[0m"

# Copiar pasta _next (JS, CSS, etc)
if [ -d "./out/_next" ]; then
    cp -r "./out/_next" "./public_html/_next"
    echo -e "\033[32m_next copiado\033[0m"
fi

# Copiar assets publicos necessarios
public_assets=("logo.png" "logo.jpg" "favicon.ico" "manifest.json")
for asset in "${public_assets[@]}"; do
    if [ -f "./out/$asset" ]; then
        cp "./out/$asset" "./public_html/$asset"
        echo -e "\033[32m$asset copiado\033[0m"
    fi
done

# Copiar .htaccess se existir
if [ -f "./.htaccess" ]; then
    cp "./.htaccess" "./public_html/.htaccess"
    echo -e "\033[32m.htaccess copiado\033[0m"
fi

echo -e "\033[32mNew-app exportado com sucesso para public_html!\033[0m"
