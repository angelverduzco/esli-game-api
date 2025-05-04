# ESLI GAME API

ESLI GAME API es una aplicación diseñada por **Esli Laboratios** para gestionar y consultar las mejores puntuaciones del videojuego [Esli: Última Misión](https://github.com/hanzeelvilla/esli-ultima-mision). Proporciona una API RESTful que permite a los usuarios consultar y actualizar los mejores puntajes.

![Logo Esli Laboratorios](/assets/logo_equipo.jpg)

## Características

- **Consultar los 10 mejores puntajes:** Obtén una lista de los jugadores con las puntuaciones más altas.
- **Actualizar nuevos puntajes:** Permite actualizar los nuevos puntajes altos al sistema.
- **Validación de datos:** Asegura la integridad de los datos enviados al servidor.
- **Persistencia de datos:** Utiliza MongoDB para almacenar los puntajes de manera segura.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16.x o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)
- [REST CLIENT](https://marketplace.visualstudio.com/items/?itemName=humao.rest-client)(opcional)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:

    ```bash
    git https://github.com/angelverduzco/esli-game-api.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd esli-api
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Configura las variables de entorno en un archivo `.env` en la raíz del proyecto. Ejemplo:

    ```
    MONGO_URI=mongodb://localhost:27017/esli-api
    PORT=3000
    ```

5. Inicia el servidor:
    ```bash
    npm start
    ```
6. Inserta los Highscores default:
    ```bash
    npm run insert-highscores
    ```

## Uso

Puedes probar los endpoints con el archivo `test_endpoints.test` si tienes instalada la extensión **REST CLIENT** en VS Code. Da clic en **Send request** para ejecutar cada petición.

## Endpoints

### Entry Point

- **Método**: `GET`
- **Endpoint**: `GET http://localhost:3000`
- **Descripción**: Punto de entrada a la API. Puede usarse para comprobar si el servidor está corriendo correctamente o para mostrar un mensaje de bienvenida.

### Consultar Highscores

- **Método:** `GET`
- **Endpoint:** `/api/highscores`
- **Descripción:** Devuelve una lista de los 10 mejores puntajes ordenados de mayor a menor.

Respuesta exitosa:

```JSON
[
  {
    "rank": 1,
    "gamertag": "HANZ",
    "points": 12000,
    "shots": 300,
    "destroyedEnemies": 50,
    "destroyedBosses": 2,
    "gameTime": 360
  },
]
```

### Actualizar un Highscore (solo si supera el más bajo)

- **Método:** `PUT`
- **Endpoint:** `/api/highscores`
- **Descripción:** Intenta reemplazar el highscore con menor puntaje actual si el nuevo puntaje enviado en el **cuerpo de la solicitud** es mayor.

Cuerpo de la solicitud (JSON):
```json
{
   "gamertag": "TUSA",
   "points": 1000,
   "shots": 50,
   "destroyedEnemies": 20,
   "destroyedBosses": 2,
   "gameTime": 300
}
```

Respuesta exitosa:
```JSON
{
  "gamertag": "TUSA",
  "points": 9999,
  "shots": 9999,
  "destroyedEnemies": 9999,
  "destroyedBosses": 9999,
  "gameTime": 9999
}
```

### Errores posibles
- `404 Not Found`: No se encontró un highscore con ese rank.
- `400 Bad Request`: Datos inválidos según las validaciones del modelo.
- `500 Internal Server Error`: Error inesperado en el servidor.

## Estructura del proyecto

```
esli-game-api/
├── .env
├── .gitignore
├── package.json
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── highscores.controller.js
│   ├── models/
│   │   └── highscore.model.js
│   ├── routes/
│   │   ├── index.js
│   │   └── highscores.js
│   └── scripts/
│       └── top10Default.js
```

## Tecnologías utilizadas

- **Backend:** [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/)
- **Base de datos:** [MongoDB](https://www.mongodb.com/) con [Mongoose](https://mongoosejs.com/)
- **Validación y seguridad:** [dotenv](https://github.com/motdotla/dotenv), [cors](https://github.com/expressjs/cors)
