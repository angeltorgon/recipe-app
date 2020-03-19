import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        },
        recipeCardContainer: {
            border: "1px solid whitesmoke",
            borderRadius: "5px",
            minWidth: "300px",
            maxWidth: "400px",
            height: "400px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            margin: "5px",
            justifyContent: "center",
            fontSize: "1.4rem",
            position: "relative"
        }, 
        buttonContainer: {
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            position: "absolute",
            bottom: "20px"
        }
    })
  )

export default useStyles;