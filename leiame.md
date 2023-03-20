# A Aplicação SPA
A aplicação consiste em um blog, onde serão renderizados conteúdos consumidos através de uma API, desenvolvida em strapi. A aplicação foi desenvolvida utilizando o framework Next.js, que é um framework React.js, e o framework CSS Bootstrap.

## Sobre as escolhas de tecnologias utilizadas:

### Next.js
O Nextjs é um framework SSR baseado em react, que fornece algumas boas melhorias e facilidades em relação ao Reactjs. A possibilidade de criação de layouts estáticos e dinâmicos, além de ser uma ferramenta que facilita a criação de páginas estáticas, foi o que me fez escolher o Nextjs para o desenvolvimento da aplicação.

### Bootstrap
O Bootstrap é um framework CSS que fornece uma série de componentes e classes CSS que facilitam o desenvolvimento de layouts responsivos. Além disso, o Bootstrap possui uma série de componentes que facilitam a criação de layouts, como o Grid, que foi utilizado para a criação do layout da aplicação.
## Conteúdo do Blog:

Homepage (src/Pages/Home): Contendo navegação e as noticias mais recentes
Página de categoria (src/vews/Category): Contendo as notícias mais recentes de cada categoria
Página da noícia individual (src/vews/Article): Contendo mais detalhes da noticia
O Framework CSS
Por estar acostumada ao css normal sem uso de nenhum framework ou biblioteca alem de uma normalização, inicialmente estava inclinada a utilizar o Radix UI. Além dele ter uma boa variedade de componenents todos eles são "limpos" de estilo, o que me daria flexibilidade no design dos componentes. Contudo após analise superficial desta biblioteca de componentes percebi que não haviam componentes de layout.

Para o tipo de aplicação escolhida, considerei o layout como parte mais complexa já que não há a necessidade do uso de muitos componentes. Além da navegação, botões e links o que seria mais utilizado são elementos de superfície, containers, grids, boxes, etc. Contrário a esta aplicação, se tivesse optado por criar uma Playlist ou um ToDo List frameworks ou bibliotecas de componenets sem estilo ou mesmo a criação dos componentes estilizados por meio do styled componenets, seria uma melhor escolha.

Por fim escolhi a biblioteca de componentes estilizados Material UI (MUI). Com excessão de pequenas customizações mais significativas, esta biblioteca serviu perfeitamenete para este trabalho.

Descrição da estrutura e layout do portal
Além das páginas, os principais componentes criados são os seguintes:

Header
Navigation
PageTitle
ArticlesGrid
Detail
Footer
O Footer dispensa muitas explicações por ser super simples contendo apenas os dois componentes do MUI, a Box e a Typography. Para os outros uma explicação mais detalhada é dada abaixo.

Para as poucas customizações globais e criação de variantes para alguns componentes foi criado uma const theme com o createTheme. As cores utilizadas no portal foram estabelecidas e gardadas na const colors para serem utilizadas no theme.

Foram customizados no theme as cores, primary.main, secondary.main, custom.light e custom.main. Além das cores, para o componente MuiCard foram criadas três variantes:

variant: 'featured' - utilizada para o Card das notícias destacadas;
variant: 'article' - utilizada para o Card das notícias em geral e
variant: 'detail' - utilizada para o Card da notícia individual.
Para a navegação uma variante foi criada para o MuiDivider e a cor default do texto(MuiTypography) foi modificada para a cor primary.main.

Header
O header consisti de logo com link para home e um menu responsivo para a versão mobile.

A navegação entre categorias de notícias pode ser feita pelo menu desktop logo abaixo do Header ou, na versão tablet e e mobile, pelo menu off screen que aparece ao botão de menu no header ser clicado.

Além de container, button, divider, stack e IconButton, os componentes do MUI, mais importantes, utilizados para a estruturação do header foram:

AppBar - este componente foi o "container" para o header e todos seus elementos. Neste foram colocados tanto o logo do portal como o botão de abertura do menu mobile (hamburguer menu).
Drawer - este componente foi utilizado para o menu mobile contendo.
Navigation
A navegação entre categorias de notícias foi feita por este componente. Um componente simples que recebe a array de categorias e imprimi uma stack horizontal de botões do tipo link (react-router-dom Link).

Além do button do MUI foi utilizado o Stack para o layout unidimensional horizontal(row) dos buttons.

Por ser um componente específico para lidar com layouts unidimensionais o Stack não faz a quebra de linha caso a largura dos seus items ultrapasse a largura em que está contido. Este não se tornou um problema porque as categorias cabem na versão desktop, que é a única em que estão navegação aparece.

PageTitle
Este é um componente simples que recebe o nome da categoria ou nada caso esteja na homepage. Ele foi criado utilizando apenas o box e a typography. Ele está presente em duas views a Home e a Category.

ArticlesGrid
Este componente estabelece o layout dos cards de notícia. Além da utilização do Grid para criar o layout, dois componentes foram criados para apresentar as noticias, featured e article.

Featured
A primeira notícia é impressa com destaque por este componente que possui um layout um pouco diferente da apresentação das outras notícias.

Como estruturação principal, foi utilizado o componente do MUI Card. A notícia então é apresentada em um card com imagem, se houver, meta, titulo, descrição e link.

o CardMedia foi utilizado para a imagem de destaque da notícia, caso haja uma. O layout do Card é dividido em duas colunas, sendo a primeira para esta imagem.
foi criado um componente comum entre os artigos para as informações de data e fonte da notícia, o ArticleMeta. A MUI Stack é utilizada para o layout destas informações juntamente com a MUI Chip.
O título e a descrição da notícia estão inseridos dentro do MUI CardContent.
o CardActions é utilizado como container para o link da notícia individual.
Article
Para as demais notícias no portal o Article é o componente utilizado. Ele é muito semelhante ao componente anterior(Featured), contudo contém algumas diferenças de layout significativas.

Diferente do Featured que possui destaque na página possuindo, por isso, mais espaço. Cada px é importante para um card apresentar bem as notícias.

O Layout deste componente se baseia principalmente na propriedade grid do css. Para a utilização deste "display: grid" o MUI Box foi utilizado com a prop sx para a estilização do componente. Foram criadas áreas para cada bloco(CardMedia, CardContent e CardActions). Como a api pode retornar null para a imagem condicionais foram necessárias para estruturar o card com e sem imagem.

Detail
Este componente é o usa como container o MUI Card com suas partes, CardMedia, CardContent e CardActions. Possui um layout simples apresentando em rows sem colunas.