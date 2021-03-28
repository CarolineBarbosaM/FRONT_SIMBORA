import React from 'react';
import axios from '../../utils/axios';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh'
    },

    left: {
        background: '#8C52FF',
        flexBasis: '58%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        color: '#ffffff',
    },

    right: {
        background: '#ffffff',
        flexBasis: '42%'
    },

    text: {
        marginTop: '12%'
    },

    texts: {
        marginTop: '-1%',
        fontSize: '16px'
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center',
    },

    input: {
        border: 0,
        borderBottom: '2px solid #8C52FF',
        outline: 'none',
        transition: '.2s ease-in-out',
        boxSizing: 'border-box',
        width: '100%',
        height: '3rem',
        fontSize: '1rem',
        borderBottom: '2px solid #8C52FF'
    },

    label: {
        top: '25%',
    },

    inputContainer: {
        marginTop: '10%',
        position: 'relative'
    },

    buttonSinginup: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        border: 1,
        borderBottom: '1px solid 8C52FF',
        color: 'black',
        padding: '8px 15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '12px',
        cursor: 'pointer',
        float: 'right',
        marginTop: '2%',
        marginLeft: '-3%'
    },

    buttonSinginin: {
        backgroundColor: '#8C52FF',
        borderRadius: '10px',
        border: 0,
        borderBottom: '1px solid #8C52FF',
        color: 'white',
        padding: '8px 15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '12px',
        cursor: 'pointer',
        float: 'right',
        marginTop: '2%',
        marginLeft: '-3%'
    },

    password: {
        padding: '8px 15px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '12px',
        cursor: 'pointer',
        float: 'right',
        marginTop: '-8%',
        marginRight: '25%'
    },

    singin: {
        backgroundColor: '#8C52FF',
        borderRadius: '10px',
        border: 0,
        borderBottom: '1px solid #8C52FF',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '12px',
        cursor: 'pointer',
        float: 'right',
        marginTop: '2%',
        marginRight: '53%'
    },

    img: {
        marginTop: '4%',
        maxHeight: 340,

    }
}));

function Singin() {
    const classes = useStyles();
    const navigate = useNavigate();

    async function handleSingin(){
        // chamada a api
        // se retorno ok, direciona para home
        // senao exibe mensagem para o usuario
        const response = await axios.post('/api/home/login')
        console.log(response);
    }

    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <h2  className={classes.text}>O seu jeitinho de ir mais além.</h2>
                <h3  className={classes.texts}>Uma rede social que conectar devs!</h3>

                <img src="/images/singin/login.png" alt="login" className={classes.img} />
            </div>

            <div className={classes.right}>
                <button className={classes.buttonSinginup} onClick={() => navigate('/singup')}>&nbsp;&nbsp;&nbsp;Sing up</button>
                <button className={classes.buttonSinginin} onClick={() => navigate('/singin')}>Sing in</button>

               <form className={classes.form}>
                    <div className={classes.inputContainer}>
                        <label className={classes.label} valid focus>E-mail</label>
                        <input className={classes.input} type="email" valid focus required />
                    </div>

                    <div className={classes.inputContainer}>
                        <label className={classes.label} valid focus>Senha</label>
                        <input className={classes.input} type="password" valid focus required />
                    </div>
               </form>
               <div className={classes.password}>
                    <a href=''>Esqueceu a sua senha?</a>
                </div>

                <div className={classes.button}>
                    <button className={classes.singin} onClick={handleSingin}>Sing in</button>
                </div>
            </div>
        </div>
    )
}

export default Singin;