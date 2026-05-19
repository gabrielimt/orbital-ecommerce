export default function Filters({ 
  categorias, toggleCategoria, precoMin, setPrecoMin, 
  precoMax, setPrecoMax, corSelecionada, setCorSelecionada, 
  apenasEstoque, setApenasEstoque, limparFiltros 
}) {
  return (
    <aside className="filtros w-full md:w-64 p-6 bg-[#03042C] border-r border-[#483ACC]/30 min-h-screen flex flex-col gap-8 font-sans">
      
      <div>
        <h2 className="text-white font-semibold text-xl mb-1">Filtros</h2>
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
          <button 
            onClick={() => setCorSelecionada(corSelecionada === 'Preto' ? '' : 'Preto')}
            className={`w-6 h-6 rounded-full bg-black border ${corSelecionada === 'Preto' ? 'border-[#F897FE] scale-125' : 'border-gray-600'} hover:scale-110 transition-transform`} 
            title="Preto"
          ></button>
          <button 
            onClick={() => setCorSelecionada(corSelecionada === 'Branco' ? '' : 'Branco')}
            className={`w-6 h-6 rounded-full bg-white border ${corSelecionada === 'Branco' ? 'border-[#F897FE] scale-125' : 'border-gray-400'} hover:scale-110 transition-transform`} 
            title="Branco"
          ></button>
          <button 
            onClick={() => setCorSelecionada(corSelecionada === 'Azul Marinho' ? '' : 'Azul Marinho')}
            className={`w-6 h-6 rounded-full bg-[#172090] border ${corSelecionada === 'Azul Marinho' ? 'border-[#F897FE] scale-125' : 'border-[#483ACC]'} hover:scale-110 transition-transform`} 
            title="Azul Marinho"
          ></button>
          <button 
            onClick={() => setCorSelecionada(corSelecionada === 'Prata/Cinza' ? '' : 'Prata/Cinza')}
            className={`w-6 h-6 rounded-full bg-gray-400 border ${corSelecionada === 'Prata/Cinza' ? 'border-[#F897FE] scale-125' : 'border-gray-500'} hover:scale-110 transition-transform`} 
            title="Prata/Cinza"
          ></button>
          <button 
            onClick={() => setCorSelecionada(corSelecionada === 'Multicolorido/Nebulosa' ? '' : 'Multicolorido/Nebulosa')}
            className={`w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border ${corSelecionada === 'Multicolorido/Nebulosa' ? 'border-white scale-125' : 'border-transparent'} hover:scale-110 transition-transform`} 
            title="Multicolorido/Nebulosa"
          ></button>
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