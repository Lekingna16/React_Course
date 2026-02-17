
import '../css/Button.css'

const Button = ({ type }) => {
    return (
        <div className={`btn btn-${type}`}>Button</div>
    )
}

export default Button