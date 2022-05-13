import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "RX 6600",
          type: "withdraw",
          category: "PC Gamer",
          amount: 2700,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Freelance de Dashboard",
          type: "deposit",
          category: "Trabalho",
          amount: 4500,
          createdAt: new Date(2022, 3, 1),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const createdAt = { createdAt: Date() };
      return schema.create("transaction", { ...data, ...createdAt });
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
