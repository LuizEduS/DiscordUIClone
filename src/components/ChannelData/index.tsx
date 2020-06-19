import React from 'react';

import ChannelMessage from '../ChannelMessage';

import { Container, Messages, Inputweapper, Input, InputIcon  } from './styles';

import {Mention} from '../ChannelMessage';


const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Dudu/BatataCore"
                        date="21/06/2020"
                        content="flood"
                    />
                ))}

                <ChannelMessage 
                    author="Dudu/BatataCore" 
                    date="21/06/2020" 
                    content="Hoje é o meu aniversário!"
                />

                <ChannelMessage 
                    author="Fulano" 
                    date="21/06/2020" 
                    content={
                        <>
                            <Mention>@Dudu/BatataCore</Mention>, Parabéns!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages> 
            <Inputweapper>
                <Input placeholder="Conversar em #Chat-Livre"/>
                <InputIcon />
            </Inputweapper>
        </Container>
    );
};

export default ChannelData;