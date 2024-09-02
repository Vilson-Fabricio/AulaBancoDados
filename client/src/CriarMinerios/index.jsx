import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMinerios() {
  const [nomedominerio, setNomedominerio] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [tipo, setTipo] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoMinerio = { nomedominerio, tamanho, tipo };

    try {
      const response = await fetch('http://localhost:5000/minerios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoMinerio),
      });
      if (response.ok) {
        alert('Minerio cadastrado com sucesso!');
        setNomedominerio('');
        setTamanho('');
        setTipo('');
        navigate("/minerios");
      } else {
        alert('Erro ao cadastrar minerio.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar minerio:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Cadastrar Minerio</h2>
      <input
        type="text"
        placeholder="Nome do Minerio"
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
      <button type="submit">Cadastrar Minerio</button>
    </form>
    </div>
  );
}
