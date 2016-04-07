 import React from 'react';
 import { render } from 'react-dom';
 import { Provider } from 'react-redux';
 import createStore from 'scripts/stores';
 import createApp from 'scripts/components/app';


 const App = createApp(React);

 render( <Provider store = {
         createStore({
             name: '',
             views: {
                 splash: true,
                 greet: false,
                 smile: false
             }
         })
     }>
      <App/>
     </Provider>,
     document.querySelector('#root')
 );
