import { useEffect, useState } from "react";
import Router from "next/router";
import { Button } from "../../components/atoms/Button";
import { ExpenseCard } from "../../components/organism/ExpenseCard";
import {
  TemplateContainer,
  TemplateExpenseMain,
} from "../../components/templates";

export const Dashboard = () => {
  const array = [
    { id: "1", title: "Netflix", category: "Streaming", cost: 39.99 },
    { id: "2", title: "Amazon", category: "Streaming", cost: 9.99 },
    { id: "3", title: "Internet", category: "web", cost: 109.99 },
    { id: "4", title: "Spotify", category: "Streaming", cost: 9.99 },
  ];

  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  useEffect(() => {
    async function handleTotal() {
      let sum = 0;
      await array?.map((item) => (sum = item.cost + sum));
      console.log(sum);
      setTotal(sum);
    }

    handleTotal();
  }, [array, total]);

  function toggleShowTotal() {
    setShowTotal(!showTotal);
  }

  const handleNavigateToAddNewExpense = () => {
    Router.push("/dashboard/add");
  };

  return (
    <TemplateContainer>
      <header className="flex items-center justify-between w-full max-w-screen-xl h-1/6">
        <span className="text-3xl font-bold">Expense Tracker</span>

        <nav className="flex gap-4">
          <Button onClick={handleNavigateToAddNewExpense}>
            Adicionar Nova Conta
          </Button>
          <Button>Sair</Button>
        </nav>
      </header>

      <TemplateExpenseMain>
        {array?.map((item) => (
          <ExpenseCard
            key={item.title}
            title={item.title}
            category={item.category}
            cost={item.cost}
          />
        ))}
      </TemplateExpenseMain>

      <div className="flex items-center gap-3">
        <Button
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          onClick={toggleShowTotal}
        >
          Mostrar o Total
        </Button>
        <p className={showTotal ? "font-bold text-2xl" : "text-4xl"}>
          {showTotal ? `R$${parseFloat(total.toFixed(2))}` : "*******"}
        </p>
      </div>
    </TemplateContainer>
  );
};
