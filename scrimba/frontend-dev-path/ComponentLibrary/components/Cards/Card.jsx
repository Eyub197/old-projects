import { FaHatCowboy } from "react-icons/fa";


const Card = ({icon = <FaHatCowboy className="header_icon"/>, children, title}) => {
   return(
   
        
        <div className="card">
            <div className="icon_holder">
            {icon}
        </div>
            <h2 className="title">{title}</h2>
            <p className="desc">{children}</p>
        </div>

   ) 
}

export default Card