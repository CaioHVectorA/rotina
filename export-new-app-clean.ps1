# Script para exportar apenas o new-app
Write-Host "Iniciando build do new-app..." -ForegroundColor Green

# Limpar pastas antigas
if (Test-Path "./public_html") {
    Remove-Item -Recurse -Force "./public_html"
    Write-Host "Pasta public_html removida" -ForegroundColor Yellow
}

if (Test-Path "./.next") {
    Remove-Item -Recurse -Force "./.next" 
    Write-Host "Pasta .next removida" -ForegroundColor Yellow
}

if (Test-Path "./out") {
    Remove-Item -Recurse -Force "./out"
    Write-Host "Pasta out removida" -ForegroundColor Yellow
}

# Build do Next.js
Write-Host "Executando build..." -ForegroundColor Blue
& bun run next build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Erro no build" -ForegroundColor Red
    exit 1
}

# Criar estrutura do public_html com new-app na raiz
Write-Host "Criando estrutura public_html..." -ForegroundColor Blue
New-Item -ItemType Directory -Path "./public_html" -Force
New-Item -ItemType Directory -Path "./public_html/back1" -Force
New-Item -ItemType Directory -Path "./public_html/upsell" -Force
New-Item -ItemType Directory -Path "./public_html/obrigado" -Force

# Copiar arquivos do new-app para a raiz
Write-Host "Copiando arquivos do new-app para raiz..." -ForegroundColor Blue

# Copiar pagina principal do new-app para index.html da raiz
if (Test-Path "./out/new-app.html") {
    Copy-Item "./out/new-app.html" "./public_html/index.html" -Force
    Write-Host "index.html copiado (new-app na raiz)" -ForegroundColor Green
}

# Copiar pagina back1
if (Test-Path "./out/new-app/back1.html") {
    Copy-Item "./out/new-app/back1.html" "./public_html/back1/index.html" -Force
    Write-Host "back1/index.html copiado" -ForegroundColor Green
}

# Copiar pagina upsell
if (Test-Path "./out/new-app/upsell.html") {
    Copy-Item "./out/new-app/upsell.html" "./public_html/upsell/index.html" -Force
    Write-Host "upsell/index.html copiado" -ForegroundColor Green
}

# Copiar pagina obrigado
if (Test-Path "./out/new-app/obrigado.html") {
    Copy-Item "./out/new-app/obrigado.html" "./public_html/obrigado/index.html" -Force
    Write-Host "obrigado/index.html copiado" -ForegroundColor Green
}


# Copiar toda a pasta public para dentro de public_html
Write-Host "Copiando pasta public para public_html..." -ForegroundColor Blue
if (Test-Path "./public") {
    Copy-Item "./public/*" "./public_html/" -Recurse -Force
    Write-Host "Pasta public copiada para public_html" -ForegroundColor Green
}

# Copiar arquivos estaticos necessarios
Write-Host "Copiando arquivos estaticos..." -ForegroundColor Blue

# Copiar pasta _next (JS, CSS, etc)
if (Test-Path "./out/_next") {
    Copy-Item "./out/_next" "./public_html/_next" -Recurse -Force
    Write-Host "_next copiado" -ForegroundColor Green
}

# Copiar assets publicos necessarios
$publicAssets = @("logo.png", "logo.jpg", "favicon.ico", "manifest.json")
foreach ($asset in $publicAssets) {
    if (Test-Path "./out/$asset") {
        Copy-Item "./out/$asset" "./public_html/$asset" -Force
        Write-Host "$asset copiado" -ForegroundColor Green
    }
}

# Copiar .htaccess se existir
if (Test-Path "./.htaccess") {
    Copy-Item "./.htaccess" "./public_html/.htaccess" -Force
    Write-Host ".htaccess copiado" -ForegroundColor Green
}

Write-Host "New-app exportado com sucesso para public_html!" -ForegroundColor Green
