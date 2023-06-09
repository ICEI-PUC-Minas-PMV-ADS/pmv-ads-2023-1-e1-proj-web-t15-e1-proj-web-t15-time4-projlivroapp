# Especificações do Projeto

O projeto contou com uma abordagem de pesquisa pelos membros da equipe, com o objetivo de aprofundamento do problema,
identificando os pontos mais relevantes a serem retratados. Os usuários foram submetidos a questões sobre suas
preferências, dificuldades e hábitos, nos dando um panorama satisfatório de suas atividades relacionadas à leitura. As
informações adquiridas foram convertidas em personas e histórias de usuários, que servirão como fundamento para o
desenvolvimento do projeto.

## Personas

<table>
    <tr>
        <td colspan="2"><h3>Tatiana Loureiro</h3></td>
        <td colspan="2" align="center"> <img src="img/personas/persona1.png" alt="Tatiana Loureiro"> </td>
    </tr>
    <tr>
        <td colspan="2">
            <b>Idade:</b> 25 a 30 anos
            <br />
            <b>Ocupação:</b> Contadora e Estudante
        </td>
        <td><b>Aplicativos que usa/conhece:</b> Duolingo (conhece), Instagram (usa)
        </td>
    </tr>
    <tr>
        <td><b>Motivações para leitura:</b>
            <li>Entretenimento</li>
            <li>Relaxar/reduzir o estresse</li>
        </td>
        <td><b>Frustrações:</b>
            <li>Grande quantidade de trabalho e obrigações</li>
            <li>Gostaria de ter acesso a livros mais baratos/em promoção</li>
        </td>
        <td><b>Hobbies:</b>
            <li>Gosta de assistir filmes e séries</li> 
            <li>Lê livros ou revistas</li>
            <li>Gosta de viajar</li>
            <li>Joga videogames e jogos online</li>
        </td>
    </tr>
</table>

<table>
    <tr>
        <td colspan="2"><h3>Andrey Jardim</h3></td>
        <td colspan="2" align="center"> <img src="img/personas/persona2.png" alt="Tatiana Loureiro"> </td>
    </tr>
    <tr>
        <td colspan="2">
            <b>Idade:</b> 41 a 45 anos
            <br />
            <b>Ocupação:</b> Analista de Sistemas e Estudante
        </td>
        <td><b>Aplicativos que usa/conhece:</b> Duolingo (conhece), Tiktok (usa)
        </td>
    </tr>
    <tr>
        <td><b>Motivações para leitura:</b>
            <li>Entretenimento</li>
            <li>Relaxar/reduzir o estresse</li>
        </td>
        <td><b>Frustrações:</b>
            <li>Grande quantidade de trabalho e obrigações</li>
        </td>
        <td><b>Hobbies:</b>
            <li>Gosta de navegar em redes sociais</li> 
            <li>Ama atividades ao ar livre</li>
            <li>Gosta de jogos de tabuleiro e cartas</li>
            <li>Joga videogames e jogos online</li>
        </td>
    </tr>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO...       | QUERO/PRECISO ...                                                                         | PARA ...                                                                        |
|------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Tatiana Loureiro | compartilhar o progresso num romance incrível que comecei a ler recentemente              | se sentir ainda mais empolgada em terminá-lo com o _feedback_ dos meus amigos   |
| Andrey Jardim    | saber o que meus amigos estão lendo ultimamente (e curtindo)                              | se inspirar, voltar a ler e se sentir mais produtivo no meu tempo livre         |
| Andrey Jardim    | orientar e acompanhar o pessoal do trabalho na leitura de uma nova obra técnica requerida | ajudar na formação dos colegas, tornando o trabalho de todos mais eficiente     |
| Tatiana Loureiro | mostrar aos meus amigos o novo livro de mistério que estou querendo comprar               | fixar mentalmente o objetivo de lê-lo ou mesmo ganhá-lo de presente do namorado |
| Tatiana Loureiro | receber dicas de livros disponíveis gratuitamente                                         | ler coisas legais sem gastar (quase) nada                                       |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID    | Descrição do Requisito                                                                                                                           | Prioridade |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RF01 | A plataforma deve permitir ao usuário criar uma conta e fazer login.                                                                             | ALTA       | 
| RF02 | A plataforma deve conter um espaço para notas e comentários para cada título.                                                                    | ALTA       |
| RF03 | A plataforma deve permitir que o usuário compartilhe seu progresso de leitura na própria plataforma e/ou em integração com outras redes sociais. | ALTA       | 
| RF04 | A plataforma deve permitir que o usuário crie grupos de leituras.                                                                                | ALTA       | 
| RF05 | A plataforma deve permitir que o usuário crie wishlists.                                                                                         | MÉDIA      | 
| RF06 | A plataforma deve ter uma seção de links/pesquisas que estão disponíveis gratuitamente (sem direitos autorais).                                  | BAIXA      | 
| RF07 | A plataforma deve fazer indicações de leitura com base no perfil do usuário.                                                                     | MÉDIA      | 
| RF08 | O uso das funcionalidades poderá ser feito apenas para usuários registrados na plataforma.                                                       | ALTA       | 

### Requisitos Não-Funcionais

| ID     | Descrição do Requisito                                                                                       | Prioridade |
|--------|--------------------------------------------------------------------------------------------------------------|------------|
| RNF01 | O site deve ser publicado em um ambiente acessível publicamente na Internet.                                 | ALTA       | 
| RNF02 | O site deverá ser responsivo permitindo a visualização em qualquer dispositivo de forma adequada.            | ALTA       | 
| RNF03 | O site deve ser compatível com os principais navegadores de mercado (Google Chrome, Firefox, Microsoft Edge. | ALTA       | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do
projeto em questão são apresentadas na tabela a seguir.

| ID | Restrição                                                                                                  |
|----|------------------------------------------------------------------------------------------------------------|
| 01 | O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.                                 |
| 02 | A equipe não pode subcontratar o desenvolvimento do aplicativo.                                            |
| 03 | O aplicativo deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 12/07/2023. |
| 04 | O aplicativo deve utilizar as linguagens mais aplicadas atualmente na Web.                                 |
