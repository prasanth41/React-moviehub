import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageurl from "@/services/image-url";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
const GenreList = () => {
  const { data, isLoading , error} = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
      <List.Root listStyleType="none" >
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} padding={1} src={getCroppedImageurl(genre.image_background)} objectFit="cover" />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
            </List.Item>
        ))}
      </List.Root>
  );
};

export default GenreList;
