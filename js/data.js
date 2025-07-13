/**
 * Datos de la malla curricular de Medicina - UDELAR
 * Contiene toda la información sobre materias, previas y estructura académica
 */

/**
 * Estructura de datos para las materias de la carrera
 * Cada materia tiene:
 * - id: identificador único
 * - nombre: nombre completo de la materia
 * - previas: array de IDs de materias que son prerequisito
 * - creditos: créditos académicos (opcional)
 * - tipo: tipo de materia (obligatoria, optativa, etc.)
 */
export const materias = [
  {
    anio: "Primero",
    color: "#ff6b6b",
    semestres: [
      {
        numero: "1º semestre",
        materias: [
          {
            id: "bio_intro",
            nombre: "Introducción a la Biología Celular y Molecular",
            creditos: 8,
            tipo: "obligatoria",
            descripcion: "Fundamentos básicos de biología celular y molecular"
          },
          {
            id: "bioest",
            nombre: "Introducción a la Bioestadística",
            creditos: 6,
            tipo: "obligatoria",
            descripcion: "Conceptos fundamentales de estadística aplicada a ciencias médicas"
          },
          {
            id: "bioetica",
            nombre: "Salud y Humanidades y Bioética",
            creditos: 4,
            tipo: "obligatoria",
            descripcion: "Principios éticos y humanísticos en medicina"
          },
          {
            id: "at1",
            nombre: "Aprendizaje en Territorio 1",
            creditos: 6,
            tipo: "obligatoria",
            descripcion: "Primera aproximación al trabajo en comunidad"
          }
        ]
      },
      {
        numero: "2º semestre",
        materias: [
          {
            id: "bio",
            nombre: "Biología Celular y Molecular",
            previas: ["bio_intro"],
            creditos: 12,
            tipo: "obligatoria",
            descripcion: "Profundización en biología celular y molecular"
          },
          {
            id: "at2",
            nombre: "Aprendizaje en Territorio 2",
            previas: ["at1"],
            creditos: 6,
            tipo: "obligatoria",
            descripcion: "Continuación del trabajo territorial"
          }
        ]
      }
    ]
  },
  {
    anio: "Segundo",
    color: "#4ecdc4",
    semestres: [
      {
        numero: "3º semestre",
        materias: [
          {
            id: "anatomia",
            nombre: "Anatomía (CBCC2)",
            previas: ["bioetica"],
            creditos: 14,
            tipo: "obligatoria",
            descripcion: "Estudio de la anatomía humana básica"
          },
          {
            id: "histobiof",
            nombre: "Histología y Biofísica (CBCC2)",
            previas: ["bio"],
            creditos: 12,
            tipo: "obligatoria",
            descripcion: "Histología y principios biofísicos"
          }
        ]
      },
      {
        numero: "4º semestre",
        materias: [
          {
            id: "histoneuro",
            nombre: "Histología (Neuro y Cardio)",
            previas: ["bio"],
            creditos: 8,
            tipo: "obligatoria",
            descripcion: "Histología especializada en sistemas nervioso y cardiovascular"
          },
          {
            id: "neuro",
            nombre: "Neurociencias",
            previas: ["bio"],
            creditos: 10,
            tipo: "obligatoria",
            descripcion: "Fundamentos de neurociencias"
          },
          {
            id: "cardioresp",
            nombre: "Cardiovascular y Respiratorio",
            previas: ["bio"],
            creditos: 10,
            tipo: "obligatoria",
            descripcion: "Sistemas cardiovascular y respiratorio"
          }
        ]
      }
    ]
  },
  {
    anio: "Tercero",
    color: "#45b7d1",
    semestres: [
      {
        numero: "5º semestre",
        materias: [
          {
            id: "cbcc5",
            nombre: "Digestivo, Renal, Endocrino, Metabólico y Reproductor",
            previas: ["bio", "anatomia"],
            creditos: 16,
            tipo: "obligatoria",
            descripcion: "Sistemas digestivo, renal, endocrino y reproductor"
          }
        ]
      },
      {
        numero: "6º semestre",
        materias: [
          {
            id: "b6",
            nombre: "Hematología e Inmunobiología",
            previas: ["bio"],
            creditos: 10,
            tipo: "obligatoria",
            descripcion: "Sistema hematológico e inmunológico"
          },
          {
            id: "met1",
            nombre: "Metodología Científica 1",
            previas: ["bioest", "cbcc5"],
            creditos: 6,
            tipo: "obligatoria",
            descripcion: "Introducción a la metodología de investigación"
          }
        ]
      }
    ]
  },
  {
    anio: "Cuarto",
    color: "#96ceb4",
    semestres: [
      {
        numero: "7º semestre",
        materias: [
          {
            id: "m4pna",
            nombre: "Medicina en el Primer Nivel de Atención",
            previas: ["cbcc5", "b6", "met1"],
            creditos: 12,
            tipo: "obligatoria",
            descripcion: "Medicina en atención primaria"
          },
          {
            id: "m4bcp",
            nombre: "Bases Científicas de la Patología",
            previas: ["cbcc5", "b6", "met1"],
            creditos: 12,
            tipo: "obligatoria",
            descripcion: "Fundamentos científicos de la patología"
          }
        ]
      },
      {
        numero: "8º semestre",
        materias: [
          {
            id: "pediatria",
            nombre: "Pediatría",
            previas: ["cbcc5", "b6", "met1"],
            creditos: 12,
            tipo: "obligatoria",
            descripcion: "Medicina pediátrica"
          },
          {
            id: "gineco",
            nombre: "Ginecología y Neonatología",
            previas: ["cbcc5", "b6", "met1"],
            creditos: 12,
            tipo: "obligatoria",
            descripcion: "Ginecología y cuidados neonatales"
          }
        ]
      }
    ]
  },
  {
    anio: "Quinto",
    color: "#feca57",
    semestres: [
      {
        numero: "9º y 10º semestre",
        materias: [
          {
            id: "clinica",
            nombre: "Clínica Médica",
            previas: ["m4pna", "m4bcp"],
            creditos: 20,
            tipo: "obligatoria",
            descripcion: "Práctica clínica médica"
          },
          {
            id: "patomed",
            nombre: "Patología Médica y Terapéutica",
            previas: ["m4bcp"],
            creditos: 18,
            tipo: "obligatoria",
            descripcion: "Patología médica y tratamientos"
          }
        ]
      }
    ]
  },
  {
    anio: "Sexto",
    color: "#ff9ff3",
    semestres: [
      {
        numero: "11º y 12º semestre",
        materias: [
          {
            id: "clinicaq",
            nombre: "Clínica Quirúrgica",
            previas: ["m4pna", "m4bcp"],
            creditos: 18,
            tipo: "obligatoria",
            descripcion: "Práctica clínica quirúrgica"
          },
          {
            id: "patoquir",
            nombre: "Patología Quirúrgica",
            previas: ["m4bcp"],
            creditos: 16,
            tipo: "obligatoria",
            descripcion: "Patología quirúrgica"
          },
          {
            id: "mfc",
            nombre: "MFC – Salud Mental en Comunidad – Psicología Médica",
            previas: ["m4pna"],
            creditos: 12,
            tipo: "obligatoria",
            descripcion: "Medicina familiar y comunitaria, salud mental"
          },
          {
            id: "met2",
            nombre: "Metodología Científica 2",
            previas: ["m4pna", "m4bcp"],
            creditos: 8,
            tipo: "obligatoria",
            descripcion: "Metodología de investigación avanzada"
          }
        ]
      }
    ]
  },
  {
    anio: "Séptimo",
    color: "#f0932b",
    semestres: [
      {
        numero: "13º y 14º semestre",
        materias: [
          {
            id: "internado",
            nombre: "Internado Obligatorio",
            previas: ["clinica", "patomed", "clinicaq", "patoquir", "mfc", "met2"],
            creditos: 30,
            tipo: "obligatoria",
            descripcion: "Internado rotatorio obligatorio"
          }
        ]
      }
    ]
  }
];

