import { HiCheckCircle } from "react-icons/hi";
import { IoWarning } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi";
import { createPortal } from "react-dom";


const Banner = ({children, status}) => {
    
    let icon

    switch (status) {
      case "success":
        icon = <HiCheckCircle className="icon" />;
        break
      case "warning":
        icon = <IoWarning className="icon" />;
        break
      case "error":
        icon = <IoCloseCircle className="icon" />;
        break
      default:
        icon = <HiInformationCircle className="icon" />;
    }

    return(
      <div>
      {createPortal(<div style={{position: "absolute", top:0, right:0, transition:"all 1s ease" }} className={`Banner ${status}`}>
            {icon}
            <h3 className={`statusText `}>{status}</h3>
          { children ?  <p className={`multiline`}>{children}</p> : null} 
        </div>, document.body)}
        
        </div>
    )
}

export default Banner