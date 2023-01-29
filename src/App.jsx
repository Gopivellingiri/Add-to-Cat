import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './New folder/NavBar'
import Slider from './New folder/Slider'
import Card from './New folder/Card'
import './New folder/Card.css'
import { FaExclamationCircle} from "react-icons/fa";
import AddCart from './AddCart'

const data = [
  { id : 1,
    image : "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
  title : "Fancy Product",
  stars : "",
  price : 80.00,
  amount : 1
  },
  { id : 2,
    image : "https://images.unsplash.com/photo-1551797802-f2dd1ec0033e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  title : "Special Item",
  stars : "⭐⭐⭐⭐⭐",
  price : 18.00 ,
    sale : "Sale",
    amount : 1
  },
  { id : 3,
    image : "https://images.unsplash.com/photo-1552879948-16c32e175ae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  title : "Sale Item",
  stars : "",
  price : 25.00,
  sale : "Sale" ,
  amount : 1
},
  
  {
    id : 4,
    
    image : "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  title : "Popular Item",
  stars : "⭐⭐⭐⭐⭐",
  price : 40.00,
  amount : 1
  },
  
  {id : 5, 
    image : "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  title : "Sale Item",
  stars : "",
  price : 25.00,
  sale : "Sale",
  amount : 1
},
  
  {id : 6,
    
    image : "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
  title : "Fancy Product",
  price : 280.00,
  amount : 1
 },
  
  {id : 7,
    
    image : "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
  title : "Special Item",
  stars : "⭐⭐⭐⭐⭐",
  price : 18.00,
  sale : "Sale",
  amount : 1
},
  
  {id : 8,
    image : "https://images.unsplash.com/photo-1458538977777-0549b2370168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  title : "Popular Item",
  stars : "⭐⭐⭐⭐⭐",
  price : 40.00,
  amount : 1
  },
  ]


function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const [presented, setPresented] = useState(false)
    const clickHandler = (item)=> {
      console.log(item)
      let present = false;
      cart.forEach(el =>{
        if (item.id === el.id){
          present = true;
        } 
      })
      if(present === true){
        setPresented(true)
        setTimeout(() => {
          setPresented(false)
        }, 3000)
      } else{
        setCart([...cart, item])
      }
       
    }

    const qtyHandler = (item, inc)=>{
      let int = -1
      cart.forEach((product, index)=> {
        if(product.id === item.id){
          int=index
        }
      })

      const dupArr = cart;
      dupArr[int].Qty += inc
      if (dupArr[int].Qty === 0)
          dupArr[int].Qty = 1
          setCart([...dupArr])
    }

  return (
    <React.Fragment>
      <NavBar item={cart.length} cartItem = {presented} show={setShow}/>
      <Slider show={show ? setShow : !setShow}/>
      { show ? <div className='cards-container'>
      {data.map(item => <Card  key={item.id} id ={item.id} image={item.image} Qty={item.amount} title = {item.title} star={item.stars} rate={item.price} sale={item.sale} cartAddHandler={clickHandler}/>)}
     </div> : <AddCart cart={cart} setCart={setCart} qtyHandler={qtyHandler}/>
 }
     {presented && <div className='items'><span><FaExclamationCircle/></span>Item already Added</div>}
    </React.Fragment>
  )
}

export default App;
