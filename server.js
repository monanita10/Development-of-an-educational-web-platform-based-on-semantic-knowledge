require('dotenv').config();
const express = require('express');
const path = require('path');
const { Readable } = require('stream');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GROQ_API_KEY;
const MODEL = process.env.MODEL || 'openai/gpt-oss-20b';

if (!API_KEY) {
  console.error('Lipseste GROQ_API_KEY. Copiaza .env.example in .env si completeaza-l.');
  process.exit(1);
}

const SYSTEM_PROMPT = `Ești SemantiBot, asistentul AI al platformei educaționale SemantiLearn. Platforma predă Web Semantic, RDF, SPARQL, OWL și Linked Open Data studenților la master. Răspunde MEREU în limba română, cu explicații clare și exemple practice. Când explici triplete RDF, SPARQL sau OWL, oferă exemple de cod relevante. Fii prietenos, entuziast și pedagogic.`;

app.use(express.json({ limit: '100kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/chat', async (req, res) => {
  const history = Array.isArray(req.body.messages) ? req.body.messages.slice(-20) : [];
  const messages = history
    .filter(m => ['user', 'assistant'].includes(m.role) && typeof m.content === 'string')
    .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }));

  try {
    const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.8,
        max_tokens: 1024,
        stream: true,
      }),
    });

    if (!upstream.ok) {
      const err = await upstream.json().catch(() => ({}));
      return res.status(upstream.status).json({ error: { message: err.error?.message || `Eroare ${upstream.status}` } });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    Readable.fromWeb(upstream.body).pipe(res);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: { message: 'Eroare server' } });
  }
});

app.listen(PORT, () => console.log(`Server pornit pe http://localhost:${PORT}`));