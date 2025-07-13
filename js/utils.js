/**
 * Utilidades y funciones helper para la aplicación
 */

/**
 * Verifica si una materia puede ser cursada (cumple con las previas)
 * @param {Object} materia - Objeto de la materia
 * @param {Object} estadoMaterias - Estado actual de las materias
 * @returns {boolean} True si puede ser cursada
 */
export function puedeSerCursada(materia, estadoMaterias) {
  if (!materia.previas || materia.previas.length === 0) {
    return true;
  }
  
  return materia.previas.every(previaId => estadoMaterias[previaId]?.completada);
}

/**
 * Obtiene las materias que dependen de una materia específica
 * @param {string} materiaId - ID de la materia
 * @param {Array} todasLasMaterias - Array con todas las materias
 * @returns {Array} Array de materias dependientes
 */
export function getDependientes(materiaId, todasLasMaterias) {
  return todasLasMaterias.filter(materia => 
    materia.previas && materia.previas.includes(materiaId)
  );
}

/**
 * Formatea una fecha ISO a formato legible
 * @param {string} fechaISO - Fecha en formato ISO
 * @returns {string} Fecha formateada
 */
export function formatearFecha(fechaISO) {
  if (!fechaISO) return '';
  
  const fecha = new Date(fechaISO);
  return fecha.toLocaleDateString('es-UY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Genera un color aleatorio para temas
 * @returns {string} Color en formato hexadecimal
 */
export function generarColorAleatorio() {
  const colores = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', 
    '#feca57', '#ff9ff3', '#f0932b', '#eb4d4b',
    '#6c5ce7', '#a29bfe', '#74b9ff', '#0984e3'
  ];
  return colores[Math.floor(Math.random() * colores.length)];
}

/**
 * Debounce para funciones
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función con debounce
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Anima un elemento con una clase CSS
 * @param {HTMLElement} elemento - Elemento a animar
 * @param {string} claseAnimacion - Clase CSS de animación
 * @param {number} duracion - Duración en ms
 */
export function animarElemento(elemento, claseAnimacion, duracion = 300) {
  return new Promise((resolve) => {
    elemento.classList.add(claseAnimacion);
    
    setTimeout(() => {
      elemento.classList.remove(claseAnimacion);
      resolve();
    }, duracion);
  });
}

/**
 * Crea un elemento DOM con atributos
 * @param {string} tag - Tag del elemento
 * @param {Object} atributos - Atributos del elemento
 * @param {string} contenido - Contenido del elemento
 * @returns {HTMLElement} Elemento creado
 */
export function crearElemento(tag, atributos = {}, contenido = '') {
  const elemento = document.createElement(tag);
  
  Object.entries(atributos).forEach(([key, value]) => {
    if (key === 'className') {
      elemento.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        elemento.dataset[dataKey] = dataValue;
      });
    } else {
      elemento.setAttribute(key, value);
    }
  });
  
  if (contenido) {
    elemento.innerHTML = contenido;
  }
  
  return elemento;
}

/**
 * Valida y sanitiza entrada del usuario
 * @param {string} input - Entrada del usuario
 * @returns {string} Entrada sanitizada
 */
export function sanitizarInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

/**
 * Guarda datos como archivo JSON
 * @param {Object} datos - Datos a guardar
 * @param {string} nombreArchivo - Nombre del archivo
 */
export function descargarJSON(datos, nombreArchivo) {
  const dataStr = JSON.stringify(datos, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = nombreArchivo;
  link.click();
  
  URL.revokeObjectURL(link.href);
}

/**
 * Lee un archivo JSON
 * @param {File} archivo - Archivo a leer
 * @returns {Promise<Object>} Promesa con los datos del archivo
 */
export function leerArchivoJSON(archivo) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const datos = JSON.parse(e.target.result);
        resolve(datos);
      } catch (error) {
        reject(new Error('Archivo JSON inválido'));
      }
    };
    
    reader.onerror = () => reject(new Error('Error al leer el archivo'));
    reader.readAsText(archivo);
  });
}

/**
 * Muestra una notificación toast
 * @param {string} mensaje - Mensaje a mostrar
 * @param {string} tipo - Tipo de notificación (success, error, warning, info)
 * @param {number} duracion - Duración en ms
 */
export function mostrarToast(mensaje, tipo = 'info', duracion = 3000) {
  // Crear container si no existe
  let container = document.getElementById('toast-container');
  if (!container) {
    container = crearElemento('div', {
      id: 'toast-container',
      className: 'toast-container'
    });
    document.body.appendChild(container);
  }
  
  // Crear toast
  const toast = crearElemento('div', {
    className: `toast toast-${tipo}`,
  }, mensaje);
  
  container.appendChild(toast);
  
  // Animar entrada
  setTimeout(() => toast.classList.add('toast-show'), 10);
  
  // Remover después del tiempo especificado
  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, duracion);
}

/**
 * Calcula el contraste de color para texto
 * @param {string} backgroundColor - Color de fondo en hex
 * @returns {string} 'white' o 'black' según el contraste
 */
export function calcularContrasteTexto(backgroundColor) {
  // Remover # si existe
  const hex = backgroundColor.replace('#', '');
  
  // Convertir a RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calcular luminancia
  const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminancia > 0.5 ? 'black' : 'white';
}

/**
 * Convierte una cadena a slug URL-friendly
 * @param {string} texto - Texto a convertir
 * @returns {string} Slug generado
 */
export function crearSlug(texto) {
  return texto
    .toLowerCase()
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}
