import Flashcard from "./Flashcard"
import styled from "styled-components"
import logo from "./assets/logo.png"
import Footer from "./Footer"
import cards from "./cards"
import React from "react"
import { useState } from "react"

export default function Deck() {

  const [concluido, setConcluido] = useState(0);

  return (
    <ConteudoGame>
      <Logo>
        <img src={logo} />
        <h1>ZapRecall</h1>

      </Logo>
    {cards.map((card, i) => <Flashcard data-test="flashcard" index={i} card={card}/> )}
      <Footer qtdPerguntas = {cards.length} qtdConcluida = {concluido}  />
    </ConteudoGame>
  )

}



const ConteudoGame = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top:10px;
  margin-bottom:20px;
  img {
    width: 80px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
`;


