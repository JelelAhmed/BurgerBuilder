import React, {Component} from 'react';

import Aux from '../../hoc/AuxComponent';
import Burger from '../../components/Burger/Burger';

class BurgerBuider extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build controls</div>
      </Aux>
    );
  }
}

export default BurgerBuider;