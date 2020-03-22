import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';

// COMPONENTS
import IngredientInput from './IngredientInput';
import InstructionInput from './InstructionInput';
import useStyles from './styles/updateDialog';

const DialogComponent = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [recipe, setRecipe] = React.useState({
    title: props.recipe.title,
    description: props.recipe.description,
    username: props.match.params.username,
    ingredients: props.recipe.ingredients, 
    instructions: props.recipe.instructions ? props.recipe.instructions : [{description: ""}],
  });
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setRecipe({
      title: "",
      description: "",
      username: props.match.params.username,
      ingredients: [{name: "Example", quantity: 3, unit: "oz"}], 
      instructions: [{description: ""}]
    })
    handleClose();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put(`http://localhost:3500/recipes/${props.recipe._id}`, recipe)
    .then((res) => {
      setRecipe({
        title: "",
        description: "",
        username: props.match.params.username,
        ingredients: [{name: "Example", quantity: 3, unit: "oz"}], 
        instructions: [{description: ""}] 
      })
      props.getRecipes();
    })
    .catch((err) => {
      console.log("error - ", err)
    });
    setOpen(false);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRecipe({...recipe, [e.target.name]: e.target.value})
  }

  const addIngredient = (ingredient: IngredientInterface) => {
    setRecipe({...recipe, ingredients: [...recipe.ingredients, ingredient]})
  };

  const addInstruction = (instruction: StepInterface) => {
    setRecipe({...recipe, instructions: [...recipe.instructions, instruction]})
  };

  return (
    <div id="dialog-container">
      <Button className={classes.updateRecipeButton} variant="outlined" color="primary" onClick={handleClickOpen}>
          UPDATE 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Submit a recipe below!"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField 
              className={classes.textField} 
              id="outlined-basic" 
              label="Title" 
              name="title"
              onChange={changeHandler}
              value={recipe.title}
              variant="outlined" />
            <TextField 
              className={classes.textField} 
              id="outlined-basic" 
              label="Description" 
              name="description"
              onChange={changeHandler}
              value={recipe.description}
              variant="outlined" />
            <h3>Enter ingredients below</h3>
            {
              recipe.ingredients.map((ingredient: any) => {
                return <p>{`${ingredient.name} - ${ingredient.quantity}${ingredient.unit}`}</p>
              })
            }
            <IngredientInput addIngredient={addIngredient}/>
            <h3>Enter instructions below</h3>
            {
              recipe.instructions.map((instruction: any) => {
                return <p>{`${instruction.description}`}</p>
              })
            }
            <InstructionInput addInstruction={addInstruction}/>
          </form>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            UPDATE
          </Button>
          <Button onClick={handleCancel} color="primary" autoFocus>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogComponent;