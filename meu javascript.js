const ingredientesNecessarios = [
    { nome: "farinha", quantidade: 500, unidade: "g" },
    { nome: "açúcar", quantidade: 200, unidade: "g" },
    { nome: "ovos", quantidade: 3, unidade: "unidade" },
    { nome: "manteiga", quantidade: 100, unidade: "g" }
  ];
  
  const ingredientesDisponiveis = [
    { nome: "farinha", quantidade: 300, unidade: "g" },
    { nome: "ovos", quantidade: 3, unidade: "unidade" }
  ];
  
  
  function calcularIngredientesFaltando(necessarios, disponiveis) {
    return necessarios.map(ingrediente => {
      const encontrado = disponiveis.find(i => i.nome === ingrediente.nome);
      
      if (!encontrado) {
        return ingrediente; 
      }
      
      const quantidadeFaltando = ingrediente.quantidade - encontrado.quantidade;
      
      if (quantidadeFaltando > 0) {
        return { ...ingrediente, quantidade: quantidadeFaltando };
      }
      
      return null; 
    }).filter(i => i !== null);
  }
  
  
  const ingredientesFaltantes = calcularIngredientesFaltando(ingredientesNecessarios, ingredientesDisponiveis);
  
  console.log("Ingredientes faltando:", ingredientesFaltantes);
  