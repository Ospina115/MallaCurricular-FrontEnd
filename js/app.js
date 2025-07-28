/**
 * Aplicación principal de la Malla Curricular Interactiva
 * Derecho
 */

import { materias, getAllMaterias, getMateriaById } from './data.js';
import { EstadoManager } from './estado.js';
import { 
  puedeSerCursada, 
  getDependientes, 
  formatearFecha, 
  crearElemento, 
  mostrarToast,
  descargarJSON,
  leerArchivoJSON,
  animarElemento 
} from './utils.js';

/**
 * Clase principal de la aplicación
 */
class MallaCurricular {
  constructor() {
    this.estadoManager = new EstadoManager();
    this.todasLasMaterias = getAllMaterias();
    
    this.init();
  }

  /**
   * Inicializa la aplicación
   */
  init() {
    this.crearInterfaz();
    this.configurarEventos();
    this.renderizar();
    this.actualizarEstadisticas();
    
    // Configurar observador de cambios de estado
    this.estadoManager.addObservador(() => {
      this.actualizarEstadisticas();
      this.actualizarProgreso();
    });
    
    console.log('⚖️ Malla Curricular Derecho iniciada');
    console.log(`📚 Total de materias: ${this.todasLasMaterias.length}`);
  }

  /**
   * Crea la interfaz base de la aplicación
   */
  crearInterfaz() {
    const header = crearElemento('div', { className: 'header' }, `
      <h1>⚖️ Malla Curricular - Derecho</h1>
      <p class="subtitle">Carrera de Derecho - Programa Académico</p>
    `);

    const controls = crearElemento('div', { className: 'controls' }, `
      <button id="resetBtn" class="btn btn-secondary">🔄 Resetear Progreso</button>
      <button id="exportBtn" class="btn">📤 Exportar Datos</button>
      <button id="importBtn" class="btn">📥 Importar Datos</button>
      <input type="file" id="importFile" accept=".json" style="display: none;">
      <button id="helpBtn" class="btn">❓ Ayuda</button>
    `);

    const stats = crearElemento('div', { 
      className: 'stats',
      id: 'stats'
    });

    const progressContainer = crearElemento('div', { className: 'progress-container' }, `
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <div class="progress-text" id="progressText">0% completado</div>
    `);

    const container = crearElemento('div', {
      className: 'container',
      id: 'malla'
    });

    // Insertar antes del script existente
    const body = document.body;
    const script = body.querySelector('script');
    
    body.insertBefore(header, script);
    body.insertBefore(controls, script);
    body.insertBefore(stats, script);
    body.insertBefore(progressContainer, script);
    body.insertBefore(container, script);
  }

