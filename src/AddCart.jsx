import { useEffect, useState } from "react";
import { BiPlus,BiMinus } from "react-icons/bi";
import './AddCart.css';
const AddCart = (props) => {
  const [rate, setRate] = useState(0)
  const cart = props.cart;
  console.log(cart)
  // console.log(rates)
  const rateHandler = ()=> {
    let total = 0;
    cart.map(item=>  total += item.Qty * item.rate )
    setRate(total)

  }
    
    useEffect(()=>{
      rateHandler()
    })
 const removeHandler= (id)=> {
    const newArr = cart.filter(item => item.id !== id)
    props.setCart(newArr)
 }
 return (
<div>{cart?.map((item) => <div className="cart-lists" key={item.id}>
     <div className="cart-lists-items">
        <div className="images">
         <img src={item.image} />
         <p>{item.title}</p>
        </div>
        <div className='buttons'>
          <button onClick={()=> props.qtyHandler(item, +1)}><span><BiPlus/></span></button>
          <button>{item.Qty}</button>
          <button onClick={()=> props.qtyHandler(item, -1)}><span><BiMinus/></span></button>
        </div>
        <div className="total-cost">
          <span>${item.rate}</span>
          <button onClick={()=> removeHandler(item.id)}>Remove</button>
        </div>
        </div>
</div>)}
<div className="price"><p>total Cost <span>-${rate}</span></p> </div>
</div>
 )
}

export default AddCart;