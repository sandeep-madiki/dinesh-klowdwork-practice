import './index.css'

const PersonDetails = (props) => {
    const {details} = props
    const {logo, personName, country, airLineName} = details
    return (
        <li>
            <img src={logo} alt='logo' className='logo'/>
            <h1>{personName}</h1>
            <h1>{country}</h1>
            <h1>{airLineName}</h1>
        </li>
    )
}

export default PersonDetails