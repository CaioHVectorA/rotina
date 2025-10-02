# Script para exportar apenas o new-app
Write-Host "🚀 Iniciando build do new-app..." -ForegroundColor Green

# Limpar pastas antigas
if (Test-Path "./public_html") {
    Remove-Item -Recurse -Force "./public_html"
    Write-Host "✅ Pasta public_html removida" -ForegroundColor Yellow
}

if (Test-Path "./.next") {
    Remove-Item -Recurse -Force "./.next"
    Write-Host "✅ Pasta .next removida" -ForegroundColor Yellow
}

if (Test-Path "./out") {
    Remove-Item -Recurse -Force "./out"
    Write-Host "✅ Pasta out removida" -ForegroundColor Yellow
}

# Build do Next.js
Write-Host "🔨 Executando build..." -ForegroundColor Blue
$buildResult = & bun run next build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro no build" -ForegroundColor Red
    exit 1
}

# Criar estrutura do public_html
Write-Host "📁 Criando estrutura public_html..." -ForegroundColor Blue
New-Item -ItemType Directory -Path "./public_html" -Force
New-Item -ItemType Directory -Path "./public_html/new-app" -Force
New-Item -ItemType Directory -Path "./public_html/new-app/back1" -Force
New-Item -ItemType Directory -Path "./public_html/new-app/upsell" -Force
New-Item -ItemType Directory -Path "./public_html/obrigado" -Force

# Copiar arquivos do new-app
Write-Host "📋 Copiando arquivos do new-app..." -ForegroundColor Blue

# Copiar página principal do new-app
if (Test-Path "./out/new-app.html") {
    Copy-Item "./out/new-app.html" "./public_html/new-app/index.html" -Force
    Write-Host "✅ new-app/index.html copiado" -ForegroundColor Green
}

# Copiar página back1
if (Test-Path "./out/new-app/back1.html") {
    Copy-Item "./out/new-app/back1.html" "./public_html/new-app/back1/index.html" -Force
    Write-Host "✅ new-app/back1/index.html copiado" -ForegroundColor Green
}

# Copiar página upsell
if (Test-Path "./out/new-app/upsell.html") {
    Copy-Item "./out/new-app/upsell.html" "./public_html/new-app/upsell/index.html" -Force
    Write-Host "✅ new-app/upsell/index.html copiado" -ForegroundColor Green
}

# Copiar página obrigado
if (Test-Path "./out/obrigado.html") {
    Copy-Item "./out/obrigado.html" "./public_html/obrigado/index.html" -Force
    Write-Host "✅ obrigado/index.html copiado" -ForegroundColor Green
}

# Copiar arquivos estáticos necessários
Write-Host "📋 Copiando arquivos estáticos..." -ForegroundColor Blue

# Copiar pasta _next (JS, CSS, etc)
if (Test-Path "./out/_next") {
    Copy-Item "./out/_next" "./public_html/_next" -Recurse -Force
    Write-Host "✅ _next copiado" -ForegroundColor Green
}

# Copiar assets públicos necessários
$publicAssets = @("logo.png", "logo.jpg", "favicon.ico", "manifest.json")
foreach ($asset in $publicAssets) {
    if (Test-Path "./out/$asset") {
        Copy-Item "./out/$asset" "./public_html/$asset" -Force
        Write-Host "✅ $asset copiado" -ForegroundColor Green
    }
}

# Copiar .htaccess se existir
if (Test-Path "./.htaccess") {
    Copy-Item "./.htaccess" "./public_html/.htaccess" -Force
    Write-Host "✅ .htaccess copiado" -ForegroundColor Green
}

Write-Host "🎉 New-app exportado com sucesso para public_html!" -ForegroundColor Green
Write-Host "📁 Estrutura criada:" -ForegroundColor Cyan
Write-Host "   public_html/new-app/index.html" -ForegroundColor White
Write-Host "   public_html/new-app/back1/index.html" -ForegroundColor White
Write-Host "   public_html/new-app/upsell/index.html" -ForegroundColor White
Write-Host "   public_html/obrigado/index.html" -ForegroundColor White
Write-Host "   public_html/_next/ (assets)" -ForegroundColor White
