const express = require("express");
const app = express();
const uuid = require("uuid");
const PORT = 3006;


app.use(express.json());

app.listen(PORT, () => {
  console.log(`👾 Servidor rodando na porta:${PORT}`);
});


const log = (request, response, next) => {
  const method = request.method;
  const url = request.url;

  console.log(`[${method}] - ${url}`);

  next();
};



const orders = [];

const checkOrderId = (request, response, next) => {
  const { id } = request.params;

  const index = orders.findIndex((order) => order.id === id);

  if (index < 0) {
    return response.status(404).json({ error: "Order not found" });
  }

  request.orderIndex = index;
  request.orderId = id;
  next();
};

app.get("/orders",log, (request, response) => {
  return response.json(orders);
});

app.get("/orders/:id",log, (request, response) => {
  return response.json(orders);
});

app.post("/orders", log, (request, response) => {
  const { Order, ClientName, Price } = request.body;

  const order = { id: uuid.v4(), Order, ClientName, Price };

  orders.push(order);

  return response.status(201).json(orders);
});

app.put("/orders/:id", checkOrderId,log, (request, response) => {
  const { Order, ClientName, Price } = request.body;
  const index = request.orderIndex;
  const id = request.orderId;
  const updatedOrder = { id, Order, ClientName, Price };

  orders[index] = updatedOrder;

  return response.json(updatedOrder);
});

app.delete("/orders/:id", checkOrderId,log, (request, response) => {
  const index = request.orderIndex;

  orders.splice(index, 1);

  return response.status(204).json(orders);
});

app.patch("/orders/:id", checkOrderId,log, (request, response) => {
  const { orderId } = request;

  orders[request.orderIndex].status = "pronto";

  const updatedOrder = orders[request.orderIndex];

  return response.json(updatedOrder);
});

// app.get("/orders/:id", checkOrderId, (request, response) => {
//   const { orderId } = request;
//   return response.json(orders[request.orderIndex]);
// });
