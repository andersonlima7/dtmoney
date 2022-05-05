import styled from "styled-components";

const Title = styled.h1`
  color: #8257e6;
  font-size: 64px;
`;

export function App() {
  // Quando se exporta sem o default, quem usa esse componente necessariamente deve usar esse nome.
  return (
    <div className="App">
      <Title>Dtmoney</Title>
    </div>
  );
}
