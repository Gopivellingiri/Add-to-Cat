import './NavBar.css'
import { FaCartArrowDown,FaAngleDown,FaAngleUp} from "react-icons/fa";
import { AiTwotoneShopping } from "react-icons/ai";
const NavBar = (props) => {
  return (
    <nav className='navbar'>
      <div onClick={()=> props.show(true)} className='nav-itmes'>
      <h2><AiTwotoneShopping/>ShopEver</h2>
    <ul>
      <li>Home</li> 
      <li>About</li> 
      <li>Shop<FaAngleUp/></li>    
    </ul>
    </div>
    <button onClick={()=> props.show(false)}><FaCartArrowDown/>Cart<span>{props.item}</span></button>
    
    </nav>
  )
}

export default NavBar;