// Banco de perguntas
const perguntas = [
    {
        pergunta: "O que é confidencialidade em segurança da informação?",
        respostas: ["Garantir que os dados não sejam modificados", "Garantir que os dados estejam disponíveis quando necessário", "Garantir que os dados sejam acessíveis apenas a pessoas autorizadas", "Garantir a integridade dos sistemas"],
        respostaCorreta: "Garantir que os dados sejam acessíveis apenas a pessoas autorizadas"
    },
    {
        pergunta: "Qual dos seguintes NÃO é um tipo comum de malware?",
        respostas: ["Vírus", "Firewall", "Ransomware", "Spyware"],
        respostaCorreta: "Firewall"
    },
    {
        pergunta: "O que é phishing?",
        respostas: ["Um tipo de ataque de negação de serviço", "Uma técnica para roubar informações confidenciais se passando por uma entidade confiável", "Um método para criptografar dados", "Um tipo de software antivírus"],
        respostaCorreta: "Uma técnica para roubar informações confidenciais se passando por uma entidade confiável"
    },
    {
        pergunta: "Qual é a função de um firewall?",
        respostas: ["Detectar e remover malware", "Impedir o acesso não autorizado a uma rede", "Criptografar dados", "Gerenciar senhas"],
        respostaCorreta: "Impedir o acesso não autorizado a uma rede"
    },
    {
        pergunta: "O que significa a sigla 'VPN'?",
        respostas: ["Virtual Private Network", "Very Personal Network", "Visual Protocol Node", "Volatile Processing Node"],
        respostaCorreta: "Virtual Private Network"
    },
    {
        pergunta: "Qual dos seguintes é um exemplo de autenticação de dois fatores (2FA)?",
        respostas: ["Usar uma senha forte", "Usar um antivírus atualizado", "Usar uma senha e um código enviado para o celular", "Fazer backup dos dados regularmente"],
        respostaCorreta: "Usar uma senha e um código enviado para o celular"
    },
    {
        pergunta: "O que é criptografia?",
        respostas: ["Um método para compactar arquivos", "Um processo para converter dados em um formato ilegível para pessoas não autorizadas", "Um tipo de ataque cibernético", "Uma ferramenta para monitorar o tráfego de rede"],
        respostaCorreta: "Um processo para converter dados em um formato ilegível para pessoas não autorizadas"
    },
    {
        pergunta: "Qual é o objetivo principal da ISO 27001?",
        respostas: ["Padronizar o desenvolvimento de software", "Estabelecer um sistema de gestão de segurança da informação (SGSI)", "Regulamentar a proteção de dados pessoais", "Definir padrões de hardware"],
        respostaCorreta: "Estabelecer um sistema de gestão de segurança da informação (SGSI)"
    },
    {
        pergunta: "O que é um ataque de negação de serviço (DoS)?",
        respostas: ["Um ataque que visa roubar dados confidenciais", "Um ataque que torna um serviço online indisponível", "Um ataque que modifica dados em um banco de dados", "Um ataque que instala malware em um sistema"],
        respostaCorreta: "Um ataque que torna um serviço online indisponível"
    },
    {
        pergunta: "Qual lei brasileira trata da proteção de dados pessoais?",
        respostas: ["Código Civil", "Código Penal", "Marco Civil da Internet", "Lei Geral de Proteção de Dados (LGPD)"],
        respostaCorreta: "Lei Geral de Proteção de Dados (LGPD)"
    },
    {
        pergunta: "O que é confidencialidade em segurança da informação?",
        respostas: ["Garantir que os dados não sejam modificados", "Garantir que os dados estejam disponíveis quando necessário", "Garantir que os dados sejam acessíveis apenas a pessoas autorizadas", "Garantir a integridade dos sistemas"],
        respostaCorreta: "Garantir que os dados sejam acessíveis apenas a pessoas autorizadas"
    },
    {
        pergunta: "Qual dos seguintes NÃO é um tipo comum de malware?",
        respostas: ["Vírus", "Firewall", "Ransomware", "Spyware"],
        respostaCorreta: "Firewall"
    },
    {
        pergunta: "O que é phishing?",
        respostas: ["Um tipo de ataque de negação de serviço", "Uma técnica para roubar informações confidenciais se passando por uma entidade confiável", "Um método para criptografar dados", "Um tipo de software antivírus"],
        respostaCorreta: "Uma técnica para roubar informações confidenciais se passando por uma entidade confiável"
    },
    {
        pergunta: "Qual é a função de um firewall?",
        respostas: ["Detectar e remover malware", "Impedir o acesso não autorizado a uma rede", "Criptografar dados", "Gerenciar senhas"],
        respostaCorreta: "Impedir o acesso não autorizado a uma rede"
    },
    {
        pergunta: "O que significa a sigla 'VPN'?",
        respostas: ["Virtual Private Network", "Very Personal Network", "Visual Protocol Node", "Volatile Processing Node"],
        respostaCorreta: "Virtual Private Network"
    },
    {
        pergunta: "Qual dos seguintes é um exemplo de autenticação de dois fatores (2FA)?",
        respostas: ["Usar uma senha forte", "Usar um antivírus atualizado", "Usar uma senha e um código enviado para o celular", "Fazer backup dos dados regularmente"],
        respostaCorreta: "Usar uma senha e um código enviado para o celular"
    },
    {
        pergunta: "O que é criptografia?",
        respostas: ["Um método para compactar arquivos", "Um processo para converter dados em um formato ilegível para pessoas não autorizadas", "Um tipo de ataque cibernético", "Uma ferramenta para monitorar o tráfego de rede"],
        respostaCorreta: "Um processo para converter dados em um formato ilegível para pessoas não autorizadas"
    },
    {
        pergunta: "Qual é o objetivo principal da ISO 27001?",
        respostas: ["Padronizar o desenvolvimento de software", "Estabelecer um sistema de gestão de segurança da informação (SGSI)", "Regulamentar a proteção de dados pessoais", "Definir padrões de hardware"],
        respostaCorreta: "Estabelecer um sistema de gestão de segurança da informação (SGSI)"
    },
    {
        pergunta: "O que é um ataque de negação de serviço (DoS)?",
        respostas: ["Um ataque que visa roubar dados confidenciais", "Um ataque que torna um serviço online indisponível", "Um ataque que modifica dados em um banco de dados", "Um ataque que instala malware em um sistema"],
        respostaCorreta: "Um ataque que torna um serviço online indisponível"
    },
    {
        pergunta: "Qual lei brasileira trata da proteção de dados pessoais?",
        respostas: ["Código Civil", "Código Penal", "Marco Civil da Internet", "Lei Geral de Proteção de Dados (LGPD)"],
        respostaCorreta: "Lei Geral de Proteção de Dados (LGPD)"
    },
    {
        pergunta: "O que é engenharia social?",
        respostas: ["Um ramo da engenharia que estuda o comportamento humano", "Uma técnica para manipular pessoas para obter informações confidenciais", "Um método para construir redes sociais online", "Um tipo de software de segurança"],
        respostaCorreta: "Uma técnica para manipular pessoas para obter informações confidenciais"
    },
    {
        pergunta: "Qual é a importância de atualizar regularmente os softwares?",
        respostas: ["Melhorar a velocidade do computador", "Adicionar novas funcionalidades", "Corrigir vulnerabilidades de segurança", "Reduzir o consumo de energia"],
        respostaCorreta: "Corrigir vulnerabilidades de segurança"
    },
    {
        pergunta: "O que é um ataque de força bruta?",
        respostas: ["Um ataque que utiliza força física para danificar equipamentos", "Um ataque que tenta adivinhar senhas por tentativa e erro", "Um ataque que explora falhas em softwares", "Um ataque que sobrecarrega um servidor com tráfego"],
        respostaCorreta: "Um ataque que tenta adivinhar senhas por tentativa e erro"
    },
    {
        pergunta: "Qual é a função de um IDS (Sistema de Detecção de Intrusão)?",
        respostas: ["Impedir o acesso não autorizado a uma rede", "Detectar atividades maliciosas em uma rede", "Criptografar dados em trânsito", "Gerenciar identidades e acessos"],
        respostaCorreta: "Detectar atividades maliciosas em uma rede"
    },
    {
        pergunta: "O que é um certificado digital?",
        respostas: ["Um arquivo que contém informações pessoais", "Um documento eletrônico que comprova a identidade de uma entidade na internet", "Um tipo de software de segurança", "Um dispositivo de armazenamento de dados"],
        respostaCorreta: "Um documento eletrônico que comprova a identidade de uma entidade na internet"
    },
    {
        pergunta: "Qual protocolo é usado para comunicação segura na web (navegação HTTPS)?",
        respostas: ["HTTP", "FTP", "SMTP", "HTTPS"],
        respostaCorreta: "HTTPS"
    },
    {
        pergunta: "O que é um ataque de SQL Injection?",
        respostas: ["Um ataque que explora vulnerabilidades em bancos de dados", "Um ataque que intercepta comunicações de rede", "Um ataque que falsifica endereços de e-mail", "Um ataque que danifica o hardware de um servidor"],
        respostaCorreta: "Um ataque que explora vulnerabilidades em bancos de dados"
    },
    {
        pergunta: "Qual é o princípio da menor privilégio?",
        respostas: ["Conceder a todos os usuários acesso irrestrito aos recursos", "Conceder aos usuários apenas os privilégios necessários para realizar suas tarefas", "Negar todos os privilégios aos usuários", "Conceder privilégios aleatoriamente"],
        respostaCorreta: "Conceder aos usuários apenas os privilégios necessários para realizar suas tarefas"
    },
    {
        pergunta: "O que é ransomware?",
        respostas: ["Um tipo de malware que rouba informações financeiras", "Um tipo de malware que criptografa os dados da vítima e exige um resgate", "Um tipo de ataque que sobrecarrega a largura de banda da rede", "Um tipo de software que monitora a atividade do usuário"],
        respostaCorreta: "Um tipo de malware que criptografa os dados da vítima e exige um resgate"
    },
    {
        pergunta: "Qual é a importância de realizar backups regularmente?",
        respostas: ["Melhorar a velocidade do sistema", "Liberar espaço em disco", "Restaurar dados em caso de perda ou ataque", "Aumentar a vida útil do hardware"],
        respostaCorreta: "Restaurar dados em caso de perda ou ataque"
    },
    {
        pergunta: "O que é um honeypot?",
        respostas: ["Um tipo de antivírus", "Um sistema projetado para atrair e detectar ataques", "Um método para criptografar e-mails", "Uma ferramenta para monitorar o tráfego de rede"],
        respostaCorreta: "Um sistema projetado para atrair e detectar ataques"
    },
    {
        pergunta: "Qual é a função de um SIEM (Gerenciamento de Eventos e Informações de Segurança)?",
        respostas: ["Gerenciar senhas e identidades", "Monitorar e analisar eventos de segurança em tempo real", "Proteger contra ataques de phishing", "Impedir o acesso físico não autorizado"],
        respostaCorreta: "Monitorar e analisar eventos de segurança em tempo real"
    },
    {
        pergunta: "O que é uma vulnerabilidade Zero-Day?",
        respostas: ["Uma vulnerabilidade que existe há mais de um dia", "Uma vulnerabilidade que é desconhecida do fornecedor do software", "Uma vulnerabilidade que só pode ser explorada em dias ímpares", "Uma vulnerabilidade que não causa danos significativos"],
        respostaCorreta: "Uma vulnerabilidade que é desconhecida do fornecedor do software"
    },
    {
        pergunta: "Qual é o objetivo da análise de vulnerabilidades?",
        respostas: ["Prevenir ataques cibernéticos em tempo real", "Identificar e corrigir falhas de segurança em sistemas", "Criptografar dados em repouso", "Monitorar o comportamento do usuário"],
        respostaCorreta: "Identificar e corrigir falhas de segurança em sistemas"
    },
    {
        pergunta: "O que é um ataque Man-in-the-Middle (MitM)?",
        respostas: ["Um ataque que intercepta e possivelmente altera a comunicação entre duas partes", "Um ataque que sobrecarrega um servidor com solicitações", "Um ataque que instala malware em dispositivos móveis", "Um ataque que explora falhas de autenticação"],
        respostaCorreta: "Um ataque que intercepta e possivelmente altera a comunicação entre duas partes"
    },
    {
        pergunta: "Qual é a importância da segurança física?",
        respostas: ["Proteger contra ataques cibernéticos", "Proteger equipamentos e dados contra acesso físico não autorizado", "Garantir a disponibilidade dos sistemas", "Melhorar a velocidade da rede"],
        respostaCorreta: "Proteger equipamentos e dados contra acesso físico não autorizado"
    },
    {
        pergunta: "O que é a política de segurança da informação (PSI)?",
        respostas: ["Um conjunto de regras e diretrizes que definem como uma organização protege seus ativos de informação", "Um software que detecta e remove malware", "Um hardware que impede o acesso não autorizado a uma rede", "Um plano de resposta a incidentes de segurança"],
        respostaCorreta: "Um conjunto de regras e diretrizes que definem como uma organização protege seus ativos de informação"
    },
    {
        pergunta: "Qual é o objetivo da gestão de identidades e acessos (IAM)?",
        respostas: ["Monitorar o tráfego de rede", "Controlar quem tem acesso a quais recursos em um sistema", "Criptografar dados em trânsito", "Detectar e responder a incidentes de segurança"],
        respostaCorreta: "Controlar quem tem acesso a quais recursos em um sistema"
    },
    {
        pergunta: "O que é engenharia reversa?",
        respostas: ["Um processo para criar software a partir do zero", "Um processo para analisar um sistema ou software para entender seu funcionamento interno", "Um método para otimizar o desempenho de um banco de dados", "Uma técnica para recuperar dados apagados"],
        respostaCorreta: "Um processo para analisar um sistema ou software para entender seu funcionamento interno"
    },
    {
        pergunta: "Qual é a função de um WAF (Firewall de Aplicativo Web)?",
        respostas: ["Proteger contra ataques em nível de rede", "Proteger contra ataques específicos a aplicativos web", "Criptografar o tráfego da web", "Monitorar o desempenho do servidor web"],
        respostaCorreta: "Proteger contra ataques específicos a aplicativos web"
    },
    {
        pergunta: "O que é um ataque de Cross-Site Scripting (XSS)?",
        respostas: ["Um ataque que explora vulnerabilidades em servidores web", "Um ataque que injeta scripts maliciosos em sites confiáveis", "Um ataque que falsifica endereços de IP", "Um ataque que sobrecarrega a largura de banda da rede"],
        respostaCorreta: "Um ataque que injeta scripts maliciosos em sites confiáveis"
    },
    {
        pergunta: "Qual é a importância da segmentação de rede?",
        respostas: ["Melhorar a velocidade da rede", "Isolar partes da rede para limitar o impacto de um ataque", "Reduzir o consumo de energia", "Simplificar a administração da rede"],
        respostaCorreta: "Isolar partes da rede para limitar o impacto de um ataque"
    },
    {
        pergunta: "O que é um ataque de dia zero?",
        respostas: ["Um ataque que ocorre à meia-noite", "Um ataque que explora uma vulnerabilidade desconhecida do fornecedor", "Um ataque que só funciona em sistemas antigos", "Um ataque que não causa danos significativos"],
        respostaCorreta: "Um ataque que explora uma vulnerabilidade desconhecida do fornecedor"
    },
    {
        pergunta: "Qual é a função do teste de penetração (pentest)?",
        respostas: ["Prevenir ataques em tempo real", "Simular ataques para identificar falhas de segurança", "Criptografar dados em repouso", "Monitorar o comportamento do usuário"],
        respostaCorreta: "Simular ataques para identificar falhas de segurança"
    },
    {
        pergunta: "O que é um ataque de negação de serviço distribuído (DDoS)?",
        respostas: ["Um ataque que visa roubar dados confidenciais", "Um ataque que torna um serviço online indisponível usando múltiplas fontes", "Um ataque que modifica dados em um banco de dados", "Um ataque que instala malware em um sistema"],
        respostaCorreta: "Um ataque que torna um serviço online indisponível usando múltiplas fontes"
    },
    {
        pergunta: "Qual é a importância da resposta a incidentes de segurança?",
        respostas: ["Evitar que incidentes ocorram", "Minimizar os danos e restaurar os serviços após um ataque", "Melhorar a velocidade do sistema", "Liberar espaço em disco"],
        respostaCorreta: "Minimizar os danos e restaurar os serviços após um ataque"
    },
    {
        pergunta: "O que é a análise forense digital?",
        respostas: ["Um método para apagar dados de forma segura", "Um processo para investigar incidentes de segurança e coletar evidências digitais", "Uma técnica para criptografar dados em trânsito", "Um software que monitora a atividade do usuário"],
        respostaCorreta: "Um processo para investigar incidentes de segurança e coletar evidências digitais"
    },
    {
        pergunta: "Qual é o objetivo da gestão de riscos de segurança da informação?",
        respostas: ["Eliminar todos os riscos", "Identificar, avaliar e mitigar os riscos de segurança da informação", "Aumentar a velocidade da rede", "Reduzir o consumo de energia"],
        respostaCorreta: "Identificar, avaliar e mitigar os riscos de segurança da informação"
    },
    {
        pergunta: "O que é um ataque de injeção de comando?",
        respostas: ["Um ataque que explora vulnerabilidades em navegadores web", "Um ataque que executa comandos arbitrários no sistema operacional do servidor", "Um ataque que intercepta e-mails", "Um ataque que falsifica endereços de IP"],
        respostaCorreta: "Um ataque que executa comandos arbitrários no sistema operacional do servidor"
    },
    {
        pergunta: "Qual é a importância da conscientização em segurança da informação?",
        respostas: ["Substituir ferramentas de segurança", "Educar os usuários sobre ameaças e boas práticas de segurança", "Melhorar a velocidade do sistema", "Liberar espaço em disco"],
        respostaCorreta: "Educar os usuários sobre ameaças e boas práticas de segurança"
    },
    {
        pergunta: "O que é um ataque de clickjacking?",
        respostas: ["Um ataque que força os usuários a clicar em elementos maliciosos em uma página web", "Um ataque que explora vulnerabilidades em dispositivos móveis", "Um ataque que intercepta comunicações de rede", "Um ataque que danifica o hardware de um servidor"],
        respostaCorreta: "Um ataque que força os usuários a clicar em elementos maliciosos em uma página web"
    },
    {
        pergunta: "Qual é o objetivo da autenticação multifator (MFA)?",
        respostas: ["Simplificar o processo de login", "Adicionar camadas extras de segurança ao processo de autenticação", "Reduzir o número de senhas que os usuários precisam lembrar", "Melhorar a velocidade do sistema"],
        respostaCorreta: "Adicionar camadas extras de segurança ao processo de autenticação"
    },
    {
        pergunta: "O que é um ataque de envenenamento de cache ARP?",
        respostas: ["Um ataque que explora vulnerabilidades em roteadores", "Um ataque que associa o endereço MAC do atacante ao endereço IP de outro dispositivo na rede", "Um ataque que sobrecarrega a largura de banda da rede", "Um ataque que falsifica endereços de e-mail"],
        respostaCorreta: "Um ataque que associa o endereço MAC do atacante ao endereço IP de outro dispositivo na rede"
    },
    {
        pergunta: "Qual é a importância da segurança na nuvem?",
        respostas: ["Reduzir os custos de TI", "Proteger dados e aplicações armazenados em ambientes de computação em nuvem", "Melhorar a velocidade da rede", "Simplificar a administração da rede"],
        respostaCorreta: "Proteger dados e aplicações armazenados em ambientes de computação em nuvem"
    },{
        pergunta: "O que é um ataque de preenchimento de credenciais (Credential Stuffing)?",
        respostas: ["Um ataque que explora falhas de criptografia", "Um ataque que usa credenciais roubadas para tentar acessar várias contas", "Um ataque que manipula o tráfego de rede", "Um ataque que instala malware em servidores web"],
        respostaCorreta: "Um ataque que usa credenciais roubadas para tentar acessar várias contas"
    },
    {
        pergunta: "Qual é o papel da criptografia de ponta a ponta (E2EE)?",
        respostas: ["Criptografar dados apenas em trânsito", "Criptografar dados de forma que apenas o remetente e o destinatário possam lê-los", "Criptografar dados armazenados em bancos de dados", "Criptografar apenas metadados de comunicação"],
        respostaCorreta: "Criptografar dados de forma que apenas o remetente e o destinatário possam lê-los"
    },
    {
        pergunta: "O que é um ataque de desbordamento de buffer (Buffer Overflow)?",
        respostas: ["Um ataque que sobrecarrega a largura de banda da rede", "Um ataque que explora vulnerabilidades em alocação de memória", "Um ataque que falsifica endereços de e-mail", "Um ataque que danifica o hardware de um servidor"],
        respostaCorreta: "Um ataque que explora vulnerabilidades em alocação de memória"
    },
    {
        pergunta: "Qual é a importância da segurança de dispositivos móveis?",
        respostas: ["Apenas para proteger contra roubo físico", "Proteger contra malware, phishing e acesso não autorizado a dados pessoais e corporativos", "Não é importante, pois dispositivos móveis são inerentemente seguros", "Apenas para proteger contra chamadas telefônicas indesejadas"],
        respostaCorreta: "Proteger contra malware, phishing e acesso não autorizado a dados pessoais e corporativos"
    },
    {
        pergunta: "O que é um ataque de falsificação de solicitação entre sites (CSRF)?",
        respostas: ["Um ataque que explora vulnerabilidades em navegadores web", "Um ataque que força um usuário autenticado a executar ações indesejadas em um site", "Um ataque que intercepta e-mails", "Um ataque que falsifica endereços de IP"],
        respostaCorreta: "Um ataque que força um usuário autenticado a executar ações indesejadas em um site"
    },
    {
        pergunta: "Qual é a função do controle de acesso baseado em função (RBAC)?",
        respostas: ["Conceder acesso com base em horários específicos", "Conceder acesso com base nas funções do usuário dentro de uma organização", "Conceder acesso com base na localização geográfica", "Conceder acesso aleatoriamente"],
        respostaCorreta: "Conceder acesso com base nas funções do usuário dentro de uma organização"
    },
    {
        pergunta: "O que é um ataque de tunelamento DNS?",
        respostas: ["Um ataque que explora vulnerabilidades em servidores DNS", "Um ataque que usa o protocolo DNS para transmitir dados não autorizados", "Um ataque que sobrecarrega servidores DNS", "Um ataque que modifica registros DNS"],
        respostaCorreta: "Um ataque que usa o protocolo DNS para transmitir dados não autorizados"
    },
    {
        pergunta: "Qual é a importância da auditoria de segurança?",
        respostas: ["Apenas para fins de conformidade legal", "Para revisar e avaliar as políticas, procedimentos e controles de segurança", "Para melhorar a velocidade do sistema", "Para liberar espaço em disco"],
        respostaCorreta: "Para revisar e avaliar as políticas, procedimentos e controles de segurança"
    },
    {
        pergunta: "O que é um ataque de temporização (Timing Attack)?",
        respostas: ["Um ataque que ocorre em horários específicos", "Um ataque que mede o tempo de resposta de operações para inferir informações confidenciais", "Um ataque que explora vulnerabilidades em servidores de tempo", "Um ataque que manipula o tempo do sistema"],
        respostaCorreta: "Um ataque que mede o tempo de resposta de operações para inferir informações confidenciais"
    },
    {
        pergunta: "Qual é o objetivo da segurança por obscuridade?",
        respostas: ["Tornar os sistemas completamente inacessíveis", "Confiar na ocultação de informações para segurança", "Usar apenas tecnologias de código aberto", "Usar apenas tecnologias proprietárias"],
        respostaCorreta: "Confiar na ocultação de informações para segurança"
    }
];

