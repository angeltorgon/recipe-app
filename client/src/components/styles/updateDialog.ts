
import { makeStyles, Theme, createStyles } from '@material-ui/core';

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
    updateRecipeButton: {
      margin: "5px"
    }
    })
)

export default useStyles;