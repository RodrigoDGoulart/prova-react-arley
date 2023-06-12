import { ThemeProvider } from "styled-components";
import {tema} from '../styles/theme';

export default function TemaProvider ({children}:any) {
  return(
    <ThemeProvider theme={tema}>
      {children}
    </ThemeProvider>
  );
}