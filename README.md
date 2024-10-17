# MewAtlas 🐱📸
<img width="1512" alt="Captura de pantalla 2024-10-18 a las 0 05 03 2" src="https://github.com/user-attachments/assets/17854a7b-a1f2-45a6-9407-b5c307abda05">

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
<img width="1512" alt="Captura de pantalla 2024-10-18 a las 0 04 28 2" src="https://github.com/user-attachments/assets/c0e87d22-d99c-4576-801c-9e97eac63b71">

### Log-out
<img width="401" alt="Captura de pantalla 2024-10-18 a las 0 01 27" src="https://github.com/user-attachments/assets/834d1f50-6b6b-467a-bc4a-0bd38db1caf1">

### Sign-Up
<img width="1512" alt="Captura de pantalla 2024-10-18 a las 0 03 47 2" src="https://github.com/user-attachments/assets/314937dd-4e36-47e7-a3e3-8d3308a36224">

### Log-In

<img width="1512" alt="Captura de pantalla 2024-10-18 a las 0 03 24 2" src="https://github.com/user-attachments/assets/b8cff58e-edba-4a96-a0d1-6c3ebee5dbb4">


