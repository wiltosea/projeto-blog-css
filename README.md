# A Aplicação SPA

A aplicação consiste em um blog, onde serão renderizados conteúdos consumidos através de uma GraphQL que fornece dados de um HeadlessCMS DatoCMS.
A aplicação foi desenvolvida utilizando o create-react-app, usando a biblioteca do react sem frameworks. Para o layout foi utilizado o SASS como pre-processador de CSS. Para a navegação entre as páginas foi utilizado o react-router-dom. Para a requisição dos dados foi utilizado o graphql-hooks e react-datocms, como sugestão da própria documentação do DatoCMS.

## Sobre as escolhas de tecnologias utilizadas

### ReactJs

ReactJs é uma das melhores bibliotecas para se trabalhar com SPA, possui boa documentação e excelente suporte da comunidade para qualquer dúvida que possa surgir. Além disso, o ReactJs é uma biblioteca que possui uma curva de aprendizado relativamente baixa, o que facilita o desenvolvimento de aplicações simples e complexas.

### SASS

Inicialmente pensei em utilizar um framework CSS, mas a quantidade de componentes que seriam utilizados na aplicação não justificaria o uso de um framework. Por isso, optei por utilizar o SASS como pre-processador de CSS.

- Estilos globais foram definidos no arquivo _global.scss, que é importado no arquivo index.scss.
- Estilos específicos de cada componente foram definidos utilizando module scss, que são importados dentro de cada componente.
- Variáveis globais foram definidas no arquivo variables.scss.

## Conteúdo do Blog

Homepage (src/views/Home): Página carrega, inicialmente, os posts mais recentes. Foi separado do componente que renderiza os cards de posts pois, futuramente, será adicionada a função de sidebar.
Post (src/view/Post): Página que renderiza o post individual.

## Componentes

### Card

O componente Card é responsável por renderizar os cards de posts. Ele recebe como props o título, a descrição e a imagem.

### Footer

O componente Footer é responsável por renderizar o footer da aplicação.

### NavBar

O componente Header é responsável por renderizar o header da aplicação, com título e menu de navegação.

### PostCollection

Este componente carrega a visualização padrão dos posts, que é a grid de cards.

### PostView

É o componente que renderiza o post individual dentro da página Post. Ele recebe como props o título, a descrição, a imagem, conteúdo do post e informações do autor.
