import React from 'react';

// STYLES
import './styles/recipe-card.scss';

// COMPONENTS
import ConfirmationDialog from './ConfirmationDialog';
import UpdateDialog from './UpdateDialog';

interface RecipeCardProps {
    recipe: Recipe;
    getRecipes: () => void; 
}

const RecipeCard: React.FC<RecipeCardProps> = (props) => {
    return (
        <div className="recipe-card-container">
            <div>
                <h2>{props.recipe.title}</h2>
                <p>{props.recipe.description}</p>
                <ul>
                    {props.recipe.ingredients.map((ingredient) => {
                    return <li>{ingredient.name}</li>
                    })} 
                </ul>
            </div>
            <div className="button-container">
                <ConfirmationDialog getRecipes={props.getRecipes} recipeId={props.recipe._id}/>
                <UpdateDialog getRecipes={props.getRecipes} recipe={props.recipe} />
                {/* <button className="update">UPDATE</button> */}
            </div>
        </div>
    )
}

export default RecipeCard;