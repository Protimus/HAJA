# Projeto Haja

Um CMS para emissão em tempo real de relatórios e informações de carros do projeto HAJA da Universidade Tuiuti do Paraná (UTP).


## O que é o projeto Haja?
Para saber mais sobre o projeto haja, acesse: https://www.facebook.com/Haja-Utp-1619492654971789/

## O que o CMS faz?
O projeto de CMS consiste em uma página em tempo real que faz parser de um sistema criado com Arduino que envia informações dos sistemas mecânicos e elétricos do carro, exibindo essas informações em gráficos e alocando-as em um banco de dados. Além disso o painel também fornece uma opção de CRUD para que o administrador possa cadastrar alunos no sistema, adicionar suas notas e exibir um relatório geral.


## Tecnologias utilizadas

- NodeJS.
- Angular 6.
- Bootstrap 4.


API RESTFull em padrões MVC.


## Como testar?
- Baixe o NodeJS
- Execute o projeto no terminal do NodeJS com o comando 'ng serve' e acesse via localhost em http://localhost:4200
- Crie uma versão deploy com o comando 'ng build --prod' e mova o conteúdo gerado da pasta 'dist' para o seu webhost.
