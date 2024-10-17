# MewAtlas 🐱📸
<img width="1512" alt="Screenshot 2024-10-18 at 00.05.03" src="https://github.com/user-attachments/assets/17854a7b-a1f2-45a6-9407-b5c307abda05">

**Welcome to MewAtlas!**  
### English version 🇺🇸🇬🇧
A social network dedicated to sharing cat photos, developed with a full-stack architecture that includes a backend in Java using Spring Boot and a web interface built with React and TypeScript. MewAtlas allows users to register, log in, and post photos of their cats.

This project is an exploration into full-stack development using **Spring Boot**, **React**, and **MySQL**, without using advanced authentication frameworks or ORM solutions.

## Project Structure

The project is organized into the following components:

- **Frontend**: Developed with **React** and **TypeScript**, handling user views, photo posting, and profile management.
- **Backend**: Implemented with **Java 17+** and **Spring Boot**, providing RESTful endpoints for managing users and posts.
- **Database**: Uses **MySQL** to store user and post information, managed via **JDBC** instead of an ORM like Hibernate.

## Features 🌟

- **User Registration and Login**: Users can create an account and access the platform.
- **Post Creation**: Users can upload photos of their cats with personalized descriptions.
- **View Posts**: All posts from registered users are visible.
- **User Profile**: Each user has access to their own profile.

## API Endpoints 🐾

The MewAtlas API exposes the following endpoints:

### Usage Examples

- **Get all posts**:
    ```bash
    curl -X GET "http://localhost:8080/api/cats"
    ```

- **Create a new post**:
    ```bash
    curl -X POST "http://localhost:8080/api/cats/post" + JSON
    ```

- **Get posts from a specific user**:
    ```bash
    curl -X GET "http://localhost:8080/api/users/pass"
    ```

## Data Access and ORM

The backend uses **JDBC** as the main mechanism to interact with the database, handling SQL queries directly to achieve greater control over CRUD operations (Create, Read, Update, Delete).

### Database Schema

The **MewAtlas** database contains the following tables:

#### Users Table:
| id  | name    | email        | password     | 
|-----|---------|--------------|--------------|
| 1   | Juan    | juan@mail.com | ******       | 

#### Posts Table:
| cat_id     | Breed             | color                               |   age                   | image      |
|------------|-------------------|-------------------------------------|-------------------------|------------|
| 1          | My cat sleeping    | https://my-cat-sleeping.com/image   | 2024-10-17              | image

## Web Application Usage 🖥️

Once the application is launched, users can navigate the interface to view the latest cat posts and create their own. Below are some key features:

- **View all posts**: When the app loads, all photos uploaded by users are displayed.
- **Create a new post**: From the interface, users can upload new photos with descriptions.
- **View user profile**: Each user can access their profile.

## Example Usage

### Log-In/Sign-Up
<img width="1512" alt="Screenshot 2024-10-18 at 00.04.28" src="https://github.com/user-attachments/assets/c0e87d22-d99c-4576-801c-9e97eac63b71">

### Log-out
<img width="401" alt="Screenshot 2024-10-18 at 00.01.27" src="https://github.com/user-attachments/assets/834d1f50-6b6b-467a-bc4a-0bd38db1caf1">

### Sign-Up
<img width="1512" alt="Screenshot 2024-10-18 at 00.03.47" src="https://github.com/user-attachments/assets/314937dd-4e36-47e7-a3e3-8d3308a36224">

### Log-In
<img width="1511" alt="Screenshot 2024-10-18 at 00.06.09" src="https://github.com/user-attachments/assets/c95eeb03-a555-4b5d-897f-1425c60fdd14">

<img width="1512" alt="Screenshot 2024-10-18 at 00.03.24" src="https://github.com/user-attachments/assets/b8cff58e-edba-4a96-a0d1-6c3ebee5dbb4">

### Add Cat

<img width="1511" alt="Screenshot 2024-10-18 at 00.06.09" src="https://github.com/user-attachments/assets/c95eeb03-a555-4b5d-897f-1425c60fdd14">


# SPANISH VERSION 🇪🇸

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
