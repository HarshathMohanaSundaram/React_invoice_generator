import React from 'react'

export default function ClientDetail({customerName, customerAddress}) {
  return (
    <>
        <section className="mt-5">
          <h2 className="text-xl uppercase">{customerName}</h2>
          <p>{customerAddress}</p>
        </section>
    </>
  )
}
