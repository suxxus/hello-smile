 import createSplash from 'scripts/containers/Splash';
 import createGreet from 'scripts/containers/Greet';
 import createSmile from 'scripts/containers/Smile';

export default React => {

   const Splash = createSplash(React),
         Greet = createGreet(React),
         Smile = createSmile(React),

       App = () => {

          return ( <div className="container">
                    <Splash />
                    <Greet />
                    <Smile />
                   </div> );
      };

      return App;
};
