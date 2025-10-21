# Player-de-Audiobook

🎧 Audiobook Player
Um web app simples e funcional para tocar audiobooks, focado em uma interface limpa e nos controles essenciais. Este projeto foi desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS), praticando a manipulação do DOM e o controle de áudio nativo do navegador.

(Para adicionar um screenshot: tire uma foto do seu app, adicione o arquivo na pasta do projeto e mude o link acima para o nome do seu arquivo, ex: ./screenshot.png)

✨ Funcionalidades
Play / Pause: Um único botão inteligente que alterna o estado do áudio.

Navegação de Faixas: Avance para o próximo capítulo ou volte para o capítulo anterior.

Atualização Dinâmica: O título do capítulo é atualizado dinamicamente no HTML.

Autoplay: Ao mudar de faixa (próxima ou anterior), o novo capítulo começa a tocar automaticamente.

Reprodução Contínua: Ao final de um capítulo, o player avança automaticamente para o próximo.

🚀 Tecnologias Utilizadas
HTML5: Estrutura semântica do player.

CSS3: Estilização com Flexbox, gradiente de fundo e lógica para alternar os ícones de play/pause.

JavaScript (ES6+): Toda a lógica funcional, incluindo:

Manipulação de eventos (addEventListener).

Controle do elemento <audio> (play(), pause(), .src).

Manipulação do DOM (getElementById, classList, .innerText).

📁 Estrutura do Projeto
O projeto está organizado da seguinte forma:

/audiobook-player
├── index.html     (O esqueleto da página)
├── style.css      (Os estilos visuais)
├── script.js      (A lógica e funcionalidade)
├── /imagens/
│   └── Capa-Dom-Casmurro.jpg
└── /audios/
    ├── 1.mp3
    ├── 2.mp3
    └── ... (etc)
🔧 Como Usar
Para que o player funcione corretamente na sua máquina, siga estes passos:

Clone este repositório:

Bash

git clone https://github.com/seu-usuario/nome-do-repositorio.git
Adicione seus áudios: O script script.js espera que os arquivos de áudio estejam na pasta /audios/ e sejam nomeados numericamente (ex: 1.mp3, 2.mp3, 3.mp3).

Ajuste o número de capítulos: No arquivo script.js, atualize a variável numeroCapitulos para o número total de faixas que você possui:

JavaScript

const numeroCapitulos = 10; // Mude 10 para o seu total
Abra no navegador: Abra o arquivo index.html no seu navegador de preferência.

💡 Aprendizados
Este projeto foi fundamental para praticar a interação entre HTML, CSS e JavaScript para criar um componente de mídia funcional. Os principais desafios e aprendizados incluíram:

Gerenciar o estado (saber se o áudio está tocando ou pausado).

Usar classes CSS (.tocando) para alterar a interface (trocar o ícone de play para pause) de forma reativa.

Criar funções reutilizáveis (tocarFaixa, pausarFaixa, carregarCapitulo).
