import { Link } from "react-router-dom";
import style from './Zine.module.css';
import { createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";

//TODO
//actually build a good theme for this, make sure responsive / has separate file with styling / moved off of css file
//fully move to material ui
let theme = createTheme();
theme = responsiveFontSizes(theme);

function Zine(props) {
    return (
        <ThemeProvider theme={theme}>
                <Link to={props.pdfLink} target="_blank" className={style.coverLink}>
                    <img className={style.coverImage} src={props.cover} alt={props.title}/>
                    <div style={{paddingTop: '10px'}}>
                        <Typography variant="h5" align="center" sx={{ fontSize: { xs: '0.4rem', sm: '0.6rem', md: '0.9rem', lg: '1.1rem', xl: '1.5rem'}}}>
                            {props.title}
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ fontSize: { xs: '0.4rem', sm: '0.6rem', md: '0.9rem', lg: '1.1rem', xl: '1.5rem'}}}>
                            {props.description}
                        </Typography>
                    </div>
                </Link>
        </ThemeProvider>
    );
}

export default Zine;