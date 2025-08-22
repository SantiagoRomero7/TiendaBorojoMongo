// 1. Clientes con "natural" en preferencias
db.clientes.find({ preferencias: "natural" });

// 2. Productos con "natural" y "orgánico"
db.productos.find({ tags: { $all: ["natural", "orgánico"] } });

// 3. Productos con más de 1 tag
db.productos.find({ tags: { $size: 2 } }); // si tienen solo 2 tags
db.productos.find({ "tags.1": { $exists: true } }); // general
