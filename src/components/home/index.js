import { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component{
    render(){
        // console.log(this.props)
    return (
        <div className='home-con'>
            <Link to='/airlines'>
                <button type="button">Airlines</button>
            </Link>
            <Link to='/passengers'>
                <button type="button">Passengers</button>
            </Link>
            
        </div>
    )
    }
    }

export default Home