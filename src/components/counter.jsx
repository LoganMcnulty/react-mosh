import React, { Component } from 'react';

class Counter extends Component {
    state ={
        value: this.props.value
    }
    styles = {
        span:{
            // fontSize:40,
            fontWeight:'bold'
        },
        image:{
            width:'50%'
        }
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({value: this.state.value + 1})
    }

    render() {
        return ( 
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row justify-content-center text-center'>
                    <div className='col-12'>
                        <span className={this.getBadgeClasses()} style={this.styles.span}>{this.formatCount()}</span>
                        <button onClick={
                            () => this.handleIncrement({id:1})
                            } 
                            className='btn btn-primary m-2'>Increment</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;