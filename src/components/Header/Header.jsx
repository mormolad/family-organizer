import logo from '../../images/logo.png';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" />
      <ul>
        <li>Дневные задачи</li>
        <li>Долгосрочные</li>
        <li>Ёще...</li>
      </ul>
    </div>
  );
}

export default Header;
