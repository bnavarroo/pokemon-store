# Pokémon Store

O projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).\
Você poderá ver o build do projeto em produção através desse [Link](https://pokemon-store-bnavarroo.netlify.app/)


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

