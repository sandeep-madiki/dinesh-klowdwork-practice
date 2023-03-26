import { Component } from "react";
import './index.css'

class Airlines extends Component{

    state = {airlineDetails: {}, idNum: 1}

    componentDidMount(){
        this.getData()
    }

    getData = async () => {
        const {idNum} = this.state
        let url = `https://api.instantwebtools.net/v1/airlines/${idNum}`
        const response = await fetch(url)
        const data = await response.json()
        const updatedDetails = {
            country: data.country,
            established: data.established,
            headQuaters: data.head_quaters,
            id: data.id,
            logo: data.logo,
            slogan: data.slogan,
            website: data.website
        }
        this.setState({airlineDetails: updatedDetails})
    }

    getIdNum = (event) => {
        this.setState({idNum: event.target.value})
    }

    searchIdDetails = () => {
        this.getData()
    }

    render(){
        const {airlineDetails} = this.state
        const {country, established, headQuaters, id, logo, slogan, website} = airlineDetails
        return (
            <div>
                <h1>Airlines</h1>
                <div>
                    <input type='number' onChange={this.getIdNum} placeholder='Enter ID'/>
                    <button type="button" onClick={this.searchIdDetails}>Search</button>
                </div>
                <div className="air-lines-con-2">
                    <h5>Logo</h5>
                    <h5>country</h5>
                    <h5>established</h5>
                    <h5>headQuaters</h5>
                    <h5>slogan</h5>
                    <h5>website</h5>
                </div>
                <div className="air-lines-con">
                    <img src={logo} alt='logo' className="airlines-logo"/>
                    <h5>{country}</h5>
                    <h5>{established}</h5>
                    <h5>{headQuaters}</h5>
                    <h5>{slogan}</h5>
                    <a href={website}>visit</a>
                </div>
            </div>
        )
    }
}

export default Airlines