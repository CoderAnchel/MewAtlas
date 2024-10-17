# MewAtlas 🐱📸
<img width="759" alt="Captura de pantalla 2024-10-18 a las 0 01 11" src="https://github.com/user-attachments/assets/fd874029-7dd2-414d-afc1-faff6081ebcc">

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

### Log-In/Sign-Up

<img width="757" alt="Captura de pantalla 2024-10-18 a las 0 00 09" src="https://github.com/user-attachments/assets/79dea0af-d4bf-4433-b1cc-e35fe8f562b8">

### Log-out
<img width="401" alt="Captura de pantalla 2024-10-18 a las 0 01 27" src="https://github.com/user-attachments/assets/834d1f50-6b6b-467a-bc4a-0bd38db1caf1">

### Sign-Up

<img width="757" alt="Captura de pantalla 2024-10-18 a las 0 02 09" src="https://github.com/user-attachments/assets/a7a3a2bb-d7d4-4150-b65a-cf777a122f43">

### Log-In

<img width="761" alt="Captura de pantalla 2024-10-18 a las 0 02 26" src="https://github.com/user-attachments/assets/3dec54b8-a9f8-4784-bc3d-f898cad9545f">

