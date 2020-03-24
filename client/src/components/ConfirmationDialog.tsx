import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';

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
    deleteButton: {
      fontSize: "14px"
    }
  }),
);

const ConfirmationDialog: React.FC<ConfirmationDialogInterface> = (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    axios.delete(`http://localhost:3500/recipes/${props.recipeId}`)
    .then((res) => {
      setOpen(false);
      props.getRecipes();
    })
    .catch((err) => {
      console.log("error - ", err)
    });
  };

  return (
    <div id="dialog-container">
    <Button className={classes.deleteButton} variant="contained" color="secondary" onClick={handleClickOpen}>
      DELETE
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleYes} color="primary">
            YES
        </Button>
        <Button onClick={handleClose} color="secondary" autoFocus>
            NO
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}

export default ConfirmationDialog;