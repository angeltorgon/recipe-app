import React from 'react'

export default function IngredientInput(props: any) {
    return (
        <div>
            <input type="text" placeholder={props.ingredient}/>
        </div>
    )
}
