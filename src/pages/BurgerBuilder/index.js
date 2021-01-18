import React, {Component} from "react"; 

import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

const INGREDIENTS_PRICES = {
    salad:150,
    cheese:250,
    bacon:800,
    meat:1500
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0, 
            cheese:1,   
            meat: 0,
            bacon:0,
        },

        totalPrice: 1550

        
    };

    ortsNemeh = type => {
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICES[type]; 

        this.setState ({totalPrice: newPrice, ingredients: newIngredients}); 
    };
    ortsHasah = type => {
        if (this.state.ingredients[type]>0 ) { 
        const newIngredients = {...this.state.ingredients};
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICES[type]; 
        newIngredients[type]--;
        this.setState ({totalPrice: newPrice, ingredients: newIngredients}); 
    }
    };
      


    render () {
        const disabledIngredients = {...this.state.ingredients }

        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0 ;

        }

        return (
            <div>
               <Burger orts={this.state.ingredients}/> 
              < BuildControls 
              price={this.state.totalPrice}
              disabledIngredients = { disabledIngredients} 
              ortsHasah= {this.ortsHasah} 
              ortsNemeh = {this.ortsNemeh}  />
            </div>

        );
    }  
}

export default BurgerBuilder;