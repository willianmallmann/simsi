/* ── Config ────────────────────────────────────────────────── */
// After deploying Code.gs as a Web App, paste the /exec URL below.
const SIMSI_CONFIG = {
  shopifyUrl:    'https://shop.simsi.com.br',
  sheetsWebhook: 'https://script.google.com/macros/s/AKfycbwLWHTpnV7SOiNh38lVedjs49WnwRaVPWesLhzmaouss4taBoLpISjbryZbFI3q-JJdpQ/exec',
};

/* ── Quiz data ─────────────────────────────────────────────── */
const Q2_BRANCHES = {
  dormir: {
    title: 'Quando você pensa em dormir mal, o que mais te identifica?',
    options: [
      { label: 'Demoro a pegar no sono e não consigo desligar a cabeça', ritual: 'reducao-estimulo' },
      { label: 'Acordo no meio da noite e custo a voltar a dormir',       ritual: 'acalmar-mente' },
      { label: 'Durmo mas acordo cansada',                                ritual: 'relaxamento-noturno' },
    ],
  },
  ansiedade: {
    title: 'Como a ansiedade aparece mais para você?',
    options: [
      { label: 'Mente acelerada, pensamentos repetitivos',                ritual: 'pausas-ativas' },
      { label: 'Tensão muscular acumulada (pescoço, ombros, lombar)',     ritual: 'relaxamento' },
      { label: 'Me sinto angustiada e sinto meu peito apertado',         ritual: 'pequenas-pausas' },
    ],
  },
  explorar: {
    title: 'Em qual momento do dia você está procurando mais cuidado consigo?',
    options: [
      { label: 'Pela manhã, começar o dia melhor',                        ritual: 'pausas-ativas' },
      { label: 'Durante o expediente, pausas no trabalho',                ritual: 'pequenas-pausas' },
      { label: 'Final do dia, transição entre trabalho e casa',           ritual: 'relaxamento-noturno' },
      { label: 'À noite, preparar para dormir',                           ritual: 'reducao-estimulo' },
    ],
  },
};

const RITUALS = {
  'reducao-estimulo': {
    name: 'Ritual de Redução de Estímulos',
    description: 'A gente vive imerso em estímulos. O cérebro humano, que evoluiu para responder aos ciclos naturais de luz e escuro, hoje recebe um fluxo constante de luz azul, notificações sonoras, ar condicionado, telas, uma sobrecarga que o sistema nervoso simplesmente não foi desenhado para processar 24 horas por dia. O Ritual de Redução de Estímulos nasce para devolver ao corpo o ambiente sensorial que ele reconhece como seguro, aquele em que o sistema parassimpático pode finalmente assumir o comando.',
    ctaLabel: 'Conhecer o Ritual de Redução de Estímulos',
    ctaUrl:   'https://shop.simsi.com.br/pages/ritual-de-reducao-de-estimulo',
  },
  'acalmar-mente': {
    name: 'Ritual para Acalmar a Mente',
    description: 'A ruminação é o ato repetitivo e passivo de focar nas emoções negativas e em suas causas, sem chegar a uma resolução. Diferente do pensamento analítico, que busca uma solução, a ruminação roda em círculos. E quanto mais roda, mais ativa as áreas do cérebro associadas ao estresse, à tristeza e à ansiedade. A boa notícia é que o cérebro responde bem a interrupções específicas. Os rituais para acalmar a mente reúnem três práticas que o sustentam.',
    ctaLabel: 'Conhecer o Ritual para Acalmar a Mente',
    ctaUrl:   'https://shop.simsi.com.br/pages/ritual-para-acalmar-a-mente',
  },
  'relaxamento-noturno': {
    name: 'Ritual de Relaxamento Noturno',
    description: 'O excesso de informação que consumimos ao longo do dia, somado às telas, à luz artificial e ao volume de decisões pequenas, mantém o sistema nervoso em estado de alerta muito além do necessário. O resultado é o que muita gente conhece de cor: o corpo cansado, mas a cabeça que não desliga. O sono que demora a chegar e que, quando chega, não conseguimos descansar. O Ritual de Relaxamento Noturno é a sequência de pequenos gestos que ensina o corpo a fazer essa transição, sinalizando fisicamente ao corpo que é hora de pausar e desconectar a mente.',
    ctaLabel: 'Conhecer o Ritual de Relaxamento Noturno',
    ctaUrl:   'https://shop.simsi.com.br/pages/ritual-de-relaxamento-noturno',
  },
  'pausas-ativas': {
    name: 'Ritual de Pausas Ativas',
    description: 'A ansiedade raramente aparece quando estamos profundamente envolvidos em uma atividade que ocupa as mãos. Costurar, modelar, escrever à mão, regar uma planta, fazer um pão. Quando o corpo trabalha em ritmo próprio e os sentidos estão ocupados, a mente que estava em loop encontra naturalmente um lugar para descansar. Quando passamos a viver predominantemente em ambientes em que o esforço é cognitivo e o resultado é abstrato (planilhas, e-mails, telas), esse circuito atrofia. E a ansiedade cresce. O Ritual de Pausas Ativas nasce para reativar esse caminho.',
    ctaLabel: 'Conhecer o Ritual de Pausas Ativas',
    ctaUrl:   'https://shop.simsi.com.br/pages/ritual-de-pausas-ativas',
  },
  'relaxamento': {
    name: 'Ritual de Relaxamento',
    description: 'A maior parte das pessoas trata o descanso como recompensa, algo que se conquista depois de muito esforço. A neurociência mostra o contrário. O descanso não é o que vem depois do esforço, é o que torna o esforço sustentável. Sem ele, o sistema nervoso vai acumulando uma carga chamada de allostatic load, a sobrecarga do estresse que o corpo não conseguiu processar. A boa notícia é que o sistema nervoso responde rápido a sinais de descanso. O Ritual de Relaxamento nasce para permitir essa manutenção diária.',
    ctaLabel: 'Conhecer o Ritual de Relaxamento',
    ctaUrl:   'https://shop.simsi.com.br/pages/ritual-de-relaxamento',
  },
  'pequenas-pausas': {
    name: 'Ritual de Pequenas Pausas',
    description: 'O cérebro humano não foi desenhado para esforço contínuo. Ele opera em ciclos de noventa a cento e vinte minutos. A cada ciclo, há uma queda natural de atenção e energia que pede pausa. Quando essa queda é ignorada, o cortisol sobe, a ansiedade se acumula, e a produtividade cai. A maior parte da ansiedade silenciosa do dia a dia mora exatamente aqui. A gente vai empilhando horas de foco contínuo até que o sistema nervoso entra em estado de alerta sem motivo aparente. O Ritual de Pequenas Pausas nasce para devolver esse ritmo ao corpo.',
    ctaLabel: 'Conhecer o Ritual de Pequenas Pausas',
    ctaUrl:   'https://shop.simsi.com.br/pages/ritual-de-pequenas-pausas',
  },
};

