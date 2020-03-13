import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme, TextField, MenuItem } from '@material-ui/core';

interface IngredientInputProps {
    name?: string;
    quantity?: number;
    unit?: number;
    addIngredient: (ingredient: any) => void;
}

const units = [
    "oz",
    "cps",
    "tbs"
]


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    quantityInput: {
        width: "80px",
    },
    unitInput: {
        width: "60px",
    },
    inputContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
  }),
);

export default function IngredientInput(props: any) {
    const [ ingredient, setIngredient ] = useState({
        name: "",
        quantity: 0,
        unit: "oz"
    });

    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIngredient({...ingredient, [event.target.name]:event.target.value})
    };

    const addIngredient = () => {
        props.addIngredient(ingredient);
        setIngredient({
            name: "",
            quantity: 0,
            unit: "oz"
        })
    }

    return (
        <div className={classes.inputContainer}>
            <TextField 
                label="Name" 
                variant="outlined" 
                name="name"
                onChange={handleChange}
                value={ingredient.name}
                type='text'/>
            <TextField 
                className={classes.quantityInput} 
                label="Quantity" 
                variant="outlined" 
                name="quantity"
                onChange={handleChange}
                value={ingredient.quantity}
                type='number'/>
            <TextField
                variant="outlined"
                className={classes.unitInput}
                select
                label="Unit"
                name="unit"
                value={ingredient.unit}
                onChange={handleChange}>
                {units.map(option => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
            </TextField>
            <Button onClick={addIngredient}>Add Ingredient</Button>
        </div>
    )
}
