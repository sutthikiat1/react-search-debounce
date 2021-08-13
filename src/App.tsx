import React, { useEffect, ChangeEvent } from "react";
import { fetchSearchResults } from "./utils";
import ListItem from "./components/ListItem";
import SearchInput from "./components/SearchInput";
import { debounce } from "lodash";

const fetchData = async (query, cb) => {
  const res = await fetchSearchResults(query);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 500);

export default function App() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    debouncedFetchData(query, (res) => {
      setResults(res);
    });
  }, [query]);

  return (
    <div>
      <SearchInput
        value={query}
        onChangeText={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
      />
      {results.map((result: any, index: any) => (
        <div key={index}>
          <ListItem
            title={result.name}
            imageUrl={result.image_url}
            caption={result.tagline}
          />
        </div>
      ))}
    </div>
  );
}
