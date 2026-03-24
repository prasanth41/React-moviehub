import { PlatForm } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaWind,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: PlatForm[];
}
const PlatFormIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    nintendo: SiNintendo,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => {
          const IconComponent = iconMap[platform.slug];
          if (!IconComponent) return null;
          return <Icon key={platform.id} as={IconComponent} mr={2} color="gray.500" />;
        })}
      </HStack>
    </>
  );
};
export default PlatFormIconList;
