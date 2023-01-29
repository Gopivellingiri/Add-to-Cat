import './Slider.css'

const Slider = (props) => {
  
 return (
  <div className={props.show ? 'slider' : 'slider2'}>
    <h1>Shop in style</h1>
    <p>With this ShopEver hompeage </p>
  </div>
 )
}

export default Slider;