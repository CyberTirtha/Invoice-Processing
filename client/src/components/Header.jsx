import { AppBar,Toolbar} from '@mui/material'

const Header = () =>{
    const logo="https://cdn-icons-png.flaticon.com/128/2490/2490515.png";
    return(
        <AppBar color='secondary' position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{width:120}}/>
            </Toolbar>
        </AppBar>
    )
}
export default Header;