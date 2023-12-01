import { Button, Paper, Divider, Box } from '@mui/material';
//TODO
//refactor to one theme with material ui
//clean up styling

function Footer() {
    //TODO
    //pull this dynamically
    var jeff_zine_footer = "https://storage.googleapis.com/zines-jeff/resources/jeff_zine_footer.png";

    return (
        <>
            <Paper elevation={0} sx={{position: 'relative', left: '0', bottom: '0', textAlign: 'center', paddingBottom: '5px'}}>
                <Divider sx={{width: {xs: '70%', sm: '70%', md: '60%', lg: '40%', xl: '40%'}, marginLeft: 'auto', marginRight: 'auto'}}/>
                <Box component="img" src={jeff_zine_footer} alt='jeff zine footer' sx={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: { xs: '10%', sm: '10%', md: '7%', lg: '5%', xl: '5%'}, height: 'auto', paddingTop: '10px'}} />
                <Button underline="hover" color="inherit" component="button" href="mailto:sean.g.crim@gmail.com" sx={{ fontSize: { xs: '0.5rem', sm: '0.7rem', md: '.8rem', lg: '.9rem', xl: '1rem'}}}>Contact Me</Button>
            </Paper>
        </>
    );
}

export default Footer;