import React from 'react'

export default function MainDetails({sellerName, sellerAddress}) {
  return (
    <>
         <section className="flex flex-col items-end justify-end">
           <h2 className="font-bold text-xl uppercase md:text-4xl">{sellerName}</h2>
           <p>{sellerAddress}</p>
        </section>
    </>
  )
}
