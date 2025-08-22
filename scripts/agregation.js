// 1. Productos más vendidos (suma total de unidades vendidas por producto)
db.ventas.aggregate([
    { $unwind: "$productos" },
    { $group: { _id: "$productos.productoId", totalVendido: { $sum: "$productos.cantidad" } } },
    { $sort: { totalVendido: -1 } }
  ]);
  
  // 2. Agrupar clientes por cantidad de compras realizadas
  db.clientes.aggregate([
    { $project: { nombre: 1, totalCompras: { $size: "$compras" } } },
    { $group: { _id: "$totalCompras", clientes: { $push: "$nombre" } } },
    { $sort: { _id: 1 } }
  ]);
  
  // 3. Mostrar el total de ventas por mes (usa $group y $month)
  // Si "fecha" es tipo string, usa $toDate. Si ya es tipo Date, puedes omitirlo.
  db.ventas.aggregate([
    { $group: {
        _id: { anio: { $year: { $toDate: "$fecha" } }, mes: { $month: { $toDate: "$fecha" } } },
        totalVentas: { $sum: "$total" }
      }
    },
    { $sort: { "_id.anio": 1, "_id.mes": 1 } }
  ]);
  
  // 4. Calcular el promedio de precios por categoría de producto
  db.productos.aggregate([
    { $group: { _id: "$categoria", promedioPrecio: { $avg: "$precio" } } },
    { $sort: { promedioPrecio: -1 } }
  ]);
  
  // 5. Mostrar los 3 productos con mayor stock (orden descendente)
  db.productos.aggregate([
    { $sort: { stock: -1 } },
    { $limit: 3 },
    { $project: { _id: 0, nombre: 1, stock: 1 } }
  ]);