import styled, {keyframes} from "styled-components";
import { useState, useEffect } from "react";

const Animation = keyframes`
  0%{
    opacity:1;
  }
  50%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`
const Text = styled.p`
`
const LastLetter = styled.span`
  position: relative;
  width: fit-content;
  ::after{
    position: absolute;
    content: '';
    top:50%;
    right: -5px;
    width: 0.08em;
    height: 1em;
    background-color: white;
    transform: translate(50%, -50%);
    animation:${Animation} 1.5s linear infinite;
  }
`

export default function AppearingText({children}) {
    const wholeText = children.split('');
    const [text, setText] = useState({
      text: '',
      lastLetter: ''
    });
    useEffect(() => {
        const interval = setInterval(() => {
        if(wholeText.length === 0){
            clearInterval(interval);
        }
        else{
          const letter = wholeText.shift();
          setText(prevText => ({
            text: prevText.text + prevText.lastLetter,
            lastLetter: letter
          }));
        }
        }, 100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    return (
        <Text>{text.text}<LastLetter>{text.lastLetter}</LastLetter></Text>
    )
}