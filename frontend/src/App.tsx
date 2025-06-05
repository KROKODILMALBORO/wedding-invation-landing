import React, {
    FC,
} from 'react';

import Card, {
    TYPE as CARD_TYPE,
} from 'components/Card';
import Timing from 'components/Timing';

import {
    Container,
} from './components/helpers/other';

const App: FC = () => {
    return (
        <Container>
            <Card type={CARD_TYPE.APPEAL}/>
            <Timing/>
            <Card type={CARD_TYPE.DRESS}/>
            <Card type={CARD_TYPE.WISH}/>
        </Container>
    );
};

export default App;
