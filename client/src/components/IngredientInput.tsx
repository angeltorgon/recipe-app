import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

interface IngredientInputProps {
    name?: string;
    quantity?: number;
    unit?: number;
}

export default function IngredientInput<IngredientProps>() {
    return (
        <div>
            <Input id='outlined-basic' type='text'/>
            <Input type='number'/>
            <Input id='outlined-basic' type='text' name="quantity"/>
            <Button>Add Ingredient</Button>
        </div>
    )
}
