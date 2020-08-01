import React from './node_modules/react';
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button'


function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="teste" />
            </a>
            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
            
        </nav>
    )
}

export default Menu