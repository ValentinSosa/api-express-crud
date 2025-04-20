
# API CRUD con Express

## 💻 ¿Cómo ejecutarlo?

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/express-api-crud.git
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

3. **Corre el servidor**:
    ```bash
    node index.js
    ```

4. La API estará corriendo en [http://localhost:3001](http://localhost:3001).

---

## 🌐 Endpoints disponibles

### 1. **Crear ítem**
- **URL**: `POST /api/items`
- **Body (JSON)**:
    ```json
    {
      "name": "Item A",
      "description": "Descripción de ejemplo"
    }
    ```

### 2. **Leer todos los ítems**
- **URL**: `GET /api/items`

### 3. **Leer un ítem por ID**
- **URL**: `GET /api/items/:id`

### 4. **Actualizar ítem**
- **URL**: `PUT /api/items/:id`
- **Body (JSON)**:
    ```json
    {
      "name": "Nuevo nombre"
    }
    ```

### 5. **Eliminar ítem**
- **URL**: `DELETE /api/items/:id`

---

## 🧪 Pruebas con Postman

Puedes probar los endpoints usando la colección de **Postman** que subí en el repositorio.

1. Abre **Postman**.
2. Importa la colección desde la carpeta `postman/` dentro del proyecto.
3. Realiza las pruebas para crear, leer, actualizar y eliminar ítems.

---

## 📂 Estructura del Proyecto

```text
express-api-crud/
│
├── index.js           # Código principal de la API
├── postman/           # Carpeta con las colecciones de pruebas de Postman
│   └── api-requests.json  # Colección de Postman
└── README.md          # Este archivo
```

---

## 📝 Notas

- Asegúrate de tener **Node.js** y **npm** instalados para poder ejecutar el servidor.
- Para detener el servidor, usa `Ctrl+C` en la terminal.
