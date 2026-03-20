import { Grid, GridItem, Show, useBreakpointValue} from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
      }} templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show when={bp === "lg" || bp === "xl"}>
          <GridItem area="aside" paddingX={5}>
            <GenreList onChangeGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main" >
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
