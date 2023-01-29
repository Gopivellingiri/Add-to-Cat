import './Card.css';
const CardParent = (props) => {
 return (
  <div className={props.className}>{props.children}</div>
 )
}

export default CardParent;