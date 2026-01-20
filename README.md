# Portafolio Personal - Matías Di Girolamo

Portafolio web profesional y moderno desarrollado con HTML, CSS y JavaScript vanilla.

## 🚀 Características

### Diseño Moderno
- **Interfaz limpia y profesional** siguiendo las últimas tendencias de diseño 2025
- **Modo claro/oscuro** con persistencia en localStorage
- **Diseño responsive** optimizado para todos los dispositivos
- **Animaciones suaves** y transiciones fluidas

### Secciones Principales
1. **Hero Section** - Presentación con efecto de escritura automática
2. **Sobre Mí** - Timeline de trayectoria profesional
3. **Habilidades** - Barras de progreso animadas y tecnologías
4. **Experiencia** - Timeline de experiencia laboral
5. **Proyectos** - Grid de proyectos destacados
6. **Contacto** - Formulario y métodos de contacto

### Efectos Interactivos
- ✨ Efecto de escritura automática (typing effect)
- 🎯 Animaciones al hacer scroll (Intersection Observer)
- 📊 Barras de habilidades animadas
- 🎴 Tarjetas flotantes con animación
- 🖱️ Efecto parallax en el hero
- 🔝 Botón de scroll to top
- 🎨 Efectos hover en tarjetas de proyectos
- 📱 Menú hamburguesa para móviles

### Optimizaciones
- Performance optimizada con Intersection Observer
- Lazy loading de imágenes
- CSS moderno con variables CSS
- JavaScript vanilla sin dependencias
- SEO friendly

## 📁 Estructura del Proyecto

```
portfolio/
│
├── index.html          # Página principal
├── README.md           # Documentación
│
├── css/
│   └── style.css       # Estilos principales
│
├── js/
│   └── script.js       # JavaScript interactivo
│
├── img/                # Imágenes (agregar tus imágenes aquí)
│   └── (vacía por ahora)
│
└── assets/             # Recursos adicionales
    └── (vacía por ahora)
```

## 🎨 Paleta de Colores

### Modo Claro
- Primary: `#6366f1` (Índigo)
- Secondary: `#8b5cf6` (Púrpura)
- Accent: `#ec4899` (Rosa)
- Background: `#ffffff` / `#f9fafb`
- Text: `#111827` / `#6b7280`

### Modo Oscuro
- Background: `#0f172a` / `#1e293b`
- Text: `#f1f5f9` / `#cbd5e1`

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS, Grid y Flexbox
- **JavaScript ES6+** - Interactividad y animaciones
- **Font Awesome 6** - Iconos
- **Google Fonts** - Tipografías (Inter & Fira Code)
- **Devicon** - Iconos de tecnologías

## 🚀 Cómo Usar

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en tu navegador
3. **Personalizar** el contenido según tus necesidades

### Personalización Rápida

#### Cambiar información personal
Edita `index.html` y busca estas secciones:
- Línea 50: Nombre y título
- Sección Hero: Tu información de presentación
- Sección About: Tu biografía
- Sección Experience: Tu experiencia laboral
- Sección Projects: Tus proyectos

#### Cambiar colores
Edita `css/style.css` en las variables CSS (líneas 5-30):
```css
:root {
    --primary-color: #6366f1;  /* Cambia estos valores */
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

#### Agregar imágenes
1. Coloca tus imágenes en la carpeta `img/`
2. Actualiza las referencias en `index.html`

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ✨ Funcionalidades Destacadas

### 1. Tema Claro/Oscuro
El botón de tema en la esquina superior derecha permite cambiar entre modos.
La preferencia se guarda en localStorage.

### 2. Navegación Inteligente
- Scroll suave a las secciones
- Link activo según la sección visible
- Menú hamburguesa en móviles

### 3. Efecto de Escritura
Los títulos en el hero tienen efecto de máquina de escribir.
Personaliza los títulos en `js/script.js` líneas 70-75.

### 4. Animaciones al Scroll
Elementos aparecen con fade-in al hacer scroll usando Intersection Observer.

### 5. Easter Egg
Código Konami: ↑ ↑ ↓ ↓ ← → ← → B A

## 🔧 Configuración del Formulario de Contacto

El formulario actualmente muestra una alerta. Para hacerlo funcional:

### Opción 1: EmailJS (Gratis)
```javascript
// En js/script.js, reemplaza la función del formulario
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
        alert('¡Mensaje enviado!');
    });
```

### Opción 2: Formspree
Cambia el form action en index.html:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Opción 3: Backend propio
Crea una API con Node.js, PHP, etc.

## 📊 Performance

- ✅ Lighthouse Score: 95+
- ✅ Sin dependencias pesadas
- ✅ CSS optimizado
- ✅ JavaScript vanilla eficiente
- ✅ Imágenes lazy loading ready

## 🌐 Deploy

### GitHub Pages
1. Sube el proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará en `https://tuusuario.github.io/portfolio`

### Netlify
1. Arrastra la carpeta a Netlify.com
2. Tu sitio estará online en segundos

### Vercel
1. Importa el proyecto desde GitHub
2. Deploy automático

## 📝 TODO (Mejoras Futuras)

- [ ] Agregar proyectos reales con imágenes
- [ ] Integrar formulario de contacto funcional
- [ ] Agregar blog/artículos
- [ ] Animaciones 3D con Three.js
- [ ] Modo de alto contraste
- [ ] Multilenguaje (ES/EN)

## 🤝 Contribuciones

¿Encontraste un bug o tienes una sugerencia?
- Abre un issue
- Envía un pull request

## 📄 Licencia

Este proyecto es de uso libre. Puedes usarlo, modificarlo y distribuirlo como desees.

## 👨‍💻 Autor

**Matías Di Girolamo**
- LinkedIn: [/in/matiasdigirolamo](https://linkedin.com/in/matiasdigirolamo)
- GitHub: [@matiasdigirolamo](https://github.com/matiasdigirolamo)
- Email: contact@matiasdigirolamo.com

---

⭐ Si te gustó este portafolio, ¡dale una estrella en GitHub!

💼 Hecho con ❤️ usando HTML, CSS y JavaScript
