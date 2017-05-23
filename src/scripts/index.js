 import React from 'react';
 import { render } from 'react-dom';
 import { Provider } from 'react-redux';
 import createStore from 'scripts/stores';
 import createApp from 'scripts/components/app';
 import { SHOW_SPLASH } from 'scripts/constants';
 import { changeView } from 'scripts/actions';

 const App = createApp(React);

 const store = createStore();


 render( <Provider store = {
         store
     }>
     <App/>
     </Provider>,
     document.querySelector('#root')
 );

 store.dispatch(changeView(SHOW_SPLASH));
