import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// COMPONENTS
import RecipeCard from './RecipeCard';
import DialogComponent from './Dialog';

// STYLES
import useStyles from './styles/dashboard';

export default function Dashboard(props: any) {
    const classes = useStyles();
    const [ recipes, setRecipes ] = useState([]);
    const getRecipes = () => {
        const { username } = props.match.params;
        axios.get(`${process.env.REACT_APP_ROOT_URL}users/${username}/recipes`).then((res: AxiosResponse) => {
            setRecipes(res.data);
        }).catch((err: Error) => {
            console.log(err);
        })
    };
    
    useEffect(() => {
        getRecipes();
    },[]);

    return (
        <div className={classes.dashboardContainer}>
            <DialogComponent {...props} getRecipes={getRecipes}/>
            <div className={classes.recipeCards}>
                { recipes.map((recipe: Recipe) => {
                return <RecipeCard {...props} getRecipes={getRecipes} recipe={recipe}/>
                })}
            </div>
        </div>
    )
}
