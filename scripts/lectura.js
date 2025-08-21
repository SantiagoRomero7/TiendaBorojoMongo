// 1. Productos con stock > 20
db.productos.find({ stock: { $gt: 20 } });

// 2. Clientes sin compras
db.clientes.find({ compras: { $size: 0 } });
