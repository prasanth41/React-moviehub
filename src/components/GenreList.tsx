import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageurl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

interface Props {
    onChangeGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({onChangeGenre, selectedGenre}: Props) => {
  const { data, isLoading , error} = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
      <List.Root listStyleType="none" >
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} padding={1} src={getCroppedImageurl(genre.image_background)} objectFit="cover" />
              <Button  onClick={()=> onChangeGenre(genre)} fontSize="lg" variant= 'plain'
              fontWeight={ genre.id == selectedGenre?.id ? "bold" : "normal"} colorPalette={ genre.id == selectedGenre?.id ? "yellow" : ''}>{genre.name}</Button>
            </HStack>
            </List.Item>
        ))}
      </List.Root>
  );
};

export default GenreList;
