import React, { useState } from 'react'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <div>
      <header className="header">
        <nav
          className={click ? 'navigation-menu active' : 'navigation-menu'}
          id="navigation-menu"
        >
          <div className="header-align">
            <div className="logo">
              Dev<span>Wizard</span>
            </div>

            <ul>
              <li className="link">
                <a href="#home" className="menu" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li className="link">
                <a href="#sobre" className="menu" onClick={handleClick}>
                  Sobre
                </a>
              </li>
              <li className="link">
                <a href="#servicos" className="menu" onClick={handleClick}>
                  Serviços
                </a>
              </li>
              <li className="link">
                <a href="#projetos" className="menu" onClick={handleClick}>
                  Projetos
                </a>
              </li>
              <li className="link">
                <a href="#contato" className="menu" onClick={handleClick}>
                  Contato
                </a>
              </li>
            </ul>
            <div className="in-out-menu" onClick={handleClick}></div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
