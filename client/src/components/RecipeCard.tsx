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
            </div>
            <div className={classes.buttonContainer}>
                <ConfirmationDialog getRecipes={props.getRecipes} recipeId={props.recipe._id}/>
                <UpdateDialog {...props} getRecipes={props.getRecipes} recipe={props.recipe} />
            </div>
        </div>
    )
}

export default RecipeCard;