/* ── App state ─────────────────────────────────────────────── */
const state = {
  q1: null,
  q1label: null,
  q2: null,
  q2label: null,
  q3: null,
  q4: null,
  ritual: null,
  name: '',
  email: '',
  newsletter: true,
};

/* ── Screen management ─────────────────────────────────────── */
let currentScreen = null;

function showScreen(id) {
  if (currentScreen) {
    currentScreen.classList.remove('visible');
    setTimeout(() => {
      currentScreen.classList.remove('active');
      currentScreen = null;
      _activateScreen(id);
    }, 350);
  } else {
    _activateScreen(id);
  }
}

function _activateScreen(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('active');
  requestAnimationFrame(() => {
    el.classList.add('visible');
    el.classList.add('screen-enter');
  });
  currentScreen = el;
}

/* ── Skip / redirect ───────────────────────────────────────── */
function skipToShopify() {
  window.location.href = SIMSI_CONFIG.shopifyUrl;
}

document.querySelectorAll('[data-skip]').forEach(btn => {
  btn.addEventListener('click', skipToShopify);
});
document.getElementById('skip-breathing').addEventListener('click', skipToShopify);

/* ── Breathing animation ───────────────────────────────────── */
const breathStage  = document.getElementById('breath-stage');
const breathPhase  = document.getElementById('breath-phase');
const breathTimer  = document.getElementById('breath-timer');

const BREATH_SEQUENCE = [
  { phase: 'inspire', label: 'inspire', duration: 5000, animClass: 'breath-anim-in' },
  { phase: 'hold',    label: 'segure',  duration: 2000, animClass: 'breath-anim-hold' },
  { phase: 'expire',  label: 'expire',  duration: 8000, animClass: 'breath-anim-out' },
];

let breathTimeout = null;
let breathCountdown = null;

function startBreathing() {
  let stepIndex = 0;

  function runStep() {
    const step = BREATH_SEQUENCE[stepIndex];
    breathPhase.textContent = step.label;

    // Remove previous anim classes
    breathStage.classList.remove('breath-anim-in', 'breath-anim-hold', 'breath-anim-out');
    void breathStage.offsetWidth; // force reflow
    breathStage.classList.add(step.animClass);

    // Countdown timer
    let elapsed = 0;
    const interval = 1000;
    const totalSec = Math.round(step.duration / 1000);
    breathTimer.textContent = totalSec + 's';
    clearInterval(breathCountdown);
    breathCountdown = setInterval(() => {
      elapsed += interval;
      const remaining = totalSec - Math.round(elapsed / 1000);
      breathTimer.textContent = (remaining > 0 ? remaining : totalSec) + 's';
    }, interval);

    breathTimeout = setTimeout(() => {
      clearInterval(breathCountdown);
      stepIndex++;
      if (stepIndex < BREATH_SEQUENCE.length) {
        runStep();
      } else {
        // One cycle done → advance
        breathStage.classList.remove('breath-anim-in', 'breath-anim-hold', 'breath-anim-out');
        showScreen('screen-q1');
      }
    }, step.duration);
  }

  runStep();
}

