import logo from '../assets/logo.png'

const Logo = () => {
    return (
        <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="LoyalCore Logo" />
            <span className="text-xl tracking-light">
                LoyalCore
            </span>
        </div>
    )
}

export default Logo