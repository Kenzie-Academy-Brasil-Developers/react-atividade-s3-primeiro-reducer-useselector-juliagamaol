import styled from "styled-components";

export const Container = styled.div `
    @media(min-width:769px){
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        align-items: center;
    } 
`
export const Div = styled.div`
    border: 1px solid black;
    background: #fff;
    font-family: 'Gemunu Libre', sans-serif;
    color: #000;
    margin-left: 20px;
    margin-bottom: 20px;
    min-width: 120px;
    font-weight: bold;
`