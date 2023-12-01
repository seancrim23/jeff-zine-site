import style from './Zine.module.css';
import { createTheme, responsiveFontSizes, ThemeProvider, Typography, Link } from "@mui/material";

//TODO
//actually build a good theme for this, make sure responsive / has separate file with styling / moved off of css file
//fully move to material ui
let theme = createTheme();
theme = responsiveFontSizes(theme);


function Zine(props) {
    return (
        <ThemeProvider theme={theme}>
                <Link href={props.pdfLink} target="_blank" className={style.coverLink} sx={{width: {xs: '40%', sm: '35%', md: '30%', lg: '20%', xl: '20%'},
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                color: 'black',
                textDecoration: 'none'
            }}>
                    <img className={style.coverImage} src={props.cover} alt={props.title}/>
                    <div style={{paddingTop: '10px'}}>
                        <Typography variant="h5" align="center" sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem', lg: '1.4rem', xl: '1.6rem'}}}>
                            {props.title}
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.1rem', lg: '1.3rem', xl: '1.5rem'}}}>
                            {props.description}
                        </Typography>
                    </div>
                </Link>
        </ThemeProvider>
    );
}

export default Zine;