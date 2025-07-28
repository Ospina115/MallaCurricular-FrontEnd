# ⚖️ Malla Curricular Interactiva - Derecho UNAB

<div align="center">

![Derecho UNAB](https://img.shields.io/badge/Derecho-UNAB-800080?style=for-the-badge&logo=balance-scale)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Una aplicación web interactiva para visualizar y rastrear el progreso académico en la carrera de Derecho de la Universidad Autónoma de Bucaramanga (UNAB), Colombia.

[🚀 Demo en Vivo](#) | [📖 Documentación](#documentación) | [🐛 Reportar Bug](../../issues)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Características](#-características)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🎨 Capturas de Pantalla](#-capturas-de-pantalla)
- [🔧 Instalación y Uso](#-instalación-y-uso)
- [💻 Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📱 Responsive Design](#-responsive-design)
- [💾 Persistencia de Datos](#-persistencia-de-datos)
- [🎛️ Funcionalidades](#️-funcionalidades)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)
- [👥 Créditos](#-créditos)

---

## 🎯 Características

### ✨ Funcionalidades Principales

- **📊 Visualización Interactiva**: Malla curricular completa organizada por años y semestres
- **✅ Seguimiento de Progreso**: Marca materias como completadas con un simple clic
- **🔐 Sistema de Previas**: Bloqueo automático de materias que requieren prerequisitos
- **📈 Estadísticas en Tiempo Real**: Progreso visual con porcentajes de avance
- **💾 Persistencia Local**: Tu progreso se guarda automáticamente en el navegador
- **📤 Exportar/Importar**: Backup y sincronización de datos entre dispositivos
- **🎨 Interfaz Moderna**: Diseño atractivo con gradientes y animaciones suaves
- **📱 Responsive**: Funciona perfectamente en móviles, tablets y desktop
- **🌙 Animaciones**: Feedback visual con transiciones y efectos

### 🛠️ Características Técnicas

- **Arquitectura Modular**: Código organizado en módulos ES6
- **Sin Dependencias Externas**: Vanilla JavaScript puro
- **Performance Optimizada**: Carga rápida y uso eficiente de memoria
- **Comentarios Extensivos**: Código bien documentado para facilitar mantenimiento
- **Manejo de Errores**: Validación y manejo robusto de errores
- **Accesibilidad**: Cumple con estándares básicos de accesibilidad web

---

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/Ospina115/MallaCurricular-FrontEnd.git

# Navegar al directorio
cd MallaCurricular-FrontEnd

# Abrir en navegador (opción 1: servidor local)
python -m http.server 8000
# Luego visitar http://localhost:8000

# Opción 2: Abrir directamente
# Simplemente abre index.html en tu navegador favorito
```

¡Eso es todo! La aplicación funcionará inmediatamente sin necesidad de instalación adicional.

---

## 📁 Estructura del Proyecto

```
MallaCurricular-FrontEnd/
├── 📄 index.html              # Página principal
├── 📁 css/
│   └── 🎨 styles.css          # Estilos principales
├── 📁 js/
│   ├── 🧠 app.js              # Aplicación principal
│   ├── 📊 data.js             # Datos de la malla curricular de Derecho
│   ├── 💾 estado.js           # Gestión de estado y localStorage
│   └── 🛠️ utils.js           # Utilidades y funciones helper
├── 📖 README.md               # Documentación (este archivo)
└── 📄 LICENSE                 # Licencia del proyecto
```

### 📝 Descripción de Archivos

| Archivo | Descripción | Responsabilidades |
|---------|-------------|-------------------|
| `index.html` | Página principal | Estructura HTML base, metadatos SEO |
| `css/styles.css` | Estilos principales | Diseño responsive, animaciones, tema visual |
| `js/app.js` | Aplicación principal | Lógica de UI, eventos, renderizado |
| `js/data.js` | Datos de la malla | Estructura de materias, prerequisitos, semestres |
| `js/estado.js` | Gestión de estado | localStorage, persistencia, observadores |
| `js/utils.js` | Utilidades | Funciones helper, validaciones, formateo |

---

## 🎨 Capturas de Pantalla

### 🖥️ Vista Desktop
![Vista Desktop](https://via.placeholder.com/800x400/800080/FFFFFF?text=Vista+Desktop)

### 📱 Vista Mobile
![Vista Mobile](https://via.placeholder.com/300x600/800080/FFFFFF?text=Vista+Mobile)

### 📊 Estadísticas y Progreso
![Estadísticas](https://via.placeholder.com/600x300/800080/FFFFFF?text=Estadísticas+y+Progreso)

---

## 🔧 Instalación y Uso

### Requisitos Previos

- 🌐 Navegador web moderno (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- 📱 JavaScript habilitado
- 💾 LocalStorage disponible (habilitado por defecto)

### Instalación Local

1. **Descargar el proyecto**:
   ```bash
   git clone https://github.com/Ospina115/MallaCurricular-FrontEnd.git
   ```

2. **Abrir en navegador**:
   - **Opción A**: Doble clic en `index.html`
   - **Opción B**: Servidor local:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (si tienes http-server instalado)
     npx http-server
     
     # PHP
     php -S localhost:8000
     ```

3. **¡Listo!** 🎉 La aplicación estará funcionando.

### Uso de la Aplicación

#### 🎯 Acciones Básicas

1. **Marcar Materia como Completada**:
   - Haz clic en cualquier materia disponible (no bloqueada)
   - La materia se marcará con ✅ y se tachará
   - El progreso se actualiza automáticamente

2. **Desmarcar Materia**:
   - Haz clic nuevamente en una materia completada
   - Se desmarcará y volverá al estado inicial

3. **Ver Información de Materia**:
   - Pasa el mouse sobre cualquier materia
   - Aparecerá un tooltip con información detallada

#### 🎛️ Controles Avanzados

- **🔄 Resetear Progreso**: Borra todo el progreso guardado
- **📤 Exportar Datos**: Descarga tu progreso como archivo JSON
- **📥 Importar Datos**: Carga un archivo de progreso previo
- **❓ Ayuda**: Muestra información sobre cómo usar la aplicación

#### ⌨️ Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + R` | Resetear progreso |
| `Ctrl + S` | Exportar datos |
| `Ctrl + O` | Importar datos |

---

## 💻 Tecnologías Utilizadas

### Frontend

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Flexbox y Grid para layouts
  - Gradientes y transiciones
  - Media queries para responsive
  - Variables CSS para theming
- **JavaScript ES6+**:
  - Módulos ES6
  - Classes y arrow functions
  - Async/await para operaciones asíncronas
  - LocalStorage API

### Características Modernas

- **🎨 CSS Grid & Flexbox**: Layout responsive y flexible
- **🌊 CSS Animations**: Transiciones suaves y feedback visual
- **📦 ES6 Modules**: Arquitectura modular y mantenible
- **💾 LocalStorage**: Persistencia de datos del lado cliente
- **🎯 Event Delegation**: Manejo eficiente de eventos
- **🔧 Error Handling**: Manejo robusto de errores

---

## 📱 Responsive Design

La aplicación está diseñada para funcionar perfectamente en todos los dispositivos:

### 🖥️ Desktop (1200px+)
- Layout horizontal con scroll lateral
- Tooltips informativos
- Animaciones completas

### 💻 Tablet (768px - 1199px)
- Layout adaptativo
- Controles optimizados para touch
- Navegación mejorada

### 📱 Mobile (< 768px)
- Layout vertical apilado
- Botones táctiles grandes
- Navegación simplificada
- Prevención de zoom accidental

### CSS Media Queries

```css
/* Mobile First Approach */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  
  .year {
    min-width: 90%;
    max-width: 500px;
  }
}

@media (max-width: 480px) {
  .year {
    min-width: 95%;
    padding: 15px;
  }
}
```

---

## 💾 Persistencia de Datos

### LocalStorage

La aplicación utiliza `localStorage` para guardar tu progreso automáticamente:

```javascript
// Estructura de datos guardados
{
  "version": "1.0.0",
  "timestamp": 1640995200000,
  "materias": {
    "expresion": {
      "completada": true,
      "fecha": "2024-01-15T10:30:00.000Z"
    },
    "intro_derecho": {
      "completada": true,
      "fecha": "2024-01-20T14:45:00.000Z"
    }
    // ... más materias
  }
}
```

### Funciones de Backup

- **📤 Exportar**: Descarga un archivo JSON con tu progreso
- **📥 Importar**: Carga un archivo de progreso desde otro dispositivo
- **🔄 Sincronización**: Mantén el mismo progreso en múltiples dispositivos

### Migración de Datos

El sistema incluye versionado para futuras migraciones:

```javascript
const config = {
  STORAGE_KEY: "estadoMaterias_derecho",
  DATA_VERSION: "1.0.0"
};
```

---

## 🎛️ Funcionalidades

### 📊 Sistema de Progreso

- **Contador de Materias**: Completadas vs. Pendientes
- **Barra de Progreso**: Visualización del avance total
- **Estadísticas Detalladas**: Porcentajes y métricas de progreso

### 🔐 Sistema de Previas
### 🔐 Sistema de Previas

```javascript
// Ejemplo: Derecho Procesal Penal requiere Derecho Penal Especial
{
  id: "derecho_procesal_penal",
  nombre: "Derecho Procesal Penal",
  previas: ["derecho_penal_especial"],
  tipo: "obligatoria"
}
```
### 🎨 Estados Visuales

- **✅ Completada**: Verde con ✓, texto tachado
- **🔒 Bloqueada**: Gris con 🔒, no clickeable  
- **📘 Disponible**: Morado, clickeable con hover effects
- **ℹ️ Tooltip**: Información detallada al pasar el mouse

### 🔍 Información Detallada
### 🔍 Información Detallada

Cada materia incluye:
- **Nombre completo**
- **Materias previas requeridas**
- **Tipo** (obligatoria/electiva)
- **Descripción**
- **Fecha de completado** (si aplica)
---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Aquí te explico cómo puedes ayudar:

### 🐛 Reportar Bugs

1. Verifica que el bug no haya sido reportado antes
2. Abre un [nuevo issue](../../issues/new)
3. Incluye:
   - Descripción detallada del problema
   - Pasos para reproducir
   - Navegador y versión
   - Capturas de pantalla si es relevante

### ✨ Sugerir Mejoras

1. Abre un [issue de feature request](../../issues/new)
2. Explica la funcionalidad propuesta
3. Describe el caso de uso
4. Incluye mockups si tienes

### 🔧 Desarrollo

1. **Fork** el repositorio
2. **Clona** tu fork:
2. **Clona** tu fork:
   ```bash
   git clone https://github.com/tu-usuario/MallaCurricular-FrontEnd.git
   ```rea** una rama para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
4. **Realiza** tus cambios siguiendo las convenciones:
   - Comenta el código nuevo
   - Mantén el estilo existente
   - Prueba en múltiples navegadores
5. **Commit** tus cambios:
   ```bash
   git commit -m "feat: añadir nueva funcionalidad"
   ```
6. **Push** a tu rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
7. **Abre** un Pull Request

### 📝 Convenciones de Código

- **JavaScript**: ES6+, comentarios JSDoc
- **CSS**: BEM methodology, mobile-first
- **Commits**: Conventional Commits (feat, fix, docs, style, refactor)
- **Nombres**: camelCase para JS, kebab-case para CSS

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
```
MIT License

Copyright (c) 2024 Derecho UNAB

Permission is hereby granted, free of charge, to any person obtaining a copyl
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Créditos

### 🎓 Desarrollado para
### 🎓 Desarrollado para

- **Universidad Autónoma de Bucaramanga (UNAB)**
- **Facultad de Derecho**
- **Estudiantes de Derecho de Colombia**

### 💝 Agradecimientos

- **UNAB** por la información de la malla curricular
- **Comunidad de estudiantes** por feedback y sugerencias
- **Contribuidores** que han mejorado el proyecto

### 🛠️ Tecnologías y Recursos

- **Iconos**: Emojis nativos del sistema
- **Fuentes**: System fonts para mejor rendimiento
- **Colores**: Paleta institucional universitaria
- **Inspiración**: Necesidad real de estudiantes de derecho
---

## 📞 Contacto y Soporte

### 🔗 Enlaces Importantes

- **🏠 Página Principal**: [UNAB](https://www.unab.edu.co/)
- **📚 Facultad de Derecho**: [Programa de Derecho UNAB](https://www.unab.edu.co/programa/derecho)
- **💬 Discusiones**: [GitHub Discussions](../../discussions)
- **🐛 Issues**: [Reportar Problemas](../../issues)

### 📧 Contacto

Para consultas específicas sobre el proyecto:
- **GitHub Issues**: Para bugs y features
- **GitHub Discussions**: Para preguntas generales
- **Email**: [Crear issue](../../issues/new) es preferible

---

## 📈 Roadmap y Futuras Mejoras

### 🚀 Versión 1.1 (Próxima)

- [ ] **🌙 Modo Oscuro**: Tema dark/light switcheable
- [ ] **📱 PWA**: Convertir en Progressive Web App
- [ ] **🔔 Notificaciones**: Recordatorios de materias
- [ ] **📊 Analytics**: Estadísticas avanzadas de progreso

### 🔮 Versión 2.0 (Futuro)

- [ ] **👥 Multi-usuario**: Soporte para múltiples estudiantes
- [ ] **☁️ Sincronización**: Backup en la nube
- [ ] **🎯 Recomendaciones**: IA para sugerir próximas materias
- [ ] **📅 Calendario**: Integración con fechas de inscripción

### 💡 Ideas en Consideración

- **🏆 Gamificación**: Logros y badges por progreso
- **📱 App Móvil**: Aplicación nativa
- **🔗 Integración**: Conexión con sistemas oficiales
- **🎨 Temas**: Múltiples esquemas de color
- **🌍 i18n**: Soporte multiidioma

---

<div align="center">

**⭐ Si este proyecto te es útil, dale una estrella en GitHub ⭐**

**⚖️ ¡Éxitos en tu carrera de Derecho! ⚖️**

---

*Hecho con ❤️ para los estudiantes de Derecho de la UNAB*

</div>
