import logo from "../assets/logo.webp"

function Logo({lggo, className}){
    return <img src={logo} alt="logo planwise" className={className} style={{ width: '2%', height: '2%', objectFit: 'contain' }}></img>
        
}

export default Logo;