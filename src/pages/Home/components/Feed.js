import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

/*const useStyles = makeStyles((theme) => ({
    root: {

    }
}));*/

const posts = [
    {
        id: 1,
        author:{
            id: 1,
            name: 'Caroline Martins',
            username: 'carolmb',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Criando um App do zero ultilizando react.js',
        date: 'March 23, 2021',
        description: 'Fala pessoal, qual o seu framework favorito?',
        hashtags: '#dotnet, #js, #react',
        image: '/images/posts/post1.png'
    },
    {
        id: 2,
        author:{
            id: 1,
            name: 'Caroline Martins',
            username: 'carolmb',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Laravel e Adonis',
        date: 'March 23, 2021',
        description: 'Qual sua o seu lado da força dev?',
        hashtags: '#laravel, #adonis, #php, javascript, #node',
        image: '/images/posts/post2.png'
    }
]

function Feed() {

    //const classes = useStyles();

    return (
        <div>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    )
}

export default Feed;