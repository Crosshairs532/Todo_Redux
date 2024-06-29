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

const TodoFilter = ({ priority, setPriority }) => {
  console.log({ priority }, { setPriority });
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
          <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
            <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TodoFilter;
