import styled from 'styled-components';

export const Wrapper = styled.div`
    /* height: 4rem; */
`
export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 ;
    background-color: #000;
`
export const Para = styled.p`
    color: #fff;
    font-size: 1.3rem;
    margin-left: 1rem;
    letter-spacing: .1rem;
    font-weight: 800;

    @media (max-width:600px){
        font-size: 1rem;
    }
    @media (max-width:400px){
        font-size: 0.7rem;
    }
`
export const Button = styled.button`
    height: 2.8rem;
    width: 8rem;
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 2rem;
    color: white;
    /* background-color: purple; */
    background-color: transparent;
    /* border: solid white 1px; */
    border: none;
    /* border-left: 3px solid #cb0; */
    border-bottom: 3px solid #cb0;
    /* border-radius:10px; */
    /* opacity: .4; */

    &:hover{
        background-color: #18c;
        border-radius: 25px;
        border: none;
        transition: transform 2s ease-in-out;
    }
    
    @media (max-width:600px){
        margin-right: 1rem;
        font-size: 1rem;
        height: 2rem;
        width: 5rem;
    }
    @media (max-width:400px){
        margin-right: 0.7rem;
        font-size: 0.5rem;
        height: 1.2rem;
        width: 2rem;
    }
`