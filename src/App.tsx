import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/Themes/default"
import { GlobalStyle } from "./styles/global"



export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Ola</h1>

      <GlobalStyle/>
    </ThemeProvider>
  )
}