/**
 * Configuración global de la aplicación
 * Malla Curricular Medicina UDELAR
 */

export const CONFIG = {
  // Información de la aplicación
  APP: {
    name: 'Malla Curricular Medicina UDELAR',
    version: '1.0.0',
    author: 'Medicina UDELAR',
    description: 'Aplicación web interactiva para el seguimiento de progreso académico',
    repository: 'https://github.com/PriscillaNoble24/Malla-Fmed-Interactiva'
  },

  // Configuración de persistencia
  STORAGE: {
    key: 'estadoMaterias_medicina_udelar',
    version: '1.0.0',
    expiration: 365 * 24 * 60 * 60 * 1000, // 1 año en millisegundos
    compressionEnabled: false
  },

  // Configuración de UI
  UI: {
    animationDuration: 300,
    toastDuration: 3000,
    tooltipDelay: 500,
    autoSaveDelay: 1000
  },

  // Colores del tema
  THEME: {
    colors: {
      primary: '#CC728F',
      secondary: '#8f495fff',
      success: '#28a745',
      danger: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      light: '#f8f9fa',
      dark: '#343a40'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #800080, #a020f0)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      card: 'linear-gradient(135deg, #f9e1f1, #e6d6fa)'
    }
  },

  // Configuración de validación
  VALIDATION: {
    maxMateriaNameLength: 100,
    maxDescriptionLength: 500,
    minCreditosValue: 0,
    maxCreditosValue: 50
  },

  // Configuración de características
  FEATURES: {
    exportImport: true,
    darkMode: false, // Para futuras versiones
    notifications: false, // Para futuras versiones
    analytics: false, // Para futuras versiones
    sync: false // Para futuras versiones
  },

  // URLs y endpoints (para futuras integraciones)
  API: {
    baseUrl: null, // Para futuras integraciones con backend
    endpoints: {
      materias: '/api/materias',
      progreso: '/api/progreso',
      sync: '/api/sync'
    },
    timeout: 10000
  },

  // Configuración de debug
  DEBUG: {
    enabled: process?.env?.NODE_ENV === 'development',
    logLevel: 'info', // error, warn, info, debug
    showPerformanceMetrics: false
  },

  // Configuración de accesibilidad
  ACCESSIBILITY: {
    keyboardNavigation: true,
    screenReaderSupport: true,
    highContrast: false,
    reducedMotion: false
  },

  // Configuración de analytics (para futuras versiones)
  ANALYTICS: {
    enabled: false,
    trackingId: null,
    anonymizeData: true,
    trackEvents: {
      materiaComplete: true,
      exportData: true,
      importData: true,
      resetProgress: true
    }
  },

  // Configuración de PWA (para futuras versiones)
  PWA: {
    enabled: false,
    cacheStrategy: 'cacheFirst',
    offlineSupport: true,
    installPrompt: true
  },

  // Límites y restricciones
  LIMITS: {
    maxLocalStorageSize: 5 * 1024 * 1024, // 5MB
    maxExportFileSize: 1024 * 1024, // 1MB
    maxBackupRetention: 10, // Número de backups a mantener
    rateLimitRequests: 100 // Por minuto (para futuras integraciones)
  },

  // Configuración de formatos
  FORMATS: {
    dateFormat: 'dd/MM/yyyy',
    dateTimeFormat: 'dd/MM/yyyy HH:mm',
    numberFormat: 'es-UY',
    currency: 'UYU'
  },

  // Textos y mensajes predefinidos
  MESSAGES: {
    errors: {
      loadData: 'Error al cargar los datos. Por favor, recarga la página.',
      saveData: 'Error al guardar los datos. Verifica tu conexión.',
      invalidFile: 'Archivo inválido. Por favor, selecciona un archivo JSON válido.',
      storageQuota: 'Espacio de almacenamiento lleno. Considera exportar y limpiar datos.',
      networkError: 'Error de conexión. Verifica tu conexión a internet.'
    },
    success: {
      dataSaved: 'Datos guardados correctamente',
      dataExported: 'Datos exportados exitosamente',
      dataImported: 'Datos importados correctamente',
      progressReset: 'Progreso reseteado exitosamente'
    },
    confirmations: {
      resetProgress: '¿Estás seguro de que quieres resetear todo el progreso? Esta acción no se puede deshacer.',
      importData: 'Esto sobrescribirá tu progreso actual. ¿Deseas continuar?',
      clearCache: '¿Quieres limpiar todos los datos almacenados localmente?'
    }
  },

  // Configuración de desarrollo
  DEVELOPMENT: {
    mockData: false,
    skipAnimations: false,
    verboseLogging: false,
    showDebugInfo: false
  }
};

// Configuración específica por entorno
if (typeof window !== 'undefined') {
  // Configuración del navegador
  CONFIG.BROWSER = {
    userAgent: navigator.userAgent,
    language: navigator.language || 'es-UY',
    platform: navigator.platform,
    online: navigator.onLine,
    cookiesEnabled: navigator.cookieEnabled,
    localStorage: typeof Storage !== 'undefined',
    sessionStorage: typeof sessionStorage !== 'undefined'
  };

  // Detectar características del navegador
  CONFIG.FEATURES.touchDevice = 'ontouchstart' in window;
  CONFIG.FEATURES.webGL = !!window.WebGLRenderingContext;
  CONFIG.FEATURES.webWorkers = typeof Worker !== 'undefined';
  CONFIG.FEATURES.geolocation = 'geolocation' in navigator;
  CONFIG.FEATURES.pushNotifications = 'PushManager' in window;
}

// Función para obtener configuración anidada
export function getConfig(path, defaultValue = null) {
  return path.split('.').reduce((obj, key) => {
    return obj && obj[key] !== undefined ? obj[key] : defaultValue;
  }, CONFIG);
}

// Función para validar configuración
export function validateConfig() {
  const requiredKeys = ['APP.name', 'APP.version', 'STORAGE.key'];
  const missing = requiredKeys.filter(key => !getConfig(key));
  
  if (missing.length > 0) {
    console.error('Configuración incompleta. Faltan:', missing);
    return false;
  }
  
  return true;
}

// Función para mergear configuración personalizada
export function mergeConfig(customConfig) {
  return deepMerge(CONFIG, customConfig);
}

// Utilidad para merge profundo
function deepMerge(target, source) {
  const output = Object.assign({}, target);
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  
  return output;
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

// Exportar configuración por defecto
export default CONFIG;
