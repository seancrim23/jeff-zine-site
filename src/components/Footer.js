import { Button, Paper } from '@mui/material';
//TODO
//refactor to one theme with material ui
//clean up styling
//should be some method to contact me

function Footer() {
    //TODO
    //pull this dynamically
    var jeff_zine_footer = "https://storage.googleapis.com/zines-jeff/resources/jeff_zine_footer.png";

    return (
        <>
            <footer style={{position: 'relative', left: '0', bottom: '0'}}>
                <hr style={{width: '40%'}}/>
                <img src={jeff_zine_footer} alt='jeff zine footer' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '5%', height: 'auto'}} />
                <Paper elevation={0} sx={{ textAlign: 'center', paddingBottom: '5px'}}>
                    <Button underline="hover" color="inherit" component="button" href="mailto:sean.g.crim@gmail.com" sx={{ fontSize: { xs: '0.5rem', sm: '0.7rem', md: '.8rem', lg: '.9rem', xl: '1rem'}}}>Contact Me</Button>
                </Paper>
            </footer>
        </>
    );
}

export default Footer;