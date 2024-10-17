# MewAtlas 🐱📸

**¡Bienvenidos a MewAtlas!**  
Una red social dedicada a compartir fotos de gatos, desarrollada con una arquitectura full stack que incluye un backend en Java usando Spring Boot y una interfaz web en React con TypeScript. CatShare permite a los usuarios registrarse, iniciar sesión, y publicar fotos de sus gatos.

Este proyecto es una incursion  en el desarrollo full stack utilizando **Spring Boot**, **React** y **MySQL**, sin frameworks de autenticación ni ORM avanzados. 

## Estructura del Proyecto

El proyecto está organizado en los siguientes componentes:

- **Frontend**: Desarrollado con **React** y **TypeScript**, el cual maneja las vistas de los usuarios, publicación de fotos y gestión del perfil.
- **Backend**: Implementado con **Java 17+** y **Spring Boot**, proporcionando endpoints RESTful que permiten la gestión de usuarios y publicaciones.
- **Base de Datos**: Utiliza **MySQL** para almacenar la información de los usuarios y publicaciones, gestionada a través de **JDBC** en lugar de un ORM como Hibernate.

## Funcionalidades 🌟

- **Registro y Login de Usuarios**: Los usuarios pueden crear una cuenta y acceder a la plataforma.
- **Creación de Publicaciones**: Los usuarios pueden subir fotos de sus gatos con descripciones personalizadas.
- **Ver publicaciones**: Se pueden ver todas las publicaciones realizadas por los usuarios registrados.
- **Perfil de Usuario**: Cada usuario tiene acceso a su propio perfil.

## Endpoints de la API 🐾

La API de CatShare expone los siguientes endpoints:

### Ejemplos de Uso

- **Obtener todas las publicaciones**:
    ```bash
    curl -X GET "http://localhost:8080/api/cats"
    ```

- **Crear una nueva publicación**:
    ```bash
    curl -X POST "http://localhost:8080/api/cats/post" + JSON
    ```

- **Obtener publicaciones de un usuario específico**:
    ```bash
    curl -X GET "http://localhost:8080/api/users/pass"
    ```

## Acceso a Datos y ORM

El backend utiliza **JDBC** como mecanismo principal para interactuar con la base de datos, manejando consultas SQL directamente para lograr un control más detallado sobre las operaciones de CRUD (Crear, Leer, Actualizar y Eliminar).

### Esquema de Base de Datos

La base de datos de **MewAtlas** cuenta con las siguientes tablas:

#### Tabla de Usuarios:
| id  | nombre  | email       | password      | 
|-----|---------|-------------|---------------|
| 1   | Juan    | juan@mail.com | ******      | 

#### Tabla de Publicaciones:
| cat_id     | Breed             | color                               |   age                   | image      |
|------------|-------------------|-------------------------------------|-------------------------|------------|
| 1          | Mi gato durmiendo | https://mi-gato-durmiendo.com/imagen| 2024-10-17              | image

## Uso de la Aplicación Web 🖥️

Una vez lanzada la aplicación, los usuarios pueden navegar por la interfaz para ver las publicaciones más recientes de gatos y realizar sus propias publicaciones. A continuación algunas funcionalidades clave:

- **Ver todas las publicaciones**: Al cargar la aplicación, se muestran todas las fotos subidas por los usuarios.
- **Crear una nueva publicación**: Desde la interfaz, los usuarios pueden subir nuevas fotos con descripciones.
- **Ver perfil de usuario**: Cada usuario puede acceder a su perfil.

## Ejemplo de Uso

### Ver todas las publicaciones

Al iniciar la aplicación, se desplegará una lista de todas las publicaciones realizadas por los usuarios, junto con los nombres de los gatos y las descripciones.

### Crear una publicación

Los usuarios pueden subir fotos desde su dispositivo, agregar una descripción y compartir la publicación en el feed principal.

### Filtrar publicaciones por usuario

Cada usuario tiene un perfil personal donde puede ver y gestionar todas las fotos que ha subido.

## Instalación y Configuración 🚀

### Instrucciones de instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/catshare.git
   cd catshare
