# API Data Transformer
>¡Bienvenido a la API Data Transformer! Este proyecto te permite procesar y transformar datos de archivos CSV de manera sencilla y eficiente.
>Requisitos Técnicos
>Node.js (v14.0.0 o superior)
>npm (v6.0.0 o superior)
>Otros...

## Instalación
#### Clonar el repositorio
`git clone https://github.com/tu-usuario/api-data-transformer.git`

### Ir al directorio del proyecto
`cd api-data-transformer`

### Instalar las dependencias
`npm install`

## Uso
### Comandos de ejemplo
npm run start
npm run test

/
|-- src/             # Código fuente de la aplicación
|-- tests/           # Pruebas unitarias y de integración
|-- ...

## Pruebas
>Ejecutar pruebas
>npm run test

## Contribuir
### Clonar el repositorio
`git clone https://github.com/tu-usuario/tu-proyecto.git`

# Crear una nueva rama
`git checkout -b feature/nueva-funcionalidad`

# Realizar cambios y hacer commit
`git add .`
`git commit -m "Descripción de los cambios"`

# Enviar la solicitud de extracción (PR)
`git push origin feature/nueva-funcionalidad`

# Licencia
> Este proyecto está bajo la licencia [:)]. Consulta el archivo LICENSE para más detalles.

Endpoint: /files/data
Descripción
Este endpoint permite obtener y transformar datos de archivos CSV. A continuación, se detallan los pasos para su utilización:

### Endpoint:
> /files/data

#### Descripción
>Este endpoint permite obtener y transformar datos de archivos CSV. A continuación, se detallan los pasos para su utilización:

#### Pasos:
1. **Obtener contenido de un archivo específico:**
   - Método: `GET`
   - Ruta: `/files/data/{nombre-archivo}`
   - Descripción: Obtiene el contenido del archivo CSV especificado.`

2. **Transformar y procesar datos:**
   - Método: `POST`
   - Ruta: `/files/data/transform`
   - Descripción: Transforma y procesa los datos del archivo CSV, aplicando reglas específicas.

#### Ejemplo de Uso con cURL:

### Obtener contenido de un archivo específico
> curl -X GET "http://apihost/files/data/nombre-archivo"

### Transformar y procesar datos de un archivo
> curl -X POST "http://apihost/files/data/transform" -H "Content-Type: application/json" -d '{"file": "nombre-archivo"}'
