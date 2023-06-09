# :blue_heart: Projeto Delas :blue_heart:

### Qual problema o Delas visa solucionar?
 Muitas empreendedoras enfrentam a falta de uma plataforma que lhes permita oferecer seus serviços e alcançar um público-alvo mais amplo. Elas desejam expandir seus negócios e gerar mais oportunidades de emprego.


### Quais pessoas ou grupos são impactados por esse problema?
Mulheres em situação de vulnerabilidade que buscam emprego ou desejam oferecer seus serviços, vendedoras autônomas, pequenas e médias empreendedoras, prestadores de serviços diversos e profissionais da área da saúde.


### Objetivo da plataforma: 
O projeto tem como objetivo criar um site de comércio eletrônico que promova o empoderamento feminino e incentivando mulheres na liderança. Nele, empreendedoras do gênero feminino terão a oportunidade de cadastrar seus produtos e serviços, sem limitações quanto ao público-alvo, que pode ser qualquer pessoa. A plataforma abrangerá serviços de moda, beleza, saúde, bem-estar, alimentos e serviços.


### Solução proposta: 
A proposta é fornecer uma plataforma de comércio eletrônico que promova a união entre empreendedoras, incentivando a criação de novos negócios liderados por mulheres, ampliando a diversidade e promovendo oportunidades igualitárias. O projeto contribuirá para a geração de renda e valorização do trabalho das empreendedoras, tornando-se uma referência para o público empreendedor. Além disso, oferecerá aos clientes uma ampla gama de produtos e serviços.
### Tipo de plataforma: 
Marketplace


### Público-alvo: 
Mulheres de todas as orientações sexuais e identidades de gênero, com foco no empreendedorismo e prestações de serviços delas para elas. 

### Como funcionará: 
O site de comércio eletrônico permitirá o cadastro de produtos e serviços, fornecendo informações detalhadas, como fotos, descrição, preço, opções de frete, localização e promoções. Dessa forma, os clientes poderão encontrar e adquirir facilmente os produtos e serviços desejados. Além disso, o site contará com campos para sugestões e avaliações dos clientes.

### Serviços oferecidos: 
Culinária, confeitaria, saúde, terapia, fisioterapia, consultas, beleza, estética, moda, calçados, acessórios, cosméticos, perfumaria e prestação de serviços em geral.


### Diferencial: 
O site permitirá a opção de "casadinha" de serviços de proprietárias diferentes, permitindo que os clientes adquiram serviços complementares e obtenham descontos especiais. Além disso, será possível recomendar produtos e serviços de outras empreendedoras, promovendo a união e colaboração entre as empreendedoras. Revelando que em todas as condições a diferença de gênero ainda é alarmante e a desigualdade ainda reflete nos tempos atuais, dentro das companhias.
atualizado em: 14/06/2022
disponível em:https://www.educamaisbrasil.com.br/educacao/noticias/mercado-de-trabalho-para-pessoas-trans


### Estatisticas:
- A taxa de participação feminina no mercado de trabalho cresceu continuamente desde 2014 e atingiu 54,34%, em 2019. Em 2021, a porcentagem fechou em 51,56
Fonte: Assessoria de Comunicação,Getúlio Vargas (FGV) e IBGE.
Atualizado em: 24/10/2022 
Disponível em:https://portalcorreio.com.br/mercado-de-trabalho-mulheres-sao-quase-70-do-quadro-de-funcionarios-da-geap-e-ocupam-cargos-de-
Disponível em:https://portalcorreio.com.br/mercado-de-trabalho-mulheres-sao-quase-70-do-quadro-de-funcionarios-da-geap-e-ocupam-cargos-de-lideranca/#:~:text=Um%20estudo%20da%20Funda%C3%A7%C3%A3o%20Get%C3%BAlio,porcentagem%20fechou%20em%2051%2C56.


Apenas 13,9% de mulheres trans e travestis possuíam empregos formais.
Fonte: Fundação de Amparo à Pesquisa do Estado de São Paulo
Atualizado em: 14/06/2022
Disponível em:https://namidia.fapesp.br/mercado-de-trabalho-para-pessoas-trans/388438


