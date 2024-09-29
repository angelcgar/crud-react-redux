import { Toaster } from 'sonner';
import './App.css';
import { CreateNewUser } from './components/CreateNewUser';
import { ListOrUser } from './components/ListOrUsers';

const App = () => {
  return (
    <>
      <ListOrUser />
      <CreateNewUser />
      <Toaster richColors />
    </>
  );
};

export default App;