/**
 * Configuración del sistema
 */
export const config = {
  // Clave para localStorage
  STORAGE_KEY: "estadoMaterias_medicina_udelar",
  
  // Versión de los datos (para migraciones futuras)
  DATA_VERSION: "1.0.0",
  
  // Configuración de animaciones
  ANIMATION_DURATION: 300,
  
  // Colores del tema
  COLORS: {
    primary: "#800080",
    secondary: "#a020f0",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8"
  }
};

/**
 * Obtiene todas las materias en un array plano
 * @returns {Array} Array con todas las materias
 */
export function getAllMaterias() {
  const todasLasMaterias = [];
  
  materias.forEach(anio => {
    anio.semestres.forEach(semestre => {
      semestre.materias.forEach(materia => {
        todasLasMaterias.push({
          ...materia,
          anio: anio.anio,
          semestre: semestre.numero
        });
      });
    });
  });
  
  return todasLasMaterias;
}

/**
 * Calcula el total de créditos de la carrera
 * @returns {number} Total de créditos
 */
export function getTotalCreditos() {
  return getAllMaterias().reduce((total, materia) => {
    return total + (materia.creditos || 0);
  }, 0);
}

/**
 * Obtiene una materia por su ID
 * @param {string} id - ID de la materia
 * @returns {Object|null} Objeto de la materia o null si no se encuentra
 */
export function getMateriaById(id) {
  return getAllMaterias().find(materia => materia.id === id) || null;
}
