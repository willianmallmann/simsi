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
      { label: 'Acordo no meio da noite e custo a voltar a dormir',       ritual: 'desacelerar-mente' },
      { label: 'Durmo mas acordo cansada',                                ritual: 'banho-relaxante' },
    ],
  },
  ansiedade: {
    title: 'Como a ansiedade aparece mais para você?',
    options: [
      { label: 'Mente acelerada, pensamentos repetitivos',                ritual: 'desacelerar-mente' },
      { label: 'Tensão muscular acumulada (pescoço, ombros, lombar)',     ritual: 'relaxamento-muscular' },
      { label: 'Me sinto angustiada e não consigo produzir',              ritual: 'pequenas-pausas' },
    ],
  },
  movimento: {
    title: 'Em qual momento você sente que precisa de mais movimento?',
    options: [
      { label: 'Quero acordar com mais energia',                          ritual: 'despertar' },
      { label: 'Esqueço de me mexer durante o expediente',                ritual: 'pequenas-pausas' },
      { label: 'Aliviar tensão ao final do dia',                          ritual: 'relaxamento-muscular' },
    ],
  },
  explorar: {
    title: 'Em qual momento do dia você está procurando mais cuidado consigo?',
    options: [
      { label: 'Pela manhã, começar o dia melhor',                        ritual: 'despertar' },
      { label: 'Durante o expediente, pausas no trabalho',                ritual: 'pequenas-pausas' },
      { label: 'Final do dia, transição entre trabalho e casa',           ritual: 'banho-relaxante' },
      { label: 'À noite, preparar para dormir',                           ritual: 'reducao-estimulo' },
    ],
  },
};

