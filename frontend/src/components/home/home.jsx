import React, { useEffect, useState } from 'react';
// @components
import Cards from '../cards/cards';
import Form from '../form/form';
//@redux
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/action';

import { HomeContainer, HomeGridContainer } from './homeCSS';
const Home = () => {

    // update를 위해 아이디를 가져오자
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);

    return (
        <HomeContainer>
            <HomeGridContainer>
                <Cards setCurrentId={setCurrentId} />
                <Form currentId={currentId}
                    setCurrentId={setCurrentId} />
            </HomeGridContainer>
        </HomeContainer>
    )
}

export default Home
