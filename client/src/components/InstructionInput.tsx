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
    descriptionInput: {
        width: "100%",
    },
    inputContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
  }),
);

export default function InstructionInput(props: any) {
    const [ instruction, setInstruction ] = useState({
        description: ""
    });

    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInstruction({...instruction, [event.target.name]:event.target.value})
    };

    const addInstruction = () => {
        props.addInstruction(instruction);
        setInstruction({
            description: "",
        })
    }

    return (
        <div className={classes.inputContainer}>
            <TextField 
                label="Instruction" 
                variant="outlined" 
                name="description"
                className={classes.descriptionInput}
                onChange={handleChange}
                value={instruction.description}
                type='text'/>
            <Button onClick={addInstruction}>Add Instruction</Button>
        </div>
    )
}