const RITUALS = {
  'reducao-estimulo': {
    name: 'Redução de Estímulo',
    description: {
      iniciante: 'Um ritual simples para desligar a mente antes de dormir. Comece com 5 minutos de silêncio, sem telas, e um aroma calmante no ambiente. Um produto e um hábito é o suficiente para transformar sua noite.',
      intermediario: 'Uma sequência de práticas para reduzir a estimulação sensorial: abaixar a luz 1 hora antes de dormir, difusor com lavanda e uma página de journaling para esvaziar os pensamentos do dia.',
      avancado: 'Protocolo completo de higiene de sono: janela digital encerrada 90 min antes, banho morno, difusor, eye mask e sequência de respiração 4-7-8. Combine com o ritual de Desacelerar a Mente para noites de estresse intenso.',
    },
    tip: {
      extended: 'Dica extra: combine com Desacelerar a Mente para criar uma transição completa do modo ativo para o repouso.',
    },
    ctaLabel: 'Conhecer produtos para Redução de Estímulo',
    ctaUrl:   'https://shop.simsi.com.br/collections/reducao-de-estimulo',
  },
  'desacelerar-mente': {
    name: 'Desacelerar a Mente',
    description: {
      iniciante: 'Quando a cabeça não para, o corpo precisa de um sinal de parada. Comece com 3 respirações profundas e um chá sem cafeína. Simples, mas eficaz.',
      intermediario: 'Uma prática de respiração guiada (4-7-8) + journaling de 5 minutos + chá calmante. Faça no mesmo horário todos os dias para criar o hábito.',
      avancado: 'Sessão completa de mindfulness: meditação guiada de 10 min, técnica de body scan, journaling estruturado e infusão de ervas adaptógenas. Ideal como ritual noturno fixo.',
    },
    tip: {
      extended: 'Dica extra: pratique junto com Redução de Estímulo para potencializar a qualidade do sono.',
    },
    ctaLabel: 'Conhecer produtos para Desacelerar a Mente',
    ctaUrl:   'https://shop.simsi.com.br/collections/desacelerar-a-mente',
  },
  'banho-relaxante': {
    name: 'Banho Relaxante',
    description: {
      iniciante: 'Transforme o banho em um momento de cuidado real. Um óleo corporal com aroma calmante e 10 minutos sem pressa já fazem diferença na transição do dia para a noite.',
      intermediario: 'Rotina de banho intencional: sal de banho desestressante, óleo pós-banho e uma música ambiente. Uma pausa de verdade no dia agitado.',
      avancado: 'Ritual completo de hidroterapia: esfoliação semanal, banho com sais minerais, aromaterapia no box, óleo pós-banho e automassagem com bola miofascial nos pés.',
    },
    tip: {
      extended: 'Dica extra: adicione Recovery Muscular após o banho para maximizar o relaxamento físico.',
    },
    ctaLabel: 'Conhecer produtos para Banho Relaxante',
    ctaUrl:   'https://shop.simsi.com.br/collections/banho-relaxante',
  },
  'relaxamento-muscular': {
    name: 'Relaxamento Muscular',
    description: {
      iniciante: 'Solte a tensão acumulada no pescoço e ombros com 5 minutos de automassagem usando uma bola miofascial. Você não precisa de muito — só precisa parar e sentir.',
      intermediario: 'Sequência de 10 minutos: alongamento cervical + automassagem com bola nos ombros e lombar + óleo calmante aquecido nas mãos. Perfeito para o final do expediente.',
      avancado: 'Protocolo de recovery completo: foam roller, bola miofascial em pontos de tensão, stretching dinâmico e óleo de arnica. Combine com o Banho Relaxante para uma recuperação total.',
    },
    tip: {
      extended: 'Dica extra: combine com Banho Relaxante para uma sessão completa de recovery no final do dia.',
    },
    ctaLabel: 'Conhecer produtos para Relaxamento Muscular',
    ctaUrl:   'https://shop.simsi.com.br/collections/relaxamento-muscular',
  },
  'pequenas-pausas': {
    name: 'Pequenas Pausas',
    description: {
      iniciante: 'Uma pausa de 3 minutos pode resetar sua mente. Levante, respire fundo 5 vezes e beba água com atenção. Isso já é um ritual.',
      intermediario: 'Técnica Pomodoro adaptada: a cada 50 minutos, 5 minutos de pausa ativa — alongamento, respiração e um snack nutritivo. Pequenos hábitos que mudam a produtividade.',
      avancado: 'Sistema de micropausas estruturado: respiração boxe (4-4-4-4), stretching de cadeia posterior, chá de ervas e 2 minutos de meditação em movimento. Distribua ao longo do dia para máximo efeito.',
    },
    tip: {
      extended: 'Dica extra: experimente combinar com Desacelerar a Mente no final do expediente para encerrar o modo trabalho com mais clareza.',
    },
    ctaLabel: 'Conhecer produtos para Pequenas Pausas',
    ctaUrl:   'https://shop.simsi.com.br/collections/pequenas-pausas',
  },
  'despertar': {
    name: 'Despertar',
    description: {
      iniciante: 'Comece o dia com 5 minutos de movimento suave: alongamento na cama, um copo de água e luz natural. Seu corpo acorda antes da sua rotina.',
      intermediario: 'Sequência matinal de 10 minutos: mobilidade articular, respiração energizante (Kapalabhati simplificada) e um shot de bem-estar. Energia sem ansiedade.',
      avancado: 'Ritual completo de morning routine: mobilidade 10 min + respiração wim hof adaptada + ducha fria gradual + smoothie funcional + journaling de intenções. Saia da cama com clareza e energia.',
    },
    tip: {
      extended: 'Dica extra: adicione Pequenas Pausas ao longo do dia para manter a energia do despertar até o final do expediente.',
    },
    ctaLabel: 'Conhecer produtos para Despertar',
    ctaUrl:   'https://shop.simsi.com.br/collections/despertar',
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
  document.getElementById('ritual-description').textContent = ritual.description[maturity] || ritual.description['intermediario'];

  const tipEl = document.getElementById('ritual-tip');
  if (duration === 'extended' && ritual.tip && ritual.tip.extended) {
    tipEl.textContent = ritual.tip.extended;
    tipEl.style.display = 'block';
  } else {
    tipEl.style.display = 'none';
  }

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
