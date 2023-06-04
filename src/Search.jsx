import React, { useState, useEffect } from "react";

import MasonryLayout from "./MasonryLayout";
import { client } from "./client";
import { feedQuery, searchQuery } from "./utils";
import Spinner from "./Spinner";

const Search = ({ searchTerm, setSearchTerm }) => {
  const [pins, setPins] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    }
  }, [searchTerm]);

  return (
    <div>
      {isLoading && <Spinner message={"Searching for pins."} />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {pins?.length === 0 && searchTerm !== "" && !isLoading && (
        <div className="mt-10 text-center text-xl">No pins found.</div>
      )}
    </div>
  );
};

export default Search;
