// Menu mobile: abre/fecha ao clicar no botão hambúrguer e fecha
// automaticamente quando o usuário clica em algum link do menu.

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', function () {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

siteNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Envio do formulário de contato.
// Aqui é só uma simulação (sem backend): valida os campos e mostra uma
// mensagem de confirmação. Num projeto real, o "fetch" comentado abaixo
// mostra como você mandaria isso pra uma API de verdade.

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const servico = document.getElementById('servico').value;

  if (!nome || !telefone) {
    note.textContent = 'Preencha nome e WhatsApp para continuar.';
    note.style.color = '#C9A227';
    return;
  }

  // Exemplo de como isso chamaria uma API real:
  //
  // fetch('https://sua-api.com/agendamentos', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ nome, telefone, servico })
  // });

  note.textContent = `Valeu, ${nome}! Vamos confirmar seu "${servico}" pelo WhatsApp em breve.`;
  note.style.color = '#E4C868';
  form.reset();
});
