import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import { Platform } from "@/hooks/usePlatforms";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="md" colorPalette="gray" >
          <Text>{selectedPlatform?.name || "Platform"}</Text>
          <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug} onClick={()=> onSelectPlatform(platform)}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
