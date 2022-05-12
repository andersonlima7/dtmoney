import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import close from "../../assets/close.svg";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
          <button>
            <img src={income} alt="Entrada" /> <span>Entrada</span>
          </button>

          <button>
            <img src={outcome} alt="Despesa" /> <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
        <button className="react-modal-close">
          <img src={close} alt="Close transaction modal button" onClick={onRequestClose} />
        </button>
      </Container>
    </Modal>
  );
}
