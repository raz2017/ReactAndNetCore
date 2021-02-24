import React from 'react';
import { Card, Image , Icon, Button} from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activity: Activity;
}

export default function ActivityDetails({activity}: Props){
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
                </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Edit'/>
                    <Button basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>

    );
}