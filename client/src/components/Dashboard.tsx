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
    
    useEffect(() => {
        axios.get("http://localhost:3500/recipes").then((res: AxiosResponse) => {
            console.log("logging res at Dashboard - ", res);
            setRecipes(res.data);
        }).catch((err: Error) => {
            console.log(err);
        })
    },[]);
    

    return (
        <div className="dashboard-container">
            <DialogComponent />
            <div className="recipe-cards">
                { recipes.map((recipe: Recipe) => {
                return <RecipeCard recipe={recipe}/>
                })}
            </div>
        </div>
    )
}
