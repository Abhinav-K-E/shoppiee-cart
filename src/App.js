import './App.css';

import {Header} from './components'

import {AllRoutes} from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
