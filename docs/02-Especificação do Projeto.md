# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

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

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                |
|----------------------|------------------------------------|----------------------------------------|
| Usuarios do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-l                 |
| Administrador        | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário
consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua
aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte
do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID    | Descrição do Requisito                                                                                                                           | Prioridade |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RF-01 | A plataforma deve permitir ao usuário criar uma conta e fazer login.                                                                             | ALTA       | 
| RF-02 | A plataforma deve conter um espaço para notas e comentários para cada título.                                                                    | ALTA       |
| RF-03 | A plataforma deve permitir que o usuário compartilhe seu progresso de leitura na própria plataforma e/ou em integração com outras redes sociais. | ALTA       | 
| RF-04 | A plataforma deve permitir que o usuário crie grupos de leituras.                                                                                | ALTA       | 
| RF-05 | A plataforma deve permitir que o usuário crie wishlists.                                                                                         | MÉDIA      | 
| RF-06 | A plataforma deve ter uma seção de links/pesquisas que estão disponíveis gratuitamente (sem direitos autorais).                                  | ALTA       | 
| RF-07 | A plataforma deve fazer indicações de leitura com base no perfil do usuário.                                                                     | MÉDIA      | 
| RF-08 | O uso das funcionalidades poderá ser feito apenas para usuários registrados na plataforma.                                                       | ALTA       | 

### Requisitos não Funcionais

| ID     | Descrição do Requisito                                                                                       | Prioridade |
|--------|--------------------------------------------------------------------------------------------------------------|------------|
| RNF-01 | O site deve ser publicado em um ambiente acessível publicamente na Internet.                                 | ALTA       | 
| RNF-02 | O site deverá ser responsivo permitindo a visualização em qualquer dispositivo de forma adequada.            | ALTA       | 
| RNF-03 | O site deve ser compatível com os principais navegadores de mercado (Google Chrome, Firefox, Microsoft Edge. | ALTA       | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do
projeto em questão são apresentadas na tabela a seguir.

| ID | Restrição                                                                                                  |
|----|------------------------------------------------------------------------------------------------------------|
| 01 | O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.                                 |
| 02 | A equipe não pode subcontratar o desenvolvimento do aplicativo.                                            |
| 03 | O aplicativo deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 12/07/2023. |
| 04 | O aplicativo deve utilizar as linguagens mais aplicadas atualmente na Web.                                 |

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
