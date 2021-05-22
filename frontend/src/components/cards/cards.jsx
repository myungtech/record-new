import React from 'react';

// @redux 스토어에서  데이터 가져오기
import { useSelector } from 'react-redux';
// @styles
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
// @component
import CardsItem from './cardsItem/cardsItem';

const Cards = ({ setCurrentId }) => {

    // store에 접근  posts = reducrs의 posts
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    // console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing={3}
            >
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <CardsItem post={post} setCurrentId={setCurrentId} />
                    </Grid>

                ))}

            </Grid>
        )
    )
}

export default Cards;