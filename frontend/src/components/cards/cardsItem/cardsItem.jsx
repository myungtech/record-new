import React, { useState, useEffect } from 'react';
// @styles
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';

import moment from 'moment';
import useStyles from './styles';
// @redux
import { useDispatch } from 'react-redux';

import { deletePost, starPost } from '../../../actions/action';

// 버튼 클릭시 카드 아이템 아이디 값이 보내진다.
const CardsItem = ({ post, setCurrentId }) => {

    const [star, setStar] = useState(post.star);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleStar = () => {
        setStar(!star);
    }
    useEffect(() => {
        dispatch(starPost(post._id, star));
    }, [star]) // componentDidUpdate

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    size="small"
                    style={{ color: 'yellow' }}
                    onClick={handleStar}>
                    {post.star ? <StarIcon /> : <StarOutlineIcon />}
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button style={{ color: 'blue' }} size="small" onClick={() => setCurrentId(post._id)}><CreateIcon fontSize="default" />게시물 업데이트</Button>
                <Button style={{ color: 'blue' }} size="small" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" />게시물 삭제</Button>
            </CardActions>
        </Card>
    );
};

export default CardsItem;