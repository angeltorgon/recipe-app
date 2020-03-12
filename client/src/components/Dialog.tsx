import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// COMPONENTS
import IngredientInput from './IngredientInput';

// STYLES
import './styles/dialog.scss'

export default function DialogComponent() {
  const [open, setOpen] = React.useState(false);
  const [ingredients, setIngredients] = React.useState(["sauce"]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addIngredientInput = (e: any ) => {
    e.preventDefault();
    setIngredients([...ingredients, ""])
  };

  return (
    <div className="dialog-container">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          ADD RECIPE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h2 id="alert-dialog-title">{"Enter Recipe Information"}</h2>
        <div className="dialog-content">
            <form className="recipe-form">
                <div>
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text"/>
                </div>
                <div>
                    {ingredients.map((ingredient) => {
                        return <IngredientInput ingredient={ingredient} />
                    })}
                </div>
                <button onClick={addIngredientInput}>Add Ingredient</button>
            </form>
        </div>
        <DialogActions>
          <button onClick={handleClose} color="primary">
            POST
          </button>
          <button onClick={handleClose} color="primary" autoFocus>
            DELETE
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}