// Variável para rastrear perguntas já usadas
let perguntasUsadas = [];

// Função para embaralhar perguntas e selecionar 10 que ainda não foram usadas
function obterPerguntasAleatorias() {
    const perguntasNaoUsadas = perguntas.filter((pergunta) => !perguntasUsadas.includes(pergunta.pergunta));

    if (perguntasNaoUsadas.length < 10) {
        // Se faltar perguntas para completar o quiz, reinicie as usadas
        perguntasUsadas = [];
    }

    const perguntasDisponiveis = perguntas.filter((pergunta) => !perguntasUsadas.includes(pergunta.pergunta));
    const perguntasSelecionadas = [...perguntasDisponiveis].sort(() => Math.random() - 0.5).slice(0, 10);

    // Atualiza o rastreador de perguntas usadas
    perguntasSelecionadas.forEach((pergunta) => perguntasUsadas.push(pergunta.pergunta));

    return perguntasSelecionadas;
}

// Exibir perguntas
function carregarQuiz() {
    const perguntasSelecionadas = obterPerguntasAleatorias();
    const quizContainer = document.getElementById("quiz-container");
    const resultadoDiv = document.getElementById("resultado");
    const refazerBtn = document.getElementById("refazer-btn");

    quizContainer.innerHTML = ""; // Limpa o container
    resultadoDiv.innerHTML = ""; // Limpa o resultado
    refazerBtn.style.display = "none"; // Esconde o botão de refazer

    perguntasSelecionadas.forEach((pergunta, index) => {
        let perguntaHTML = `<section class="quiz-question">
            <p class="question-text"><strong>${index + 1}. ${pergunta.pergunta}</strong></p>
            <div class="answers-container">`;

        pergunta.respostas.forEach(resposta => {
            perguntaHTML +=
                `<div class="answer">
                        <input type="radio" id="pergunta${index}-${resposta}" name="pergunta${index}" value="${resposta}">
                        <label for="pergunta${index}-${resposta}">${resposta}</label>
                </div>`;
        });

        perguntaHTML += `
            </div>
        </section>`;
        quizContainer.innerHTML += perguntaHTML;
    });

    // Salva as perguntas selecionadas para avaliação
    window.perguntasSelecionadas = perguntasSelecionadas;
}

