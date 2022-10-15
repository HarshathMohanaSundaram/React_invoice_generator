import React from 'react'

export default function Footer({sellerName, sellerEmail, sellerPhone, sellerBank, sellerBankAccount, sellerBankIfsc}) {
  return (
    <>
        <footer className='footer border-t-2 border-gray-300 pt-5'>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Seller name:</span> {sellerName}</li>
            <li><span className="font-bold">Seller email:</span> {sellerEmail}</li>
            <li><span className="font-bold">Phone number:</span> {sellerPhone}</li>
            <li><span className="font-bold">Bank:</span> {sellerBank}</li>
            <li><span className="font-bold">Account holder:</span> {sellerName}</li>
            <li><span className="font-bold">Account number:</span> {sellerBankAccount}</li>
            <li><span className="font-bold">IFSC code:</span> {sellerBankIfsc}</li>
          </ul>
        </footer>
    </>
  )
}
