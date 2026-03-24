import { Menu, Button, Text, Portal } from "@chakra-ui/react";
import { platform } from "process";
import { BsChevronBarDown } from "react-icons/bs";
interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder?: string;
}
const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
    const sortOrders = [
        { value: " ", label: "Relevance" },
        { value: "-added", label: "Date Added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Rating" },
    ]
    
    const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder)?.label || "Relevance";
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="md" colorPalette="gray">
          <Text>Order By: {currentSortOrder}</Text>
          <BsChevronBarDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item key={order.value} value={order.value} onClick={()=> onSelectSortOrder(order.value)}>
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;