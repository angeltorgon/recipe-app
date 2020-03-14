import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// COMPONENTS
import RecipeCard from './RecipeCard';
import DialogComponent from './Dialog';

// STYLES
import './styles/dashboard.scss';

interface Props {
    history: History
}

interface Recipe {
    title: string;
    username?: string;
    description: string;
    ingredients: string[];
}

export default function Dashboard(props: any) {

    const [ recipes, setRecipes ] = useState([]);

    const getRecipes = () => {
        axios.get(`http://localhost:3500/users/${props.username}/recipes`).then((res: AxiosResponse) => {
            setRecipes(res.data);
        }).catch((err: Error) => {
            console.log(err);
        })
    };
    
    useEffect(() => {
        getRecipes();
    },[]);
    

    return (
        <div className="dashboard-container">
            <DialogComponent getRecipes={getRecipes}/>
            <div className="recipe-cards">
                { recipes.map((recipe: Recipe) => {
                return <RecipeCard getRecipes={getRecipes} recipe={recipe}/>
                })}
            </div>
        </div>
    )
}
