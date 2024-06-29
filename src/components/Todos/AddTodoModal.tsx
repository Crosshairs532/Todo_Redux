import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { useAddTodoMutation } from "@/redux/Api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { useAppDispatch } from "@/redux/hooks";
// import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //* For server
  //? [acutalfunctonforPost, object=> { data, is Loading , isError}]
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();

  // ! for local state management
  // const dispatch = useAppDispatch();
  // ! for local state management
  // dispatch(addTodo({ id: id, title: task, description: description }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 7);
    console.log({ data, isLoading, isError, isSuccess });

    const taskDetails = {
      id: id,
      title: task,
      description: description,
      isCompleted: false,
      priority,
    };

    console.log({ taskDetails });

    // * For Server
    addTodo(taskDetails);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" bg-primary-gradient font-bold text-xl">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add Your tasks based on priority
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  priority
                </Label>
                <Select onValueChange={(val) => setPriority(val)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="choose priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>High</SelectLabel> */}
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">add task</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
