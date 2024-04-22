import { NavLink } from 'react-router-dom';

export default function ModalTabs() {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center border-b border-slate-300 my-4">
      <li className="me-2">
        <NavLink
          to="history"
          className={({ isActive }) => {
            const navLinkClasses = 'inline-block px-2 py-1';
            return isActive
              ? `${navLinkClasses} text-violet-600 border-b-2 border-violet-600`
              : `${navLinkClasses} text-slate-700`;
          }}
        >
          History
        </NavLink>
      </li>
      <li className="me-2">
        <NavLink
          to="countries"
          className={({ isActive }) => {
            const navLinkClasses = 'inline-block px-2 py-1';
            return isActive
              ? `${navLinkClasses} text-violet-600 border-b-2 border-violet-600`
              : `${navLinkClasses} text-slate-700`;
          }}
        >
          Countries
        </NavLink>
      </li>
    </ul>
  );
}
