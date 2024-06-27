import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
const TodoFilter = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className=" bg-primary-gradient font-bold text-xl">
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Task Priority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">High</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TodoFilter;
