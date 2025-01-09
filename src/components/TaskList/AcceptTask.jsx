import React from 'react'

const AcceptTask = ({data}) => {
  // console.log(data);
  
  return (
    <div className="flex-shrink-0 h-full p-5 w-[315px] bg-blue-400  rounded-xl">
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
        <div className='flex justify-between mt-5'>
             <button className='bg-green-600 py-1 px-2 text-sm'>Mark as Complete</button>
             <button className='bg-red-600 py-1 px-2 text-sm'>Mark as Failed</button>
             </div>
      </div>
  )
}

export default AcceptTask