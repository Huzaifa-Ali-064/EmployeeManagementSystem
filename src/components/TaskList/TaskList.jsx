import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from './CompleteTask'
import  FailedTask from "./FailedTask"
function TaskList({data}) {
  
  return (
<div id="tasklist"className="h-[55%] overflow-x-auto flex item-center justify-start gap-5 flex-nowrap w-full py-5  mt-10"
    >
{data.tasks.map((e , id)=>{
if(e.active){
  return <AcceptTask key={id} data={e} />
       }
if(e.NewTask){
  return <NewTask key={id} data={e} />
}
if(e.Completed){
  return <CompleteTask key={id} data={e}  />
}
if(e.failed){
  return <FailedTask key={id} data={e} />
}

      })}
      
    </div>
  );
}

export default TaskList;
