import { Link } from 'react-router-dom';

export default function Menu() {
  const menubar = [
    { name: 'Description', link: '' },
    { name: 'ETF API', link: 'api' },
  ];
  return (
    <nav>
      {menubar.map(({ name, link }, i) => (
        <Link key={i} to={link}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
