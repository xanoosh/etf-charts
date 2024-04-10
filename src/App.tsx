import Menu from './components/Menu/Menu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <Menu />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default App;
