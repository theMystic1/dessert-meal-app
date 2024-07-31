import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const isClient = typeof window !== "undefined";
  const [value, setValue] = useState(() => {
    if (isClient) {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        try {
          return JSON.parse(storedValue);
        } catch (error) {
          console.error("Error parsing JSON from localStorage:", error);
          return initialState; // Fallback to initial state on error
        }
      }
    }
    return initialState; // Fallback to initial state during SSR
  });

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value, isClient]);

  const setStoredValue = (newValue) => {
    if (isClient) {
      try {
        setValue(newValue); // Update state first
        localStorage.setItem(key, JSON.stringify(newValue)); // Then update local storage
      } catch (error) {
        console.error("Failed to store value in localStorage:", error);
      }
    }
  };

  return [value, setStoredValue];
}
