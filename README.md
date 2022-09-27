
<h1 align="center"> Desafio quero ser Qa </h1>


<h2 align="center">Motivação ao escolher a ferramenta</h2>
Como irei testar uma aplicação web, escolhi esse framework Cypress pelos seguintes motivos:

Cypress é um aplicativo gratuito, de código aberto , instalado localmente e um serviço de painel para gravar os testes.

Além de ser uma ferramenta de teste de front-end voltada para aplicações web, que permite que você escreva testes mais rápidos, fáceis e confiáveis.

Cypress permite escrever todos os tipos de testes:
- Testes de ponta a ponta
- Testes de integração
- Testes de unidade
Possibilitando testar qualquer coisa que seja executada em um navegador.

visualize capturas de tela tiradas automaticamente em caso de falha ou vídeos de todo o conjunto de testes quando executados na CLI.

-  **_Bora ver como isso tudo funciona?!_**

<img src="https://media.giphy.com/media/HscDLzkO8EOTmgkhQP/giphy.gif"  style="width:400px;height:150px" >
<p>
<br>


Nesse projeto vou **Automatizar cenários** para gerar comportamento de usuário.

</p>

 
<img style="border-radius:width:300px;height:300px" src="https://user-images.githubusercontent.com/98066667/190527566-df7dfa14-b256-47b7-8a7b-0865b5904382.gif"  > 






 <h2 align="center"> Configurando Ambiente </h2>

O Cypress é um framework para automação de testes end-to-end, que utiliza o JavaScript como linguagem de programação.precisaremos instalar duas ferramentas: o **NodeJS**, necessário para executar código JavaScript e o **Visual Studio Code** ou VSC, editor que usamos para escrever código.
 #### Instalações:
 - [nodejs](https://nodejs.org/en/)
 - [vsCode](https://code.visualstudio.com/)
 - [cypress](https://www.cypress.io/)

 Após concluí as instalações. Abra o terminal e  digita o comando npx cypress open ou npm run test, caso tenha incluído o comando anterior no script test do arquivo package.json conforme eu oriento abaixo:


### Execuções:
colocando esse comando dentro de **package.json** para abrir o cypress via terminal.
```
{
    "scripts": {
    "cy:run": "npx cypress open "
    }
} 
```
- segue lo link de mais comandos de execução na [documentação](https://docs.cypress.io/guides/guides/command-line#How-to-run-commands) 

### variáveis de ambientes

Você precisa criar seu próprio cypress.env.json arquivo que o Cypress verificará automaticamente. A seguir deve adicionar **cypress.env.json** ao seu **.gitignore** arquivo, os valores aqui pode ser diferente para cada máquina local.

```
{
  "user_name": "seu e-mail",
  "password": "sua senha"
}
```

- **_Obs:_** E-mail e Senha estão disponibilizado no [site](https://www.saucedemo.com/) 

- [Documentação das variáveis de ambientes](https://docs.cypress.io/guides/references/configuration#Configuration-File)

## Rodando os testes

Na primeira abertura do Cypress, quando você digita o comando npx cypress open ou npm run test, caso tenha incluído o comando anterior no script test do arquivo package.json, vai aparecer a seguinte tela nova:

<img src="https://cdn1.gnarususercontent.com.br/1/40407/642de4e3-8e2c-4707-b480-d5692263c27e.png" style="width:900px;height:300px" >

Nessa tela você irá escolher **E2E Testing**, em sequência, uma nova tela que mostra todos os navegadores instalados, para que você escolha qual irá utilizar inicialmente.

<img src="https://cdn1.gnarususercontent.com.br/1/40407/ed906de9-810e-4e0c-8eda-5ee91b4a806f.png" style="width:900px;height:300px" >

Depois de selecionado, você vai marcar a opção **Start E2E Testing in navegador** escolhido.

Em seguida abrirá  os arquivos que foram adicionados ao projeto: 




<img src="https://user-images.githubusercontent.com/77105353/190827266-689beebc-297e-47f9-9d0d-8efdaf5cb221.png" style="width:900px;height:300px">


O **botão Specs** demonstra todos os arquivos de teste do projeto. Um clique em um dos arquivos já executa o mesmo e mostra os outros na barra lateral esquerda, para serem executados também facilmente.
















 
















