import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Splash from '../scripts/components/splash';
import Greet from '../scripts/components/greet';
import Smile from '../scripts/components/smile';

const splash = Splash(React);
const greet = Greet(React);
const smile = Smile(React);

const $ = React.createElement;

storiesOf('App', module)
    .add('Splash comp', () => {

        const props = {
            callback: action('enter: keyword event was pressed once')
        };

        return (
            $('div', { className: 'container' }, $(splash, props))
        );
    })

.add('Greet comp', () => {

    const props = {
        name: 'Arnoldo',
        callback: action('clickme: click event was pressed once')
    };

    return (
        $('div', { className: 'container' }, $(greet, props))
    );
})

.add('Smile comp', () => {

    const props = {
        name: 'Violet',
        callback: action('reload: click event was pressed once')
    };

    return (
        $('div', { className: 'container' }, $(smile, props))
    );
});
