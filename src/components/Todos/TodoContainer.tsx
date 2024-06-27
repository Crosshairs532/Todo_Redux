import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
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
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
            <TodoCard></TodoCard>
          </div>
        }
      </div>
    </div>
  );
};

export default TodoContainer;
