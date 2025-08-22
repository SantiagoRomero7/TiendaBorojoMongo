// 1. Función descuento
db.system.js.save({
    _id: "calcularDescuento",
    value: function(precio, porcentaje) {
      return precio - (precio * porcentaje / 100);
    }
  });
  
  // 2. Cliente activo
  db.system.js.save({
    _id: "clienteActivo",
    value: function(idCliente) {
      const cliente = db.clientes.findOne({ _id: idCliente });
      return cliente.compras.length > 3;
    }
  });
  
  // 3. Verificar stock
  db.system.js.save({
    _id: "verificarStock",
    value: function(productoId, cantidadDeseada) {
      const producto = db.productos.findOne({ _id: productoId });
      return producto.stock >= cantidadDeseada;
    }
  });
  