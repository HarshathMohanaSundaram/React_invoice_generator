import { useState } from "react";
import ClientDetail from "./components/ClientDetail";
import Date from "./components/Date";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";

function App() {

  const[showInvoice, setShowInvoice] = useState(true)
  const[sellerName, setSellerName] = useState("Sundaram Steel")
  const[sellerAddress, setSellerAddress] = useState("Modakkurichi")
  const[sellerEmail, setSellerEmail] = useState("sundaramsteel123@gmail.com")
  const[sellerPhone, setSellerPhone] = useState("9976661163")
  const[sellerBank, setSellerBank] = useState("Indian Bank")
  const[sellerBankAccount, setSellerBankAccount] = useState("1478000147234")
  const[sellerBankIfsc, setSellerBankIfsc] = useState("IDBA0001478")
  const[customerName, setCustomerName] = useState("Harshath")
  const[customerAddress, setCustomerAddress] = useState("Erode")
  const[invoiceNo, setInvoiceNo] = useState("1003")
  const[invoiceDate, setInvoiceDate] = useState("2022-11-01")
  const[dueDate, setDueDate] = useState("2002-11-01")
  const[notes, setNotes] = useState("Pay the balance")
  const[description, setDescription] = useState("")
  const[quantity, setQuantity] = useState("")
  const[price, setPrice] = useState("")
  const[amount, setAmount] = useState("")
  const[list, setList] =useState([])
  


  const handlePrint = () =>{
    window.print();
  }

  return (
    <div className="App">
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ?
        (<div>
        <Header  handlePrint = {handlePrint}/>
        <MainDetails sellerName = {sellerName} sellerAddress={sellerAddress} />
        <ClientDetail customerName={customerName} customerAddress={customerAddress}/>       
        <Date invoiceNo={invoiceNo} invoiceDate={invoiceDate} dueDate={dueDate}/>
        <Table 
        description={description}
        quantity={quantity}
        price={price}
        amount={amount}
        list={list}
        setList={setList}
        /> 
        <Notes notes={notes}/>
        <Footer 
        sellerName={sellerName} 
        sellerEmail={sellerEmail}
        sellerPhone={sellerPhone}
        sellerBank={sellerBank}
        sellerBankAccount={sellerBankAccount}
        sellerBankIfsc={sellerBankIfsc}
        />  
        <button onClick={()=>{setShowInvoice(false)}}
        className="mt-5 bg-blue-500 text-white font-bold
        py-2 px-8 rounded shadow border-2
        border-blue-500 hover:bg-transparent
        hover:text-blue-500 transistion-all duration-300">
        Edit Information
        </button>
      </div>)
      :(
        <>
        {/* seller name, seller address, seller email, seller phone number, seller bank name, seller bank account number, 
        seller bank IFSC, customer name, customer address, invoice number, invoice date, due date, notes */}
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="sellerName">Seller Name: </label>
                <input 
                  type="text" 
                  name="sellerName" 
                  id="sellerName" 
                  placeholder="Enter Seller Name" 
                  autoComplete="off" 
                  value={sellerName}
                  onChange={(e)=>{setSellerName(e.target.value)}} 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sellerAddress">Seller Address: </label>
                <input 
                  type="text" 
                  name="sellerAddress" 
                  id="sellerAddress" 
                  placeholder="Enter Seller Address" 
                  autoComplete="off" 
                  value={sellerAddress}
                  onChange={(e)=>{setSellerAddress(e.target.value)}} 
                />
              </div>
            </article>
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="sellerEmail">Seller Email: </label>
                <input 
                type="email" 
                name="sellerEmail" 
                id="sellerEmail" 
                placeholder="Enter Seller Email" 
                autoComplete="off" 
                value={sellerEmail}
                onChange={(e)=>{setSellerEmail(e.target.value)}} 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sellerPhone">Seller Phone: </label>
                <input 
                  type="Number" 
                  name="sellerPhone" 
                  id="sellerPhone" 
                  placeholder="Enter Seller Phone" 
                  autoComplete="off" 
                  value={sellerPhone}
                  onChange={(e)=>{setSellerPhone(e.target.value)}} 
                />
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="sellerBankName">Seller Bank: </label>
                <input 
                  type="text" 
                  name="sellerBankName" 
                  id="sellerBankName" 
                  placeholder="Enter Seller Bank Name" 
                  autoComplete="off" 
                  value={sellerBank}
                  onChange={(e)=>{setSellerBank(e.target.value)}} 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sellerBankAccount">Seller Account: </label>
                <input 
                  type="text" 
                  name="sellerBankAccount" 
                  id="sellerBankAccount" 
                  placeholder="Enter Seller Bank Account" 
                  autoComplete="off" 
                  value={sellerBankAccount}
                  onChange={(e)=>{setSellerBankAccount(e.target.value)}}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sellerBankIfsc">Seller Bank IFSC code: </label>
                <input 
                  type="text" 
                  name="sellerBankIfsc" 
                  id="sellerBankIfsc" 
                  placeholder="Enter Seller Bank IFSC code" 
                  autoComplete="off" 
                  value={sellerBankIfsc}
                  onChange={(e)=>{setSellerBankIfsc(e.target.value)}} 
                />
              </div> 
            </article>
            <article className="md:grid grid-cols-2 gap-10 md:mt-16">
              <div className="flex flex-col">
                <label htmlFor="customerName">Customer Name: </label>
                <input 
                  type="text" 
                  name="customerName" 
                  id="customerName" 
                  placeholder="Enter Customer Name" 
                  autoComplete="off" 
                  value={customerName}
                  onChange={(e)=>{setCustomerName(e.target.value)}} 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="customerAddress">Customer Address: </label>
                <input 
                  type="text" 
                  name="customerAddress" 
                  id="customerAddress" 
                  placeholder="Enter Customer Address" 
                  autoComplete="off" 
                  value={customerAddress}
                  onChange={(e)=>{setCustomerAddress(e.target.value)}} 
                />
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="invoiceNo">Invoice Number: </label>
                <input 
                  type="text" 
                  name="invoiceNo" 
                  id="invoiceNo" 
                  placeholder="Enter Invoice Number" 
                  autoComplete="off" 
                  value={invoiceNo}
                  onChange={(e)=>{setInvoiceNo(e.target.value)}} 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice Date: </label>
                <input 
                  type="date" 
                  name="invoiceDate" 
                  id="invoiceDate" 
                  placeholder="Enter Invoice Date" 
                  autoComplete="off" 
                  value={invoiceDate}
                  onChange={(e)=>{setInvoiceDate(e.target.value)}} 
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date: </label>
                <input 
                  type="date" 
                  name="dueDate" 
                  id="dueDate" 
                  placeholder="Enter Due Date" 
                  autoComplete="off" 
                  value={dueDate}
                  onChange={(e)=>{setDueDate(e.target.value)}} 
                />
              </div>
            </article>
            {/* Product Form */}
            <article>
              <TableForm 
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount} 
                list={list}
                setList={setList}
              />
            </article>
            <label htmlFor="notes">Notes: </label>
            <textarea name="notes" 
              id="notes" 
              cols="30" 
              rows="10" 
              placeholder="Additional Notes For the Customer" 
              value={notes} 
              onChange={(e)=>{setNotes(e.target.value)}}
            ></textarea>
            <button onClick={()=>{setShowInvoice(true)}}
              className="mt-5 bg-blue-500 text-white font-bold
              py-2 px-8 rounded shadow border-2
              border-blue-500 hover:bg-transparent
              hover:text-blue-500 transistion-all duration-300">
              Preview Invoice
            </button>
          </div>
        </>
      )
        }      
      </main>
    </div>
  );
}

export default App;
