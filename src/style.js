import styled, { css } from "styled-components";
export const Contanier = styled("div")`
  display: flex;
`;

export const Navbar = styled("div")`
  background-color: #213547;
  width: 25%;
  height: 700px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 10px;
  margin: 0;
  padding: 0px 0px 20px 0px;
  position: static;
`;
export const Hr = styled("div")`
  width: 100%;
  height: 1px;
  background-color: wheat;
`;
const coomon = css`
  color: blue;
  font-size: 30px;

  margin: 0;
  margin-left: 8px;
`;
export const Title = styled.p`
  ${coomon}
  padding:12px
`;
export const Emil = styled.a`
  margin-left: 10px;
  font-size: 16px;
  color: rgb(152, 148, 143);
`;
export const Text = styled("div")`
  margin-left: 10px;
  font-size: 20px;
  color: white;
`;
export const Img = styled.p`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: whitesmoke;
  font-size: 30px;
  /* border-radius: 60%; */
`;
export const Div = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px;
  /* margin: 20px 10px; */
`;
export const Analetk = styled("div")`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-evenly;
  margin: 15px 0px 0px -45px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    color: rgb(242, 237, 237);
    opacity: 0.7;
  }
`;
export const Name = styled.p`
  margin: 0;

  font-size: 30px;

  color: white;
`;
export const IconName = styled("div")`
  font-size: 30px;
  color: white;
`;
export const TextName = styled("div")`
  font-size: 20px;
  margin-left: -10px;
  color: white;
  width: 16%;
`;
export const Header = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 75%;
  height: 80px;
  background-color: rgb(242, 237, 237);
  position: static;
`;
export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgb(242, 237, 237);
  width: 40%;
`;
export const HeaderTime = styled("p")`
  font-size: 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #213547;
`;
export const Am = styled.p`
  font-size: 30px;
  color: rgb(219, 215, 215);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const HeaderDate = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgb(242, 237, 237);
  width: 15%;
`;
export const HeadeSelect = styled.p`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgb(242, 237, 237);
  width: 15%;
`;
