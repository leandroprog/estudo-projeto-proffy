import React from 'react';


import whatappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

const TeacherItem : React.FC = () => {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/4483666?s=460&u=80e553025b11af70c0764ff71b01bdc9e16007f0&v=4" alt="Leandro Rocha"/>
            <div>
                <strong>Leandro Rocha</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="submit">
                <img src={whatappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;