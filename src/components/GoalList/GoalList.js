import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

import './GoalList.css';

const GoalList = props => {
    return (
        <Container maxWidth="sm">
            {props.goals.map((goal) => {
                return <Container maxWidth="sm">
                    <Card variant="outlined"><CardContent>{goal.text}</CardContent></Card></Container>
            })}
        </Container>
    );
};

export default GoalList;
