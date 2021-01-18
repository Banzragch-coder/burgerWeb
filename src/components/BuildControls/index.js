import React from "react";

import BuildControl from "../BuildControl";

import css from "./style.module.css"; 

const BuildControls = props => (
<div className= {css.BuildControls}>
    <p>Бүргэрийн үнэ: {props.price} </p>
    <BuildControl 
        ortsHasah= {props.ortsHasah} 
        ortsNemeh= {props.ortsNemeh} 
        disabled= {props.disabledIngredients}
        type = "salad" 
        orts = "Салад" />
    <BuildControl 
        ortsHasah= {props.ortsHasah} 
        ortsNemeh= {props.ortsNemeh} 
        disabled= {props.disabledIngredients}
        type = "bacon" 
        orts = "Гахайн мах" />
    <BuildControl 
        ortsHasah= {props.ortsHasah} 
        ortsNemeh= {props.ortsNemeh} 
        disabled= {props.disabledIngredients}
        type = "cheese" 
        orts = "Сийр " /> 
    <BuildControl 
        ortsHasah= {props.ortsHasah} 
        ortsNemeh= {props.ortsNemeh} 
        disabled= {props.disabledIngredients}
        type = "meat" 
        orts = "Үхэрийн мах" />
     
</div>);


export default BuildControls;
