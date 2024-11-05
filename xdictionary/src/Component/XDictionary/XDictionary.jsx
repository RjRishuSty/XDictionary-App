import React, { useEffect, useRef, useState } from "react";
import Styles from "./XDictionary.module.css";
import { data } from "../WordData.js";

const XDictionary = () => {
  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setFilterData("Word not found in the dictionary.");
      return;
    }

    const filter = data.find(
      (item) => item.word.toLowerCase() === search.toLowerCase()
    );
    if (filter) {
      setFilterData(filter.meaning);
    } else {
      setFilterData("Word not found in the dictionary.");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={Styles.card}>
      <h1 className={Styles.heading}>Dictionary App</h1>
      <input
        className={Styles.input}
        type="text"
        placeholder="Search for a word"
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" className={Styles.button} onClick={handleSubmit}>
        Search
      </button>
      {filterData && (
        <div className={Styles.result}>
          <p>
            <strong>Definition: </strong>
            {filterData}
          </p>
        </div>
      )}
    </div>
  );
};

export default XDictionary;
