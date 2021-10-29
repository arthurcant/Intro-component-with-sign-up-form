# Frontend Mentor - componente de introdução com formulário de inscrição

![Visualização do design para o componente de introdução com o desafio de codificação do formulário de inscrição](./design/desktop-preview.jpg)

## Receber! 👋

Obrigado por verificar este desafio de codificação de front-end.

Os desafios do [Frontend Mentor](https://www.frontendmentor.io/challenges) permitem que você aprimore suas habilidades em um fluxo de trabalho da vida real.

**Para fazer este desafio, você precisa de um conhecimento básico de HTML, CSS e JavaScript.**

## O desafio

Seu desafio é desenvolver esse componente introdutório e fazê-lo parecer o mais próximo possível do design.

Você pode usar qualquer ferramenta que desejar para ajudá-lo a completar o desafio. Portanto, se você tem algo que gostaria de praticar, sinta-se à vontade para experimentar.

Seus usuários devem ser capazes de:

- Visualize o layout ideal para o site, dependendo do tamanho da tela do dispositivo
## Erros:
- Recebe uma mensagem de erro quando o `formulário` é enviado se:
  ## Geral
  - Qualquer campo `input` está vazio. A mensagem para este erro deve ser * "[Nome do campo] não pode estar vazio" em inglês "[name of the field] cannot be empty" *
  ## Para email
  - O endereço de e-mail deve está formatado corretamente (ou seja, um endereço de e-mail correto deve ter esta estrutura: `nome @ host.com`).
  - Se o campo email estive vazio a mensagem deve ser "Email não pode está vazio" em inglês "Email cann't be empty."
  - Se o campo email estive preenchido com algumas letra, mas sem o @ então a messagem deve ser "Email não pode falta o @ em seu endereço" inglês "Email cannot lack @ in its text." 
  - Se o campo email estive preenchido `@.com` a mensagem deve ser amostrada "Email não pode falta uma letra antes @ ou depois do @ não pode haver um ponto" em inglês "Email cannot lack a letter before @ or after @ cannot have a dot."
  - Se estive faltando um @ no endereço deve ser amostrado 
    a mensagem "Email não pode falta @ em seu endereço" em inglês "Email cannot lack @ in its text"
  - Se estive faltando um "." no endereço deve ser amostrado 
    a mensagem "Email não pode falta . em seu endereço" em inglês "Email cannot lack the signal . "
  - Tanto o @ como o sinal "." é verificado se antes ou depois deles tem alguma letra digitada.
  ## Para o password

* Senha Deve ter no mínimo 8 caracteres.
* Não deve conter só numeros. 
* Deve conter um letra maiúscula e um caratere especial (! @ # $ % & * ( ) + = - _ § { [ } ])

**Segue um tabela com as mensagem traduzidas em português:**

Português | Inglês         
--------  |----------
A senha precisa ter pelo menos 8 posições          |The password need has at least 8 positions.    
A senhar não pode ter somente números          |The password cannot only has numbers. 
A senhar precisa ter pelo menos um letra maiúscula          | The password need at least one upper letter.
A senhar precisa pelo menos um caractere especial <br>  ! @ # $ % & * ( ) + = - _ § { [ }  ] um desses.          |The password need at least one character  special <br> ! @ # $ % & * ( ) + = - _ § { [ }  ] one of  these.


Quer algum apoio no desafio? [Junte-se à nossa comunidade no Slack] (https://www.frontellenceor.io/slack) e faça perguntas no canal ** # help **.

## Onde encontrar tudo

Sua tarefa é construir o projeto para os designs dentro da pasta `/ design`. Você encontrará uma versão móvel e uma versão desktop do design para trabalhar.

Os designs estão no formato estático JPG. Isso significa que você precisará usar seu melhor julgamento para estilos como `font-size`,` padding` e `margin`. Isso deve ajudar a treinar seu olho para perceber diferenças em espaçamentos e tamanhos.

Se desejar o arquivo Sketch para inspecionar o design com mais detalhes, você pode [inscrever-se como um membro PRO] (https://www.front//or.io/pro).

Você encontrará todos os recursos necessários na pasta `/ images`. Os ativos já estão otimizados.

Há também um arquivo `style-guide.md`, que contém as informações de que você precisa, como paleta de cores e fontes.

## Construindo seu projeto

Sinta-se à vontade para usar qualquer fluxo de trabalho com o qual você se sinta confortável. Abaixo está uma sugestão de processo, mas você não precisa seguir estas etapas:

1. Inicialize seu projeto como um repositório público no [GitHub] (https://github.com/). Isso tornará mais fácil compartilhar seu código com a comunidade se você precisar de ajuda. Se você não tiver certeza de como fazer isso, [leia este recurso Try Git] (https://try.github.io/).
2. Configure seu repositório para publicar seu código em uma URL. Isso também será útil se você precisar de ajuda durante um desafio, pois pode compartilhar a URL do seu projeto com a URL do repo. Existem várias maneiras de fazer isso, mas recomendamos usar [Vercel] (https://bit.ly/fem-vercel). Temos mais informações sobre como implantar seu projeto com Vercel abaixo.
3. Examine os designs para começar a planejar como você lidará com o projeto. Esta etapa é crucial para ajudá-lo a pensar no futuro para as classes CSS que você poderia criar para criar estilos reutilizáveis.
4. Antes de adicionar qualquer estilo, estruture seu conteúdo com HTML. Escrever seu HTML primeiro pode ajudar a concentrar sua atenção na criação de conteúdo bem estruturado.
5. Escreva os estilos básicos para o seu projeto, incluindo estilos gerais de conteúdo, como `font-family` e` font-size`.
6. Comece adicionando estilos ao topo da página e vá trabalhando para baixo. Passe para a próxima seção apenas quando estiver satisfeito por ter concluído a área em que está trabalhando.

## Implantando seu projeto

Conforme mencionado acima, existem várias maneiras de hospedar seu projeto gratuitamente. Recomendamos o uso do [Vercel] (https://bit.ly/fem-vercel), pois é um serviço incrível e extremamente simples de configurar. Se você gostaria de usar o Vercel, aqui estão algumas etapas a seguir para começar:

1. [Inscreva-se no Vercel] (https://bit.ly/fem-vercel-signup) e siga o fluxo de integração, garantindo que sua conta GitHub esteja conectada usando o [Vercel para GitHub] (https: // vercel integração .com / docs / v2 / git-integrations / vercel-for-github).
2. Conecte seu projeto ao Vercel a partir da [página "Importar projeto"] (https://vercel.com/import), usando o botão "Do repositório Git" e selecionando o projeto que deseja implantar.
3. Uma vez conectado, cada vez que você `git push`, Vercel irá criar uma nova [implantação] (https://vercel.com/docs/v2/platform/deployments) e a URL de implantação será mostrado em seu [Dashboard] (https://vercel.com/dashboard). Você também receberá um e-mail para cada implantação com o URL.

## Compartilhando sua solução

Existem vários lugares onde você pode compartilhar sua solução:

1. Envie-o na plataforma para que outros usuários vejam sua solução no site. Aqui está nosso ["Guia completo para enviar soluções"] (https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) para ajudá-lo a fazer isso.
2. Compartilhe você