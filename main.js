// Seletores de ENTRADA
const form = document.getElementById('post-form');
const titulo = document.getElementById('titulo');
const conteudo = document.getElementById('conteudo');
const statusEl = document.getElementById('status');

// Seletores de SAÍDA (RENDERIZAÇÃO)
const renderizadorTitulo = document.getElementById('renderizador-titulo');
const renderizadorConteudo = document.getElementById('renderizador-conteudo');
const renderizadorId = document.getElementById('renderizador-id');

// Acessibilidade/UX: ano dinâmico
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();

// Util: limpa status
function setStatus(msg = '', cls = '') {
  statusEl.textContent = msg;
  statusEl.className = `status ${cls}`.trim();
}

// Evento de submit obrigatório
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // 2.3 preventDefault

  // Validação simples
  if (!titulo.value.trim() || !conteudo.value.trim()) {
    setStatus('Preencha título e conteúdo antes de publicar.', 'error');
    return;
  }

  // 2.4 Objeto data na estrutura exigida
  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1,
  };

  setStatus('Publicando…');

  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',                             // method
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }, // headers
      body: JSON.stringify(data),                // body
    });

    // 2º then (aqui com async/await): parse da resposta
    const retorno = await resp.json();

    // Renderização do retorno
    renderizadorTitulo.innerHTML = retorno.title || '(sem título)';
    renderizadorConteudo.innerHTML = retorno.body || '(sem conteúdo)';
    renderizadorId.textContent = retorno.id ? `ID do post criado: ${retorno.id}` : '';

    setStatus('Post publicado com sucesso! ✅', 'success');
  } catch (err) {
    console.error(err);
    setStatus('Falha ao publicar. Verifique sua conexão e tente novamente.', 'error');
  }
});