# 📱 Consulta Colaboradores - App Web

## 🌟 Visão Geral

Sistema web moderno para consulta de colaboradores, otimizado para desktop e mobile. Inclui **228 colaboradores** de múltiplas empresas com busca avançada e filtros.

## 🚀 Recursos

- ✅ **228 colaboradores** integrados (POP: 171, EVER_TRADE: 50, SEVEN: 7)
- 🔍 **Busca em tempo real** por nome, matrícula, projeto
- 🏷️ **Filtros avançados** por empresa, status, cidade, cliente
- 📊 **Estatísticas em tempo real**
- 💾 **Export CSV** para Excel/Google Sheets
- 📱 **PWA (Progressive Web App)** - Instala como app nativo
- ⚡ **Offline-ready** - Funciona sem internet
- 🎨 **Interface responsiva** - Mobile e desktop

## 📁 Estrutura dos Arquivos

```
web_app/
├── index.html              # Aplicação principal
├── manifest.json           # Configuração PWA
├── sw.js                  # Service Worker (cache)
├── icon-192x192.png       # Ícone PWA (192x192)
├── icon-512x512.png       # Ícone PWA (512x512)
└── colaboradores_unificados.json # Dados de backup
```

## 🌐 Como Testar

### **1. Servidor Local (Recomendado)**
```bash
# Na pasta raiz do projeto:
python3 servidor_web.py

# Abrir no navegador:
http://localhost:8082
```

### **2. Abrir Arquivo Diretamente**
```bash
# Abrir web_app/index.html no navegador
# Funciona, mas com limitações de CORS
```

## 📱 Instalação como App

### **Chrome/Android:**
1. Abrir URL da aplicação
2. Menu (⋮) → "Adicionar à tela inicial"
3. Confirmar instalação

### **Safari/iOS:**
1. Abrir URL no Safari
2. Compartilhar → "Adicionar à Tela de Início"
3. Confirmar

### **Desktop:**
1. Chrome: Menu → "Instalar Consulta Colaboradores"
2. Edge: Menu → "Instalar este site como aplicativo"

## 🌐 Hospedagem Online

### **GitHub Pages (Gratuito)**
```bash
# 1. Criar repositório no GitHub
# 2. Upload pasta web_app/
# 3. Settings → Pages → Deploy from branch
# 4. URL: https://usuario.github.io/repositorio/
```

### **Netlify (Gratuito)**
```bash
# 1. Ir para netlify.com
# 2. Drag & drop pasta web_app/
# 3. URL instantânea gerada
```

### **Vercel (Gratuito)**
```bash
# 1. Ir para vercel.com
# 2. Import ou upload manual
# 3. Deploy automático
```

### **Firebase Hosting (Gratuito)**
```bash
# 1. Firebase Console → New Project
# 2. Hosting → Upload files
# 3. Deploy
```

## 🔧 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo com Grid/Flexbox
- **JavaScript ES6+** - Funcionalidade avançada
- **PWA** - Service Worker + Manifest
- **JSON** - Dados estruturados

## 📊 Dados

### **Estatísticas:**
- **Total**: 228 colaboradores
- **POP**: 171 (75.0%)
- **EVER_TRADE**: 50 (21.9%)
- **SEVEN**: 7 (3.1%)

### **Status:**
- **ATIVO**: 211 (92.5%)
- **FÉRIAS**: 11 (4.8%)
- **DESLIGADO**: 6 (2.6%)

### **Campos por Colaborador:**
- Identificação: Nome, Matrícula, Empresa, Status
- Localização: Cidade, UF
- Profissional: Cargo, Centro de Custo
- Projetos: Cliente, Projeto, Contrato
- Temporal: Data Admissão, Competência
- Financeiro: Salário, Comissão

## 🎯 Casos de Uso

### **Busca Rápida**
```
Termo: "JOELMO"
→ Mostra: JOELMO RODRIGUES DE OLIVEIRA (POP)
```

### **Filtro por Cliente**
```
Cliente: "COLGATE PALMOLIVE"
→ Mostra: 59 colaboradores vinculados
```

### **Filtro por Empresa**
```
Empresa: "EVER_TRADE"
→ Mostra: 50 colaboradores da planilha
```

## ⚡ Performance

- **Carregamento**: < 2 segundos
- **Busca**: Instantânea (dados incorporados)
- **PWA**: Cache inteligente
- **Offline**: Funcional após primeiro carregamento

## 🔒 Segurança

- ✅ **Dados locais** - Não enviados para servidor
- ✅ **HTTPS ready** - Compatível com SSL
- ✅ **CSP compliant** - Content Security Policy

## 🛠️ Personalização

### **Cores**
```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores dos cards */
--primary: #667eea;
--secondary: #3498db;
--success: #27ae60;
```

### **Logo e Ícones**
- Substituir `icon-192x192.png` e `icon-512x512.png`
- Usar geradores online: realfavicongenerator.net

### **Texto**
- Editar `index.html` linhas 6-8:
  - Title
  - Subtitle
  - App name

## 📋 Atualizações

### **Adicionar Novos Dados**
```python
# Executar script de atualização
python3 inserir_dados_web.py

# Ou editar manualmente web_app/index.html linha ~450
const colaboradoresData = [/* novos dados */];
```

### **Deploy Automático**
- GitHub: Commit + Push → Deploy automático
- Netlify: Drag & drop nova versão
- Vercel: Git integration

## 🆘 Solução de Problemas

### **Dados não carregam**
- Verificar se `colaboradoresData` não está `null`
- Verificar console do navegador (F12)
- Testar com servidor local

### **PWA não instala**
- Verificar se `manifest.json` está acessível
- Verificar se ícones têm tamanhos corretos
- Testar em Chrome (melhor suporte)

### **Offline não funciona**
- Verificar se `sw.js` está carregando
- Verificar se service worker está registrado
- Limpar cache do navegador

## 📞 Suporte

- **Documentação**: GUIA_APP_WEB_COMPLETO.md
- **Issues**: GitHub Issues (se hospedado)
- **Email**: contato@empresa.com

## 📄 Licença

Proprietário - Uso interno da empresa

---

**🎉 Versão web moderna e funcional!**  
**📱 Ready to deploy!**  
**🌐 Made with ❤️**