import { Grid, GridItem, Show, useBreakpointValue} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
function App() {
    const bp = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show when={bp === "lg" || bp === "xl"}>
          <GridItem area="aside" bg="gold">Sidebar</GridItem>
        </Show>
        <GridItem area="main" bg="lightgray">Main</GridItem>
      </Grid>
    </>
  )
}

export default App
