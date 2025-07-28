/**
 * Datos de la malla curricular de Derecho
 * Contiene toda la información sobre materias, previas y estructura académica
 */

/**
 * Estructura de datos para las materias de la carrera
 * Cada materia tiene:
 * - id: identificador único
 * - nombre: nombre completo de la materia
 * - previas: array de IDs de materias que son prerequisito
 * - tipo: tipo de materia (obligatoria, optativa, etc.)
 */
export const materias = [
  {
    anio: "Primer",
    color: "#ff6b6b",
    semestres: [
      {
        numero: "1º semestre",
        materias: [
          {
            id: "expresion",
            nombre: "Expresión",
            tipo: "obligatoria",
            descripcion: "Desarrollo de habilidades de comunicación escrita y oral"
          },
          {
            id: "intro_derecho",
            nombre: "Introducción al Derecho",
            tipo: "obligatoria",
            descripcion: "Fundamentos básicos del derecho y sus principios"
          },
          {
            id: "teoria_constitucional",
            nombre: "Teoría Constitucional",
            tipo: "obligatoria",
            descripcion: "Fundamentos teóricos del derecho constitucional"
          }
        ]
      },
      {
        numero: "2º semestre",
        materias: [
          {
            id: "identidad",
            nombre: "Identidad",
            previas: ["expresion"],
            tipo: "obligatoria",
            descripcion: "Desarrollo de la identidad profesional del jurista"
          },
          {
            id: "logica_juridica",
            nombre: "Lógica Jurídica",
            tipo: "obligatoria",
            descripcion: "Principios de lógica aplicados al derecho"
          },
          {
            id: "teoria_ddhh",
            nombre: "Teoría de los Derechos Humanos",
            previas: ["intro_derecho"],
            tipo: "obligatoria",
            descripcion: "Fundamentos teóricos de los derechos humanos"
          },
          {
            id: "fundamentos_privado",
            nombre: "Fundamentos del Derecho Privado",
            previas: ["intro_derecho"],
            tipo: "obligatoria",
            descripcion: "Bases del derecho privado y civil"
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
            id: "creatividad",
            nombre: "Creatividad",
            previas: ["identidad"],
            tipo: "obligatoria",
            descripcion: "Desarrollo del pensamiento creativo en el ámbito jurídico"
          },
          {
            id: "argumentacion_juridica",
            nombre: "Argumentación Jurídica",
            previas: ["logica_juridica"],
            tipo: "obligatoria",
            descripcion: "Técnicas de argumentación en el derecho"
          },
          {
            id: "derecho_obligaciones",
            nombre: "Derecho de las Obligaciones",
            previas: ["fundamentos_privado"],
            tipo: "obligatoria",
            descripcion: "Estudio de las obligaciones en el derecho civil"
          },
          {
            id: "derecho_familia",
            nombre: "Derecho de Familia",
            previas: ["fundamentos_privado"],
            tipo: "obligatoria",
            descripcion: "Regulación jurídica de las relaciones familiares"
          },
          {
            id: "derecho_laboral_const",
            nombre: "Derecho Laboral Constitucional",
            previas: ["intro_derecho"],
            tipo: "obligatoria",
            descripcion: "Principios constitucionales del derecho laboral"
          },
          {
            id: "derecho_penal_general1",
            nombre: "Derecho Penal General I",
            previas: ["intro_derecho"],
            tipo: "obligatoria",
            descripcion: "Teoría general del delito"
          },
          {
            id: "derecho_constitucional_col1",
            nombre: "Derecho Constitucional Colombiano I",
            previas: ["teoria_constitucional"],
            tipo: "obligatoria",
            descripcion: "Estructura constitucional del Estado colombiano"
          }
        ]
      },
      {
        numero: "4º semestre",
        materias: [
          {
            id: "derecho_negocios_juridicos",
            nombre: "Derecho de los Negocios Jurídicos",
            previas: ["derecho_obligaciones"],
            tipo: "obligatoria",
            descripcion: "Contratos y actos jurídicos patrimoniales"
          },
          {
            id: "derecho_titulos_valores",
            nombre: "Derecho de los Títulos Valores",
            previas: ["derecho_obligaciones"],
            tipo: "obligatoria",
            descripcion: "Regulación de títulos valores y documentos comerciales"
          },
          {
            id: "derecho_penal_general2",
            nombre: "Derecho Penal General II",
            previas: ["derecho_penal_general1"],
            tipo: "obligatoria",
            descripcion: "Teoría de la pena y medidas de seguridad"
          },
          {
            id: "derecho_constitucional_col2",
            nombre: "Derecho Constitucional Colombiano II",
            previas: ["derecho_constitucional_col1"],
            tipo: "obligatoria",
            descripcion: "Derechos fundamentales y garantías constitucionales"
          },
          {
            id: "derecho_economico",
            nombre: "Derecho Económico",
            previas: ["derecho_constitucional_col1"],
            tipo: "obligatoria",
            descripcion: "Regulación jurídica de la actividad económica"
          },
          {
            id: "relaciones_trabajo",
            nombre: "Relaciones Individuales y Colectivas de Trabajo",
            tipo: "obligatoria",
            descripcion: "Derecho laboral individual y colectivo"
          }
        ]
      }
    ]
  },
  {
    anio: "Tercer",
    color: "#45b7d1",
    semestres: [
      {
        numero: "5º semestre",
        materias: [
          {
            id: "derecho_responsabilidad",
            nombre: "Derecho de la Responsabilidad",
            previas: ["derecho_obligaciones"],
            tipo: "obligatoria",
            descripcion: "Responsabilidad civil contractual y extracontractual"
          },
          {
            id: "derecho_seguridad_social",
            nombre: "Derecho de la Seguridad Social",
            previas: ["derecho_laboral_const"],
            tipo: "obligatoria",
            descripcion: "Sistema de seguridad social y protección social"
          },
          {
            id: "derecho_penal_especial",
            nombre: "Derecho Penal Especial",
            previas: ["derecho_penal_general2"],
            tipo: "obligatoria",
            descripcion: "Delitos en particular y tipos penales específicos"
          },
          {
            id: "derecho_administrativo_general",
            nombre: "Derecho Administrativo General",
            previas: ["derecho_constitucional_col2"],
            tipo: "obligatoria",
            descripcion: "Principios generales del derecho administrativo"
          },
          {
            id: "teoria_general_proceso",
            nombre: "Teoría General del Proceso",
            tipo: "obligatoria",
            descripcion: "Fundamentos teóricos del derecho procesal"
          },
          {
            id: "seminario_hermeneutica",
            nombre: "Seminario de Hermenéutica Jurídica",
            tipo: "obligatoria",
            descripcion: "Interpretación y hermenéutica jurídica"
          }
        ]
      },
      {
        numero: "6º semestre",
        materias: [
          {
            id: "derecho_societario",
            nombre: "Derecho Societario",
            previas: ["derecho_negocios_juridicos"],
            tipo: "obligatoria",
            descripcion: "Derecho de sociedades comerciales"
          },
          {
            id: "derecho_procesal_penal",
            nombre: "Derecho Procesal Penal",
            previas: ["derecho_penal_especial"],
            tipo: "obligatoria",
            descripcion: "Procedimiento penal y proceso acusatorio"
          },
          {
            id: "derecho_administrativo_especial",
            nombre: "Derecho Administrativo Especial",
            previas: ["derecho_administrativo_general"],
            tipo: "obligatoria",
            descripcion: "Ramas especiales del derecho administrativo"
          },
          {
            id: "derecho_procesal_civil_general",
            nombre: "Derecho Procesal Civil General",
            previas: ["teoria_general_proceso"],
            tipo: "obligatoria",
            descripcion: "Procedimiento civil general"
          },
          {
            id: "derecho_procesal_laboral",
            nombre: "Derecho Procesal Laboral",
            previas: ["relaciones_trabajo"],
            tipo: "obligatoria",
            descripcion: "Procedimiento en materia laboral"
          },
          {
            id: "seminario_analisis_jurisprudencial",
            nombre: "Seminario de Análisis Jurisprudencial",
            previas: ["seminario_hermeneutica"],
            tipo: "obligatoria",
            descripcion: "Análisis de jurisprudencia y precedente judicial"
          },
          {
            id: "teoria_general_prueba",
            nombre: "Teoría General de la Prueba",
            tipo: "obligatoria",
            descripcion: "Principios generales del derecho probatorio"
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
            id: "derecho_probatorio_especial",
            nombre: "Derecho Probatorio Especial",
            previas: ["derecho_procesal_penal", "derecho_procesal_laboral", "teoria_general_prueba"],
            tipo: "obligatoria",
            descripcion: "Pruebas especiales en diferentes jurisdicciones"
          },
          {
            id: "procedimiento_admin_contencioso",
            nombre: "Procedimiento Administrativo y Contencioso Administrativo",
            previas: ["derecho_administrativo_especial"],
            tipo: "obligatoria",
            descripcion: "Procedimientos administrativos y contenciosos"
          },
          {
            id: "derecho_procesal_civil_especial",
            nombre: "Derecho Procesal Civil Especial",
            previas: ["derecho_procesal_civil_general"],
            tipo: "obligatoria",
            descripcion: "Procedimientos civiles especiales"
          },
          {
            id: "derecho_tributario2",
            nombre: "Derecho Tributario II",
            previas: ["derecho_economico"],
            tipo: "obligatoria",
            descripcion: "Tributación especial y procedimientos tributarios"
          },
          {
            id: "seminario_institutos_juridicos",
            nombre: "Seminario de Institutos Jurídicos",
            previas: ["seminario_analisis_jurisprudencial"],
            tipo: "obligatoria",
            descripcion: "Estudio de institutos jurídicos fundamentales"
          },
          {
            id: "consultorio_juridico1",
            nombre: "Consultorio Jurídico I",
            previas: ["teoria_general_prueba"],
            tipo: "obligatoria",
            descripcion: "Práctica jurídica inicial"
          },
          {
            id: "curso_conciliacion",
            nombre: "Curso de Conciliación",
            tipo: "obligatoria",
            descripcion: "Métodos alternativos de resolución de conflictos"
          }
        ]
      },
      {
        numero: "8º semestre",
        materias: [
          {
            id: "derecho_funcion_publica",
            nombre: "Derecho de la Función Pública",
            previas: ["procedimiento_admin_contencioso", "relaciones_trabajo", "derecho_responsabilidad", "derecho_constitucional_col2"],
            tipo: "obligatoria",
            descripcion: "Régimen jurídico de los servidores públicos"
          },
          {
            id: "derecho_internacional_publico",
            nombre: "Derecho Internacional Público",
            previas: ["derecho_constitucional_col2"],
            tipo: "obligatoria",
            descripcion: "Derecho de las relaciones internacionales"
          },
          {
            id: "consultorio_juridico2",
            nombre: "Consultorio Jurídico II",
            previas: ["derecho_procesal_civil_especial", "derecho_probatorio_especial", "procedimiento_admin_contencioso"],
            tipo: "obligatoria",
            descripcion: "Práctica jurídica intermedia"
          },
          {
            id: "seminario_escuelas_juridicas",
            nombre: "Seminario de Escuelas Jurídicas",
            previas: ["seminario_institutos_juridicos"],
            tipo: "obligatoria",
            descripcion: "Estudio de las principales escuelas del pensamiento jurídico"
          },
          {
            id: "mecanismos_alternativos",
            nombre: "Mecanismos Alternativos de Solución de Conflictos",
            previas: ["teoria_general_proceso"],
            tipo: "obligatoria",
            descripcion: "Arbitraje, mediación y otros MASC"
          },
          {
            id: "emprendimiento_juridico1",
            nombre: "Emprendimiento Jurídico Ciclo I",
            tipo: "obligatoria",
            descripcion: "Emprendimiento e innovación en el sector jurídico"
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
        numero: "9º semestre",
        materias: [
          {
            id: "electiva_socio_humanistica1",
            nombre: "Electiva Socio Humanística I",
            previas: ["creatividad"],
            tipo: "electiva",
            descripcion: "Materia electiva del área socio-humanística"
          },
          {
            id: "consultorio_juridico3",
            nombre: "Consultorio Jurídico III",
            previas: ["derecho_procesal_civil_especial", "curso_conciliacion"],
            tipo: "obligatoria",
            descripcion: "Práctica jurídica avanzada"
          },
          {
            id: "seminario_metodologia_investigacion",
            nombre: "Seminario de Metodología de la Investigación Jurídica",
            previas: ["seminario_escuelas_juridicas"],
            tipo: "obligatoria",
            descripcion: "Metodología para la investigación en derecho"
          },
          {
            id: "emprendimiento_juridico2",
            nombre: "Emprendimiento Jurídico Ciclo II",
            previas: ["emprendimiento_juridico1"],
            tipo: "obligatoria",
            descripcion: "Desarrollo de proyectos jurídicos emprendedores"
          }
        ]
      },
      {
        numero: "10º semestre",
        materias: [
          {
            id: "electiva_socio_humanistica2",
            nombre: "Electiva Socio Humanística II",
            previas: ["electiva_socio_humanistica1"],
            tipo: "electiva",
            descripcion: "Segunda materia electiva del área socio-humanística"
          },
          {
            id: "seminario_proyecto_investigacion",
            nombre: "Seminario de Proyecto de Investigación",
            previas: ["seminario_metodologia_investigacion"],
            tipo: "obligatoria",
            descripcion: "Desarrollo de proyecto de grado o investigación"
          },
          {
            id: "consultorio_juridico4",
            nombre: "Consultorio Jurídico IV",
            previas: ["emprendimiento_juridico1", "emprendimiento_juridico2"],
            tipo: "obligatoria",
            descripcion: "Práctica jurídica final y trabajo de grado"
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
  STORAGE_KEY: "estadoMaterias_derecho",
  
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
 * Obtiene una materia por su ID
 * @param {string} id - ID de la materia
 * @returns {Object|null} Objeto de la materia o null si no se encuentra
 */
export function getMateriaById(id) {
  return getAllMaterias().find(materia => materia.id === id) || null;
}
