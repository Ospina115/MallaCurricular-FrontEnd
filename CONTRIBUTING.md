# Contribuir a Malla Curricular Medicina UDELAR

¡Gracias por tu interés en contribuir! Este documento te guiará sobre cómo contribuir de manera efectiva al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Contribuir con Código](#contribuir-con-código)
- [Guía de Estilo](#guía-de-estilo)
- [Proceso de Pull Request](#proceso-de-pull-request)

## Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

### Nuestros Estándares

- Usar lenguaje amigable e inclusivo
- Respetar puntos de vista y experiencias diferentes
- Aceptar críticas constructivas
- Enfocarse en lo que es mejor para la comunidad
- Mostrar empatía hacia otros miembros de la comunidad

## ¿Cómo puedo contribuir?

### 🐛 Reportar Bugs

Los bugs son rastreados como issues de GitHub. Cuando crees un issue de bug, incluye:

- **Título claro y descriptivo**
- **Descripción detallada** del problema
- **Pasos para reproducir** el comportamiento
- **Comportamiento esperado** vs. comportamiento actual
- **Screenshots** si aplica
- **Información del entorno** (navegador, OS, versión)

#### Plantilla para Bugs

```markdown
**Descripción del Bug**
Una descripción clara y concisa del bug.

**Pasos para Reproducir**
1. Ve a '...'
2. Haz clic en '....'
3. Desplázate hacia '....'
4. Ve el error

**Comportamiento Esperado**
Una descripción clara de lo que esperabas que sucediera.

**Screenshots**
Si aplica, añade screenshots para ayudar a explicar el problema.

**Información del Entorno:**
- OS: [e.g. Windows 10, macOS Big Sur]
- Navegador: [e.g. Chrome 96, Firefox 95]
- Versión: [e.g. 1.0.0]

**Contexto Adicional**
Añade cualquier otro contexto sobre el problema aquí.
```

### ✨ Sugerir Mejoras

Las mejoras son rastreadas como issues de GitHub. Cuando crees un issue de mejora:

- **Usa un título claro y descriptivo**
- **Proporciona una descripción detallada** de la mejora sugerida
- **Explica por qué esta mejora sería útil** para la mayoría de usuarios
- **Lista algunas otras aplicaciones o proyectos** donde esta mejora existe

#### Plantilla para Mejoras

```markdown
**¿Tu solicitud de mejora está relacionada con un problema?**
Una descripción clara de cuál es el problema. Ej. Siempre me frustra cuando [...]

**Describe la solución que te gustaría**
Una descripción clara de lo que quieres que suceda.

**Describe alternativas que hayas considerado**
Una descripción de cualquier solución o característica alternativa que hayas considerado.

**Contexto adicional**
Añade cualquier otro contexto o screenshots sobre la solicitud aquí.
```

## Contribuir con Código

### Configuración del Entorno de Desarrollo

1. **Fork el repositorio**
2. **Clona tu fork**:
   ```bash
   git clone https://github.com/tu-usuario/Malla-Fmed-Interactiva.git
   cd Malla-Fmed-Interactiva
   ```
3. **Crea una rama para tu característica**:
   ```bash
   git checkout -b feature/mi-nueva-caracteristica
   ```
4. **Configura un servidor local**:
   ```bash
   python -m http.server 8000
   ```

### Estructura del Proyecto

```
Malla-Fmed-Interactiva/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── app.js              # Aplicación principal
│   ├── data.js             # Datos de la malla
│   ├── estado.js           # Gestión de estado
│   └── utils.js            # Utilidades
└── README.md               # Documentación
```

## Guía de Estilo

### JavaScript

- **ES6+**: Usa características modernas de JavaScript
- **Módulos**: Usa import/export para organizar código
- **Naming**: camelCase para variables y funciones
- **Comentarios**: JSDoc para funciones públicas
- **Semicolons**: Siempre usar punto y coma

```javascript
/**
 * Descripción de la función
 * @param {string} parametro - Descripción del parámetro
 * @returns {boolean} Descripción del retorno
 */
function miFuncion(parametro) {
  // Comentario explicativo
  return true;
}
```

### CSS

- **Metodología**: BEM para nomenclatura de clases
- **Mobile First**: Media queries desde móvil hacia desktop
- **Variables**: Usar custom properties para valores reutilizables
- **Organización**: Agrupar estilos relacionados

```css
/* Variables globales */
:root {
  --color-primary: #800080;
  --spacing-base: 1rem;
}

/* Componente usando BEM */
.materia {
  /* Estilos base */
}

.materia--completada {
  /* Modificador */
}

.materia__titulo {
  /* Elemento */
}
```

### HTML

- **Semántico**: Usar elementos HTML apropiados
- **Accesibilidad**: Incluir atributos ARIA cuando sea necesario
- **Indentación**: 2 espacios

```html
<article class="materia" role="button" tabindex="0">
  <h3 class="materia__titulo">Título de la Materia</h3>
  <p class="materia__descripcion">Descripción...</p>
</article>
```

## Proceso de Pull Request

1. **Asegúrate** de que tu código sigue la guía de estilo
2. **Prueba** tu código en múltiples navegadores
3. **Actualiza** la documentación si es necesario
4. **Crea** el Pull Request con una descripción clara

### Plantilla de Pull Request

```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de cambio
- [ ] Bug fix (cambio que arregla un issue)
- [ ] Nueva característica (cambio que añade funcionalidad)
- [ ] Cambio que rompe compatibilidad
- [ ] Actualización de documentación

## ¿Cómo se ha probado?
Describe las pruebas que ejecutaste para verificar tus cambios.

## Checklist:
- [ ] Mi código sigue la guía de estilo del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código, particularmente en áreas difíciles
- [ ] He realizado cambios correspondientes a la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He probado en múltiples navegadores
```

## Commits

### Formato de Commit

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commit

- `feat`: Nueva característica
- `fix`: Arreglo de bug
- `docs`: Solo cambios en documentación
- `style`: Cambios que no afectan el significado del código
- `refactor`: Cambio de código que no es ni fix ni feature
- `perf`: Cambio que mejora el rendimiento
- `test`: Añadir tests faltantes o corregir existentes
- `chore`: Cambios a herramientas de build o auxiliares

### Ejemplos

```bash
feat: añadir exportación de datos en formato CSV
fix: corregir cálculo de créditos en estadísticas
docs: actualizar instrucciones de instalación
style: mejorar espaciado en componente materia
refactor: reorganizar funciones utilitarias
```

## Reconocimiento

Los contribuidores serán reconocidos en:
- README.md del proyecto
- Página de créditos (cuando esté disponible)
- Release notes para contribuciones significativas

## Preguntas

Si tienes preguntas, puedes:
- Abrir un issue con la etiqueta "question"
- Iniciar una discusión en GitHub Discussions
- Revisar issues existentes para ver si tu pregunta ya fue respondida

¡Gracias por contribuir! 🎉
