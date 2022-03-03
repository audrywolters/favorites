import React, { Component } from "react";
import './Categories.css';

class Categories extends Component {

    state = {
        animal: '',
        color: ''
    }

    // handleInputChange = ( event, propertyName ) => {
    //     this.setState({
    //         [propertyName]: event.target.value
    //     })
    // }

    clickedCharacter() {
        console.log('clicked character button');
    }

    printFavoriteThings = ( event ) => {
        console.log( `Your favorite thing is a ${ this.state.color } ${ this.state.animal }` );
    }

    render() {
        return (
            <div className="categories">
                <div>Click a Character</div>

                <button onClick={ this.clickedCharacter }>Dr. Crusher</button>
                <button onClick={ this.clickedCharacter }>Riker</button>

                {/* <label className='inputColor'>Color</label>                
                <input type='text' onChange={ (event) => this.handleInputChange( event, 'color') } /> */}

                <div hidden></div>
            </div>
        )
    }
}

export default Categories;