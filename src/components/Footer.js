import styled from "styled-components"

export default function Footer({ qtdPerguntas, qtdConcluida }) {
    return (
        <Concluido data-test="footer">
            {qtdConcluida}/{qtdPerguntas} Concluídos
        </Concluido>
    )
}

const Concluido = styled.div`
  width: 100%;
  height: 100px;
  background-color: #FFFFFF;
  margin-top:50px;
  align-items: center;
  align-self:center;
  justify-content: center;
  text-align:center;
  align-content:center;
  display:flex;
  flex-direction: column;
  position:relative;
  font-family: 'Recursive';
  font-weight: 400px;
  font-size: 18px;
  color: #333333;
  
`;