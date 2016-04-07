import test from 'tape';
import React from 'react';
import mock from 'mock';
import { shallow } from 'enzyme';
import { Splash, Greet, Smile } from 'tests/fixtures/components/app';

const App = mock('scripts/components/app', {
    'scripts/containers/Splash': Splash,
    'scripts/containers/Greet': Greet,
    'scripts/containers/Smile': Smile

}, require).default;

const $ = React.createElement;
const app = App(React);
const before = test;
const after = test;


before('description: App component', t => {
    t.end();
});

test('App comp', t => {

    const actual = shallow($(app)).children().length,
        expect = 3;
    t.equal(actual, expect, 'should render correctly');

    t.end();
});

after('end test ---------------------------------------', t => {
    t.end();
});
