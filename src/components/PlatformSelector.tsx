import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="md" colorPalette="gray">
          <Text>Platform</Text>
          <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug}>
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
