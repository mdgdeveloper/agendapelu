import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

// Icons
import { Event, Search } from '@material-ui/icons'
import { Badge } from "@material-ui/core";

// Creating Styled components
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left : 25px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px", height: "30px"})}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;

const Button = styled.button`
padding: 10px;
background-color: teal;
border: 0px;
color: white;
border-radius: 5px;
cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{color: "gray", fontSize: 16}}/>
            </SearchContainer>
        </Left>
        <Center>
          <Logo>Agenda.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRAR</MenuItem>
          <MenuItem>ACCEDER</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Event 
              
              />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
