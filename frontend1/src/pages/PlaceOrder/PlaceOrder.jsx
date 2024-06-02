import React, { useContext,  useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value= event.target.value;
      setData(data=>({...data,[name]:value}))
  }

  const placeOrder= async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData={ 
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+25
        
    }

  }


  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className="place-order-left">
      <p className='title'>Delivery Information</p>
      <div className="multi-fields">
        <input type="text" required name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder='First Name'/>
        <input type="text" required name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder='Last Name'/>
      </div>
        <input type="email" required name="email" onChange={onChangeHandler} value={data.email} placeholder='Email Address'/>
        <input type="text" required name="street" onChange={onChangeHandler} value={data.street} placeholder='Street'/>
        <div className="multi-fields">
        <input type="text" required name="city" onChange={onChangeHandler} value={data.city} placeholder='City'/>
        <input type="text" required name="state" onChange={onChangeHandler} value={data.state} placeholder='State'/>
      </div>
      <div className="multi-fields">
        <input type="text" required name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder='Zip Code'/>
        <input type="text" required  name="country" onChange={onChangeHandler} value={data.country} placeholder='Country'/>
      </div>
      <input type="text" required  name="phone" onChange={onChangeHandler} value={data.phone} placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
      <h2>Cart Total</h2>
      <div>
      <div className="cart-total-details">
      <p>Subtotal</p>
      <p>₹{getTotalCartAmount()}</p>
    </div>
    <hr/>
    <div className="cart-total-details">
      <p>Delivery Fee</p>
      <p>₹{getTotalCartAmount()===0?0:25}</p>
    </div>
    <hr/>
    <div className="cart-total-details">
      <b>Total</b>
      <b>₹{getTotalCartAmount()===0?getTotalCartAmount():getTotalCartAmount()+25}</b>
    </div>
        
      </div>
      <button type="submit">PROCEED TO PAYMENT</button>
    </div>
      </div>
    </form>
  )
}

export default PlaceOrder
