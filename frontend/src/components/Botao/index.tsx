import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onRightClick?: () => void;
  onLeftClick?: () => void
}

export default function Botao(props: Props) {

  return (
    <ButtonSld
    onContextMenu={e => {
      e.preventDefault();
      props.onRightClick && props.onRightClick();
    }}
    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
      if (e.button === 0) {
        props.onLeftClick && props.onLeftClick();
      }
    }}>
      {props.children}
    </ButtonSld>
  );
}

const ButtonSld = styled.button`
  color: ${props => props.theme.rotulo};
  background-color: ${(props) => props.theme.fundo};
  border: 1px solid ${props => props.theme.fundo};
  font-size: 18px;
  padding: 10px 0px;
  margin: 5px 0px;
  width: 200px;
  border-radius: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: ${props => props.theme.bordaHover};
    border-color: ${props => props.theme.bordaHover};
    cursor: pointer;
  }
`;