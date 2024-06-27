import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../StateManagement/store";

const SearchInput = () => {
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (ref.current) {
            setSearch(ref.current.value);
            navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
          <Input
            ref={ref}
            htmlSize={200}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          ></Input>
        </InputGroup>
      </form>
    </div>
  );
};

export default SearchInput;
