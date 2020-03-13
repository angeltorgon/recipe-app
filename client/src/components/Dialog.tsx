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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
      margin: '5px',
      fontSize: '4rem'
    },
    form: {
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      width: '500px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    addRecipeButton: {
      border: 'whitesmoke',
      backgroundColor: 'lightgrey',
      '&:hover': {
        backgroundColor: 'grey'
      }
    }
  }),
);

interface IngredientInterface {
  name: string; 
  quantity: number; 
  unit: string;
}

interface StepInterface {
  step: number;
  description: string; 
}

interface Recipe {
    title: string;
    description: string;
    ingredients: IngredientInterface[];
    steps: StepInterface[]
}

export default function DialogComponent(props: any) {
  const [open, setOpen] = React.useState(false);
  const [recipe, setRecipe] = React.useState({
    title: "",
    description: "",
    username: localStorage.getItem("username"),
    ingredients: [{name: "Example", quantity: 3, unit: "oz"}], 
    steps: [{step: 0, description: ""}]
  });
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("recipe - ", recipe);
    axios.post("http://localhost:3500/recipes", recipe)
    .then((res) => {
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
    console.log("adding ingredient...", ingredient)
    setRecipe({...recipe, ingredients: [...recipe.ingredients, ingredient]})
  };

  return (
    <div id="dialog-container">
    <Button className={classes.addRecipeButton} variant="outlined" color="primary" onClick={handleClickOpen}>
        ADD RECIPE
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
          <form className={classes.form}>
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
            Enter ingredients below
            {
              recipe.ingredients.map((ingredient) => {
                return <p>{`${ingredient.name} - ${ingredient.quantity}${ingredient.unit}`}</p>
              })
            }
            <IngredientInput addIngredient={addIngredient}/>
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          POST
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}