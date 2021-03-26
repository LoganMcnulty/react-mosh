import React, { Component } from 'react';

class Counter extends Component {

    render() {
        // console.log(this.props)
        return ( 
        <React.Fragment>
            {this.props.children}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                        <button onClick={
                            () => this.props.onIncrement(this.props.counter)
                            } 
                            className='btn btn-primary m-2'>Increment</button>

                        <button 
                        onClick = {() => this.props.onDelete(this.props.counter.id)}
                        className='btn btn-danger m-2'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;