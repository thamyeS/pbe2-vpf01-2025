# API - Pizzaria Gino e Silva
Avaliação - Verificação Prática Formativa de Back-End

## Requisitos funcionais
- [RF001] O sistema deve permitir o CRUD de pizzas.
- [RF002] O sistema deve permitir o CRUD de clientes.
- [RF003] O sistema deve permitir o CRUD de pedidos.
- [RF003.1] O sistema deve associar o pedido a um cliente.
- [RF003.2] O sistema deve permitir a inclusão de pizzas no pedido (ítens do pedido).

## MER DER
![MER DER](./docs/der-pizzaria-fk.png)

## tecnologias
- Node.js (Framework)
- VsCode (IDE)
- Insomnia (IDE de testes)
- Prisma (ORM)
- XAMPP (IDE) SGBD MySQL

## Passo a passo para testar
- 1 Clone este repositório
- 2 Abrir com Vscode
- 3 Criar o arquivo **.env** na pasta API contendo:
```js
DATABASE_URL="mysql://root@localhost:3306/pizzaria?schema=public&timezone=UTC"
```
- Obs: certifique-se de não ter um banco de dados chamado **pizzaria** no seu MySQL.
- 4 Abrir o XAMPP e dar start em MySQL
- 5 No VsCode abra um terminal **CTRL + '** cmd ou bash e digite os seguintes comandos para baixar as dependências e instalar o Banco de dados
```bash
cd api
npm install
npm i prisma -g
npx prisma migrate dev --name init
npx nodemon
# ou
npm start
```
- 6 Abra o Insomnia e importe o arquivo **./docs/insomnia.yaml** para realizar os testes.

## Prints dos testes
![Print01](./docs/prints/10pizzas.png)
![Print02](./docs/prints/5clientes.png)
![Print03](./docs/prints/5pedidos.png)
![Print04](./docs/prints/readone.png)
