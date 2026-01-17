"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";

export default function Search() {

  const DEBOUNCE_AMOUNT = 500;

  const [input, setInput] = useState("");

  const fetchData = (value) => {
    if (!value) return;

    fetch(`/api/search?query=${value}`)
    .then((response) => response.json())
    .then(json => {
      console.log(json);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    })
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(input);
    }, DEBOUNCE_AMOUNT);

    return () => clearTimeout(timer);
  }, [input])

  return (
    <div className="flex gap-2 w-full max-w-2xl mx-auto">
      <Input placeholder="Search" value={input} onChange={handleChange} />
      <Button variant="outline" size="icon" className="hover:cursor-pointer">
        <SearchIcon />
      </Button>
    </div>
  );
}
