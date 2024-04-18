import { NavLink } from 'react-router-dom';

export default function ModalTabs() {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center border-b border-slate-200 my-4">
      <li className="me-2">
        <NavLink
          to="history"
          className={({ isActive }) => {
            const navLinkClasses = 'inline-block px-3 py-1 rounded-t-md';
            return isActive
              ? `${navLinkClasses} bg-slate-700 text-white`
              : `${navLinkClasses} text-slate-700 bg-slate-100 hover:bg-slate-300`;
          }}
        >
          History
        </NavLink>
      </li>
      <li className="me-2">
        <NavLink
          to="countries"
          className={({ isActive }) => {
            const navLinkClasses = 'inline-block px-3 py-1 rounded-t-md';
            return isActive
              ? `${navLinkClasses} bg-slate-700 text-white`
              : `${navLinkClasses} text-slate-700 bg-slate-100 hover:bg-slate-300`;
          }}
        >
          Countries
        </NavLink>
      </li>
    </ul>
  );
}
