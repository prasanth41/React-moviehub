import { HStack, Image, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode } from "@/components/ui/color-mode";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} alt="logo" boxSize="50px" />
        <Switch.Root key="md" size="md" onCheckedChange={toggleColorMode} colorPalette="teal">
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label>Dark Mode</Switch.Label>
        </Switch.Root>
      </HStack>
    </>
  );
};

export default Navbar;
