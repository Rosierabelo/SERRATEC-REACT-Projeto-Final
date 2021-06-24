import React, { useEffect, useState } from 'react';
import busca from '../Http'
import { Link } from 'react-router-dom'


const Categoria = () => {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        busca(`/categoria`, setCategorias)
    }, [])

    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map((categoria) => (
                    <Link to={`/categoria/${categoria.id}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default Categoria