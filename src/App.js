import { Button, Checkbox } from '@mui/material';
import './App.css';
import SimpleBottomNavigation from './ButtonNav';

function App() {
  return (
    <div className="App">

      <Button variant="contained">Contained</Button>
      <Checkbox defaultChecked />
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
}

export default App;
