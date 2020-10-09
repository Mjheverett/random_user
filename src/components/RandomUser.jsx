import React from "react";

import 'bulma/css/bulma.css';
import "./RandomUser.css";

import { Card, CardContent, CardImage, Container, Image, Media, MediaContent, Subtitle, Title } from 'bloomer';

const RandomUser = props => {
    const { userData } = props;
    return (
        <Container isFluid>
            {userData.map(user => (
                <Card key={user.login.uuid}>
                    <CardImage>
                        <Image isRatio='4:3' src={user.picture.large} alt="Profile" />
                    </CardImage>
                    <CardContent>
                        <Media>
                            <MediaContent>
                                <Title isSize={4}>{user.name.first} {user.name.last}</Title>
                            </MediaContent>
                        </Media>
                    </CardContent>
                </Card>
            ))}
        </Container>
    )
}

export default RandomUser;