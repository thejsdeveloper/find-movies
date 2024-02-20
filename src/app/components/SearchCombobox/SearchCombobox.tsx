"use client";
import React from "react";
import {
  ComboBox,
  type ComboBoxProps,
  Input,
  Button,
  Group,
} from "react-aria-components";
import { SearchIcon } from "../SearchIcon/SearchIcon";

export const SearchCombobox = <T extends Object>(props: ComboBoxProps<T>) => {
  return (
    <ComboBox {...props}>
      <Group className="flex items-center relative text-black/90 ">
        <SearchIcon className="fill-black/60 absolute left-2" />
        <Input
          placeholder="Search FindMovies"
          className="flex-1 py-2 pl-11 rounded outline-none focus:ring-2 ring-primary selection:bg-primary/35"
        />
      </Group>
    </ComboBox>
  );
};
