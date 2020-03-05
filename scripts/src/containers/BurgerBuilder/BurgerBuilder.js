import React, {Component} from 'react';

import Aux from '../../hoc/AuxComponent';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 1.3,
  bacon: 0.7,
  cheese: 0.4
}

class BurgerBuider extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },

    totalPrice: 4 
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredie
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients 
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredie
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients 
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    }) 
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuider;