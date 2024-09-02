import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h1>SISTEMA MINERADORA</h1>
            <div className="card-container">
                <Link to="/minerios/cadastrar" className="card">
                    <div>Registrar Minério</div>
                </Link>
                <Link to="/minerios" className="card">
                    <div>Lista de minérios</div>
                </Link>
                <Link to="/minerios/alterar" className="card">
                    <div>Editar minério</div>
                </Link>
            </div>
        </div>
    );
}
