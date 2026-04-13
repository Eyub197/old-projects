import { FaHatCowboy } from "react-icons/fa";

const CardIcon = ({icon = <FaHatCowboy className="header_icon"/>}) => {
   return ( <div className="icon_holder">
        {icon}
    </div> )
}


export default CardIcon