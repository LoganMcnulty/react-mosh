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


    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>;

        return <ul className='list-group'>{this.state.tags.map(tag => <li key={tag} className='list-group-item'><button className='btn btn-info'>{tag}</button></li>)}</ul>

    }

    render() {
        return ( 
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row justify-content-center text-center'>
                    <div className='col-12'>
                        <h1 className='jumbotron bg-dark text-light'>
                            <span className={this.getBadgeClasses()} style={this.styles.span}>{this.formatCount()}</span>
                        </h1>
                        <button onClick={
                            () => this.handleIncrement({id:1})
                            } 
                            className='btn btn-primary'>Increment</button>
                    </div>
                </div>
                <div className='row justify-content-center text-center'>
                    <div className='col-6'>
                        <div className='card mt-2'>
                            <div className='card-header'>Tags</div>
                            {this.state.tags.length === 0 && 'Please create a new tag!'}
                            {this.renderTags()}
                        </div>
                        <img className='img mt-2 rounded' src={this.state.moonURL} alt='' target='_blank' style={this.styles.image}></img>
                    </div>
                </div>
            </div>
           
        </React.Fragment>
        );
    }

    // {names.forEach(name => console.log(name)}

    // const listNames = () => 

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