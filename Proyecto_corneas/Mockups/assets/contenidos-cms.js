(function () {
    "use strict";

    const STORAGE_KEY = "dona_organos_contenidos_cms_v1";
    const LEY_URL = "https://s3-legispan.asamblea.gob.pa/legispan/NORMAS/2010/2010/LEY/Administrador%20Legispan_26468-B_2010_2_10_ASAMBLEA%20NACIONAL_3.pdf";

    const contenidosIniciales = [
        { id: 1, tipo: "legal", titulo: "Acto altruista y gratuito", contenido: "La donación es voluntaria, gratuita y no admite compensación económica.", enlace: LEY_URL, visible: true, orden: 1 },
        { id: 2, tipo: "legal", titulo: "Consentimiento presunto", contenido: "La normativa regula cómo se manifiesta o se rechaza la voluntad de donar.", enlace: LEY_URL, visible: true, orden: 2 },
        { id: 3, tipo: "legal", titulo: "Tipos de donantes", contenido: "Existen dos tipos de donantes: vivos y fallecidos. La viabilidad de cada órgano o tejido se determina mediante evaluación médica.", enlace: "", visible: true, orden: 3 },
        { id: 4, tipo: "legal", titulo: "Muerte irreversible", contenido: "La muerte encefálica es irreversible y solo puede ser diagnosticada por médicos certificados independientes no vinculados al equipo de trasplantes.", enlace: "", visible: true, orden: 4 },
        { id: 5, tipo: "legal", titulo: "Prioridad: salvar la vida", contenido: "El objetivo principal del personal médico es preservar la vida. Solo al confirmarse el cese irreversible de funciones se valora la opción de la donación.", enlace: "", visible: true, orden: 5 },
        { id: 6, tipo: "legal", titulo: "Toda persona puede ser considerada", contenido: "Cualquier persona puede ser considerada como donante de órganos, independientemente de su edad, género o estado de salud, sujeto a una estricta evaluación médica.", enlace: "", visible: true, orden: 6 },

        { id: 101, tipo: "mito", titulo: "Mito: \"Si soy donante, el equipo médico no me va a salvar la vida\"", contenido: "El personal médico de urgencias tiene como meta absoluta salvar tu vida. El equipo de trasplantes es independiente y solo interviene cuando se certifica la muerte encefálica de forma irreversible.", enlace: "", visible: true, orden: 1 },
        { id: 102, tipo: "mito", titulo: "Mito: \"Pueden empezar la extracción antes de estar realmente muerto\"", contenido: "La extracción jamás inicia antes del deceso legal. Se exigen rigurosas pruebas clínicas y médicos certificados para validar el cese total e irreversible de las funciones cerebrales.", enlace: "", visible: true, orden: 2 },
        { id: 103, tipo: "mito", titulo: "Mito: \"Hay gente que se ha despertado después de la muerte encefálica\"", contenido: "La muerte encefálica es médicamente definitiva e irreversible. No existen casos de recuperación tras este diagnóstico clínico formal.", enlace: "", visible: true, orden: 3 },
        { id: 104, tipo: "mito", titulo: "Mito: \"Después de la donación, el cuerpo queda desfigurado\"", contenido: "La remoción se efectúa quirúrgicamente con respeto. No deforma el rostro ni altera la anatomía externa, posibilitando un velatorio habitual.", enlace: "", visible: true, orden: 4 },
        { id: 105, tipo: "mito", titulo: "Mito: \"Hay personas que desaparecen y les falta un órgano\"", contenido: "Los trasplantes requieren compatibilidad biológica, quirófanos, preservación controlada y equipos especializados. Es impracticable realizarlos clandestinamente.", enlace: "", visible: true, orden: 5 },
        { id: 106, tipo: "mito", titulo: "Mito: \"Ser famoso o tener dinero permite trasplantarte más rápido\"", contenido: "La asignación se rige por criterios médicos objetivos: urgencia, compatibilidad y antigüedad en la lista de espera. El nivel económico no influye.", enlace: "", visible: true, orden: 6 },
        { id: 107, tipo: "mito", titulo: "Mito: \"Las religiones se oponen a la donación\"", contenido: "La mayoría de las religiones apoya la donación y la considera un acto de solidaridad y amor al prójimo.", enlace: "", visible: true, orden: 7 },
        { id: 108, tipo: "mito", titulo: "Mito: \"Soy demasiado mayor para ser donante\"", contenido: "Cualquier persona puede ser considerada. La viabilidad se determina tras una evaluación médica individual.", enlace: "", visible: true, orden: 8 },
        { id: 109, tipo: "mito", titulo: "Mito: \"Mi estado de salud no es bueno para donar\"", contenido: "Pocas condiciones inhabilitan toda donación. La decisión sobre la viabilidad corresponde exclusivamente al equipo médico.", enlace: "", visible: true, orden: 9 },
        { id: 110, tipo: "mito", titulo: "Mito: \"Se extraen órganos aunque la familia se oponga\"", contenido: "La normativa contempla mecanismos para comunicar formalmente la oposición. Conversar previamente con la familia ayuda a que se respete la decisión.", enlace: LEY_URL, visible: true, orden: 10 },

        { id: 201, tipo: "faq", titulo: "¿Qué órganos y tejidos se pueden donar?", contenido: "Se pueden donar riñones, hígado, corazón, pulmones y páncreas, así como córneas, piel, válvulas cardíacas y tejido óseo. La viabilidad se determina médicamente.", enlace: "", visible: true, orden: 1 },
        { id: 202, tipo: "faq", titulo: "¿Qué pasa si tengo alguna enfermedad?", contenido: "Cualquier persona puede manifestar su voluntad. Algunas patologías pueden afectar la viabilidad, pero esa decisión corresponde al equipo médico.", enlace: "", visible: true, orden: 2 },
        { id: 203, tipo: "faq", titulo: "¿La donación tiene algún costo para mi familia?", contenido: "No. La donación es voluntaria, gratuita y solidaria; los costos de procuración no recaen sobre la familia donante.", enlace: "", visible: true, orden: 3 },
        { id: 204, tipo: "faq", titulo: "¿Se puede donar córnea si usaba lentes?", contenido: "Sí. Haber utilizado anteojos, tener cataratas, cirugías previas o edad avanzada no impide automáticamente la donación de tejido corneal.", enlace: "", visible: true, orden: 4 },
        { id: 205, tipo: "faq", titulo: "¿Y si cambio de opinión?", contenido: "La voluntad de donar puede modificarse o revocarse conforme al procedimiento establecido.", enlace: LEY_URL, visible: true, orden: 5 },
        { id: 206, tipo: "faq", titulo: "¿Qué pasa si mi familia no está de acuerdo?", contenido: "Es importante hablar con los seres queridos para que conozcan y respeten la decisión. La normativa establece los mecanismos aplicables.", enlace: LEY_URL, visible: true, orden: 6 },
        { id: 207, tipo: "faq", titulo: "¿Puedo decidir qué órganos donar y cuáles no?", contenido: "La manifestación de voluntad puede indicar los órganos o tejidos autorizados para donación.", enlace: LEY_URL, visible: true, orden: 7 },
        { id: 208, tipo: "faq", titulo: "¿Qué enfermedades impiden la donación de córnea?", contenido: "Algunas infecciones activas y enfermedades transmisibles pueden impedirla. La viabilidad siempre debe ser certificada por especialistas.", enlace: "", visible: true, orden: 8 }
    ];

    function clonarIniciales() {
        return contenidosIniciales.map(item => ({ ...item }));
    }

    function obtener() {
        try {
            const guardados = JSON.parse(localStorage.getItem(STORAGE_KEY));
            return Array.isArray(guardados) ? guardados : clonarIniciales();
        } catch (error) {
            return clonarIniciales();
        }
    }

    function guardar(contenidos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(contenidos));
        window.dispatchEvent(new CustomEvent("cms-contenidos-actualizados"));
    }

    function restaurar() {
        localStorage.removeItem(STORAGE_KEY);
        window.dispatchEvent(new CustomEvent("cms-contenidos-actualizados"));
        return clonarIniciales();
    }

    function escapar(valor) {
        return String(valor ?? "").replace(/[&<>'"]/g, caracter => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
        })[caracter]);
    }

    function visiblesPorTipo(tipo) {
        return obtener()
            .filter(item => item.tipo === tipo && item.visible)
            .sort((a, b) => Number(a.orden) - Number(b.orden) || Number(a.id) - Number(b.id));
    }

    function renderPublico() {
        const legales = document.querySelector("#saber .info-grid");
        const mitos = document.querySelector("#mitos .accordion-container");
        const preguntas = document.querySelector("#faqs .accordion-container");

        if (legales) {
            legales.innerHTML = visiblesPorTipo("legal").map((item, indice) => `
                <article class="info-card" tabindex="0" role="button" aria-expanded="false">
                    <span class="number">${indice + 1}</span>
                    <span class="legal-visual legal-visual-${(indice % 6) + 1}">
                        <span class="legal-detail">
                            <span>${escapar(item.contenido)}</span>
                            ${item.enlace ? `<a class="legal-law-link" href="${escapar(item.enlace)}" target="_blank" rel="noopener">Consultar información relacionada</a>` : ""}
                        </span>
                    </span>
                    <span class="legal-caption">${escapar(item.titulo)}</span>
                </article>`).join("");
        }

        function renderAcordeon(tipo, clase, etiqueta) {
            return visiblesPorTipo(tipo).map((item, indice) => `
                <details class="${clase}${indice >= 4 ? " additional-item" : ""}"${indice >= 4 ? " hidden" : ""}>
                    <summary>${escapar(item.titulo)}</summary>
                    <div class="dropdown-answer">
                        <strong>${etiqueta}:</strong>
                        <p>${escapar(item.contenido)}</p>
                        ${item.enlace ? `<p><a href="${escapar(item.enlace)}" target="_blank" rel="noopener">Consultar información relacionada</a></p>` : ""}
                    </div>
                </details>`).join("");
        }

        if (mitos) mitos.innerHTML = renderAcordeon("mito", "myth-item", "La realidad");
        if (preguntas) preguntas.innerHTML = renderAcordeon("faq", "faq-item", "Respuesta");

        document.querySelectorAll("#mitos .show-more-button, #faqs .show-more-button").forEach(button => {
            const section = button.closest("section");
            const extras = section.querySelectorAll(".additional-item");
            button.hidden = extras.length === 0;
            button.setAttribute("aria-expanded", "false");
            button.querySelector(".toggle-label").textContent = button.dataset.defaultLabel;
            button.querySelector(".toggle-symbol").textContent = "＋";
        });

        if (typeof window.activarTarjetasLegales === "function") window.activarTarjetasLegales();
    }

    window.DonaOrganosCMS = {
        STORAGE_KEY,
        obtener,
        guardar,
        restaurar,
        escapar,
        renderPublico
    };
})();
