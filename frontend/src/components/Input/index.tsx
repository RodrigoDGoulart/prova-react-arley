import styled from "styled-components";

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string | number | readonly string[] | undefined;
  placeholder?: string;
  onSubmit: () => void;
}

export default function Input (props: Props) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.onSubmit();
    }}>
      <InputSld placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
    </form>
  );
}

const InputSld = styled.input.attrs({ type: "text" })`
  border: 1px solid ${props => props.theme.borda};
  font-size: 16px;
  padding: 10px;
  margin: 5px 0px;
  width: 200px;
  border-radius: 10px;
  box-sizing: border-box;
`;