// 1. Aumentar en 10 el stock del "Borojó deshidratado"
db.productos.updateOne(
    { nombre: "Borojó deshidratado" },
    { $inc: { stock: 10 } }
  );
  
  // 2. Añadir tag "bajo azúcar" a todas las bebidas
  db.productos.updateMany(
    { categoria: "Bebida" },
    { $addToSet: { tags: "bajo azúcar" } }
  );
  