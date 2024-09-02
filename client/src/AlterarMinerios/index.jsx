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
        navigate("/minerios");
      } else {
        alert('Erro ao atualizar minério.');
      }
    } catch (error) {
      console.error('Erro ao atualizar minério:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Minério</h2>
      <input
        type="text"
        placeholder="ID do Minério"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do Minério"
        value={nomedominerio}
        onChange={(e) => setNomedominerio(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tamanho"
        value={tamanho}
        onChange={(e) => setTamanho(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />
      <button type="submit">Atualizar Minério</button>
    </form>
    </div>
  );
}
