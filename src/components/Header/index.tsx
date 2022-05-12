import logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onNewTransactionClick: () => void;
}

export function Header({ onNewTransactionClick }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onNewTransactionClick}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
