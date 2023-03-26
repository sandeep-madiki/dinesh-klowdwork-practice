import { Component } from "react";
import './index.css'
import PersonDetails from "../../personDetails";

class Passengers extends Component{
    state = {totalPassengers: '', passengersData: []}

    componentDidMount(){
        this.getData()
    }

    getData = async () => {
        const url = "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
        const response = await fetch(url)
        const data = await response.json()
        const {totalPassengers} = data
        console.log(data)

        const updatedData = data.data.map((temp) => ({
            personId: temp._id,
            personName: temp.name,
            trips: temp.trips,
            airLineId: temp.airline[0].id,
            airLineName: temp.airline[0].name,
            country: temp.airline[0].country,
            logo: temp.airline[0].logo
        }))
        // console.log(updatedData)
        this.setState({totalPassengers: totalPassengers, passengersData: updatedData})
    }

    render(){
        const {passengersData, totalPassengers} = this.state
        console.log(passengersData)
        return(
            <div>
                <h1>Passengers</h1>
                <h1 className="passengers-count">{`Total Passengers ${totalPassengers}`}</h1>
                <div className="heading">
                    <h1>Logo</h1>
                    <h1> name</h1>
                    <h1>country</h1>
                    <h1>Airline name</h1>
                </div>
                <ul>
                {
                    passengersData.map((each) => (
                        <PersonDetails details={each} key={each.personId}/>
                    ))
                }
                </ul>
            </div>
            
        )
    }
}

export default Passengers