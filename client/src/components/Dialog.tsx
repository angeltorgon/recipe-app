import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
      width: "250px",
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

export default function DialogComponent() {
  const [open, setOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState(["sauce"]);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addIngredientInput = (e: any) => {
    e.preventDefault();
    setIngredients([...ingredients, ""])
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
            <TextField className={classes.textField} id="outlined-basic" label="Title" variant="outlined" />
            <TextField className={classes.textField} id="outlined-basic" label="Description" variant="outlined" />
            Enter ingredients below
            <IngredientInput />
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
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