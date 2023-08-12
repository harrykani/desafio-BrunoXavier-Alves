class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    const metodosPagamento = ["dinheiro", "credito", "debito"];
    const cardapioLanchonete = ["cafe","chantily","suco","sanduiche","queijo","salgado","combo1","combo2",];

    if (!metodosPagamento.includes(metodoDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    const pedidoCliente = itens.map((item) => item.split(",")); // ['nome', 'quantidade']
    let valorTotalPedido = 0;
    let valorFinal = 0;

    for (let item of pedidoCliente) {
      const nome = item[0];
      const quantidade = item[1];

      if (!cardapioLanchonete.includes(nome)) {
        return "Item inválido!";
      }

      if (Number(quantidade) <= 0 || !Number(quantidade)) {
        return "Quantidade inválida!";
      }

      if (nome === "chantily") {
        const encontrarPrincipal = pedidoCliente.find(
          (item) => item[0] === "cafe"
        );
        if (!encontrarPrincipal) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }
      if (nome === "queijo") {
        const encontrarPrincipal = pedidoCliente.find(
          (item) => item[0] === "sanduiche"
        );
        if (!encontrarPrincipal) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }

      switch (nome) {
        case "cafe":
          valorTotalPedido += 300 * quantidade;
          break;
        case "chantily":
          valorTotalPedido += 150 * quantidade;
          break;
        case "suco":
          valorTotalPedido += 620 * quantidade;
          break;
        case "sanduiche":
          valorTotalPedido += 650 * quantidade;
          break;
        case "queijo":
          valorTotalPedido += 200 * quantidade;
          break;
        case "salgado":
          valorTotalPedido += 725 * quantidade;
          break;
        case "combo1":
          valorTotalPedido += 950 * quantidade;
          break;
        case "combo2":
          valorTotalPedido += 750 * quantidade;
          break;
      }
    }

    if (metodoDePagamento === "credito") {
      valorFinal = valorTotalPedido + (valorTotalPedido / 100) * 3;
    }

    if (metodoDePagamento === "dinheiro") {
      valorFinal = valorTotalPedido - (valorTotalPedido / 100) * 5;
    }

    if (metodoDePagamento === "debito") {
      valorFinal = valorTotalPedido;
    }

    return `R$ ${(valorFinal / 100).toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
