import { useState } from 'react';
import productsData from './data/products.json'; 
import Header from './components/Header'
import Filters from './components/Filters';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer'

export default function App() {
  const [categorias, setCategorias] = useState([]);
  const [precoMin, setPrecoMin] = useState('');
  const [precoMax, setPrecoMax] = useState('');
  const [corSelecionada, setCorSelecionada] = useState('');
  const [apenasEstoque, setApenasEstoque] = useState(false);

  const toggleCategoria = (cat) => {
    setCategorias(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const limparFiltros = () => {
    setCategorias([]);
    setPrecoMin('');
    setPrecoMax('');
    setCorSelecionada('');
    setApenasEstoque(false);
  };

  const produtosFiltrados = productsData.filter(produto => {
    const matchCategoria = categorias.length === 0 || categorias.includes(produto.categoria);
    const matchPrecoMin = precoMin === '' || produto.preco >= Number(precoMin);
    const matchPrecoMax = precoMax === '' || produto.preco <= Number(precoMax);
    const matchCor = corSelecionada === '' || produto.cor === corSelecionada;
    const matchEstoque = !apenasEstoque || produto.em_estoque;
    
    return matchCategoria && matchPrecoMin && matchPrecoMax && matchCor && matchEstoque;
  });

  return (
    <div className="bg-[#03042C] min-h-screen text-white font-sans">
      <Header />
      <main className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        <div className="w-full md:w-64 flex-shrink-0">
          <Filters 
            categorias={categorias}
            toggleCategoria={toggleCategoria}
            precoMin={precoMin}
            setPrecoMin={setPrecoMin}
            precoMax={precoMax}
            setPrecoMax={setPrecoMax}
            corSelecionada={corSelecionada}
            setCorSelecionada={setCorSelecionada}
            apenasEstoque={apenasEstoque}
            setApenasEstoque={setApenasEstoque}
            limparFiltros={limparFiltros}
          />
        </div>
        <div className="flex-grow">
          <ProductCard produtos={produtosFiltrados} />
        </div>
      </main>
      <Footer />
    </div>
  );
}