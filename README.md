<p align="center">
  <img src="https://github.com/bnavarroo/pokemon-store/blob/master/src/_assets/img/pokemon-logo.png" alt="Pokemon Store" width="100px" />
  <h1 align="center">Pokemon Store</h1>
</p>

<p align="center">
  
[![Netlify Status](https://api.netlify.com/api/v1/badges/189f9254-1a78-484d-818a-c7dc7e451e3c/deploy-status)](https://pokemon-store-bnavarroo.netlify.app/)
  
</p>

<br />

## Descrição do Projeto
<p>
O projeto consiste em uma "mini loja virtual", onde os pokemons são os produtos. Os pokemons são mostrados a partir da <a href="https://pokeapi.co/">pokeapi<a/> e são separados por lojas, onde cada loja representa um tipo de pokemon. Você pode pesquisar pokemon no catalogo, capturá-los e adicioná-los ao carrinho, manipular sua quantidade, removê-los, entre outras funcionalidades!
</p>

## Features

- [x] Identificação de usuário;
- [x] Seleção/Escolha de loja;
- [x] Catálogo/Listagem de pokemon;
- [x] Manipulação do Carrinho: adicionar, aumentar/diminuir quantidade, remover;
- [x] Página de detalhes do pokemon;
- [x] Carrinho/Finalização das "capturas".

## 🛠 Tecnologias

As principais ferramentas utilizadas para a construção do projeto foram:

- [React](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Create React App](https://create-react-app.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

## Estrutura Geral do Projeto

### `_assets`
A pasta assets contém os arquivos estáticos (imagens, fontes, scss) e globais do projeto.

### `_config`
A pasta _config contém os arquivos de configurações globais do projeto. Além das definições da store do redux e da sessionStorage, contém a configuração e junção de todos os reducers e rotas do projeto.

### `constants`
A pasta constants, como o próprio nome já diz, armazena valores fixos que são utilizados em vários lugares dos códigos.

### `pages`
A pasta pages contém as páginas da aplicação, referenciadas nas rotas. Cada página está armazenada em uma subpasta que pode ou não posuir além da página em si, seus próprios componentes, bem como estilos(css/scss) e constants. O conjunto de rotas para cada página fica nessa estrutura e é importado pelo arquivo global de rotas.

### `shared`
A pasta shared contém lógicas e componentes que são compartilhados na aplicação. Os componentes declarados nessa pasta são independentes e tecnicamente podem ser utilizados em qualquer local do projeto. Essa pasta contém também configurações dos reducers (action, actionType e os reducers em si) e arquivos facilitadores para a api.

### `templates`
Os templates trabalham com um conceito de container, porém visual. Permite o agrupamento de páginas que partilham da mesma estrutura visual e de posicionamento de componentes. Esse conceito é aplicado em outras tecnologias, como por exemplo as estruturas de layout do Razor do .NetCore.

### `utilities`
A pasta utilities contém todo o código utilitário da aplicação, como funções genéricas, conversores, entre outros.

## Scripts para a execução

### Pré-requisitos

Antes de iniciar, é preciso ter o [Node.js](https://nodejs.org/en/) instalado na máquina e algum gerenciador de pacotes, como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/). Recomendo o [VSCode](https://code.visualstudio.com/) como editor para trabalhar com o código.

### Scripts

Esse projeto foi criado com [Create React App](https://github.com/facebook/create-react-app) e contém os seus scripts padrões. Os principais são:

### `npm start`

Roda a aplicação em modo de desenvolvimento\
Abra [http://localhost:3000](http://localhost:3000) para visualizar o resultado no navegador.

A página é recarregada sempre que o código é editado.\
Você poderá ver os erros de no console.

### `npm test`

Para mais informações: [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Gera o Build de produção da aplicação na pasta `build`.\

Mais informações em: [deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Autor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62071446?s=400&u=851a0c918e6257a6cf47ebdcafa271e67f4503fc&v=4" width="100px;" alt=""/>
<b>Bruno Navarro de Oliveira</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-Bruno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-navarro-oliveira/)](https://www.linkedin.com/in/bruno-navarro-oliveira/) 

