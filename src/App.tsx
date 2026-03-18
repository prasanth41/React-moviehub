import { Grid, GridItem, Show, useBreakpointValue} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
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
          <GridItem area="aside" >Sidebar</GridItem>
        </Show>
        <GridItem area="main" >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
