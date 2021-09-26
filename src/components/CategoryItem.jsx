import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh"})}

`;
const Info = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`;
const Button = styled.button`
    border:none;
    padding: 15px;
    font-size: 15px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
    return (
        <Link to="/productList"><Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>RESERVAR</Button>
            </Info>
        </Container></Link>
    )
}

export default CategoryItem
