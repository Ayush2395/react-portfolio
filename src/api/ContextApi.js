import { collection } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../backend/firebase.config";
import { useSearchParams } from "react-router-dom";

const API = createContext();
export default function ContextApi({ children }) {
  // collection for message
  const messageCollection = collection(db, "message");
  const testimonialCollection = collection(db, "testimonial");
  const projectCollection = collection(db, "projects");

  //   error message for alert
  const [error, setError] = useState({ error: false, msg: "" });

  // search project
  const [search, setSearch] = useSearchParams();
  const searchTerm = search.get("project") || "";

  const getSearchResult = (event) => {
    event.preventDefault();
    const project = event.target.value;
    project ? setSearch({ project }) : setSearch({});
  };

  return (
    <>
      <API.Provider
        value={{
          messageCollection,
          testimonialCollection,
          error,
          search,
          setError,
          getSearchResult,
          searchTerm,
          projectCollection,
        }}
      >
        {children}
      </API.Provider>
    </>
  );
}

export function useAppState() {
  return useContext(API);
}
