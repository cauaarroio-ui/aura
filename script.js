// ==========================================
// A. CONTROLADOR DE MUDANÇA DE ABAS (PÁGINAS)
// ==========================================
function mudarAba(nomeAba) {
    const abaOptica = document.getElementById('aba-optica');
    const abaTrionda = document.getElementById('aba-trionda');
    const btnOptica = document.getElementById('btn-optica');
    const btnTrionda = document.getElementById('btn-trionda');
    const headerTitulo = document.getElementById('header-titulo');
    const headerSubtitulo = document.getElementById('header-subtitulo');

    // Se os elementos não existirem na página, para a execução para não dar erro
    if (!abaOptica || !abaTrionda) return;

    // 1. Remove o estado ativo de tudo
    abaOptica.classList.remove('active');
    abaTrionda.classList.remove('active');
    btnOptica.classList.remove('active');
    btnTrionda.classList.remove('active');

    // 2. Ativa apenas o bloco clicado e atualiza o cabeçalho textualmente
    if (nomeAba === 'optica') {
        abaOptica.classList.add('active');
        btnOptica.classList.add('active');
        headerTitulo.innerText = "Desvendando a Óptica";
        headerSubtitulo.innerText = "Explore os mistérios da luz, das cores e da visão";
    } else if (nomeAba === 'trionda') {
        abaTrionda.classList.add('active');
        btnTrionda.classList.add('active');
        headerTitulo.innerText = "Projeto Trionda";
        headerSubtitulo.innerText = "A Ciência do Esporte: Aerodinâmica e Propriedades da Bola da Copa";
    }

    // Rola a página de volta para o topo de forma suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ==========================================
// B. INDICADOR DE LEITURA (SCROLL INDICATOR)
// ==========================================
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.backgroundColor = '#1abc9c';
progressBar.style.width = '0%';
progressBar.style.zIndex = '9999';
progressBar.style.transition = 'width 0.1s ease';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});


// ==========================================
// C. MODO ESCURO (DARK MODE)
// ==========================================
const themeBtn = document.createElement('button');
themeBtn.innerHTML = '🌓 Alternar Luz';
themeBtn.style.position = 'fixed';
themeBtn.style.bottom = '20px';
themeBtn.style.right = '20px';
themeBtn.style.padding = '12px 18px';
themeBtn.style.backgroundColor = '#1abc9c';
themeBtn.style.color = '#1a252f';
themeBtn.style.border = 'none';
themeBtn.style.borderRadius = '30px';
themeBtn.style.cursor = 'pointer';
themeBtn.style.fontWeight = 'bold';
themeBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
themeBtn.style.zIndex = '1000';
themeBtn.style.transition = 'transform 0.2s ease';
document.body.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'rgb(44, 62, 80)' || document.body.style.backgroundColor === '#2c3e50') {
        document.body.style.backgroundColor = '#fcfcfc';
        document.body.style.color = '#333';
        themeBtn.style.backgroundColor = '#1abc9c';
        themeBtn.style.color = '#1a252f';
    } else {
        document.body.style.backgroundColor = '#2c3e50';
        document.body.style.color = '#ecf0f1';
        themeBtn.style.backgroundColor = '#ffffff';
        themeBtn.style.color = '#2c3e50';
    }
});

themeBtn.addEventListener('mouseenter', () => themeBtn.style.transform = 'scale(1.05)');
themeBtn.addEventListener('mouseleave', () => themeBtn.style.transform = 'scale(1)');


// ==========================================
// D. LÓGICA DO MINI-QUIZ INTERATIVO
// ==========================================
function verificarResposta(correto) {
    const resultado = document.getElementById('resultado-quiz');
    if (!resultado) return;

    if (correto) {
        resultado.innerHTML = "🎉 Correto! Isso se chama dispersão da luz. A luz branca é a soma de todas as cores.";
        resultado.style.color = "#27ae60";
    } else {
        resultado.innerHTML = "❌ Quase lá! Dica: Dê uma olhada na seção 'A Luz e suas Cores' para revisar.";
        resultado.style.color = "#c0392b";
    }
}