// Click anywhere on breath stage to skip to Q1
breathStage.addEventListener('click', () => {
  clearTimeout(breathTimeout);
  clearInterval(breathCountdown);
  breathStage.classList.remove('breath-anim-in', 'breath-anim-hold', 'breath-anim-out');
  showScreen('screen-q1');
});

/* ── Q1 options ────────────────────────────────────────────── */
document.getElementById('q1-options').addEventListener('click', e => {
  const btn = e.target.closest('[data-q="q1"]');
  if (!btn) return;

  const value = btn.dataset.value;
  if (value === 'redirect') { skipToShopify(); return; }

  state.q1 = value;
  state.q1label = btn.textContent.trim();

  highlightSelected('q1-options', btn);
  setTimeout(() => buildQ2AndShow(), 250);
});

/* ── Q2 (dynamic branching) ────────────────────────────────── */
function buildQ2AndShow() {
  const branch = Q2_BRANCHES[state.q1];
  if (!branch) return;

  document.getElementById('q2-title').textContent = branch.title;

  const container = document.getElementById('q2-options');
  container.innerHTML = '';
  branch.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.q = 'q2';
    btn.dataset.ritual = opt.ritual;
    btn.textContent = opt.label;
    container.appendChild(btn);
  });

  showScreen('screen-q2');
}

document.getElementById('q2-options').addEventListener('click', e => {
  const btn = e.target.closest('[data-q="q2"]');
  if (!btn) return;

  state.q2 = btn.dataset.ritual;
  state.q2label = btn.textContent.trim();
  state.ritual = btn.dataset.ritual;

  highlightSelected('q2-options', btn);
  setTimeout(() => showScreen('screen-q3'), 250);
});

/* ── Q3 options ────────────────────────────────────────────── */
document.getElementById('q3-options').addEventListener('click', e => {
  const btn = e.target.closest('[data-q="q3"]');
  if (!btn) return;

  state.q3 = btn.dataset.value;
  highlightSelected('q3-options', btn);
  setTimeout(() => showScreen('screen-q4'), 250);
});

/* ── Q4 options ────────────────────────────────────────────── */
document.getElementById('q4-options').addEventListener('click', e => {
  const btn = e.target.closest('[data-q="q4"]');
  if (!btn) return;

  state.q4 = btn.dataset.value;
  highlightSelected('q4-options', btn);
  setTimeout(() => showScreen('screen-lead'), 250);
});

/* ── Lead form ─────────────────────────────────────────────── */
document.getElementById('lead-form').addEventListener('submit', async e => {
  e.preventDefault();

  const emailInput = document.getElementById('input-email');
  const emailError = document.getElementById('email-error');
  const submitBtn  = document.getElementById('submit-btn');

  const email = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!validEmail) {
    emailError.style.display = 'block';
    emailInput.focus();
    return;
  }
  emailError.style.display = 'none';

  state.email       = email;
  state.name        = document.getElementById('input-name').value.trim();
  state.newsletter  = document.getElementById('input-newsletter').checked;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Preparando seu ritual…';

  // Save locally
  localStorage.setItem('simsi_user', JSON.stringify({
    ...state,
    timestamp: new Date().toISOString(),
  }));

  // Fire webhook (non-blocking — failure doesn't block the user)
  sendToWebhook().catch(() => {});

  buildResultAndShow();
});

async function sendToWebhook() {
  if (!SIMSI_CONFIG.sheetsWebhook) return;

  const payload = encodeURIComponent(JSON.stringify({
    email:      state.email,
    name:       state.name,
    newsletter: state.newsletter,
    answers: {
      q1: state.q1label,
      q2: state.q2label,
      q3: state.q3,
      q4: state.q4,
    },
    ritual:    state.ritual,
    maturity:  state.q3,
    duration:  state.q4,
    timestamp: new Date().toISOString(),
  }));

  // Apps Script redirects strip POST bodies, so we send as a GET
  // with a URL parameter instead. no-cors avoids CORS preflight errors.
  await fetch(SIMSI_CONFIG.sheetsWebhook + '?payload=' + payload, {
    method: 'GET',
    mode:   'no-cors',
  });
}

/* ── Build result screen ───────────────────────────────────── */
function buildResultAndShow() {
  const ritual  = RITUALS[state.ritual];
  const maturity = state.q3 || 'intermediario';
  const duration = state.q4 || 'standard';

  if (!ritual) { skipToShopify(); return; }

  document.getElementById('ritual-name').textContent = ritual.name;
  document.getElementById('ritual-description').textContent = ritual.description;

  document.getElementById('ritual-tip').style.display = 'none';

  document.getElementById('ritual-cta-text').textContent = ritual.ctaLabel + ' →';

  document.getElementById('ritual-cta').onclick = () => {
    const params = new URLSearchParams({
      ritual:   state.ritual,
      maturity: maturity,
      duration: duration,
    });
    window.location.href = `${ritual.ctaUrl}?${params}`;
  };

  showScreen('screen-result');
}

/* ── Highlight selected button ─────────────────────────────── */
function highlightSelected(containerId, selectedBtn) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  selectedBtn.classList.add('selected');
}

/* ── Boot ──────────────────────────────────────────────────── */
showScreen('screen-breathing');
startBreathing();
