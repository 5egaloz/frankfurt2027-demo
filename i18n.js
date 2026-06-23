/* Camino a Frankfurt 2027 — i18n (ES/EN/DE) + cuenta regresiva + formulario.
   Sin dependencias. Para el prototipo de la propuesta. */
(function () {
  "use strict";

  var DICT = {
    es: {
      "meta.title": "Chile, país invitado de honor · Frankfurter Buchmesse 2027",
      "meta.desc": "Camino a Frankfurt 2027: Chile es el país invitado de honor de la Feria del Libro de Frankfurt. Autores, programa, editoriales y noticias.",
      "a11y.skip": "Saltar al contenido",
      "brand.sub": "Chile · País invitado de honor",
      "nav.invitacion": "La invitación", "nav.programa": "Programa", "nav.autores": "Autoras y autores", "nav.prensa": "Prensa", "nav.contacto": "Contacto",
      "hero.title": "Chile, país invitado de honor",
      "hero.sub": "Las voces, los libros y la cultura de Chile llegan a la mayor feria del libro del mundo. Este es el camino.",
      "cd.days": "días", "cd.hours": "horas", "cd.min": "min", "cd.sec": "seg",
      "cd.note": "Octubre 2027 · Frankfurt, Alemania",
      "hero.cta1": "Ver el programa", "hero.cta2": "Conocer la invitación",
      "inv.eyebrow": "La invitación", "inv.title": "Un país entero como protagonista",
      "inv.p1": "Ser país invitado de honor en la Feria del Libro de Frankfurt es la mayor vitrina cultural a la que puede acceder una nación: una invitación a mostrar su literatura, su pensamiento y su identidad ante el mundo editorial.",
      "inv.p2": "«Camino a Frankfurt 2027» reúne el trabajo de autoras y autores, editoriales, traductores e instituciones que preparan la presencia de Chile en 2027.",
      "inv.f1": "Año de Chile como invitado de honor", "inv.f2": "autoras, autores y editoriales convocadas", "inv.f3": "idiomas del sitio: español, inglés y alemán",
      "prog.eyebrow": "Programa", "prog.title": "El camino, hito a hito",
      "prog.h1": "Convocatoria y selección", "prog.p1": "Llamados a editoriales y autores; definición de la delegación.",
      "prog.h2": "Traducciones y derechos", "prog.p2": "Apoyo a la traducción de obras y gestión de derechos internacionales.",
      "prog.h3": "Actividades previas", "prog.p3": "Lanzamientos, residencias y encuentros rumbo a la feria.",
      "prog.h4": "Frankfurter Buchmesse", "prog.p4": "Chile, país invitado de honor, en el pabellón principal.",
      "aut.eyebrow": "Autoras y autores", "aut.title": "Las voces que viajan",
      "aut.lead": "Una muestra de la literatura chilena contemporánea. (Contenido de demostración para el prototipo.)",
      "aut.role": "Narrativa", "aut.role2": "Poesía", "aut.role3": "Ensayo", "aut.role4": "Casa editora",
      "news.eyebrow": "Prensa y noticias", "news.title": "Lo último del camino",
      "news.h1": "Chile inicia su camino a Frankfurt 2027", "news.p1": "Comienza la preparación oficial de la delegación nacional.",
      "news.h2": "Apoyo a la traducción de obras chilenas", "news.p2": "Programa para llevar la literatura nacional al alemán y al inglés.",
      "news.h3": "Kit de prensa disponible", "news.p3": "Material para medios nacionales e internacionales.",
      "news.more": "Leer más",
      "cta.title": "Súmate al camino", "cta.sub": "Recibe el programa, novedades y convocatorias rumbo a Frankfurt 2027.",
      "cta.label": "Correo electrónico", "cta.ph": "tu@correo.cl", "cta.btn": "Suscribirme",
      "cta.ok": "¡Gracias! Te avisaremos. (demo — sin envío real)", "cta.err": "Ingresa un correo válido.",
      "footer.org": "Subsecretaría de las Culturas y las Artes", "footer.proto": "Prototipo de demostración · propuesta de servicio"
    },
    en: {
      "meta.title": "Chile, Guest of Honour · Frankfurter Buchmesse 2027",
      "meta.desc": "Road to Frankfurt 2027: Chile is the Guest of Honour at the Frankfurt Book Fair. Authors, programme, publishers and news.",
      "a11y.skip": "Skip to content",
      "brand.sub": "Chile · Guest of Honour",
      "nav.invitacion": "The invitation", "nav.programa": "Programme", "nav.autores": "Authors", "nav.prensa": "Press", "nav.contacto": "Contact",
      "hero.title": "Chile, Guest of Honour",
      "hero.sub": "The voices, books and culture of Chile arrive at the world's largest book fair. This is the road there.",
      "cd.days": "days", "cd.hours": "hours", "cd.min": "min", "cd.sec": "sec",
      "cd.note": "October 2027 · Frankfurt, Germany",
      "hero.cta1": "See the programme", "hero.cta2": "About the invitation",
      "inv.eyebrow": "The invitation", "inv.title": "A whole country takes the stage",
      "inv.p1": "Being Guest of Honour at the Frankfurt Book Fair is the greatest cultural showcase a nation can access: an invitation to present its literature, thought and identity to the global publishing world.",
      "inv.p2": "“Road to Frankfurt 2027” brings together authors, publishers, translators and institutions preparing Chile's presence in 2027.",
      "inv.f1": "Year Chile is Guest of Honour", "inv.f2": "authors and publishers invited", "inv.f3": "site languages: Spanish, English and German",
      "prog.eyebrow": "Programme", "prog.title": "The road, milestone by milestone",
      "prog.h1": "Call and selection", "prog.p1": "Open calls for publishers and authors; the delegation is defined.",
      "prog.h2": "Translations and rights", "prog.p2": "Support for translating works and managing international rights.",
      "prog.h3": "Lead-up activities", "prog.p3": "Launches, residencies and gatherings on the way to the fair.",
      "prog.h4": "Frankfurter Buchmesse", "prog.p4": "Chile, Guest of Honour, in the main pavilion.",
      "aut.eyebrow": "Authors", "aut.title": "The voices that travel",
      "aut.lead": "A sample of contemporary Chilean literature. (Placeholder content for the prototype.)",
      "aut.role": "Fiction", "aut.role2": "Poetry", "aut.role3": "Essay", "aut.role4": "Publishing house",
      "news.eyebrow": "Press & news", "news.title": "Latest on the road",
      "news.h1": "Chile begins its road to Frankfurt 2027", "news.p1": "Official preparation of the national delegation begins.",
      "news.h2": "Support for translating Chilean works", "news.p2": "A programme to bring national literature into German and English.",
      "news.h3": "Press kit available", "news.p3": "Materials for national and international media.",
      "news.more": "Read more",
      "cta.title": "Join the road", "cta.sub": "Get the programme, news and calls on the way to Frankfurt 2027.",
      "cta.label": "Email address", "cta.ph": "you@email.com", "cta.btn": "Subscribe",
      "cta.ok": "Thank you! We'll keep you posted. (demo — no real submission)", "cta.err": "Please enter a valid email.",
      "footer.org": "Undersecretariat of Cultures and the Arts", "footer.proto": "Demonstration prototype · service proposal"
    },
    de: {
      "meta.title": "Chile, Ehrengast · Frankfurter Buchmesse 2027",
      "meta.desc": "Weg nach Frankfurt 2027: Chile ist Ehrengast der Frankfurter Buchmesse. Autor:innen, Programm, Verlage und Nachrichten.",
      "a11y.skip": "Zum Inhalt springen",
      "brand.sub": "Chile · Ehrengast",
      "nav.invitacion": "Die Einladung", "nav.programa": "Programm", "nav.autores": "Autor:innen", "nav.prensa": "Presse", "nav.contacto": "Kontakt",
      "hero.title": "Chile, Ehrengast",
      "hero.sub": "Die Stimmen, Bücher und Kultur Chiles kommen zur größten Buchmesse der Welt. Das ist der Weg dorthin.",
      "cd.days": "Tage", "cd.hours": "Std.", "cd.min": "Min.", "cd.sec": "Sek.",
      "cd.note": "Oktober 2027 · Frankfurt, Deutschland",
      "hero.cta1": "Zum Programm", "hero.cta2": "Über die Einladung",
      "inv.eyebrow": "Die Einladung", "inv.title": "Ein ganzes Land im Mittelpunkt",
      "inv.p1": "Ehrengast der Frankfurter Buchmesse zu sein ist das größte kulturelle Schaufenster, das einer Nation offensteht: eine Einladung, ihre Literatur, ihr Denken und ihre Identität der Verlagswelt zu präsentieren.",
      "inv.p2": "„Weg nach Frankfurt 2027“ vereint Autor:innen, Verlage, Übersetzer:innen und Institutionen, die Chiles Auftritt 2027 vorbereiten.",
      "inv.f1": "Jahr, in dem Chile Ehrengast ist", "inv.f2": "eingeladene Autor:innen und Verlage", "inv.f3": "Sprachen der Website: Spanisch, Englisch und Deutsch",
      "prog.eyebrow": "Programm", "prog.title": "Der Weg, Schritt für Schritt",
      "prog.h1": "Ausschreibung und Auswahl", "prog.p1": "Aufrufe an Verlage und Autor:innen; die Delegation wird festgelegt.",
      "prog.h2": "Übersetzungen und Rechte", "prog.p2": "Förderung von Übersetzungen und Verwaltung internationaler Rechte.",
      "prog.h3": "Vorbereitende Aktivitäten", "prog.p3": "Lesungen, Residenzen und Begegnungen auf dem Weg zur Messe.",
      "prog.h4": "Frankfurter Buchmesse", "prog.p4": "Chile, Ehrengast, im Hauptpavillon.",
      "aut.eyebrow": "Autor:innen", "aut.title": "Die Stimmen, die reisen",
      "aut.lead": "Ein Querschnitt der zeitgenössischen chilenischen Literatur. (Platzhalterinhalt für den Prototyp.)",
      "aut.role": "Erzählung", "aut.role2": "Lyrik", "aut.role3": "Essay", "aut.role4": "Verlag",
      "news.eyebrow": "Presse & Nachrichten", "news.title": "Neuestes vom Weg",
      "news.h1": "Chile beginnt seinen Weg nach Frankfurt 2027", "news.p1": "Die offizielle Vorbereitung der nationalen Delegation beginnt.",
      "news.h2": "Förderung der Übersetzung chilenischer Werke", "news.p2": "Ein Programm, um die nationale Literatur ins Deutsche und Englische zu bringen.",
      "news.h3": "Pressemappe verfügbar", "news.p3": "Material für nationale und internationale Medien.",
      "news.more": "Mehr lesen",
      "cta.title": "Begleiten Sie den Weg", "cta.sub": "Erhalten Sie Programm, Neuigkeiten und Aufrufe auf dem Weg nach Frankfurt 2027.",
      "cta.label": "E-Mail-Adresse", "cta.ph": "sie@email.de", "cta.btn": "Abonnieren",
      "cta.ok": "Danke! Wir halten Sie auf dem Laufenden. (Demo — kein echter Versand)", "cta.err": "Bitte geben Sie eine gültige E-Mail ein.",
      "footer.org": "Unterstaatssekretariat für Kultur und Kunst", "footer.proto": "Demonstrations-Prototyp · Dienstleistungsangebot"
    }
  };

  var current = "es";

  function t(key) {
    return (DICT[current] && DICT[current][key]) || (DICT.es[key] || key);
  }

  function applyLang(lang) {
    if (!DICT[lang]) lang = "es";
    current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var attr = el.getAttribute("data-i18n-attr");
      var val = t(key);
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });

    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem("f27_lang", lang); } catch (e) {}
  }

  // Cuenta regresiva al inicio de la feria (estimado: 19 oct 2027)
  var TARGET = new Date("2027-10-19T09:00:00").getTime();
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function tick() {
    var diff = TARGET - Date.now();
    if (diff < 0) diff = 0;
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    set("cd-d", d); set("cd-h", pad(h)); set("cd-m", pad(m)); set("cd-s", pad(s));
  }
  function set(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = "es";
    try { saved = localStorage.getItem("f27_lang") || "es"; } catch (e) {}
    applyLang(saved);

    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });

    var form = document.getElementById("subscribe");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = document.getElementById("email");
        var msg = document.getElementById("form-msg");
        var ok = email.value && /\S+@\S+\.\S+/.test(email.value);
        msg.textContent = ok ? t("cta.ok") : t("cta.err");
        if (ok) form.reset();
      });
    }

    // Aparición al hacer scroll + parallax sutil de los lomos
    var RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var sel = ".section__title,.lead,.acard,.ncard,.timeline li,.facts li,.hero__actions,.eyebrow";
    var els = Array.prototype.slice.call(document.querySelectorAll(sel));
    els.forEach(function (el, i) {
      el.setAttribute("data-reveal", "");
      el.style.transitionDelay = ((i % 6) * 0.06) + "s";
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add("in"); });
    }
    if (!RM) {
      var spines = document.querySelector(".hero__spines");
      if (spines) {
        window.addEventListener("scroll", function () {
          spines.style.transform = "translateY(" + (window.scrollY * 0.12) + "px)";
        }, { passive: true });
      }
    }

    tick();
    setInterval(tick, 1000);
  });
})();
