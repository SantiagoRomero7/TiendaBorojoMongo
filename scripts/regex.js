// 1. Productos cuyo nombre empiece por "Boro"
db.productos.find({ nombre: { $regex: /^Boro/ } });

// 2. Productos cuyo nombre contenga la palabra "con"
db.productos.find({ nombre: { $regex: "con", $options: "i" } });

// 3. Clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas)
db.clientes.find({ nombre: { $regex: /z/i } });