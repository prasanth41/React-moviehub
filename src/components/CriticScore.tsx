import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge size="lg"  borderRadius={4} colorPalette={color} variant="surface">
      {score}
    </Badge>
  );
};

export default CriticScore;
