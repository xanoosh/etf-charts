import { NavLink } from 'react-router-dom';
import {
  ChartBarSquareIcon,
  HomeIcon,
  EnvelopeIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';
import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';

export default function SideBarMenu() {
  const menubar = [
    { name: 'Dashboard', link: '', icon: 'home' },
    { name: 'ETF List', link: 'etf', icon: 'chart' },
    { name: 'Contact', link: 'contact', icon: 'contact' },
  ];
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const getMenuIcon = (iconString: string) => {
    const iconsClasses =
      'flex-shrink-0 w-5 h-5 transition duration-75 text-white';
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
    <div ref={ref}>
      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg md:hidden bg-slate-700 focus:outline-none focus:ring-2 text-slate-200 hover:bg-slate-600 hover:text-white focus:ring-slate-600"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="w-6 h-6" />
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 ${
          isOpen ? '' : '-translate-x-full'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-800">
          <ul className="space-y-2 font-medium">
            {menubar.map(({ name, link, icon }, i) => (
              <li key={i}>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={link}
                  className={({ isActive }) => {
                    const navLinkClasses =
                      'flex items-center p-2 rounded-lg text-white group';
                    return isActive
                      ? `${navLinkClasses} bg-violet-600`
                      : `${navLinkClasses} hover:bg-slate-700`;
                  }}
                >
                  {getMenuIcon(icon)}

                  <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
