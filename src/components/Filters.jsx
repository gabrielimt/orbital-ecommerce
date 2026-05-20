export default function Filters({ 
  categorias, toggleCategoria, precoMin, setPrecoMin, 
  precoMax, setPrecoMax, corSelecionada, setCorSelecionada, 
  apenasEstoque, setApenasEstoque, limparFiltros 
}) {
  
  const coresDisponiveis = [
    { nome: 'Preto', classBg: 'bg-black', classBorder: 'border-gray-600' },
    { nome: 'Branco', classBg: 'bg-white', classBorder: 'border-gray-400' },
    { nome: 'Azul Marinho', classBg: 'bg-[#172090]', classBorder: 'border-[#483ACC]' },
    { nome: 'Azul', classBg: 'bg-blue-500', classBorder: 'border-blue-700' },
    { nome: 'Prata', classBg: 'bg-gray-300', classBorder: 'border-gray-500' },
    { nome: 'Cinza', classBg: 'bg-gray-500', classBorder: 'border-gray-700' },
    { nome: 'Multicolorido', classBg: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500', classBorder: 'border-transparent', activeBorder: 'border-white' },
    { nome: 'Marrom', classBg: 'bg-[#8B4513]', classBorder: 'border-[#5C2E0B]' },
    { nome: 'Transparente', classBg: 'bg-transparent border-dashed', classBorder: 'border-gray-400' },
    { nome: 'Verde', classBg: 'bg-green-500', classBorder: 'border-green-700' },
    { nome: 'Vermelho', classBg: 'bg-red-500', classBorder: 'border-red-700' }
  ];

  return (
    <aside className="filtros w-full md:w-64 p-6 bg-[#03042C] border-r border-[#483ACC]/30 min-h-screen flex flex-col gap-8 font-sans">
      
      <div>
        <h2 className="text-white font-semibold text-xl mb-1">Filtros</h2>
        <button 
          onClick={limparFiltros}
          className="text-[#F897FE] text-xs hover:underline mt-1"
        >
          Limpar Filtros
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-white text-sm font-medium border-b border-[#483ACC]/30 pb-2">Categorias</h3>
        
        {['Telescópios', 'Vestuário', 'Decoração', 'Acessórios'].map((cat) => (
          <label key={cat} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">
            <input 
              type="checkbox" 
              checked={categorias.includes(cat)}
              onChange={() => toggleCategoria(cat)}
              className="w-4 h-4 accent-[#935AF0] bg-[#172090] border-[#483ACC] rounded cursor-pointer" 
            />
            {cat}
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-white text-sm font-medium border-b border-[#483ACC]/30 pb-2">Preço (R$)</h3>
        <div className="flex items-center gap-2">
          <input 
            type="number" 
            placeholder="Min" 
            value={precoMin}
            onChange={(e) => setPrecoMin(e.target.value)}
            className="w-full bg-transparent border border-[#483ACC]/50 text-white text-sm rounded-lg p-2 focus:outline-none focus:border-[#F897FE] focus:ring-1 focus:ring-[#F897FE] transition-all placeholder-gray-500"
          />
          <span className="text-gray-400">-</span>
          <input 
            type="number" 
            placeholder="Max" 
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
            className="w-full bg-transparent border border-[#483ACC]/50 text-white text-sm rounded-lg p-2 focus:outline-none focus:border-[#F897FE] focus:ring-1 focus:ring-[#F897FE] transition-all placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-white text-sm font-medium border-b border-[#483ACC]/30 pb-2">Cores</h3>
        <div className="flex flex-wrap gap-2">
          {coresDisponiveis.map((cor) => {
            const isSelected = corSelecionada === cor.nome;
            const borderStyle = isSelected 
              ? `${cor.activeBorder || 'border-[#F897FE]'} scale-125` 
              : cor.classBorder;
            
            return (
              <button 
                key={cor.nome}
                onClick={() => setCorSelecionada(isSelected ? '' : cor.nome)}
                className={`w-6 h-6 rounded-full border-2 ${cor.classBg} ${borderStyle} hover:scale-110 transition-transform`} 
                title={cor.nome}
              ></button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-white text-sm font-medium border-b border-[#483ACC]/30 pb-2">Disponibilidade</h3>
        <label className="flex items-center gap-3 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">
          <input 
            type="checkbox" 
            checked={apenasEstoque}
            onChange={(e) => setApenasEstoque(e.target.checked)}
            className="w-4 h-4 accent-[#935AF0] bg-[#172090] border-[#483ACC] rounded cursor-pointer" 
          />
          Apenas em estoque
        </label>
      </div>
    </aside>
  );
}