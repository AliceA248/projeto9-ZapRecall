import styled from "styled-components"
import Deck from "./Deck"
import seta from "./assets/seta.png"
import turn from "./assets/turn.png"
import { useState } from "react"
import cards from "./cards";
import iconeQuase from "./assets/iconeQuase.png"
import iconeCerto from "./assets/iconeCerto.png"
import iconeErro from "./assets/iconeErro.png"

export default function Flashcard({ index, card }) {

  const [startGame, setStartGame] = useState(false);
  const [flipCard, setFlipCard] = useState(false);
  const [acertouCard, setAcertouCard] = useState("nao")
  const [isDisabled, setIsDisabled] = useState(false);
  const [end, setEnd] = useState(false)

  const question = () => {
    if (!end) {
      setStartGame(true);
    }
  };
  
  const seeAnswer = () => {
    setFlipCard(true);
  }

  const closeQuestion = (certoOuErrado) => {
    setStartGame(false)
    setAcertouCard(certoOuErrado)
    setEnd(true)
  }

    // function disable() {
  //  setIsDisabled(true) }

  const choseIcon = () => {
    if (acertouCard === "errado") {
      return iconeErro;
    } else if (acertouCard === "quase") {
      return iconeQuase;
    } else if (acertouCard === "acertou") {
      return iconeCerto;
    } else {
      return seta;
    }
  }

  return (
    <>
      {!startGame ? (
        <Pergunta>
          Pergunta {index + 1}
          <img data-test="play-btn" onClick={question} src={choseIcon()} />
        </Pergunta>
      ) : (
        <Respostas>
          {!flipCard ? (
            <div>
              {card.question}
              <img data-test="turn-btn" onClick={seeAnswer} src={turn} />
            </div>
          ) : (
            <>
              {card.answer}
              <Btn>
                <Button data-test="partial-btn" onClick={() => closeQuestion("errado")} color="red" >Não lembrei</Button>
                <Button data-test="partial-btn" onClick={() => closeQuestion("quase")} color="orange" > Quase não lembrei</Button>
                <Button data-test="partial-btn" onClick={() => closeQuestion("acertou")} color="green" >Zapp!!!</Button>
              </Btn>
            </>
          )}
        </Respostas>
      )}
    </>
  )
}



const Respostas = styled.div`
  width: 450px;
  height: 100px;
  display: flex;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: #333333;
  flex-direction: column;
  justify-content: space-between;
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  background:#FFFFD4;

  img{
    position: absolute;
    bottom: 10px;
    margin-right: 10px;
    color: white;
    cursor: pointer;
    
}
`;
const Btn = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    
`;
const Pergunta = styled.div`
  width: 450px;
  height: 65px;
  display: flex;
  margin-top:10px;
  margin-bottom:10px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  font-family: Recursive;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  background-color: #FFFFFF;
  margin-bottom:10px;
  img{
   cursor: pointer;
}

  `;
const Button = styled.button`
background-color: ${props => props.color};
border: none;
border-radius: 4px;
color: white;
cursor: pointer;
font-size: 16px;
padding: 10px;
height: 50px;
width: 130px;
`;