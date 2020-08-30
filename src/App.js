import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

/* Tasks
 create 2 component - header and memegenerator
 header will only display things
 memegenerato will ve calling to an API and holding the data
 each component should be in their own file of the same name

*/
function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
      
    </div>
  );
}

export default App;
