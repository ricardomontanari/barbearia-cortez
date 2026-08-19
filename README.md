# Barbearia Cortez — Landing Page

Landing page responsiva para uma barbearia fictícia, desenvolvida como projeto de portfólio.

🔗 **Deploy:** [barbearia-cortez.vercel.app](https://barbearia-cortez.vercel.app)

## Sobre o projeto

O objetivo foi criar uma página de vendas completa para um pequeno negócio local, cobrindo as seções que esse tipo de cliente normalmente pede: apresentação, lista de serviços com preços, sobre o negócio, depoimentos de clientes e formulário de contato.

## Tecnologias utilizadas

- **HTML5** — estrutura semântica da página
- **CSS3** — estilização, layout responsivo (Flexbox e Grid), variáveis de tema e animações leves
- **JavaScript** — validação e simulação de envio do formulário de contato, além do menu mobile

Sem frameworks ou bibliotecas externas — apenas os três arquivos (`index.html`, `styles.css`, `script.js`), publicados como site estático.

## Funcionalidades

- Design responsivo, incluindo menu hambúrguer para telas de celular
- Barra de navegação fixa (`sticky`) durante a rolagem
- Cardápio de serviços com preços
- Seção de depoimentos de clientes
- Formulário de contato com validação em JavaScript
- Identidade visual própria: paleta verde-escuro e latão, com tipografia Bricolage Grotesque (títulos) e Inter (texto)

## Como rodar localmente

Não é necessário nenhum processo de build. Basta clonar o repositório e abrir o `index.html` no navegador:

```bash
git clone https://github.com/ricardomontanari/barbearia-cortez.git
cd barbearia-cortez
```

Depois é só abrir o arquivo `index.html` diretamente, ou usar uma extensão como o **Live Server** (VS Code) para recarregamento automático durante o desenvolvimento.

## Estrutura do projeto

```
barbearia-cortez/
├── index.html      # Estrutura e conteúdo da página
├── styles.css       # Estilização e responsividade
├── script.js        # Menu mobile e formulário de contato
└── README.md
```

## Autor

Desenvolvido por **Ricardo Montanari** como parte do portfólio de desenvolvimento front-end.
