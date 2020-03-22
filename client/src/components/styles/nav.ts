import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        },
        navContainer: {
            width: "100%",
            margin: "0 auto",
            height: "60px",
            backgroundColor: "rgb(0, 73, 114)",
            top: 0,
            opacity: ".8",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 100,
            fontSize: "1.8rem",
            alignItems: "center",
            position: "fixed",
        },
        link: {
            textDecoration: "none",
        },
        navItem: {
            textDecoration: "none",
            margin: "20px",
            color: "white",
        }
    })
  )

export default useStyles;