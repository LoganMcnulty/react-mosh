import React, { Component } from 'react';

class Counter extends Component {
    state ={
        count:0,
        moonURL: 'https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon-og.jpg',
        tags:['tag1', 'tag2', 'tag3']
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
        this.setState({count: this.state.count + 1})
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
                            className='btn btn-primary'>Increment</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state
        return count === 0 ? 'Zero' : count
    }
}

export default Counter;