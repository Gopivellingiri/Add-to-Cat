import "./Card.css";
import CardParent from "./CardParent";


const Card = (props) => {
  const list = {id: props.id, image : props.image, title : props.title , star: props.star , rate : props.rate, Qty : props.Qty}
   return (
      <CardParent className="cards-item">
        <img className="product" src={props.image} alt="prodcut" />
        <h2>{props.title}</h2>
        <p>{props.star}</p>
        <p>${props.rate}</p>
        <p><span style={{display:props.sale ? 'block' : 'none'}}>{props.sale}</span></p>
        <button onClick={()=>props.cartAddHandler(list)}> Add to Cart</button>
      </CardParent>
   )
}

export default Card;