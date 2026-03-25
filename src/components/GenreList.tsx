import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageurl from "@/services/image-url";
import { Box, Button, Heading, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
    onChangeGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({onChangeGenre, selectedGenre}: Props) => {
  const { data, isLoading , error} = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (<>
  <Heading fontSize="2xl" marginBottom={3} >Genres</Heading>
        <List.Root listStyleType="none" >
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack >
              <Image boxSize="32px" objectFit="cover" borderRadius={8}  src={getCroppedImageurl(genre.image_background)} />
              <Box as="button" cursor="pointer" onClick={()=> onChangeGenre(genre)} fontSize="lg" whiteSpace="normal" textAlign="left"
              fontWeight={ genre.id == selectedGenre?.id ? "bold" : "normal"} color={ genre.id == selectedGenre?.id ? "yellow" : ''}>{genre.name}</Box>
            </HStack>
            </List.Item>
        ))}
      </List.Root>
  </>
  );
};

export default GenreList;
