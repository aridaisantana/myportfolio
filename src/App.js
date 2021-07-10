import './App.css';
import { useState } from 'react';
import Main from './components/MainComponent';
import 'core-js';

function App() {

  const [language, setLanguage] = useState('en');

  return (
    <div>
      <Main language={language} setLanguage={setLanguage}/>
    </div>
  );
}

export default App;
