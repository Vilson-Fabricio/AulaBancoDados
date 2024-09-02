import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadMinerios() {
  const [minerios, setMinerios] = useState([]);


  useEffect(() => {
    const fetchMinerios = async () => {
      try {
        const response = await fetch('http://localhost:5000/minerios');
        const data = await response.json();
        setMinerios(data);
      } catch (error) {
        console.error('Erro ao buscar os minerios:', error);
      }
    };

    fetchMinerios();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/minerios/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setMinerios(minerios.filter((minerio) => minerio._id !== id));
        alert('Minerio excluído com sucesso!');
      } else {
        alert('Erro ao excluir minerio.');
      }
    } catch (error) {
      console.error('Erro ao excluir minerio:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Matrículas</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código Matrícula</th>
            <th>Nome do Aluno</th>
            <th>Turma</th>
            <th>Curso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {minerios.map((minerio) => (
            <tr key={minerio._id}>
              <td>{minerio._id}</td>
              <td>{minerio.nomedominerio}</td>
              <td>{minerio.tamanho}</td>
              <td>{minerio.tipo}</td>
              <td>
                <button onClick={() => handleDelete(minerio._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
