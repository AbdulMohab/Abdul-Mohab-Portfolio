import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"
 
const Tobbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active") }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Abdul Mohab</a>
          <div className="itemContainer" href="tel:03110510834">
            <Person className="icon" />
            <span href="tel:03110510834">+92 311 0510834</span>
          </div>
          <div className="itemContainer" href="mailto:abdul.wahab0640@gmail.com">
            <Mail className="icon" />
            <span href="mailto:abdul.wahab0640@gmail.com">abdul.wahab0640@gmail.com</span>
          </div>
        </div>  
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tobbar