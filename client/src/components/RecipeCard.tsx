import React from 'react';

// STYLES
import './styles/recipe-card.scss';

interface Recipe {
    title: string;
    username?: string;
    description: string;
    ingredients: string[];
}

interface Ingredient {
    name: string;
    quantity: string;
}

export default function RecipeCard(props: any) {
    return (
        <div className="recipe-card-container">
            <div>
                <h2>{props.recipe.title}</h2>
                <p>{props.recipe.description}</p>
                <ul>
                    {props.recipe.ingredients.map((ingredient: Ingredient) => {
                    return <li>{ingredient.name}</li>
                    })} 
                </ul>
            </div>
            <div className="button-container">
                <button>DELETE</button>
                <button>UPDATE</button>
            </div>
        </div>
    )
}
