import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function MyButton(props) {
  return (
    <>
    <Button 
      variant='default'
      className='nav_btn_style' >
        <Link  
          to={props.linkTo}
          className='nav_link_style'>{props.sign}</Link>
    </Button>
    </>
  )
}

export default MyButton