import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    
`
export const Card = styled.div`
    display: flex;
    margin: 0 ;
    height: 80vh;
`
export const Para = styled.p`
    color: #fff;
    font-size: .7rem;
    margin-left: 1rem;
    /* font-weight: 500; */
`
export const Button = styled.button`
    font-size: .7rem;
    height: 1.7rem;
    width: 5rem;
    margin-right: 1rem;
    color: white;
    /* background-color: purple; */
    background-color: transparent;
    border: solid white 1px;
    border-radius:5px;
    /* opacity: .4; */

    &:hover{
        background-color: purple;
        border-radius: 15px;
        transition: transform 2s ease-in-out;
    }
`