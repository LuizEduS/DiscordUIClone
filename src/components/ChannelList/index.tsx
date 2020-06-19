import React from 'react';
import ChannelButton from '../ChannelButton'
import { Container,Category, AddCategoryIcon } from './styles';


const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="Chat-livre" />
            <ChannelButton channelName="Gravando" />
            <ChannelButton channelName="Geral" />
            <ChannelButton channelName="Gameplay" />
            <ChannelButton channelName="AFK" />
        </Container>
    );
};

export default ChannelList;