// Verificar respostas e calcular acertos/erros
function finalizarQuiz() {
    let acertos = 0;

    window.perguntasSelecionadas.forEach((pergunta, index) => {
        const respostas = document.getElementsByName(`pergunta${index}`);
        const respostaSelecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);

        if (!respostaSelecionada) {
            alert(`Por favor, responda à pergunta ${index + 1} antes de finalizar.`);
            throw new Error(`Pergunta ${index + 1} não foi respondida.`);
        }

        respostas.forEach(resposta => {
            if (resposta.value === pergunta.respostaCorreta) {
                resposta.parentElement.classList.add("answer-correct");
            } else if (resposta.checked) {
                resposta.parentElement.classList.add("answer-incorrect");
            }
        });

        if (respostaSelecionada.value === pergunta.respostaCorreta) {
            acertos++;
        }
    });

    // Define o feedback com base nos acertos
    let feedback = "";
    if (acertos < 5) {
        feedback = "Estude mais! 📚";
    } else if (acertos === 5) {
        feedback = "Na média! 👍";
    } else {
        feedback = "Bom trabalho! Você merece um biscoito! 🍪";
    }

    // Exibe o resultado e o feedback
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2>Resultado</h2>
                           <p>Acertos: ${acertos}</p>
                           <p>${feedback}</p>`;

    // Exibe o botão de refazer
    document.getElementById("refazer-btn").style.display = "inline-block";
}

// Carrega o quiz ao abrir a página
window.onload = carregarQuiz;