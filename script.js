// Variáveis globais
let currentStep = 0;
let currentProcess = "";
let procedimentosData = procedimentosDB; // Dados carregados diretamente
let perguntasData = perguntasDB;     // Dados carregados diretamente


// ... seu código JavaScript existente ...

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowRight': // Tecla seta para a direita
            if (document.querySelector('.slide-show')) { // Verifica se um slide está visível
                nextStep();
            }
            break;
        case 'ArrowLeft': // Tecla seta para a esquerda
            if (document.querySelector('.slide-show')) { // Verifica se um slide está visível
                prevStep();
            }
            break;
        case 'Enter':
            // Verifica se o modal de imagem está aberto
            const imageModal = document.getElementById('imageModal');
            if (imageModal && imageModal.style.display === 'flex') {
                imageModal.style.display = 'none'; // Fechar modal com Enter se estiver aberto
            } else if (document.activeElement.tagName === 'BUTTON' && document.activeElement.classList.contains('next')) {
                nextStep(); // Simular clique no botão "Próximo" se estiver focado
            } else if (document.activeElement.tagName === 'BUTTON' && document.activeElement.classList.contains('prev')) {
                prevStep(); // Simular clique no botão "Anterior" se estiver focado
            } else if (document.activeElement.tagName === 'BUTTON' && document.activeElement.classList.contains('finish')) {
                finishProcess(); // Simular clique no botão "Finalizar" se estiver focado
            } else if (document.activeElement === document.getElementById('userQuestion')) {
                handleUserQuestion(); // Acionar a pesquisa se o campo de pergunta estiver focado
            }
            break;
        case 'Escape': // Tecla Esc
            const modal = document.getElementById('imageModal');
            if (modal && modal.style.display === 'flex') {
                modal.style.display = 'none'; // Fechar o modal de imagem se estiver aberto
            } else if (document.querySelector('.slide-show')) {
                goBack(); // Voltar ao menu principal se um slide estiver aberto e o modal não
            }
            break;
    }
});

// ... restante do seu código JavaScript ...


// Carrega os dados JÁ ESTÃO CARREGADOS nos arquivos procedimentosDB.js e perguntasDB.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o modal de imagem
    createImageModal();
});

// Função para iniciar um processo (cadastro ou MTR)
function startProcess(type) {
    if (!procedimentosData) {
        showError("Dados ainda estão sendo carregados. Por favor, aguarde um momento.");
        return;
    }

    currentProcess = type;
    currentStep = 0;
    showStep();
    showSlide(type);
}

// Função para mostrar um slide específico
function showSlide(type) {
    document.getElementById("mainContent").style.display = 'none';

    // Remove a classe de todos os slides
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('slide-show');
    });

    // Adiciona a classe ao slide correto
    document.getElementById(type).classList.add('slide-show');
}

// Função para mostrar um passo no processo atual
function showStep() {
    if (!procedimentosData || !procedimentosData[currentProcess] ||
        currentStep >= procedimentosData[currentProcess].length) {
        return;
    }

    let responseDiv = document.getElementById(`response${capitalizeFirstLetter(currentProcess)}`);
    const step = procedimentosData[currentProcess][currentStep];

    if (step) {
        // Verificar se há imagem para este passo
        let imageHtml = '';
        if (step.imagem) {
            imageHtml = `
                <div class="step-image">
                    <div class="image-thumbnail" onclick="showImage('${step.imagem}')">
                        <img src="${step.imagem}" alt="Imagem ilustrativa">
                        <div class="image-overlay">
                            <i class="fas fa-search-plus"></i>
                        </div>
                    </div>
                </div>
            `;
        }

        responseDiv.innerHTML = `
            <div class="step-content">
                <h4>${step.title}</h4>
                <div>${step.content}</div>
                ${imageHtml}
                <div class="navigation-buttons">
                    ${currentStep > 0 ? '<button onclick="prevStep()" class="nav-button prev"><i class="fas fa-chevron-left"></i> Anterior</button>' : ''}
                    ${currentStep < procedimentosData[currentProcess].length - 1 ?
                        '<button onclick="nextStep()" class="nav-button next">Próximo <i class="fas fa-chevron-right"></i></button>' :
                        '<button onclick="finishProcess()" class="nav-button finish"><i class="fas fa-check"></i> Finalizar</button>'}
                </div>
            </div>
        `;
    }
}

// Funções de navegação
function nextStep() {
    if (currentStep < procedimentosData[currentProcess].length - 1) {
        currentStep++;
        showStep();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
}

function finishProcess() {
    const responseDiv = document.getElementById(`response${capitalizeFirstLetter(currentProcess)}`);
    responseDiv.innerHTML = `
        <div class="finish-message">
            <i class="fas fa-check-circle"></i>
            <h4>Processo Finalizado!</h4>
            <p>Você concluiu todos os passos para ${currentProcess === 'cadastro' ? 'o cadastro no SINIR' : 'a geração de MTR'}.</p>
            <button onclick="goBack()" class="back-to-menu"><i class="fas fa-home"></i> Voltar ao Menu</button>
        </div>
    `;
}

// Função para tratar perguntas do usuário
function handleUserQuestion() {
    if (!perguntasData) {
        showError("Dados ainda estão sendo carregados. Por favor, aguarde um momento.");
        return;
    }

    const questionInput = document.getElementById("userQuestion").value.toLowerCase().trim();
    const responseDiv = document.getElementById("questionResponse");

    if (!questionInput) {
        responseDiv.innerHTML = "<p>Por favor, digite uma pergunta.</p>";
        return;
    }

    // Procurar a resposta nas perguntas usando palavras-chave
    let foundAnswer = false;
    for (const pergunta of perguntasData.perguntas) {
        if (pergunta.keywords.some(keyword => questionInput.includes(keyword))) {
            // Verificar se há imagem para esta pergunta
            let imageHtml = '';
            if (pergunta.imagem) {
                imageHtml = `
                    <div class="question-image">
                        <div class="image-thumbnail" onclick="showImage('${pergunta.imagem}')">
                            <img src="${pergunta.imagem}" alt="Imagem ilustrativa">
                            <div class="image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                    </div>
                `;
            }

            responseDiv.innerHTML = `
                <h4>${pergunta.title}</h4>
                ${pergunta.content}
                ${imageHtml}
            `;
            foundAnswer = true;
            break;
        }
    }

    // Se nenhuma resposta for encontrada
    if (!foundAnswer) {
        responseDiv.innerHTML = `
            <h4>Não encontramos uma resposta exata</h4>
            <p>Aqui estão alguns tópicos que podem ajudar:</p>
            <ul>
                ${perguntasData.perguntas.map(p => `<li><strong>${p.title}:</strong> ${p.keywords[0]}</li>`).join('')}
            </ul>
            <p>Para mais informações, entre em contato pelo WhatsApp: 3524-3410.</p>
        `;
    }

    // Limpa o campo de pergunta
    document.getElementById("userQuestion").value = "";
}


// Função para voltar ao menu principal
function goBack() {
    document.getElementById("mainContent").style.display = 'block';

    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('slide-show');
    });

    // Reseta o processo atual
    currentStep = 0;
    currentProcess = "";
}

// Função de utilidade para capitalizar a primeira letra
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para mostrar erros
function showError(message) {
    alert(message);
}

// Adiciona funcionalidade para pesquisar quando o usuário pressiona Enter
document.getElementById("userQuestion").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        handleUserQuestion();
    }
});

// Modal para visualização de imagens
function createImageModal() {
    // Criar o elemento modal se ainda não existir
    if (!document.getElementById('imageModal')) {
        const modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';

        // Botão de fechar
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-modal';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = function() {
            document.getElementById('imageModal').style.display = 'none';
        };

        // Imagem no modal
        const img = document.createElement('img');
        img.id = 'modalImage';
        img.className = 'modal-content';

        // Adicionar elementos ao modal
        modal.appendChild(closeBtn);
        modal.appendChild(img);

        // Adicionar modal ao body
        document.body.appendChild(modal);

        // Fechar modal quando clicar fora da imagem
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

// Função para exibir imagem no modal
function showImage(imagePath) {
    // Certifique-se de que o modal exista
    createImageModal();

    // Configurar e mostrar a imagem
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imagePath;
    document.getElementById('imageModal').style.display = 'flex';
}
