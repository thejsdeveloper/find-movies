"use client";
import React from "react";
import { Input, SearchField } from "react-aria-components";
import { SearchIcon } from "@/app/components/SearchIcon/SearchIcon";

export const Searchbox = () => {
  return (
    <SearchField
      aria-label="Movie Searchbox"
      className="flex items-center gap-2 |  rounded p-2 | text-black bg-white"
    >
      <SearchIcon />
      <Input placeholder="Search Movies" className="flex-1" />
    </SearchField>
  );
};
