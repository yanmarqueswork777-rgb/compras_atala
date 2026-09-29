# Total de Compras por Fornecedor

Dashboard estático (HTML puro) que lê o CSV publicado do Google Sheets.

## Estrutura
- `index.html` – a página inteira (sem build)
- `api/csv.js` – proxy opcional (Vercel Function), usado só se o navegador for bloqueado por CORS

## Publicar
1. Suba esta pasta num repositório do GitHub.
2. No Vercel: **Add New → Project → Import** o repositório. Framework: *Other*. Sem build command. Deploy.

## Trocar a planilha
Edite a constante `CSV_URL` no topo do `<script>` em `index.html` (e opcionalmente a variável de ambiente `CSV_URL` no Vercel para o proxy).

## Observações
- Filtro principal: **Data_Entrada_Sistema** (padrão: últimos 30 dias; mude `DEFAULT_PRESET`).
- Cada NF é contada uma única vez (a coluna `Valor_Total_Nota_Geral` se repete por item).
- A planilha precisa estar publicada na web como CSV.
