// 1. Índice en nombre de productos
db.productos.createIndex({ nombre: 1 });

// 2. Índice compuesto categoria + precio
db.productos.createIndex({ categoria: 1, precio: 1 });

// 3. Índice en email de clientes
db.clientes.createIndex({ email: 1 }, { unique: true });

// 4. Usar explain
db.productos.find({ nombre: "Borojó fresco" }).explain("executionStats");
