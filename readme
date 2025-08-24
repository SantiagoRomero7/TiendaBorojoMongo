# 🛒 La Tienda del Borojó — 🍃 MongoDB

## 📖 Descripción del proyecto y del escenario

Este repositorio contiene un **mini–ecosistema de MongoDB** 🗄️ diseñado para modelar el flujo de datos de una tienda ficticia 🏬 especializada en la comercialización de productos derivados del **borojó** 🥭, una fruta tropical reconocida por sus propiedades energizantes ⚡ y su valor cultural 🌎 en varias regiones de Latinoamérica.  

El proyecto se centra en cinco colecciones principales 📂 que conforman la base de datos:  

- **📦 Productos:** catálogo de artículos como jugos 🥤, galletas 🍪, polvos energizantes 💥 y otros derivados del borojó.  
- **🧑‍🤝‍🧑 Clientes:** registros de consumidores con datos de contacto 📇, historial de compras 🛍️ y preferencias ⭐.  
- **💳 Ventas:** operaciones realizadas, relacionando clientes 👥 y productos adquiridos 🎁.  
- **🚚 Proveedores:** compañías que abastecen la tienda con productos terminados 📦 o materia prima 🌱.  
- **📊 Inventario:** gestión de stock 📉, lotes 🔖 y entradas de mercancía 📥.  

La práctica busca ejercitar distintos aspectos del manejo de **MongoDB**:  
- ✍️ Operaciones **CRUD básicas**.  
- 🔍 Uso de **expresiones regulares** para consultas textuales.  
- 🧩 Manejo de **operadores sobre arrays**.  
- 📈 **Aggregation Framework** para consultas analíticas.  
- 🛠️ Creación de **funciones personalizadas** en `system.js`.  
- 🤝 Implementación de **transacciones multi-documento**.  
- 🚀 Diseño y evaluación de **índices** para mejorar el rendimiento.  

---

## ⚙️ Preparación del entorno

