Este é um projeto Back-End de um site de uma hamburgueria, O projeto contém rotas:

- GET: Exibe lista todos os pedidos já feitos.

- PUT:id: Essa rota altera um pedido já feito. Pode alterar,um ou todos os dados do pedido.O id do pedido é enviado nos parâmetros da rota.

- DELETE:id: Essa rota deleta um pedido já feito com o id enviado nos parâmetros da rota.

- GET:id: Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.

PATCH:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

O projeto possui Middlewares para otimizar o processo e acrescentar ao código como um middleware que é chamado em todas requisições exibindo um console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.
