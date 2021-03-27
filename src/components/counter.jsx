import React, { Component } from 'react';

class Counter extends Component {

// Called after a component is updated (new state or new props). 
// If there is a change between old/new state/props, we can make ajax requests to server to do things
    componentDidUpdate(prevProps, prevState){
        if (prevProps.counter.value !== this.props.counter.value){
            // Do an ajax call and get data from server
            console.log('before update: ', prevProps.counter)
            console.log('after update: ', this.props.counter)
        }
    }

// This is where you can do cleanup for things such as timers, data retrieval for a live element, etc.
// Otherwise there can be memory leaks
    componentWillUnmount(){
        console.log('Counter - Unmount')
    }

    render() {
        console.log('Counter - Rendered')
        const {children, counter, onIncrement, onDecrement, onDelete} = this.props

        return ( 
        <React.Fragment>
            {children}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="row justify-content-left text-left">
                            <div className="col-1">
                                <span className={this.getBadgeClasses(counter)}>{this.formatCount(counter)}</span>
                            </div>
                            <div className='col-2'>
                                <button 
                                    onClick={
                                        () => onIncrement(counter)
                                        } 
                                    className='btn btn-primary m-1'>+
                                </button>

                                <button 
                                    onClick={
                                    () => onDecrement(counter)
                                    } 
                                    className={'btn btn-secondary m-1'}
                                    disabled={counter.value === 0 ? 'disabled' : ''}
                                    >-
                                </button>

                                <button 
                                    onClick = {() => onDelete(counter.id)}
                                    className='btn btn-danger m-1'>
                                        X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

    getBadgeClasses(counter) {
        let classes = "badge m-2 p-2 badge-";
        classes += (counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(counter){
        const {value} = counter
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;