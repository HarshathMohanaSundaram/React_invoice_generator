import React, {useState, useEffect } from "react"
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import {v4 as uuidv4} from 'uuid'

export default function TableForm(
    {description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal
}) {
  
  const[isEditing, setIsEditing] = useState(false)

  //Submit Form Function
  const handleSubmit =(e) =>{
    e.preventDefault();
    const newItems = {
        id:uuidv4(),
        description,
        quantity,
        price,
        amount
    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list,newItems])
    setIsEditing(false)
  }  

  //Calculate amount function
  useEffect(()=>{
    const calAmount =(amount) =>{
        setAmount(quantity*price)
    }
    calAmount(amount)  
  },[price,quantity,amount,setAmount])

  //Calculate total amount
  useEffect(()=>{
    let rows = document.querySelectorAll(".amount")
    let sum = 0
    for(let i=0;i<rows.length;i++){
        if(rows[i].className === "amount"){
            sum+=isNaN(rows[i].innerHTML)?0:parseInt(rows[i].innerHTML)
            setTotal(sum)
        }
    }
  })

  //Edit row function
  const editItem =(id)=>{
    const editingItem = list.find((row)=>row.id===id)
    setList(list.filter((row)=>row.id===id))
    setIsEditing(true)
    setDescription(editingItem.description)
    setQuantity(editingItem.quantity)
    setPrice(editingItem.price)
  }

  //Delete row function
  const deleteItem =(id)=> setList(list.filter((row) => row.id!==id))

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col md:mt-16'>
                <label htmlFor='itemDescription'>Item Description</label>
                <input type="text" 
                    name="itemDescription" 
                    id="itemDescription" 
                    placeholder='Item Description' 
                    value={description} 
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
            </div>
            <div className='md:grid grid-cols-3 gap-10'>
                <div className='flex flex-col'>
                    <label htmlFor='quantity'>Item Quantity</label>
                    <input type="text" 
                        name="quantity" 
                        id="quantity" 
                        placeholder='Item Quantity' 
                        value={quantity} 
                        onChange={(e)=>{setQuantity(e.target.value)}}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='price'>Item Price</label>
                    <input type="text" 
                        name="price" 
                        id="price" 
                        placeholder='Item Price' 
                        value={price} 
                        onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='amount'>Total Amount</label>
                    <p>{amount}</p>
                </div>
            </div>
            <button className="mb-5 bg-blue-500 text-white font-bold
            py-2 px-8 rounded shadow border-2
            border-blue-500 hover:bg-transparent
            hover:text-blue-500 transistion-all duration-300" type="submit">
                {isEditing?"Edit Item":"Add Item"}
            </button>
        </form>

        {/* Table items */}
        <table width="100%" className="mb-10">
            <thead>
                <tr className='bg-gray-100 p-1'>
                    <td className='font-bold'>Item Description</td>
                    <td className='font-bold'>Quantity</td>
                    <td className='font-bold'>Price</td>
                    <td className='font-bold'>Amount</td>
                </tr>
            </thead>
            {list.map(({id,description,quantity,price,amount})=>(
                <React.Fragment key={id}>    
                    <tbody>
                        <tr>
                            <td>{description}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td className="amount">{amount}</td>
                            <td>
                                <button onClick={()=>{deleteItem(id)}}>
                                    <AiOutlineDelete className="text-red-500 font-bold text-xl"/>
                                </button>
                            </td>
                            <td>
                                <button onClick={()=>{editItem(id)}}>
                                    <AiOutlineEdit className="text-green-500 font-bold text-xl"/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </React.Fragment>
            ))}
        </table>
        <div>
            <h2 className="text-gray-800 text-4xl font-bold">₹{total.toLocaleString()}</h2>
        </div>
    </>
  )
}
