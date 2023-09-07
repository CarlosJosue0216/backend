
    const questions = [
        {
            questionText: '¿Cuál es tu rango de edad?',
            choices: ['18 - 29', '30 - 39', '40 - 49', '50 - 59', '60 - 69', '70 - 79', '80 o más']
        },
        {
            questionText: 'Estado civil',
            choices: ['Soltera', 'Casada', 'Unión libre', 'Separada', 'Divorciada', 'Viuda', 'Otros']
        },
        {
            questionText: '¿Tienes hijos/as?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Número de hijos/as y edad',
            subQuestions: [
                {
                    questionText: 'Número de hijos/as',
                    choices: ['1', '2', '3', '4', 'Más de 5']
                },
                {
                    questionText: 'Rango de edad',
                    choices: ['0 - 5 años', '6 - 11 años', '12 - 17 años', '18 o más', 'N/A']
                }
            ]
        },
        {
            questionText: 'Orientación sexual',
            choices: ['Heterosexual', 'Homosexual', 'Bisexual', 'Prefiero no decirlo', 'Otros']
        },
        {
            questionText: 'Pertenece a la comunidad LGBTTTIQ+',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Escolaridad',
            choices: ['Licenciatura', 'Maestría', 'Candidata a Doctorado', 'Doctorado', 'Otros']
        },
        {
            questionText: '¿Es migrante?',
            choices: ['Sí', 'No']
        },
        {
            questionText: '¿Pertenece a alguna comunidad indígena? ¿Cuál?',
            choices: [
                'No pertenezco a ninguna comunidad indígena',
                'Otomíes',
                'Totonaca',
                'Huastecos',
                'Nahuas',
                'Popolucas',
                'Mazatecos',
                'Otros'
            ]
        },
        {
            questionText: '¿Habla usted alguna lengua indígena?',
            choices: [
                'No',
                'Nahuatl',
                'Totonaca',
                'Zapoteco',
                'Mixteco',
                'Otomí',
                'Huasteco',
                'Otros'
            ]
        },
        {
            questionText: '¿Se considera usted población afrodescendiente?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Institución a la que pertenece',
            choices: [
                'Centro de Bachillerato Tecnológico Industrial y de Servicio (CBTIS)',
                'Colegio de Bachilleres del Estado de Veracruz (COBAEV)',
                'Benemérita Escuela Normal Veracruzana * Enrique C. Rébsamen* (BENV)',
                'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA)',
                'Colegio de Postgraduados',
                'El colegio de Veracruz',
                'Universidad Veracruzana',
                'Instituto de Ecología (INECOL)',
                'Instituto Tecnológico Superior',
                'Universidad Tecnológica de Gutiérrez Zamora',
                'Universidad Tecnológica del Centro de Veracruz',
                'Universidad Tecnológica del Sureste de Veracruz',
                'Universidad Politécnica de Huatusco',
                'Tecnológico Nacional de México',
                'Universidad Anáhuac',
                'Centro de Estudios Cristóbal Colón A.C',
                'Instituto Universitario Veracruzano S.C',
                'Centro de Estudios e Investigación en Seguridad',
                'Centro Mexicano de Estudios de Posgrados'
            ]
        },
        {
            questionText: 'Puesto laboral (puede seleccionar más de uno)',
            choices: [
                'Profesora',
                'Investigadora',
                'Coordinadora académica',
                'Funcionaria',
                'Otros'
            ]
        },
        {
            questionText: '¿A qué área del conocimiento, definidas por el CONAHCYT, está enfocada?',
            choices: [
                'Área I: Físico Matemáticas y Ciencias de la Tierra',
                'Área II: Biología y Química',
                'Área III: Medicina y Ciencias de la Salud',
                'Área IV: Humanidades y Ciencias de la Conducta',
                'Área V: Ciencias Sociales y Económicas',
                'Área VI: Biotecnología y Ciencias Agropecuarias'
            ]
        },
        {
            questionText: '¿Cuál fue su nombramiento o cargo al ingresar a su institución?'
        },
        {
            questionText: 'Antigüedad en su institución',
            choices: [
                'Menos de 1 año',
                '1 - 2 años',
                '2 - 5 años',
                '5 - 10 años',
                '10 años o más'
            ]
        },
        {
            questionText: 'Nombramiento o cargo actual en su institución',
            choices: [
                'Investigadora',
                'Profesora',
                'Técnica',
                'Académica',
                'Auxiliar ayudante',
                'Personal administrativo',
                'Otros'
            ]
        },
        {
            questionText: 'Si está incorporada a una institución académica, indique si su nombramiento es de',
            subQuestions: [
                {
                    questionText: 'De carrera',
                    choices: ['Sí', 'No']
                },
                {
                    questionText: 'De asignatura',
                    choices: ['Sí', 'No']
                }
            ]
        },
        {
            questionText: 'Si está incorporada a una institución académica, indique si su nombramiento es de',
            subQuestions: [
                {
                    questionText: 'Por tiempo completo',
                    choices: ['Sí', 'No']
                },
                {
                    questionText: 'Por tiempo parcial',
                    choices: ['Sí', 'No']
                }
            ]
        },
        {
            questionText: '¿Ha participado en programas de movilidad académica?',
            choices: ['Sí', 'No']
        },
        {
            questionText: '¿Ha sido beneficiaria de programas de apoyo a la investigación?',
            choices: ['Sí', 'No']
        },
        {
            questionText: '¿Ha sido beneficiaria de programas de apoyo a la formación de recursos humanos?',
            choices: ['Sí', 'No']
        },
        {
            questionText: '¿Ha sido beneficiaria de programas de apoyo a la movilidad académica?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha sido beneficiaria de programas de apoyo, indique cuál(es)',
            choices: [
                'Programa para el Desarrollo Profesional Docente (PRODEP)',
                'Programa Nacional de Posgrados de Calidad (PNPC)',
                'Fondo Institucional de Fomento Regional para el Desarrollo Científico, Tecnológico y de Innovación (FORDECYT)',
                'Fondo de Apoyo a la Investigación Científica y Tecnológica (FONCICYT)',
                'Programa de Estímulos a la Innovación (PEI)',
                'Programa de Estímulos a la Investigación, Desarrollo Tecnológico e Innovación (PEI-EDTII)',
                'Programa de Estímulos a la Investigación, Desarrollo Tecnológico e Innovación Emergentes (PEI-EDTII-E)',
                'Programa de Estímulos a la Innovación y Mejoramiento de la Calidad Educativa (PEI-MCE)',
                'Programa de Estímulos a la Innovación y Mejoramiento de la Calidad Educativa Emergente (PEI-MCE-E)',
                'Otros'
            ]
        },
        {
            questionText: '¿Ha participado en proyectos de investigación?',
            choices: ['Sí', 'No']
        },
        {
            questionText: '¿Ha publicado resultados de investigación?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha publicado resultados de investigación, indique el número aproximado de publicaciones',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha dirigido tesis de licenciatura o posgrado?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha dirigido tesis, indique el número aproximado de tesis dirigidas',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha participado en comités académicos de tesis de licenciatura o posgrado?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha participado en comités académicos de tesis, indique el número aproximado de comités en los que ha participado',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha participado como dictaminadora de artículos científicos en revistas indizadas?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha participado como dictaminadora de artículos científicos, indique el número aproximado de artículos dictaminados',
            choices: [
                '0',
                '1 - 10',
                '11 - 20',
                '21 - 50',
                'Más de 50'
            ]
        },
        {
            questionText: '¿Ha sido evaluadora de programas educativos o instituciones de educación superior?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha sido evaluadora de programas educativos o instituciones de educación superior, indique el número aproximado de evaluaciones realizadas',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha participado en comités editoriales de revistas científicas?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha participado en comités editoriales de revistas científicas, indique el número aproximado de comités en los que ha participado',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha obtenido financiamiento para proyectos de investigación?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha obtenido financiamiento para proyectos de investigación, indique la fuente de financiamiento principal',
            choices: [
                'CONAHCYT',
                'Fondo Institucional de Fomento Regional para el Desarrollo Científico, Tecnológico y de Innovación (FORDECYT)',
                'Fondo de Apoyo a la Investigación Científica y Tecnológica (FONCICYT)',
                'Consejo Veracruzano de Ciencia y Tecnología (COVEICYDET)',
                'Secretaría de Educación Pública (SEP)',
                'Secretaría de Energía (SENER)',
                'Secretaría de Medio Ambiente y Recursos Naturales (SEMARNAT)',
                'Secretaría de Agricultura y Desarrollo Rural (SADER)',
                'Petróleos Mexicanos (PEMEX)',
                'Otros'
            ]
        },
        {
            questionText: '¿Ha sido miembro de algún cuerpo colegiado, consejo técnico, académico o similar?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha sido miembro de algún cuerpo colegiado, consejo técnico, académico o similar, indique el número aproximado de cuerpos colegiados en los que ha participado',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha sido líder o coordinadora de proyectos o grupos de investigación?',
            choices: ['Sí', 'No']
        }
        ,
        {
            questionText: 'Si ha sido líder o coordinadora de proyectos o grupos de investigación, indique el número aproximado de proyectos o grupos liderados/coordinados',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha recibido reconocimientos por su labor académica o de investigación?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha recibido reconocimientos, indique el número aproximado de reconocimientos recibidos',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha participado en la creación o mejora de programas educativos?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha participado en la creación o mejora de programas educativos, indique el número aproximado de programas en los que ha participado',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        },
        {
            questionText: '¿Ha participado en la organización de eventos académicos o científicos?',
            choices: ['Sí', 'No']
        },
        {
            questionText: 'Si ha participado en la organización de eventos académicos o científicos, indique el número aproximado de eventos en los que ha participado',
            choices: [
                '0',
                '1 - 5',
                '6 - 10',
                '11 - 20',
                'Más de 20'
            ]
        }
    ];
export default questions