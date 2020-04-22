import React, { useState } from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import './NewGoal.css';

const NewGoal = props => {

    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }

        setEnteredText('');

        props.onAddGoal(newGoal);
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

    
    return (
        <Container maxWidth="sm">
            <form onSubmit={addGoalHandler}>
                <Input inputProps={{ 'aria-label': 'description' }} value={enteredText} onChange={textChangeHandler} />
                <Button type="submit" variant="contained" color="primary">Add Goal</Button>
            </form>
        </Container>
    );
};

export default NewGoal;
