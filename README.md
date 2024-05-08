Quiz de Perguntas e Respostas
O Quiz de Perguntas e Respostas é uma aplicação web simples desenvolvida para testar o conhecimento dos colaboradores da qualidade. Esta aplicação permite criar quizzes com uma variedade de perguntas e respostas, fornecendo uma maneira interativa e educativa de avaliar o conhecimento dos usuários.

Funcionalidades Principais
Perguntas Aleatórias: O aplicativo seleciona aleatoriamente perguntas do banco de dados para cada sessão, proporcionando uma experiência única a cada uso.
Diversidade de Questões: As perguntas abrangem uma variedade de tópicos e áreas de conhecimento relacionadas à qualidade.
Feedback Instantâneo: Os usuários recebem feedback imediato após responderem a cada pergunta, permitindo que saibam se a resposta está correta ou não.
Contador de Pontuação: Uma contagem de pontos é mantida ao longo do quiz, permitindo que os usuários vejam sua pontuação atual.
Limite de Perguntas: O número máximo de perguntas pode ser configurado para cada sessão do quiz, proporcionando flexibilidade no tempo e na extensão do teste.
Interface Amigável: A interface do usuário é simples e intuitiva, facilitando a navegação e o uso para todos os colaboradores.
Instalação
Para usar o Quiz de Perguntas e Respostas, siga estas etapas:

Clone o repositório do GitHub em seu ambiente local:
bash
Copy code
git clone https://github.com/seu-usuario/quiz-app.git
Navegue até o diretório do projeto:
bash
Copy code
cd quiz-app
Abra o arquivo index.html em seu navegador da web:
bash
Copy code
/caminho/para/o/projeto/index.html
Como Usar
Após abrir o aplicativo no navegador, você será apresentado à tela inicial, onde poderá começar o quiz clicando no botão "Iniciar Quiz". O aplicativo apresentará uma série de perguntas com opções de resposta. Selecione a resposta correta e avance para a próxima pergunta. Ao final do quiz, você receberá uma pontuação com base nas respostas corretas e incorretas.

Personalização
Você pode personalizar o quiz de acordo com suas necessidades, adicionando novas perguntas ou modificando as perguntas existentes no arquivo questions.json. Cada pergunta no arquivo JSON tem um formato padrão:

json
Copy code
{
  "question": "Qual é a capital do Brasil?",
  "choice1": "São Paulo",
  "choice2": "Rio de Janeiro",
  "choice3": "Brasília",
  "choice4": "Belo Horizonte",
  "answer": 3
}
Certifique-se de seguir o formato exato ao adicionar novas perguntas.

Contribuição
Se deseja contribuir para o projeto, siga estas etapas:

Faça um fork do repositório.
Crie uma nova branch para sua contribuição: git checkout -b feature/nova-funcionalidade.
Faça suas alterações e adições no código.
Faça commit das suas alterações: git commit -m "Adiciona nova funcionalidade".
Envie suas alterações para o seu fork: git push origin feature/nova-funcionalidade.
Abra um pull request para revisão.
Por favor, certifique-se de seguir as diretrizes de contribuição e de estilo de código do projeto ao enviar suas contribuições.

Licença
Este projeto é licenciado sob os termos da Licença MIT.
