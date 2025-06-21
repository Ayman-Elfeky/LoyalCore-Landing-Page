const Button = ({data, border, gradient}) => {
    return (
        <a href='#' className={`py-2 px-3 rounded-md ${border && 'border'} ${gradient && 'gradient text-white'}`}>
            {data}
        </a>
    )
}

export default Button;