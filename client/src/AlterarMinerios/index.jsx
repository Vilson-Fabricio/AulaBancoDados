import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMinerios() {
  const [id, setId] = useState('');
  const [nomedominerio, setNomedominerio] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [tipo, setTipo] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { nomedominerio, tamanho, tipo };

    try {
      const response = await fetch(`http://localhost:5000/minerios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Matrícula atualizada com sucesso!');
        navigate("/matriculas");
      } else {
        alert('Erro ao atualizar matrícula.');
      }
    } catch (error) {
      console.error('Erro ao atualizar matrícula:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Matrícula</h2>
      <input
        type="text"
        placeholder="ID da Matrícula"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do Aluno"
        value={nomedominerio}
        onChange={(e) => setAluno(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Turma"
        value={tamanho}
        onChange={(e) => setTurma(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Curso"
        value={tipo}
        onChange={(e) => setCurso(e.target.value)}
        required
      />
      <button type="submit">Atualizar Matrícula</button>
    </form>
    </div>
  );
}
