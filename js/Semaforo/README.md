# 🚦 Semáforo

Um simulador interativo de semáforo de trânsito desenvolvido com JavaScript puro (Vanilla JS). O projeto implementa um ciclo contínuo e automático de cores (Vermelho → Verde → Amarelo), permitindo ao usuário iniciar e pausar a simulação através de uma interface intuitiva com dois botões de controle.

## Funcionalidades Principais

* **Ciclo Automático de Cores**: O semáforo executa seu ciclo clássico de forma contínua: Vermelho (2s) → Verde (2s) → Amarelo (2s), repetindo indefinidamente enquanto a simulação estiver ativa.

* **Controle de Início e Parada**: Dois botões permitem o usuário iniciar a simulação (ativando o ciclo) ou pausá-la instantaneamente. A variável `rodando` gerencia o estado da simulação em tempo real.

* **Validação de Estado**: Um sistema de flag (`rodando`) impede múltiplos cliques simultâneos no botão "Iniciar", garantindo que apenas uma instância da simulação execute por vez.

* **Transições Suaves**: A mudança de cores ocorre de forma sincrônica, com cada cor permanecendo visível pelo tempo especificado (2000ms) antes da próxima transição.

* **Parada Responsiva**: O botão "Parar" oferece pausa imediata através de verificações dentro do loop assíncrono (`if (!rodando) break;`), garantindo que a simulação interrompa sem esperar o intervalo atual terminar.

* **Interface Visual**: A estrutura HTML utiliza divs com classes `.vermelho`, `.amarelo` e `.verde`, permitindo manipulação dinâmica das cores via JavaScript. A estilização CSS transforma quadrados em círculos perfeitos através de `border-radius: 50%` e as cores refletem o padrão real de semáforos (RGB).

## Tecnologias e Conceitos Utilizados

* **JavaScript (ES6+)**:
   * Manipulação do DOM (`document.getElementById()`, `document.querySelector()`, `.style.backgroundColor`).
   * Escuta de Eventos (`addEventListener` para capturar cliques nos botões).
   * **Promises e async/await**: Gestão assíncrona de intervalos de tempo sem bloquear a interface.
   * Funções de Temporização (`setTimeout` encapsulado em Promise para criar delays precisos).
   * Controle de Fluxo com `while` loop e condicionais (`if/else`).

* **HTML5**: Estruturação semântica com divs nomeados semanticamente (`.semaforo`, `.vermelho`, `.amarelo`, `.verde`).

* **CSS3**: 
   * Flexbox para alinhamento vertical dos círculos (`flex-direction: column`, `gap: 5px`).
   * Propriedades visuais (`border-radius: 50%` para círculos, `background-color` para cores dinâmicas).
   * Estilização de botões com estados visuais (cursor pointer, padding, border-radius).

## Como a Lógica Funciona

1. **Inicialização**: Ao carregar a página, os elementos DOM são capturados e event listeners são attachados aos botões "Iniciar" e "Parar".

2. **Clique em "Iniciar"**: A função `iniciar()` é acionada. Ela verifica se `rodando` é `true` (prevenindo múltiplas execuções) e define `rodando = true`.

3. **Seleção de Elementos**: A função localiza os três divs de cores (`.vermelho`, `.amarelo`, `.verde`) para posterior manipulação.

4. **Loop do Ciclo**: Um `while(rodando)` inicia, executando o ciclo de cores:
   - Define a cor vermelha como visível (backgroundColor = "red") e as outras como transparentes
   - Aguarda 2 segundos usando `await esperar(2000)` (a função `esperar` retorna uma Promise que resolve após o timeout)
   - Verifica se o botão "Parar" foi clicado (`if (!rodando) break;`)
   - Repete para verde e amarelo seguindo o mesmo padrão

5. **Parada**: Ao clicar em "Parar", `parar()` define `rodando = false`, causando a quebra do `while` loop na próxima verificação de `if (!rodando)`.

6. **Reset para Próxima Simulação**: Após a parada, a interface permanece como está até um novo clique em "Iniciar", momento em que o ciclo reinicia.

## Fluxo de Execução Detalhado

```
Clique em Iniciar
    ↓
rodando = true
    ↓
Enquanto rodando === true:
    → Vermelho por 2s
    → Verifica se parou
    → Verde por 2s
    → Verifica se parou
    → Amarelo por 2s
    → Verifica se parou
    ↓
Clique em Parar → rodando = false → Sai do loop
```

## 📁 Estrutura de Arquivos

- `index.html` - Estrutura e marcação semântica
- `style.css` - Estilização visual (cores, layout, Flexbox)
- `script.js` - Lógica da simulação (Promises, async/await, controle de estado)