A taxa de participação das mulheres no mercado de trabalho no ano passado foi de 52,9% enquanto a dos homens foi de 72%
fonte: Por Rafael Rosas, Juliana Schincariol e Alessandra Saraiva, Valor — Rio
Atualizado em: 06/11/2019
Disponível em: https://valor.globo.com/brasil/noticia/2019/11/06/mulheres-tem-maiores-desocupacao-e-informalidade-e-menores-rendimentos-mostra-ibge.ghtml]


<br>
<!--- [Apresentação do Projeto Final](#) --->
<br>
<br>
 <h3> 📁 Arquitetura do Projeto </h3>

``` 
📁projeto-delas
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 clientesController.js
   |  |    |- 📄 empreendedorasController.js  
   |  |
   |  |
   |  ||--📁 models
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |    |- 📄 index.js 
   |  |
   |  ||-📄 app.js
   |  |
   |  |
   |  | 
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 server.js
   |- 📄 README.md
``` 
:pushpin: Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. 



<br>
<br>


##  :ledger: Tecnologias Utilizadas

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|

 ## :bookmark: Pacotes Utilizados
 | Ferramenta | Descrição |
 | --- | --- |
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
<br>

📝 [Link para a documentação:](https://github.com/DelisG/projeto-delas/blob/main/README.md)

<br>

<h1 align="center">
<!-- 
<p align="center">
<img src= "#" width="500px" height="150"/>
</p>
-->
<br>

## Clonar o repositório
$ git clone https://github.com/DelisG/projeto-delas.git

### Entrar na pasta do repositório
$ cd projeto-delas

### Instalar as dependências
$ npm install

### Executar o servidor para que você possa rodar o projeto localmente
$ npm start

<br>
<br>


## :iphone: Interface Gráfica Para Realizar os Testes

<br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br> 
 <!---
▫️ Rota de criação de empreendedora
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna todas as empreendedoras
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna o empreendimento por categoria
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que altera algum dado do cadastro da empreendedora
<br>
<!--- <img src= "#" width="70%" height="40%"/> --->

</p>
<br>
<br>

 
Testando Rotas
 📢 Todas as rotas existentes neste projeto:

 <h3> No usuário Empreendedora, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /empreendedoras    | Listar todas as empreendedoras cadastradas              |   
| GET    | /:id               | Mostra o cadastro da empreendedora por ID               |  
| POST   | /                  | Registra uma nova empreendedora                         |   
| PUT    | /:id               | Altera dados da empreendedora identificada pelo id      |   
| DELETE | /:id               | Remove o cadastro da empreendedora identificada pelo id |   

<br>
 <h3> No usuário cliente, os métodos e rotas serão:</h3>

| Verbo  |   EndPoint         |         Descrição da Rota                               | 
| ------ | ------------------ | --------------------------------------------------------| 
| GET    | /cliente           | Listar todas os clientes cadastrados                    |   
| GET    | /:id               | Mostra o cadastro do cliente       por ID               |  
| POST   | /                  | Registra um novo cliente                                |   
| PUT    | /:id               | Altera dados do cliente identificado pelo id            |   
| DELETE | /:id               | Remove o cadastro do cliente identificado pelo id       |   

<br>

💖 Desenvolvedoras Do Projeto 💖

[Delis Guerra](https://github.com/DelisG),
[Renata Silvestre](https://github.com/renatasilvestr3),
[Tereza Oliveira](https://github.com/devcode25),
[Ana Rita](https://github.com/aritarruda),
[Atalide](https://github.com/Atalide),
[Michelle Bessoni](https://github.com/mbessoni),
[Luana Comin](https://github.com/luanamcomin),
[Carolina Fernanda](https://github.com/Carolfernanda),
[Vanessa Farias](https://github.com/Vr-Farias).

Projeto desenvolvido com a orientação e carinho da Professora [Tereza Oliveira](https://github.com/devcode25))!

------------------------------
