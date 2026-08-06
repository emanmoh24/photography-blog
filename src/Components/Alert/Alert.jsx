import React from 'react'

export default function Alert({alertInfo}) {
  return (
    <>
      <div className={`${alertInfo.style} min-[375px]:w-[90%] min-[375px]:justify-start p-6 flex flex-wrap items-start justify-center w-3/5 mx-auto gap-3 border rounded-2xl`}>
        <span className='flex items-center justify-center'>{alertInfo.icon}</span>
        <div>
            <h3 className='text-base font-semibold'>{alertInfo.title}</h3>
            <span className={`${alertInfo.font} text-xs`}>{alertInfo.desc}</span>
        </div>
      </div>
    </>
  )
}
