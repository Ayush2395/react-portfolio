import { collection } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../backend/firebase.config";

const API = createContext();
export default function ContextApi({ children }) {
  // collection for message
  const messageCollection = collection(db, "message");
  const testimonialCollection = collection(db, "testimonial");

  //   error message for alert
  const [error, setError] = useState({ error: false, msg: "" });
  return (
    <>
      <API.Provider
        value={{ messageCollection, testimonialCollection, error, setError }}
      >
        {children}
      </API.Provider>
    </>
  );
}

export function useAppState() {
  return useContext(API);
}
