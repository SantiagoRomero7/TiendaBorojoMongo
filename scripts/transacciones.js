// === TRANSACCIONES EN MongoDB ===
// Base de datos: tiendaBorojo

// -------------------------------------------
// 1. SIMULAR UNA VENTA
// -------------------------------------------
const session1 = db.getMongo().startSession();
session1.startTransaction();

try {
  const tienda = session1.getDatabase("tiendaBorojo");

  // a) Descontar stock
  tienda.productos.updateOne(
    { _id: 1 },
    { $inc: { stock: -1 } }
  );

  // b) Insertar venta con _id controlado
  tienda.ventas.insertOne({
    _id: 101,
    clienteId: 1,
    productos: [{ productoId: 1, cantidad: 1 }],
    fecha: new Date(),
    total: 5000
  });

  session1.commitTransaction();
  print("✅ Venta registrada");
} catch (e) {
  print("❌ Error en la venta:", e);
  session1.abortTransaction();
}
session1.endSession();



// -------------------------------------------
// 2. SIMULAR LA ENTRADA DE NUEVO INVENTARIO
// -------------------------------------------
const session2 = db.getMongo().startSession();
session2.startTransaction();

try {
  const tienda = session2.getDatabase("tiendaBorojo");

  // a) Registrar entrada
  tienda.inventario.insertOne({
    productoId: 1,
    cantidad: 10,
    fecha: new Date(),
    proveedor: "ProveedorX"
  });

  // b) Aumentar stock
  tienda.productos.updateOne(
    { _id: 1 },
    { $inc: { stock: 10 } }
  );

  session2.commitTransaction();
  print("✅ Entrada de inventario registrada");
} catch (e) {
  print("❌ Error en entrada inventario:", e);
  session2.abortTransaction();
}
session2.endSession();



// -------------------------------------------
// 3. SIMULAR UNA DEVOLUCIÓN
// -------------------------------------------
const session3 = db.getMongo().startSession();
session3.startTransaction();

try {
  const tienda = session3.getDatabase("tiendaBorojo");

  // a) Aumentar stock
  tienda.productos.updateOne(
    { _id: 1 },
    { $inc: { stock: 1 } }
  );

  // b) Eliminar la venta (usamos la que creamos con _id = 101)
  tienda.ventas.deleteOne({ _id: 101 });

  session3.commitTransaction();
  print("✅ Devolución realizada");
} catch (e) {
  print("❌ Error en la devolución:", e);
  session3.abortTransaction();
}
session3.endSession();
