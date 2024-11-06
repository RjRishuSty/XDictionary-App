import React, { useEffect, useRef, useState } from "react";
import Styles from "./XDictionary.module.css";
import { data } from "../../WordData.js";

const XDictionary = () => {
  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const filter = data.find((item) => item.word.toLowerCase() === search);
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
  //   console.log("search", search);
  return (
    <div className={Styles.card}>
      <h1 className={Styles.heading}>Dictionary App</h1>
      <div className={Styles.form}>
        <input
          className={Styles.input}
          type="text"
          placeholder="Search for a word"
          ref={inputRef}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button type="button" className={Styles.button} onClick={handleSubmit}>
          Search
        </button>
      </div>
      {filterData && (
        <div className={Styles.result}>
          <p>
            <strong>Definition: </strong>
          </p>
          <p>{filterData}</p>
        </div>
      )}
    </div>
  );
};

export default XDictionary;
