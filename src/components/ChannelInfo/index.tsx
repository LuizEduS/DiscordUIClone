import React from 'react';

import { Container, Hashtagicon, Title, Separator, Description } from './styles';


const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <Hashtagicon />
            <Title>Chat-Livre</Title>
            <Separator />
            <Description>Canal aberto para conversas</Description>
        </Container>
    );
};

export default ChannelInfo;