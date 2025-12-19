# Programación Integrativa de Componentes Web (SPA en React)

> **Universidad de las Fuerzas Armadas ESPE**
> **Asignatura:** Programación Integrativa de Componentes Web
> **NRC:** 29334
> **Grupo:** 5

##  Descripción del Proyecto

Este proyecto consiste en una **Single Page Application (SPA)** desarrollada con la librería **React** y el entorno de ejecución **Vite**.
El objetivo principal es demostrar la implementación de una arquitectura basada en componentes funcionales, aplicando los conceptos fundamentales de comunicación, manejo de estado y ciclo de vida.

---

##  Integrantes del Equipo

* **Edison Chiluiza** (Líder / Integración/Arquitectura UI / Props)
* **Caterine Muzo** (Renderizado Condicional)
* **Sofía Rivas** (Manejo de Eventos)
* **Jessica Sánchez** (Listas y Datos)

---

### 1. Arquitectura de Componentes
La aplicación está modularizada en **5 componentes funcionales** independientes:
* `Header.jsx`
* `Hero.jsx`
* `Stats.jsx`
* `FeatureCard.jsx`
* `Footer.jsx`

### 2. Comunicación (Props)
Se implementó el paso de información unidireccional (Padre a Hijo).
* **Ejemplo:** El componente `Header` recibe propiedades para controlar el tema, y `FeatureCard` recibe títulos y descripciones dinámicas.

### 3. Manejo de Estado (Hooks)
Uso del hook **`useState`** para la reactividad de la interfaz:
* Control de contadores numéricos (Interacciones).
* Control de visibilidad de elementos (Renderizado Condicional).
* Control del tema (Claro/Oscuro).

### 4. Ciclo de Vida (Effects)
Implementación del hook **`useEffect`** para el manejo de efectos secundarios:
* Carga inicial de datos.
* Sincronización de cambios en el DOM (Clases CSS globales).
* Persistencia básica de datos en el navegador.

### 5. Listas y Datos
Uso del método **`.map()`** para renderizar listas de componentes dinámicamente a partir de un archivo de datos local (`features.json`), simulando una estructura de base de datos.

---

##  Guía de Instalación y Ejecución

Siga estos pasos para ejecutar el proyecto en un entorno local.

### Prerrequisitos
* Tener instalado **Node.js** (v14 o superior).
* Tener instalado **npm**.

### Paso 1: Inicia el servidor de desarrollo local
Abra la terminal en la carpeta del proyecto y ejecuta el siguiente comando:

npm install

npm run dev

*Una vez iniciado, la terminal mostrará una dirección local. Abra ese enlace en su navegador web por favor

### Estructura del Directorio

pagina_react/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Stats.jsx
│   │
│   ├── data/
│   │   └── features.json   # Fuente de datos para listas
│   │
│   ├── App.css             # Hoja de estilos
│   ├── App.jsx             # Componente Principal (Integración)
│   └── main.jsx            # Punto de entrada
│
├── index.html
├── package.json
└── vite.config.js

