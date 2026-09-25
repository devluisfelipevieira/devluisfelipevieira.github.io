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

A pasta `dist` é a versão estática para hospedagem. A configuração `base: './'` permite servir em subdiretórios. As opções de planos gratuitos dos provedores devem ser verificadas na ocasião da publicação. Esta entrega é uma prévia local, não uma publicação pública.

## Editar

- `src/content.ts`: links, foto, cases e agrupamentos de conhecimentos.
- `src/main.tsx`: seções, experiência e formação.
- `src/style.css`: cores, tipografia e comportamento responsivo.
- `public/perfil.png`: foto original recuperada da conversa. Para trocar, substitua o arquivo ou altere `profile.photo`.
- `public/logo-lfv-02.svg`: versão vetorial da opção 02 (Luz azul), aplicada ao header, footer e favicon. `public/favicon.svg` preserva a primeira versão. `public/lfv-original.png` preserva a referência.

## Pendências editoriais

- Currículo PDF pendente. LinkedIn, GitHub, e-mail, telefone e overview do SupriTI já integrados.
- Cargo formal, vínculo e período de atuação.
- Instituição da pós-graduação em Segurança e Defesa Cibernética.
- Stack detalhada do SupriTI, equipamentos do case de rede e situação atual do UCS/AD + Samba.
- Contexto, participação, tecnologias, implantação e resultados do Guichê-PMPS.
- Confirmar classificação e exemplos de uso das tecnologias antes da versão pública.

Links vazios exibem um aviso acessível. Não apontam a perfis ou documentos inventados. Os cases abrem com controles nativos acessíveis por teclado. A prévia respeita a preferência de movimento reduzido.

## Regra editorial

Toda afirmação deve ser sustentável em entrevista. Não acrescentar métricas, senioridade, autoria integral do código nem detalhes sensíveis da Prefeitura. Manter explícito o desenvolvimento assistido por IA. A formação de Redes está concluída e o SupriTI está finalizado e em produção.