  /**
   * Configura los eventos de la interfaz
   */
  configurarEventos() {
    // Botón de reset
    document.getElementById('resetBtn').addEventListener('click', () => {
      if (confirm('¿Estás seguro de que quieres resetear todo el progreso?')) {
        this.estadoManager.resetearProgreso();
        this.renderizar();
        mostrarToast('Progreso reseteado correctamente', 'success');
      }
    });

    // Botón de exportar
    document.getElementById('exportBtn').addEventListener('click', () => {
      const datos = this.estadoManager.exportarEstado();
      const fecha = new Date().toISOString().split('T')[0];
      descargarJSON(datos, `malla-derecho-${fecha}.json`);
      mostrarToast('Datos exportados correctamente', 'success');
    });

    // Botón de importar
    document.getElementById('importBtn').addEventListener('click', () => {
      document.getElementById('importFile').click();
    });

    // Archivo de importación
    document.getElementById('importFile').addEventListener('change', async (e) => {
      const archivo = e.target.files[0];
      if (!archivo) return;

      try {
        const datos = await leerArchivoJSON(archivo);
        if (this.estadoManager.importarEstado(datos)) {
          this.renderizar();
          mostrarToast('Datos importados correctamente', 'success');
        } else {
          mostrarToast('Error: Formato de archivo inválido', 'error');
        }
      } catch (error) {
        mostrarToast('Error al leer el archivo', 'error');
        console.error('Error:', error);
      }
      
      // Limpiar input
      e.target.value = '';
    });

    // Botón de ayuda
    document.getElementById('helpBtn').addEventListener('click', () => {
      this.mostrarAyuda();
    });

    // Atajos de teclado
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'r':
            e.preventDefault();
            document.getElementById('resetBtn').click();
            break;
          case 's':
            e.preventDefault();
            document.getElementById('exportBtn').click();
            break;
          case 'o':
            e.preventDefault();
            document.getElementById('importBtn').click();
            break;
        }
      }
    });
  }

  /**
   * Renderiza toda la malla curricular
   */
  renderizar() {
    const contenedor = document.getElementById('malla');
    contenedor.innerHTML = '';

    materias.forEach(anio => {
      const divAnio = this.crearAnio(anio);
      contenedor.appendChild(divAnio);
    });
  }

  /**
   * Crea un elemento de año
   * @param {Object} anio - Datos del año
   * @returns {HTMLElement} Elemento del año
   */
  crearAnio(anio) {
    const divAnio = crearElemento('div', { className: 'year' });

    const h2 = crearElemento('h2', {}, `${anio.anio} Año`);
    divAnio.appendChild(h2);

    anio.semestres.forEach(semestre => {
      const divSemestre = this.crearSemestre(semestre);
      divAnio.appendChild(divSemestre);
    });

    return divAnio;
  }

  /**
   * Crea un elemento de semestre
   * @param {Object} semestre - Datos del semestre
   * @returns {HTMLElement} Elemento del semestre
   */
  crearSemestre(semestre) {
    const divSemestre = crearElemento('div', { className: 'semestre' });

    const h3 = crearElemento('h3', {}, semestre.numero);
    divSemestre.appendChild(h3);

    semestre.materias.forEach(materia => {
      const divMateria = this.crearMateria(materia);
      divSemestre.appendChild(divMateria);
    });

    return divSemestre;
  }

  /**
   * Crea un elemento de materia
   * @param {Object} materia - Datos de la materia
   * @returns {HTMLElement} Elemento de la materia
   */
  crearMateria(materia) {
    const estadoCompletada = this.estadoManager.isMateriaCompletada(materia.id);
    const puedeSerCursadaFlag = puedeSerCursada(materia, this.estadoManager.estadoMaterias);
    
    const divMateria = crearElemento('div', {
      className: 'materia tooltip',
      dataset: { id: materia.id }
    });

    // Aplicar clases de estado
    if (estadoCompletada) {
      divMateria.classList.add('completada');
    } else if (!puedeSerCursadaFlag) {
      divMateria.classList.add('bloqueada');
    }

    // Contenido principal
    const contenidoPrincipal = crearElemento('div', {}, `
      <strong>${materia.nombre}</strong>
    `);
    divMateria.appendChild(contenidoPrincipal);

    // Información de previas
    if (materia.previas && materia.previas.length > 0) {
      const previasInfo = crearElemento('div', { className: 'previas-info' });
      const nombresPrevias = materia.previas
        .map(id => getMateriaById(id)?.nombre || id)
        .join(', ');
      previasInfo.textContent = `Previas: ${nombresPrevias}`;
      divMateria.appendChild(previasInfo);
    }

    // Tooltip
    const tooltip = this.crearTooltip(materia, estadoCompletada);
    divMateria.appendChild(tooltip);

    // Event listener
    if (puedeSerCursadaFlag || estadoCompletada) {
      divMateria.addEventListener('click', () => {
        this.toggleMateria(materia.id, divMateria);
      });
    }

    return divMateria;
  }

  /**
   * Crea un tooltip para una materia
   * @param {Object} materia - Datos de la materia
   * @param {boolean} completada - Si está completada
   * @returns {HTMLElement} Elemento del tooltip
   */
  crearTooltip(materia, completada) {
    let contenido = `<strong>${materia.nombre}</strong><br>`;
    
    if (materia.descripcion) {
      contenido += `${materia.descripcion}<br>`;
    }
    
    if (completada) {
      const fecha = this.estadoManager.getFechaCompletado(materia.id);
      if (fecha) {
        contenido += `✅ Completada: ${formatearFecha(fecha)}`;
      }
    } else if (materia.previas && materia.previas.length > 0) {
      const previasCompletadas = materia.previas.filter(id => 
        this.estadoManager.isMateriaCompletada(id)
      ).length;
      contenido += `📋 Previas: ${previasCompletadas}/${materia.previas.length}`;
    }

    return crearElemento('span', { className: 'tooltip-text' }, contenido);
  }

  /**
   * Alterna el estado de una materia
   * @param {string} materiaId - ID de la materia
   * @param {HTMLElement} elemento - Elemento DOM de la materia
   */
  async toggleMateria(materiaId, elemento) {
    const estaCompletada = this.estadoManager.isMateriaCompletada(materiaId);
    const nuevoEstado = !estaCompletada;
    
    // Animar elemento
    await animarElemento(elemento, 'materia-click');
    
    // Actualizar estado
    this.estadoManager.setMateriaCompletada(materiaId, nuevoEstado);
    
    // Re-renderizar para actualizar dependencias
    this.renderizar();
    
    // Mostrar notificación
    const materia = getMateriaById(materiaId);
    const mensaje = nuevoEstado 
      ? `✅ ${materia.nombre} marcada como completada`
      : `❌ ${materia.nombre} desmarcada`;
    
    mostrarToast(mensaje, nuevoEstado ? 'success' : 'info');
  }

  /**
   * Actualiza las estadísticas mostradas
   */
  actualizarEstadisticas() {
    const stats = this.estadoManager.getEstadisticas(this.todasLasMaterias);
    const contenedor = document.getElementById('stats');
    
    contenedor.innerHTML = `
      <div class="stat-item">
        <span class="stat-number">${stats.completadas}</span>
        <div class="stat-label">Materias Completadas</div>
      </div>
      <div class="stat-item">
        <span class="stat-number">${stats.pendientes}</span>
        <div class="stat-label">Materias Pendientes</div>
      </div>
      <div class="stat-item">
        <span class="stat-number">${stats.porcentaje}%</span>
        <div class="stat-label">Progreso Total</div>
      </div>
    `;
  }

  /**
   * Actualiza la barra de progreso
   */
  actualizarProgreso() {
    const stats = this.estadoManager.getEstadisticas(this.todasLasMaterias);
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    progressFill.style.width = `${stats.porcentaje}%`;
    progressText.textContent = `${stats.porcentaje}% completado (${stats.completadas}/${stats.total} materias)`;
  }

  /**
   * Muestra la ayuda de la aplicación
   */
  mostrarAyuda() {
    const mensaje = `
      <h3>⚖️ Ayuda - Malla Curricular Derecho</h3>
      <br>
      <strong>Cómo usar:</strong><br>
      • Haz clic en una materia para marcarla como completada<br>
      • Las materias bloqueadas (🔒) requieren completar las previas<br>
      • Las materias completadas aparecen tachadas con un ✓<br>
      <br>
      <strong>Atajos de teclado:</strong><br>
      • Ctrl+R: Resetear progreso<br>
      • Ctrl+S: Exportar datos<br>
      • Ctrl+O: Importar datos<br>
      <br>
      <strong>Funciones:</strong><br>
      • Exportar/Importar: Guarda tu progreso para transferir entre dispositivos<br>
      • El progreso se guarda automáticamente en tu navegador<br>
      • Pasa el mouse sobre las materias para ver más información
    `;
    
    mostrarToast(mensaje, 'info', 10000);
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new MallaCurricular();
});

// Exportar para uso en otras partes si es necesario
export default MallaCurricular;
