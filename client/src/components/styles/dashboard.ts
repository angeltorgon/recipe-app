import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
        root: {
        display: 'flex',
        flexWrap: 'wrap',
        },
        dashboardContainer: {
            marginTop: "80px",
            display: "flex",
            flexDirection: "column"
        },
        button: {
            width: "100%",
            maxWidth: "200px",
            height: "30px",
            margin: "20px 5px",
            fontSize: "1.3rem",
            borderRadius: "5px"
        }
    })
  )

export default useStyles;