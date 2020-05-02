import { makeStyles, createStyles, Theme }  from '@material-ui/core';

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
)

export default useStyles;