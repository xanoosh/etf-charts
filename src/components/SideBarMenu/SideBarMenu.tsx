import { Link } from 'react-router-dom';
import {
  ChartBarSquareIcon,
  HomeIcon,
  EnvelopeIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';

export default function SideBarMenu() {
  const menubar = [
    { name: 'Dashboard', link: '', icon: 'home' },
    { name: 'ETF List', link: 'api', icon: 'chart' },
    { name: 'Contact', link: 'contact', icon: 'contact' },
  ];
  const getMenuIcon = (iconString: string) => {
    const iconsClasses =
      'flex-shrink-0 w-5 h-5 text-slate-500 transition duration-75 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white';
    switch (iconString) {
      case 'home':
        return <HomeIcon className={iconsClasses} />;
      case 'chart':
        return <ChartBarSquareIcon className={iconsClasses} />;
      case 'contact':
        return <EnvelopeIcon className={iconsClasses} />;
    }
  };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-slate-500 rounded-lg sm:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="w-6 h-6" />
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-50 dark:bg-slate-800">
          <ul className="space-y-2 font-medium">
            {menubar.map(({ name, link, icon }, i) => (
              <li>
                <Link
                  key={i}
                  to={link}
                  className="flex items-center p-2 text-slate-900 rounded-lg dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 group"
                >
                  {getMenuIcon(icon)}

                  <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
