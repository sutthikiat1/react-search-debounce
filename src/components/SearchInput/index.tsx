import { useEffect, ChangeEvent } from "react";
import "./SearchInput.css";

interface SearchInputProp {
  value: string;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ value, onChangeText }: SearchInputProp) => {
  useEffect(() => {
    let input: any = document.querySelector("input");
    input.addEventListener("input", onChangeText);
    return input.removeEventListener("input", onChangeText);
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search beer by name"
      />
    </div>
  );
};
export default SearchInput;
