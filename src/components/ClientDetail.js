import React from 'react'

export default function ClientDetail({customerName, customerAddress}) {
  return (
    <>
        <section className="mt-10">
          <h2 className="text-2xl uppercase font-bold mb-1">{customerName}</h2>
          <p>{customerAddress}</p>
        </section>
    </>
  )
}
