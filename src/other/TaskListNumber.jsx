import React from "react";

function TaskListNumber({data}) {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] p-6  bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="xl font-medium font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] p-6 bg-green-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="xl font-medium font-semibold">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] p-6 bg-yellow-400">
        <h2 className="text-3xl font-semibold text-black">{data.taskCount.active}</h2>
        <h3 className="xl font-medium font-semibold text-black">
          Accepted Task
        </h3>
      </div>
      <div className="rounded-xl w-[45%] p-6 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="xl font-medium font-semibold">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
