// Proxy opcional: usado só se o navegador não conseguir ler o CSV do Google direto (CORS).
module.exports = async (req, res) => {
  const url = process.env.CSV_URL ||
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ4EIhTGYnvS8KrgGfYr0ujcE1XmFr2yVC_gPuzJSqIsEcusoCoaYR2BHrkBT8dJAketaDTFf6vGzI3/pub?output=csv';
  try {
    const r = await fetch(url + '&_=' + Date.now());
    if (!r.ok) throw new Error('Google respondeu ' + r.status);
    const t = await r.text();
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(t);
  } catch (e) {
    res.status(502).send('Erro ao buscar planilha: ' + e.message);
  }
};
