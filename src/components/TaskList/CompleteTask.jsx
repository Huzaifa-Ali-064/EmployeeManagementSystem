import React from 'react'

function CompleteTask({data}) {  
  return (
    <div className="flex-shrink-0 h-full p-5 w-[315px] bg-blue-400 bg-green-400 rounded-xl">
      <div className="flex justify-between ">
        <h3 className="bg-red-600 px-5 py-1 text-sm rounded items-center">
        {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-3">
      {data.description}
      </p>
      <div className='mt-5'><button className="w-full bg-green-600  py-1 px-2 text-sm ">Complete Task</button></div>
    </div>
  )
}

export default CompleteTask