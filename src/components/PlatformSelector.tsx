import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../Hooks/usePlatform";
import usePlatforms from "../Hooks/usePlatforms";
import useGameQueryStore from "../StateManagement/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  if (error) return null;
  const selectedP = usePlatform(selectedPlatformId);
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedP ? selectedP : "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((dat) => (
            <MenuItem onClick={() => setPlatformId(dat.id)} key={dat.id}>
              {dat.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
