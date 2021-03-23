import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ( {
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },

    button: {
        width: '100%'
    },

    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginLeft: 100
    },

    name: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginLeft: 50
    },

    more: {
        marginLeft: 100
    }
}));

const tags = [
    { id: 1, name: 'reactjs'},
    { id: 2, name: 'javascript'},
    { id: 3, name: 'dotnet'},
    { id: 4, name: 'laravel'},
    { id: 5, name: 'adonis'},
    { id: 6, name: 'php'},
];

function Navbar() {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Avatar alt="Remy Sharp" src="" className={classes.avatar}/>
            <a className={classes.name}>Meu nome completo</a>
            <ListSubheader>EM ALTA</ListSubheader>
            {
                tags.map((item)  => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }

            {
                <ListItem button color="black" className={classes.more}>
                    Mais
                </ListItem>
            }
        </Paper>
    );
}

export default Navbar;