1. **Instala MongoDB Community Edition** (incluye `mongod` y `mongosh`) desde la [documentación oficial](https://www.mongodb.com/try/download/community).  
2. Instala también **MongoDB Database Tools** si planeas trabajar con `mongoimport` y `mongoexport`.  
3. Clona este repositorio y entra en la carpeta raíz:  
   ```bash
   git clone https://github.com/SantiagoRomero7/TiendaBorojoMongo.git.
   cd TiendaBorojoMongo-main
   ```
4. (Opcional) Crea explícitamente la base de datos:  
   ```bash
   mongosh --eval "use tiendaBorojo"
   ```

> 💡 *Consejo:* se recomienda trabajar en un entorno con al menos MongoDB **v5.0+** para garantizar compatibilidad total con transacciones y operaciones de agregación.

---

## ⬆️ Cargar el dataset

Existen dos métodos principales para poblar la base de datos.

### **Opción A — con `mongoimport` (recomendada):**
```bash
mongoimport --db tiendaBorojo --collection productos   --file dataset/productos.json   --jsonArray
mongoimport --db tiendaBorojo --collection clientes    --file dataset/clientes.json    --jsonArray
mongoimport --db tiendaBorojo --collection ventas      --file dataset/ventas.json      --jsonArray
mongoimport --db tiendaBorojo --collection proveedores --file dataset/proveedores.json --jsonArray
mongoimport --db tiendaBorojo --collection inventario  --file dataset/inventario.json  --jsonArray
```

### **Opción B — desde `mongosh`:**
```javascript
use tiendaBorojo
db.productos.insertMany(JSON.parse(cat('dataset/productos.json')))
db.clientes.insertMany(JSON.parse(cat('dataset/clientes.json')))
db.ventas.insertMany(JSON.parse(cat('dataset/ventas.json')))
db.proveedores.insertMany(JSON.parse(cat('dataset/proveedores.json')))
db.inventario.insertMany(JSON.parse(cat('dataset/inventario.json')))
```

> ✅ Esta segunda opción es útil si no tienes instaladas las herramientas de `mongoimport`.  

---

## ▶️ Cómo ejecutar los scripts

Cada grupo de ejercicios se encuentra modularizado en un archivo `.js`. Para ejecutarlos desde la raíz del repositorio:  

```bash
# Ejemplo: ejecutar inserciones
mongosh "tiendaBorojo" scripts/insercion.js

# Ejecutar cada módulo según el tema
mongosh "tiendaBorojo" scripts/lectura.js
mongosh "tiendaBorojo" scripts/actualizacion.js
mongosh "tiendaBorojo" scripts/eliminacion.js
mongosh "tiendaBorojo" scripts/regex.js
mongosh "tiendaBorojo" scripts/arrays.js
mongosh "tiendaBorojo" scripts/agregation.js
mongosh "tiendaBorojo" scripts/system.js
mongosh "tiendaBorojo" scripts/indexacion.js
```

### ⚠️ Nota sobre transacciones
Para ejecutar `transacciones.js`, es indispensable contar con un **Replica Set** activo.  
En local puedes iniciar uno de un solo nodo:  
```bash
mongod --replSet rs0 --dbpath ./data --bind_ip 127.0.0.1
mongosh --eval "rs.initiate()"
```
Luego:  
```bash
mongosh "tiendaBorojo" scripts/transacciones.js
```

---

## 📂 Estructura del repositorio

```
📦 TiendaBorojoMongo-main
┣ 📁 dataset
┃ ┣ 📄 clientes.json
┃ ┣ 📄 inventario.json
┃ ┣ 📄 productos.json
┃ ┣ 📄 proveedores.json
┃ ┗ 📄 ventas.json
┣ 📁 scripts
┃ ┣ 📄 actualizacion.js
┃ ┣ 📄 agregation.js
┃ ┣ 📄 arrays.js
┃ ┣ 📄 eliminacion.js
┃ ┣ 📄 indexacion.js
┃ ┣ 📄 insercion.js
┃ ┣ 📄 lectura.js
┃ ┣ 📄 regex.js
┃ ┣ 📄 system.js
┃ ┗ 📄 transacciones.js
┣ 📁 capturas
┃ ┣ 📄 consulta-1.png
┃ ┣ 📄 consulta-2.png
┃ ┣ 📄 consulta-3.png
┃ ┣ 📄 consulta-4.png
┃ ┣ 📄 consulta-5.png
┃ ┣ 📄 consulta-6.png
┃ ┣ 📄 consulta-7.png
┃ ┣ 📄 consulta-8.png
┃ ┣ 📄 consulta-9.png
┃ ┣ 📄 consulta-10.png
┃ ┣ 📄 consulta-11.png
┃ ┣ 📄 consulta-12.png
┃ ┗ 📄 consulta-13.png
┗ 📄 README.md
```

---

## ✅ Listado de ejercicios y archivos

Cada bloque incluye la explicación del objetivo, su importancia en un entorno real y el script donde fue implementado.

### 🔹 Inserción — `scripts/insercion.js`
- Agrega **"Chocolatina de borojó"** a `productos` y el cliente **"Mario Mendoza"**.  
- Objetivo: practicar `insertOne`/`insertMany`, garantizar consistencia de datos y validar la estructura del documento.

### 🔹 Lectura — `scripts/lectura.js`
- Consulta de productos con `stock > 20`.  
- Listado de clientes con **cero compras** (`$size: 0`).  
- Objetivo: desarrollar filtros simples, aplicar proyecciones y explorar selectividad.

### 🔹 Actualización — `scripts/actualizacion.js`
- Incrementa stock de **"Borojó deshidratado"** (`$inc`).  
- Añade tag **"bajo azúcar"** a bebidas (`$addToSet`).  
- Objetivo: realizar actualizaciones atómicas y aplicar condiciones de negocio.

### 🔹 Eliminación — `scripts/eliminacion.js`
- Elimina un cliente por `email`.  
- Elimina productos con `stock < 5`.  
- Objetivo: controlar eliminaciones masivas de forma segura (`deleteOne`/`deleteMany`).

### 🔹 Expresiones Regulares — `scripts/regex.js`
- Búsqueda de nombres que **empiecen** por `Boro`.  
- Búsqueda de productos que **contengan** `"con"`.  
- Filtrado de clientes con la letra `z` (case-insensitive).  
- Objetivo: consultas textuales más flexibles en campos de texto.

### 🔹 Operadores en Arrays — `scripts/arrays.js`
- Clientes que tengan `"natural"` en `preferencias`.  
- Productos que cumplan con `["natural","orgánico"]` (`$all`).  
- Validación de productos con **más de un tag** (`$size`).  
- Objetivo: demostrar el poder de MongoDB para manejar datos semiestructurados.

### 🔹 Aggregation Framework — `scripts/agregation.js`
- **Productos más vendidos** (`$group` + `$sum`).  
- **Clientes por cantidad de compras** (`$group`).  
- **Ventas por mes** (`$month`).  
- **Promedio de precios por categoría** (`$avg`).  
- **Top 3** productos por `stock` (`$sort` + `$limit`).  
- Objetivo: aplicar análisis en tiempo real sin necesidad de herramientas externas.

### 🔹 Funciones en `system.js` — `scripts/system.js`
- `calcularDescuento(precio, porcentaje)`: retorna precio final.  
- `clienteActivo(idCliente)`: devuelve `true` si el cliente supera cierto umbral de compras.  
- `verificarStock(productoId, cantidadDeseada)`: evalúa disponibilidad de inventario.  
- Objetivo: encapsular lógica de negocio en funciones reutilizables.

### 🔹 Transacciones — `scripts/transacciones.js`
- **Venta**: descuenta stock e inserta en `ventas`.  
- **Entrada de inventario**: registra el lote y actualiza existencias.  
- **Devolución**: repone stock y elimina la venta asociada.  
- Objetivo: garantizar atomicidad de operaciones complejas.

### 🔹 Indexación — `scripts/indexacion.js`
- Índice en `productos.nombre`.  
- Índice compuesto `productos(categoria, precio)`.  
- Índice en `clientes.email`.  
- Verificación con `explain("executionStats")`.  
- Objetivo: demostrar cómo los índices mejoran la velocidad de búsqueda y reducen el consumo de recursos.

---

## 🧪 Datos de ejemplo

Los archivos JSON en `dataset/` incluyen información ficticia de productos, clientes, proveedores y transacciones. Su propósito es reproducir de manera realista el flujo de datos de la tienda, facilitando la experimentación con consultas y pruebas de rendimiento.

---

## 📷 Evidencias (capturas)

### Lectura

#### 1) Productos con stock > 20
![Lectura 1](capturas/consulta-1.png)

#### 2) Clientes sin compras
![Lectura 2](capturas/consulta-2.png)

---

### Consultas con Expresiones Regulares

#### 1) Productos cuyo nombre empiece por "Boro"
![Regex 1](capturas/consulta-3.png)

#### 2) Productos cuyo nombre contenga "con"
![Regex 2](capturas/consulta-4.png)

#### 3) Clientes cuyo nombre tenga la letra "z"
![Regex 3](capturas/consulta-5.png)

---

### Operadores en consultas sobre arrays

#### 1) Clientes con "natural" en sus preferencias
![Arrays 1](capturas/consulta-6.png)

#### 2) Productos con los tags "natural" y "orgánico" ($all)
![Arrays 2](capturas/consulta-7.png)

#### 3) Productos con más de un tag
![Arrays 3](capturas/consulta-8.png)

---

### Aggregation Framework con Pipelines

#### 1) Productos más vendidos (suma de unidades)
![Aggregation 1](capturas/consulta-9.png)

#### 2) Clientes agrupados por cantidad de compras
![Aggregation 2](capturas/consulta-10.png)

#### 3) Total de ventas por mes
![Aggregation 3](capturas/consulta-11.png)

#### 4) Promedio de precios por categoría
![Aggregation 4](capturas/consulta-12.png)

#### 5) Top 3 productos con mayor stock
![Aggregation 5](capturas/consulta-13.png)



---

# 🏁 Conclusión

Este proyecto permitió integrar, de manera práctica y ordenada, los principales fundamentos y técnicas avanzadas del ecosistema **MongoDB**, consolidando conocimientos esenciales para el trabajo con bases de datos NoSQL en contextos reales.  

A través de la simulación de una tienda dedicada a la comercialización de productos derivados del **borojó**, se abordaron los siguientes aspectos:  

- **CRUD básico y avanzado**, consolidando la capacidad de realizar inserciones, consultas, actualizaciones y eliminaciones de manera atómica y controlada.  
- Uso de **expresiones regulares** para potenciar la búsqueda textual y enriquecer las consultas sobre los datos almacenados.  
- Manejo de **operadores en arrays**, lo cual facilitó explorar escenarios más dinámicos donde los atributos no son estáticos, sino colecciones flexibles de información.  
- Implementación de **Aggregation Pipelines**, que permitió realizar análisis estadísticos, resúmenes de ventas, identificación de tendencias de consumo y clasificación de productos.  
- Desarrollo de **funciones en `system.js`**, lo que introdujo una capa de lógica reutilizable dentro de la propia base de datos, potenciando la eficiencia y la coherencia.  
- **Transacciones multi-documento**, aplicadas a escenarios de venta, devoluciones e inventario, que garantizaron la atomicidad y confiabilidad de los procesos críticos del negocio.  
- **Indexación estratégica**, clave para optimizar consultas y asegurar un rendimiento escalable frente al crecimiento de la información.  

Más allá del aspecto técnico, este trabajo representa un ejercicio de **pensamiento crítico y modelado de información**, donde cada decisión de diseño tiene un impacto directo en la facilidad de consulta, la escalabilidad y la solidez del sistema.  
De esta manera, la experiencia no solo enriquece el dominio de MongoDB, sino que también refuerza competencias transversales en la gestión de proyectos de datos: desde la estructuración de colecciones y datasets iniciales hasta la optimización y documentación final.  

En conclusión, el proyecto de **La Tienda del Borojó** simboliza cómo una base de datos bien estructurada puede convertirse en el corazón de un ecosistema digital, capaz de sostener procesos de negocio, análisis de información y toma de decisiones.  


---

# 📌 Notas

- Se recomienda MongoDB **≥ 4.2** para ejecutar transacciones.  
- En Windows, utilizar **PowerShell** o **CMD** desde la raíz del proyecto para que las rutas relativas funcionen correctamente.  
- Para exportar resultados a JSON o CSV:  
  ```bash
  mongoexport --db tiendaBorojo --collection productos --out productos.csv --type=csv
  ```
- También puedes usar en `mongosh`:  
  ```javascript
  db.productos.find().toArray().forEach(printjson)
  ```

---
## 👨‍💻 DESARROLLADORES

-🧑‍💻 Ricardo Palomino  
-🧑‍💻 Santiago Romero  


> ✨ "Los datos son como semillas: bien cuidados, crecen en conocimiento; mal gestionados, se marchitan en el olvido."