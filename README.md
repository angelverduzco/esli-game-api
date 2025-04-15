# ESLI GAME API

ESLI GAME API es una aplicación diseñada para gestionar y consultar puntuaciones altas del videojuego Esli: Última Misión. Proporciona una API RESTful que permite a los usuarios consultar los mejores puntajes y registrar nuevos puntajes altos.

## Características

- **Consultar los 10 mejores puntajes:** Obtén una lista de los jugadores con las puntuaciones más altas.
- **Registrar nuevos puntajes:** Permite agregar nuevos puntajes altos al sistema.
- **Validación de datos:** Asegura la integridad de los datos enviados al servidor.
- **Persistencia de datos:** Utiliza MongoDB para almacenar los puntajes de manera segura.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16.x o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

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

## Uso

### Endpoints principales

- **Base URL:** `/api`

#### Consultar puntajes altos
- **Método:** `GET`
- **Endpoint:** `/api/highscores`
- **Descripción:** Devuelve una lista de los 10 mejores puntajes ordenados de mayor a menor.

#### Registrar un nuevo puntaje
- **Método:** `POST`
- **Endpoint:** `/api/highscores`
- **Descripción:** Registra un nuevo puntaje alto.
- **Cuerpo de la solicitud (JSON):**
  ```json
  {
      "gamertag": "ABC",
      "points": 1000,
      "shots": 50,
      "destroyedEnemies": 20,
      "destroyedBosses": 2,
      "gameTime": 300
  }
  ```

## Estructura del proyecto

```
.esli-api/
├── .env                # Variables de entorno
├── .gitignore          # Archivos ignorados por Git
├── package.json        # Dependencias y scripts del proyecto
├── src/
│   ├── app.js          # Configuración principal de la aplicación
│   ├── server.js       # Punto de entrada del servidor
│   ├── config/
│   │   └── db.js       # Configuración de la base de datos
│   ├── controllers/
│   │   └── highscores.controller.js # Lógica de los endpoints
│   ├── models/
│   │   └── highscore.model.js       # Modelo de datos de Highscore
│   ├── routes/
│       ├── index.js    # Rutas principales
│       └── highscores.js # Rutas relacionadas con Highscores
```

## Tecnologías utilizadas

- **Backend:** [Node.js](https://nodejs.org/) con [Express](https://expressjs.com/)
- **Base de datos:** [MongoDB](https://www.mongodb.com/) con [Mongoose](https://mongoosejs.com/)
- **Validación y seguridad:** [dotenv](https://github.com/motdotla/dotenv), [cors](https://github.com/expressjs/cors)
