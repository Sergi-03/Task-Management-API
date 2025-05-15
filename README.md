Task Management API
Una API REST simple para gestión de tareas construida con Express.js, Prisma ORM y PostgreSQL.
🔍 Descripción
Este proyecto es una API básica para la gestión de tareas personales. Desarrollada con Node.js y Express, utiliza Prisma como ORM para interactuar con una base de datos PostgreSQL desplegada en Supabase.
🛠️ Tecnologías

Backend: Node.js, Express.js
Base de datos: PostgreSQL (desplegada en Supabase)
ORM: Prisma
Otros: Dotenv para variables de entorno

Características

CRUD de tareas: Crear, leer, actualizar y eliminar tareas
Interacción con DB: Uso de Prisma para operaciones de base de datos
Estructura REST: API organizada siguiendo principios REST

📋 Endpoints
Tareas

GET /api/tasks - Obtener todas las tareas
GET /api/tasks/:id - Obtener una tarea específica
POST /api/tasks - Crear una nueva tarea
PATCH /api/tasks/:id - Actualizar parcialmente una tarea existente
DELETE /api/tasks/:id - Eliminar una tarea

Instalación y Uso

Clonar el repositorio
bashgit clone https://github.com/Sergi-03/Task-Management-API.git
cd Task-Management-API

Instalar dependencias
bashnpm install

Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:
PORT=3000
DATABASE_URL="postgresql://usuario:contraseña@host:puerto/nombre_db"

Iniciar el servidor
bashnpm start

La API utiliza PostgreSQL como base de datos, desplegada en Supabase. El esquema incluye:

Task: Almacena las tareas con propiedades como título, contenido, estado, etc.

La estructura de la base de datos está definida usando el schema de Prisma.
🔄 Deploy
La base de datos PostgreSQL está desplegada en Supabase, proporcionando un entorno robusto para la aplicación.
🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

Fork el repositorio
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad)
Haz commit de tus cambios (git commit -m 'Añadir nueva funcionalidad')
Push a la rama (git push origin feature/nueva-funcionalidad)
Abre un Pull Request

Desarrollado por Sergi-03
