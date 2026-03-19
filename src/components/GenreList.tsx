import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import { List } from "@chakra-ui/react";
const GenreList = () => {
  const { data} = useGenres();
  return (
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id}>{genre.name}</List.Item>
        ))}
      </List.Root>
  );
};

export default GenreList;
