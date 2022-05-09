import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Ryzen 5 5600",
          amount: 1200,
          type: "Withdraw",
          category: "Hardware",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
