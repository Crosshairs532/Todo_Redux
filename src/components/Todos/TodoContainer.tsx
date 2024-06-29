// import { useAppSelector } from "@/redux/hooks";
// import { Ttodo } from "@/redux/features/todoSlice";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { Ttask } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodoQuery } from "@/redux/Api/api";
import { Key } from "react";

const TodoContainer = () => {
  /*
   * from local
   */
  // const allTasks = useAppSelector((state) => state.todos.todo);

  const { data: allTasks, isLoading } = useGetTodoQuery(undefined, {});
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className=" flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl p-2">
        {
          <div className="bg-slate-50 p-5  rounded-lg justify-center space-y-3 items-center">
            {/* <p className=" font-bold">No tasks Found</p> */}
            {allTasks?.data?.map((task: Ttask, idx: Key | null | undefined) => (
              <TodoCard
                isCompleted={task.isCompleted}
                key={idx}
                id={task.id}
                title={task.title}
                priority={task.priority}
                description={task.description}
              ></TodoCard>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default TodoContainer;
