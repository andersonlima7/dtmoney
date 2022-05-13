import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioButtons } from "./styles";
import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className={"react-modal-content"}
    >
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <RadioButtons
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={income} alt="Entrada" /> <span>Entrada</span>
          </RadioButtons>
          <RadioButtons
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcome} alt="Despesa" /> <span>Saída</span>
          </RadioButtons>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
        <button className="react-modal-close" type="button">
          <img src={close} alt="Close transaction modal button" onClick={onRequestClose} />
        </button>
      </Container>
    </Modal>
  );
}
