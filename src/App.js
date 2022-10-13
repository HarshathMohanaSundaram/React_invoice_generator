
function App() {

  const handlePrint = () =>{
    window.print();
  }

  return (
    <div className="App">
      <main className="m-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {/* Heading and Functions */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase
            tracking-wide text-4xl mb-3">Invoice</h1>
          </div>

          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li><button onClick={handlePrint}
              className="btn btn-print">Print</button></li>
              <li><button className="btn btn-download">Download</button></li>
              <li><button className="btn btn-send">Send</button></li>
            </ul>
          </div> 
        </header>
        {/* End of heading and functions */}

        {/* Seller Details */}
        <section className="flex flex-col items-end justify-end">
           <h2 className="text-xl uppercase">Sundaram Steel</h2>
           <p>Seller address</p>
        </section>
        {/* End of seller details */}

        {/* Customer Details */}
        <section className="mt-5">
          <h2 className="text-xl uppercase">Customer Name</h2>
          <p>Customer Address</p>
        </section>
        {/* End of customer details */}

        {/* Invoice details */}
          <article className="my-5 flex items-end justify-end">
            <ul>
              <li><span className="font-bold">Invoice number:</span></li>
              <li><span className="font-bold">Invoice date:</span></li>
              <li><span className="font-bold">Due date:</span></li>
            </ul>
          </article>
        {/* End of invoice details */}

        {/* Product Table */}
          <div className="my-5">This is the product table</div>
        {/* End of product table */}

        {/* Invoice notes */}
          <section className="mb-5">
            {/* Textarea */}
            <p>Notes to the customer...</p>
          </section>
        {/* End of invoice notes */}
        {/* Bottom Area */}
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Seller name:</span> Sundaram Steel</li>
            <li><span className="font-bold">Seller email:</span> sundaramsteel123@gmail.com</li>
            <li><span className="font-bold">Phone number:</span> 9842102857</li>
            <li><span className="font-bold">Bank:</span> Bank of branch</li>
            <li><span className="font-bold">Account holder:</span> Sundaram Steel</li>
            <li><span className="font-bold">Account number:</span> 467594000878</li>
            <li><span className="font-bold">IFSC code:</span> BOBA0004675</li>
          </ul>
        </footer>
        {/* End of bottom area */}
      </main>
    </div>
  );
}

export default App;
