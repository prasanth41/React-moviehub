import { HStack, Image, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <HStack >
        <Image src={logo} alt="logo" boxSize="50px" />
        <SearchInput onSearch={onSearch} />
        <Switch.Root key="md" size="md" onCheckedChange={toggleColorMode} colorPalette="teal">
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label whiteSpace="nowrap">Dark Mode</Switch.Label>
        </Switch.Root>
      </HStack>
    </>
  );
};

export default Navbar;
