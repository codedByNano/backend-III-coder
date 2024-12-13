# Adopme API 🐾

API diseñada para gestionar adopciones de mascotas, con endpoints documentados mediante Swagger, tests implementados con Supertest y empaquetada en Docker para su despliegue.

## Características 📋

- **Documentación:** Swagger disponible en `/apidocs`.
- **Base de datos:** MongoDB para gestionar usuarios, mascotas y adopciones.
- **Testing:** Supertest para pruebas automáticas de los endpoints.
- **Docker:** Configuración lista para desplegar en cualquier entorno.


## Instalación 🚀

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/codedByNano/backend-III-coder
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` basado con la información solicitada:
   ```plaintext
   PORT=`el puerto deseado para ejecución local`
   MONGO_STRING=`el string de mongoDB`
   ```

4. **Inicia la aplicación:**
   ```bash
   npm run dev
   ```


## Testing ✅

Para ejecutar las pruebas, usa el siguiente comando:
```bash
npm run test
```

## Docker 🐳
**Enlace:**
```plaintext
   https://hub.docker.com/repository/docker/martigancedo/adoptme-api/general
   ```


## Autor ✍️

Creado por **Martiniano Gancedo** 2024
