import React from "react";


import styled, { css } from 'styled-components'

const TranslateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.theme.main};
  border-radius: 3px;
  height: 50px;
  margin: 50px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid black;
  color: black;
  padding: 0.25em 1em;
  background-color: springgreen;
  height: 40px;
  width: 200px;
  margin: 2px;
  ${props => props.primary && css`
    background: #7CB9E8;
    color: white;
`}

`;

const LangBox = styled.span`
display: flex;
flex-direction: column;
 width: 300px;
 padding: 20px;
 border: 2px solid black;
 border-radius: 3px;
 height: 200;
 background: white;
`;

const TitleBox = styled.div`
width: 300px;
border: 1px solid black;
border-radius: 1px;
height: 50px;
text-align: center;
background-color: beige;
font-family: serif, Times;
font-size: 20px;
`;

const TextBoxOld = styled.div`
width: 180px;
border: 2px solid black;
border-radius: 1px;
height: 200px;
padding: 10px;
`;

const TextBox = styled.textarea`
width: 280px;
border: 1px solid black;
border-radius: 1px;
height: 100px;
padding: 10px;
resize: none;
`;

const ButtonContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
width: 200px;

border-radius: 1px;
height: 100px;
padding: 10px;
resize: none;
`;

const tags = ["noun", "verb", "restaurant", "etc"];

const TranslateView = (props) =>{
    return(
    <TranslateWrapper>
      
        <div>
        <form onSubmit={()=> console.log("translate!")}>
            <TitleBox>{props.fromLanguage}</TitleBox>
          
            <TextBox onChange={(e)=>props.setText(e.target.value)} placeholder="Type here"></TextBox></form>
        </div>
        
        

        <div>
            <TitleBox>{props.toLanguage}</TitleBox>
            <TextBox></TextBox>
        </div>
        <ButtonContainer>
        <Button onClick={() => props.translate()}>Translate!</Button>
        <Button primary onClick={() => props.createCard()}>Save translation</Button>

        <input onChange={(event) =>props.setTag(event.target.value)} type="text" name="tag" list="taglist" placeholder="Tag:"></input> 
        <datalist onChange={() => console.log("set a tag")}id="taglist" >
          {tags.map((opt) => <option>{opt}</option>)}
        </datalist>

        </ButtonContainer>
        
    </TranslateWrapper>)
}

export default TranslateView;