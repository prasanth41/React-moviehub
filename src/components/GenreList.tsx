import useGenres from "@/hooks/useGenres";
import { List } from "@chakra-ui/react";
const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
      <List.Root>
        {genres.map((genre) => (
          <List.Item key={genre.id}>{genre.name}</List.Item>
        ))}
      </List.Root>
  );
};

export default GenreList;
