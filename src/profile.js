import React from 'react'

export default class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'peter',
            email: 'sunilkawadiworks@gmail.com',
            phone: 8109940165,
            count: 0,

        }

    }
    updateState()
    {
        this.setState({
            name:'Bruce',
            count: this.state.count+1 ,  
        })
    }
    render() {
        console.warn("render")
        return (
            <div>
                <h1>Count {this.state.count}</h1>
                <h1>Email {this.state.email}</h1>
                <h1>Phone {this.state.phone}</h1>

                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
}