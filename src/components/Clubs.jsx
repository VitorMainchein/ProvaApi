import { useState, useEffect } from "react"

export default function Clubs({ Clube }){
    const [clubes, setClubes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubes = async () => {
      try {
        const response = await fetch('https://api.cartola.globo.com/clubes');
        const data = await response.json();
        const clubesArray = Object.values(data); 
        setClubes(clubesArray);
        setLoading(false);
      } catch (error) {
        console.error('Erro na busca dos clubes:', error);
        setLoading(false);
      }
    };

    fetchClubes();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="all">
        <ul className="list">
          {clubes.map((clube) => (
            <li key={clube.id}>
                <div className="time">
              <img src={clube.escudos['60x60']}/>
            <div className="apelido_do_time">
                <div className="nome">
              {clube.nome}
                </div>
                <div className="apelido">
              {clube.apelido}
                </div>
            </div>
              </div>
            </li>
          ))}
        </ul></div>
      )}
    </div>
  );
};
