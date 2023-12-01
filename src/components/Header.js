//TODO
//fully move component to material ui styling

import { Paper, Box, Divider } from "@mui/material";

function Header() {
    //TODO
    //pull this dynamically
    var jeff_zine_header = "https://storage.googleapis.com/zines-jeff/resources/jeff_zine_header.png";

    return (
        <>
            <Paper elevation={0} sx={{ paddingBottom: '15px', paddingTop: '10px'}}>
                <Box component="img" src={jeff_zine_header} alt='jeff zine header' sx={{width: {xs: '70%', sm: '70%', md: '60%', lg: '40%', xl: '40%'}, height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto', paddingBottom: '5px'}} />
                <Divider sx={{width: {xs: '70%', sm: '70%', md: '60%', lg: '40%', xl: '40%'}, marginLeft: 'auto', marginRight: 'auto'}}/>
            </Paper>
        </>
    );
}

export default Header;