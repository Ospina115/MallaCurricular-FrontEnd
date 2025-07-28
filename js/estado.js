/**
 * Gestor de estado para la aplicación de Malla Curricular
 * Maneja el localStorage y el estado de las materias completadas
 */

import { config } from './data.js';

/**
 * Clase para manejar el estado de las materias
 */
export class EstadoManager {
  constructor() {
    this.estadoMaterias = this.cargarEstado();
    this.observadores = [];
  }

  /**
   * Carga el estado desde localStorage
   * @returns {Object} Estado de las materias
   */
  cargarEstado() {
    try {
      const estado = localStorage.getItem(config.STORAGE_KEY);
      return estado ? JSON.parse(estado) : {};
    } catch (error) {
      console.warn('Error al cargar estado desde localStorage:', error);
      return {};
    }
  }

  /**
   * Guarda el estado en localStorage
   */
  guardarEstado() {
    try {
      const estadoConMetadata = {
        version: config.DATA_VERSION,
        timestamp: Date.now(),
        materias: this.estadoMaterias
      };
      localStorage.setItem(config.STORAGE_KEY, JSON.stringify(estadoConMetadata));
      this.notificarObservadores();
    } catch (error) {
      console.error('Error al guardar estado en localStorage:', error);
    }
  }

  /**
   * Marca una materia como completada o no completada
   * @param {string} materiaId - ID de la materia
   * @param {boolean} completada - Estado de completado
   */
  setMateriaCompletada(materiaId, completada) {
    if (completada) {
      this.estadoMaterias[materiaId] = {
        completada: true,
        fecha: new Date().toISOString()
      };
    } else {
      delete this.estadoMaterias[materiaId];
    }
    this.guardarEstado();
  }

  /**
   * Verifica si una materia está completada
   * @param {string} materiaId - ID de la materia
   * @returns {boolean} True si está completada
   */
  isMateriaCompletada(materiaId) {
    return this.estadoMaterias[materiaId]?.completada || false;
  }

  /**
   * Obtiene la fecha de completado de una materia
   * @param {string} materiaId - ID de la materia
   * @returns {string|null} Fecha ISO o null
   */
  getFechaCompletado(materiaId) {
    return this.estadoMaterias[materiaId]?.fecha || null;
  }

  /**
   * Resetea todo el progreso
   */
  resetearProgreso() {
    this.estadoMaterias = {};
    this.guardarEstado();
  }

  /**
   * Exporta el estado actual
   * @returns {Object} Estado actual serializable
   */
  exportarEstado() {
    return {
      version: config.DATA_VERSION,
      timestamp: Date.now(),
      materias: this.estadoMaterias
    };
  }

  /**
   * Importa un estado desde un objeto
   * @param {Object} estadoImportado - Estado a importar
   */
  importarEstado(estadoImportado) {
    try {
      if (estadoImportado.materias) {
        this.estadoMaterias = estadoImportado.materias;
        this.guardarEstado();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al importar estado:', error);
      return false;
    }
  }

  /**
   * Añade un observador para cambios de estado
   * @param {Function} callback - Función a llamar cuando cambie el estado
   */
  addObservador(callback) {
    this.observadores.push(callback);
  }

  /**
   * Notifica a todos los observadores
   */
  notificarObservadores() {
    this.observadores.forEach(callback => {
      try {
        callback(this.estadoMaterias);
      } catch (error) {
        console.error('Error en observador:', error);
      }
    });
  }

  /**
   * Obtiene estadísticas del progreso
   * @param {Array} todasLasMaterias - Array con todas las materias
   * @returns {Object} Estadísticas del progreso
   */
  getEstadisticas(todasLasMaterias) {
    const total = todasLasMaterias.length;
    const completadas = todasLasMaterias.filter(materia => 
      this.isMateriaCompletada(materia.id)
    ).length;

    return {
      total,
      completadas,
      pendientes: total - completadas,
      porcentaje: total > 0 ? Math.round((completadas / total) * 100) : 0
    };
  }
}
