import react from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },

    img: {
        maxHeight: 55,
    },

    grow: {
        flexGrow: 1,
    },

    userSection: {
        display: 'flex',
        alignItems: 'center'
    },

    button: {
        fontSize: 35
    },

    bell: {
        marginRight: 15
    }
});

function Header() {

    const classes = useStyles();

    return(
        <AppBar position="fixed" color="black" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button  className={classes.button} color="primary">+</Button>
                    <SvgIcon className={classes.bell}><Bell></Bell></SvgIcon>
                    <Avatar alt="Remy Sharp" src="" />
                </div>
                
                {/* <div>
                    <a href="/">Simbora</a>
                </div>
                <div className="">
                    <Button variant="contained" color="primary">Novo Post</Button>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;