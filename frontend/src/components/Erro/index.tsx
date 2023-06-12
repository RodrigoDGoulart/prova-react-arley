import styled from "styled-components";

export default function Erro ({children}: any) {
  return(
    <MessageSld>
      {children}
    </MessageSld>
  );
}

const MessageSld = styled.p`
  color: ${props => props.theme.erro};
  font-size: 18px;
`;