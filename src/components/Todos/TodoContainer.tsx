import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
// import { useGetTodoQuery } from "@/redux/Api/api";

const TodoContainer = () => {
  /*
   * from local
   */
  const allTasks = useAppSelector((state) => state.todos.todo);

  // const { data: allTasks } = useGetTodoQuery(undefined);

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
            {allTasks?.map((task, idx) => (
              <TodoCard
                isCompleted={task.isCompleted}
                key={idx}
                id={task.id}
                title={task.title}
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
