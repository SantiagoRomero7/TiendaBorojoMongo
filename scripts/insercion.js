// 1. Insertar un nuevo producto
db.productos.insertOne({
    nombre: "Chocolatina de borojó",
    categoria: "Snack",
    precio: 4000,
    stock: 35,
    tags: ["dulce", "energía"]
  });
  
  // 2. Insertar un nuevo cliente
  db.clientes.insertOne({
    nombre: "Mario Mendoza",
    email: "mario@email.com",
    compras: [],
    preferencias: ["energético", "natural"]
  });
  