
document.addEventListener('DOMContentLoaded', () => {
    const pedidosSection = document.getElementById('pedidos');
    const pedidosList = document.createElement('ul');
    pedidosSection.appendChild(pedidosList);

    const pedidos = [
        { id: 1, produto: 'Floratta Blue', quantidade: 2, status: 'Enviado' },
        { id: 2, produto: 'Malbec', quantidade: 1, status: 'Processando' },
        { id: 3, produto: 'Nativa SPA Ameixa', quantidade: 3, status: 'Entregue' }
    ];

    pedidos.forEach(pedido => {
        const pedidoItem = document.createElement('li');
        pedidoItem.textContent = `Pedido #${pedido.id}: ${pedido.produto} - Quantidade: ${pedido.quantidade} - Status: ${pedido.status}`;
        pedidosList.appendChild(pedidoItem);
    });
});
