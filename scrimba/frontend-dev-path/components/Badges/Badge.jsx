
const Badge = ({color, type, children}) => {

    return( <p className={`badge ${color} ${type}`}>{children}</p> )
}

export default Badge