# Portfólio — Gabriel Palmieri

Portfólio pessoal em Next.js 15, React 19 e TypeScript. Tema escuro, conteúdo em português e inglês, galeria de projetos e formulário com EmailJS.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Abra http://localhost:3000.

## Verificação

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Os testes usam Microsoft Edge no Windows; em outros sistemas, instale Chromium com `npx playwright install chromium`. A suíte verifica desktop e celular, navegação por teclado, idioma persistido, galeria, validação do formulário e falhas de envio sem enviar mensagens reais. Capturas locais ficam em `.impeccable/review/` e não são versionadas.

## Estrutura

- `app/page.tsx`: composição da página.
- `tailwind.config.js`: tema e detecção das classes do Tailwind CSS 3.4.
- `app/globals.css`: diretivas Tailwind, tokens, fontes, animações e acessibilidade.
- `app/components/`: navegação, projetos, tecnologias e contato, estilizados com classes utilitárias Tailwind.
- `app/data/projects.ts`: imagens, tecnologias e links dos projetos.
- `app/i18n/locales/`: conteúdo em português e inglês.
- `DESIGN.md`: decisões visuais e regras para futuras alterações.

Space Grotesk é servida localmente por `@fontsource/space-grotesk`. As animações usam CSS, não bloqueiam o conteúdo e respeitam a preferência por movimento reduzido.

## Contato

Configure no ambiente de deploy ou em `.env.local`:

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

Sem essas variáveis, o formulário preserva a mensagem digitada e oferece o LinkedIn como alternativa. O template mantém os campos `name`, `from_name`, `email`, `from_email`, `message`, `time`, `year` e `subject`.

- [GitHub](https://github.com/Gabriel-Palmieri)
- [LinkedIn](https://www.linkedin.com/in/gabriel-palmieri12/)

## Imagens

As capturas dos projetos em `public/assets/`, o retrato `public/me.jpeg` e a marca `public/logo-me.png` foram preservados do repositório original. Nenhuma imagem sintética foi adicionada.
