# Portfólio LFV — Prévia 01

Site estático em React + TypeScript + Vite, em português. Sem backend, formulário, analytics ou armazenamento de dados.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

## Gerar para hospedagem

```sh
npm run build
npm run preview
```

A pasta `dist` é a versão estática para hospedagem. A configuração `base: './'` permite servir em subdiretórios. As opções de planos gratuitos dos provedores devem ser verificadas na ocasião da publicação. Site publicado em https://devluisfelipevieira.github.io/. O GitHub Actions publica automaticamente cada atualização enviada à branch main. Páginas de comparação não entram no site publicado.

## Editar

- `src/content.ts`: links, foto, cases e agrupamentos de conhecimentos.
- `src/main.tsx`: seções, experiência e formação.
- `src/style.css`: cores, tipografia e comportamento responsivo.
- `public/perfil.png`: foto original recuperada da conversa. Para trocar, substitua o arquivo ou altere `profile.photo`.
- `public/logo-lfv-02.svg`: versão vetorial da opção 02 (Luz azul), aplicada ao header, footer e favicon. `public/favicon.svg` preserva a primeira versão. `public/lfv-original.png` preserva a referência.

## Pendências editoriais

- Currículo atualizado em setembro de 2026 integrado em public/curriculo-luis-felipe.pdf, além dos contatos e overview do SupriTI.
- Cargo, período e formação confirmados pelo currículo fornecido.
- Ambas as pós-graduações na UNINTER; Redes concluída em setembro de 2026.
- Confirmar equipamentos do case de rede e situação atual do UCS/AD + Samba.
- Guichê-PMPS: case documentado em public/guiche.html, com ilustrações SVG fictícias em public/assets/guiche-*.svg. Contexto e participação confirmados pelo autor; interface observada no sistema.
- Confirmar classificação e exemplos de uso das tecnologias antes da versão pública.

Links vazios exibem um aviso acessível. Não apontam a perfis ou documentos inventados. Os cases abrem com controles nativos acessíveis por teclado. A prévia respeita a preferência de movimento reduzido.

## Regra editorial

Toda afirmação deve ser sustentável em entrevista. Não acrescentar métricas, senioridade, autoria integral do código nem detalhes sensíveis da Prefeitura. Manter explícito o desenvolvimento assistido por IA. A formação de Redes está concluída e o SupriTI está finalizado e em produção.
