import { NavLink } from 'react-router-dom';

export default function ModalNav() {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center border-b border-slate-300 my-4">
      <li className="me-2">
        <NavLink
          to="history"
          className={({ isActive }) => {
            const navLinkClasses =
              'inline-block px-2 py-1 hover:text-violet-500';
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
            const navLinkClasses =
              'inline-block px-2 py-1 hover:text-violet-500';
            return isActive
              ? `${navLinkClasses} text-violet-600 border-b-2 border-violet-600`
              : `${navLinkClasses} text-slate-700`;
          }}
        >
          Countries
        </NavLink>
      </li>
      <li className="me-2">
        <NavLink
          to="description"
          className={({ isActive }) => {
            const navLinkClasses =
              'inline-block px-2 py-1 hover:text-violet-500';
            return isActive
              ? `${navLinkClasses} text-violet-600 border-b-2 border-violet-600`
              : `${navLinkClasses} text-slate-700`;
          }}
        >
          Description
        </NavLink>
      </li>
    </ul>
  );
}
