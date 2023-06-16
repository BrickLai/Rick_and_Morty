import { NavLink } from 'react-router-dom';
import logo from '../picture/Rick_and_Morty.svg.png';

function Header() {
  return (
    <div className='headerlinks'>
      <div>
      <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to='/'
            >
              <img src={logo} alt='logo' className='logo-image' />
            </NavLink>
        </li>
        </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to='/ratings'
            >
              Introduction
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to='/saving-list'
            >
              Saving List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to='/Account'
            >
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;