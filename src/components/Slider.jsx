import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  ${mobile({ display: "none"})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5; 
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`

font-size: 70px;

`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    `;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 );
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>ESPECIAL VERANO</Title>
            <Description>OFERTAS EN CORTE DE PELO Y BARBA. TRATAMIENTOS PERSONALIZADOS.</Description>
            <Button>MOSTRAR</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>BARBA Y PELO AL 20%</Title>
            <Description>OFERTAS EN CORTE DE PELO Y BARBA. TRATAMIENTOS PERSONALIZADOS.</Description>
            <Button>MOSTRAR</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>TINTE AL 5%</Title>
            <Description>OFERTAS EN CORTE DE PELO Y BARBA. TRATAMIENTOS PERSONALIZADOS.</Description>
            <Button>MOSTRAR</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
