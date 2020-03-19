import React from 'react';

// COMPONENTS
import ConfirmationDialog from './ConfirmationDialog';
import UpdateDialog from './UpdateDialog';

// STYLES
import useStyles from './styles/recipeCard';

interface RecipeCardProps {
    recipe: Recipe;
    getRecipes: () => void; 
}

const RecipeCard: React.FC<RecipeCardProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.recipeCardContainer}>
            <div>
                <h2>{props.recipe.title}</h2>
                <p>{props.recipe.description}</p>
                <ul>
                    {props.recipe.ingredients.map((ingredient) => {
                    return <li>{ingredient.name}</li>
                    })} 
                </ul>
            </div>
            <div className={classes.buttonContainer}>
                <ConfirmationDialog getRecipes={props.getRecipes} recipeId={props.recipe._id}/>
                <UpdateDialog getRecipes={props.getRecipes} recipe={props.recipe} />
                {/* <button className="update">UPDATE</button> */}
            </div>
        </div>
    )
}

export default RecipeCard;