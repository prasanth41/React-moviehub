import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";

const Navbar = () => {
    return (<>
    <HStack>
       <ColorModeButton />
        <Text><b>Gamehub</b></Text>
    </HStack>
    </>)
}

export default Navbar;