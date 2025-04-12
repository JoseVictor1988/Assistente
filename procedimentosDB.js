const procedimentosDB = {
  "cadastro": [
    {
      "title": "Passo 1: Acessando o Site de Cadastro do SINIR",
      "content": "Clique no link: <a href=\"http://mtr.sinir.gov.br\" target=\"_blank\">mtr.sinir.gov.br</a>, Você será direcionado para a página inicial do Módulo de Transporte de Resíduos (MTR) do SINIR.",
      "imagem": "imagens/cadastro-passo1.jpg"
    },
    {
      "title": "Passo 2: Iniciando o Cadastro",
      "content": "Na página inicial, procure e clique no botão ou link com o texto \"Novo – Cadastro Primeiro Acesso\".",
      "imagem": "imagens/cadastro-passo2.jpg"
    },
    {
      "title": "Passo 3: Perfil do Declarante",
      "content": "No campo \"Perfil do Declarante\", selecione a opção que melhor descreve sua atuação: <ul><li>Marque \"Gerador\" se você apenas gera os resíduos.</li><li>Marque \"Gerador e Transportador\" se, além de gerar, você também irá transportar os resíduos.</li></ul>",
      "imagem": "imagens/cadastro-passo3.jpg"
    },
    {
      "title": "Passo 4: Preenchendo os Dados do Usuário Declarante",
      "content": "Preencha os seguintes campos: <ul><li><strong>Tipo de Pessoa:</strong> Selecione \"CPF\" para pessoa física ou \"CNPJ\" para pessoa jurídica.</li><li><strong>CPF/CNPJ:</strong> Digite o número do CPF ou CNPJ sem pontos, traços ou barras.</li><li><strong>Nome/Razão Social:</strong> Digite seu nome completo (se pessoa física) ou a Razão Social da empresa.</li><li><strong>E-mail:</strong> Use um endereço de e-mail do Gmail. Este será usado para confirmar seu cadastro.</li><li><strong>Telefone:</strong> Digite o número do seu telefone com o código de área (DDD).</li><li><strong>CEP:</strong> Digite o CEP do seu endereço. As informações de rua, bairro e cidade serão preenchidas automaticamente.</li><li><strong>Número:</strong> Digite o número do seu endereço.</li><li><strong>Complemento (opcional):</strong> Se houver complemento, como apartamento ou sala, preencha aqui.</li></ul>",
      "imagem": "imagens/cadastro-passo4.jpg"
    },
    {
      "title": "Passo 5: Informações de Transportador (Se Aplicável)",
      "content": "Se você marcou \"Gerador e Transportador\", preencha as seguintes informações: <ul><li><strong>Atividade de Transporte:</strong> Marque as caixas para \"Classe IIA - Resíduos Não Perigosos e Não Inertes\" e \"Classe IIB - Resíduos Não Perigosos e Inertes\".</li><li><strong>Placas:</strong> Adicione as placas dos veículos que você usará para o transporte de resíduos.</li><li><strong>Licença do Transportador:</strong> Insira os dados da licença ambiental, se aplicável, ou marque \"Isento\".</li></ul>",
      "imagem": "imagens/cadastro-passo5.jpg"
    },
    {
      "title": "Passo 6: Dados do Administrador do Cadastro",
      "content": "Preencha os dados do administrador do cadastro: <ul><li><strong>CPF:</strong> Digite o CPF da pessoa responsável pela gestão dos MTRs.</li><li><strong>Nome:</strong> Digite o nome completo do administrador.</li><li><strong>E-mail:</strong> Use um endereço de e-mail do Gmail.</li><li><strong>Confirmação de E-mail:</strong> Digite novamente o mesmo e-mail para evitar erros.</li><li><strong>Cargo:</strong> Informe o cargo ou função do administrador.</li></ul>",
      "imagem": "imagens/cadastro-passo6.jpg"
    },
    {
      "title": "Passo 7: Declaração de Aceite",
      "content": "Leia atentamente os termos de uso e a política de privacidade do SINIR. Marque a caixa de seleção ao lado de \"Li e aceito os termos de uso e a política de privacidade\"." ,
      "imagem": "imagens/cadastro-passo7.jpg"
    },
    {
      "title": "Passo 8: Solicitar Acesso",
      "content": "Clique no botão \"Solicitar Acesso\" para finalizar o pré-cadastro. Após isso, você verá uma mensagem confirmando que sua solicitação foi enviada.",
      "imagem": "imagens/cadastro-passo8.jpg"
    },
    {
      "title": "Passo 9: Verificando seu E-mail do Gmail",
      "content": "O SINIR enviará um e-mail com suas informações de acesso para o endereço do Gmail cadastrado. Abra sua conta do Gmail e procure na Caixa de Entrada. Se não encontrar, verifique as pastas de Spam ou Lixo Eletrônico. O e-mail conterá sua senha inicial de acesso ao sistema.",
      "imagem": "imagens/cadastro-passo9.jpg"
    }
  ],
  "mtr": [
    {
      "title": "PASSO 1: Acessando o Sistema MTR Online do SINIR",
      "content": "Clique no link: <a href=\"http://mtr.sinir.gov.br\" target=\"_blank\">mtr.sinir.gov.br</a> e pressione Enter. Você será direcionado para a página de login do Módulo de Transporte de Resíduos (MTR) do SINIR.",
      "imagem": "imagens/mtr-passo1.jpg"
    },
    {
      "title": "PASSO 2: Fazendo Login no Sistema",
      "content": "No formulário de login, digite o seu CPF ou CNPJ (o mesmo utilizado no cadastro) no campo \"CPF do Usuário\". Digite o CPF do Administrador do cadastro e logo abaixo Digite a sua senha. Clique no botão \"Entrar\" ou similar.",
      "imagem": "imagens/mtr-passo2.jpg"
    },
    {
      "title": "PASSO 3: Iniciando a Criação de um Novo MTR",
      "content": "Após fazer login, procure no menu principal por uma opção chamada \"Manifesto\" ou \"MTR\". Clique nesta opção. Dentro da seção de Manifesto/MTR, procure e clique no botão \"Novo MTR\" ou \"Gerar MTR\"." ,
      "imagem": "imagens/mtr-passo3.jpg"
    },
    {
      "title": "PASSO 4: Resíduos",
      "content": "Para adicionar um resíduo, procure por um botão como \"Adicionar\", ou similar. Ao clicar, você deverá preencher os seguintes campos: <ul><li><strong>Resíduo/Código IBAMA:</strong> Pesquise pelo tipo de resíduo que irá transportar. Use palavras-chave como: <ul><li>Para Resíduo da Construção Civil (RCC): \"Construção, demolição, Tijolos\".</li><li>Para Resíduo Sólido Urbano (RSU): \"Limpeza Urbana, Madeira, Cozinha\".</li></ul></li><li><strong>Quantidade:</strong> Digite a quantidade do resíduo a ser transportado.</li><li><strong>Unidade de Medida:</strong> Selecione a unidade de medida correspondente à quantidade (ex: toneladas (t), metros cúbicos (m³), quilogramas (kg)).</li><li><strong>Estado Físico:</strong> Exemplo: sólido, semissólido.</li><li><strong>Classe:</strong> Exemplo: Classe IIA ou IIB.</li><li><strong>Acondicionamento:</strong> Informe como o resíduo está acondicionado (ex: caçamba aberta, caçamba fechada).</li><li><strong>Tratamento:</strong> Exemplo: Aterro de classe IIA e IIB.</li><li><strong>Clique em Salvar</strong></li></ul><p>Se precisar transportar mais de um tipo de resíduo, clique novamente em \"Adicionar Resíduo\" e preencha as informações para cada tipo separadamente.</p>",
      "imagem": "imagens/mtr-passo4.jpg"
    },
    {
      "title": "PASSO 5: Dados do Gerador",
      "content": "Este campo geralmente é preenchido automaticamente. Se você está gerando o resíduo, suas informações (nome/razão social, CNPJ/CPF, endereço) devem aparecer automaticamente.",
      "imagem": "imagens/mtr-passo5.jpg"
    },
    {
      "title": "PASSO 6: Dados do Transportador",
      "content": "Selecione o transportador responsável pelo recolhimento e transporte dos resíduos. Caso você ou sua empresa seja o transportador, Digite o CPF ou CNPJ no campo de transportador, clique na lupa e selecione o transportador. <ul><li><strong>Prencha os dados:</strong>.</li><li>Nome do Motorista.</li><li>Placa do Veículo.</li><li>Data de Expedição.</li></ul>",
      "imagem": "imagens/mtr-passo6.jpg"
    },
    {
      "title": "PASSO 7: Dados do Destinador",
      "content": "No campo de destinador, insira o CNPJ da instalação de destinação final. <ul><li>Confira os dados e selecione.</li><li>No campo \"Observações\", especifique o endereço do local onde o resíduo foi gerado, (caso necessário).</li></ul>",
      "imagem": "imagens/mtr-passo7.jpg"
    },
    {
      "title": "PASSO 8: Salvando e Emitindo o MTR",
      "content": "Após preencher todas as informações com atenção e revisar os dados, procure por um botão como \"Enviar\", ou similar e clique. O sistema irá gerar o MTR com um número de identificação único. Você deverá ter a opção de visualizar o MTR gerado (geralmente em formato PDF). É fundamental que você salve e/ou imprima duas cópias do MTR. Estas cópias deverão acompanhar o transporte dos resíduos.",
      "imagem": "imagens/mtr-passo8.jpg"
    },
    {
      "title": "Processo Finalizado!",
      "content": "Revise todas as informações cuidadosamente antes de emitir o MTR. Ao seguir estes passos, você conseguirá gerar o MTR no SINIR para o transporte de RCC/RSU classes IIA e IIB de forma correta.",
      "imagem": "imagens/mtr-passo9.jpg"
    }
  ]
};