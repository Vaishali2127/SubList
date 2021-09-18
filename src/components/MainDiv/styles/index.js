import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media (max-width:800px){
    height: 70vh;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 75vh;

  @media (max-width:800px){
    height: 40vh;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 45vh;
  font-weight: 600;
  border: 1px solid grey;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  :hover{
    background: grey;
    transform: scale(1.1);
    transition: 500ms;
    box-shadow: 8px 10px 10px #777;
    color: white;
    font-size: 1.5rem;
  }

  @media (max-width:800px){
    height: 30vh;
  }
`;
export const Button = styled.p`
  width: 25%;
  border-bottom: 2px solid red;
  border-top: 2px solid red;
  text-align: center;
`;

export const Form = styled.form`
  /* display: flex; */
  text-align: center;
  label {
    font-weight: 600;
  }
  input[type=text] {
    font-size: 1rem;
    border-radius: 15px;
    height: 2rem;
    font-weight: 600;
  }
  input[type=text]:focus{
    border-radius: 0px;
    /* border: 2px solid blue; */
    color: grey;
    /* border: none; */
    background: rgba(0, 0, 0, 0.1);
    /* max-width: 400px; */
}
`;