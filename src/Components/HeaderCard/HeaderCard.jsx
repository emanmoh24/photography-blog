import React from 'react'

export default function HeaderCard({cardInfo}) {
  return (
    <>
      <div className={`${cardInfo.hover} ${cardInfo.gap} ${cardInfo.bg} ${cardInfo.rounded} border border-neutral-800 flex flex-col items-center py-5 px-2`}>
      <span className='text-orange-500 font-bold text-2xl'>{cardInfo.icon}</span>
      <span className={`${cardInfo.font} ${cardInfo.group}`}>{cardInfo.title}</span>
      <span className='text-neutral-500 text-sm text-center'>{cardInfo.desc}</span>
      </div>
    </>
  )
}
