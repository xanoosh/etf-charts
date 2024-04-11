import SideBarMenu from './components/SideBarMenu/SideBarMenu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main>
      <SideBarMenu />
      <section className="md:ml-64 py-4 px-8">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
