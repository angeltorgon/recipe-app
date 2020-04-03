import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios, { AxiosResponse } from 'axios';

// COMPONENTS
import IngredientInput from './IngredientInput';
import InstructionInput from './InstructionInput';

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
      width: "200px",
      fontSize: "14px",
      border: "1px solid green",
      color: "white",
      backgroundColor: "green",
      "&:hover": {
        backgroundColor: "darkgreen",
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
  description: string; 
}

interface Recipe {
    title: string;
    description: string;
    ingredients: IngredientInterface[];
    instructions: StepInterface[]
}

export default function DialogComponent(props: any) {
  const [open, setOpen] = React.useState(false);
  const [recipe, setRecipe] = React.useState({
    title: "",
    description: "",
    thumbnailURL: "",
    username: props.match.params.username,
    ingredients: [{name: "Example", quantity: 3, unit: "oz"}], 
    instructions: [{description: ""}]
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
      thumbnailURL: "",
      username: props.match.params.username,
      ingredients: [{name: "Example", quantity: 3, unit: "oz"}], 
      instructions: [{description: ""}]
    })
    handleClose();
  };

  const handleSubmit = () => {
    axios.post(`${process.env.REACT_APP_ROOT_URL}`, recipe)
    .then((res: AxiosResponse) => {
      props.getRecipes();
      setRecipe({
        title: "",
        description: "",
        thumbnailURL: "",
        username: localStorage.getItem("username"),
        ingredients: [{name: "Example", quantity: 3, unit: "oz"}], 
        instructions: [{description: ""}] 
      })
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
            <TextField 
              className={classes.textField} 
              id="outlined-basic" 
              label="Thumbnail URL" 
              name="thumbnailURL"
              onChange={changeHandler}
              value={recipe.thumbnailURL}
              variant="outlined" />
            <h3>Enter ingredients below</h3>
            {
              recipe.ingredients.map((ingredient) => {
                return <p>{`${ingredient.name} - ${ingredient.quantity}${ingredient.unit}`}</p>
              })
            }
            <IngredientInput addIngredient={addIngredient}/>
            <h3>Enter instructions below</h3>
            {
              recipe.instructions.map((instruction) => {
                return <p>{`${instruction.description}`}</p>
              })
            }
            <InstructionInput addInstruction={addInstruction}/>
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          POST
        </Button>
        <Button onClick={handleCancel} color="primary" autoFocus>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}