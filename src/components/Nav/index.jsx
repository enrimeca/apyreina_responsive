import React from 'react';
import Logo from '../../assets/images/logo.png'

const Nav = ({options, color}) => {
  const [hidden, setHidden] = useState(true);
  const show = hidden? 'hidden' : '';

  const toggleMenu = (event) => {
    event.preventDefault();
    setHidden(!hidden);
  }

  return (
    <nav className={`bg-${color}-600`}>
      <h1>Soy un navegador</h1>
    </nav>
  )
}

export default Nav
