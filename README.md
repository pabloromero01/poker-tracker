# ♠ Poker Tracker Web — Amigos de Pitu

Versión web (PWA) de la app de escritorio. Se instala en el iPhone desde Safari, funciona sin conexión y guarda los datos en el propio móvil.

---

## 1. Subirla a GitHub Pages (gratis)

1. Entra en GitHub y crea un repositorio nuevo, por ejemplo `poker-tracker`. Márcalo como **Public** (Pages gratis requiere repo público).
2. Sube los ficheros de esta carpeta a la **raíz** del repositorio: `index.html`, `manifest.json`, `sw.js`, `icon-180.png`, `icon-512.png`.
   - Por web: botón *Add file → Upload files*, arrastras los 5 ficheros y *Commit*.
   - Por consola:
     ```bash
     git init
     git add .
     git commit -m "Poker Tracker web"
     git branch -M main
     git remote add origin https://github.com/pabloromero01/poker-tracker.git
     git push -u origin main
     ```
3. En el repositorio: **Settings → Pages**. En *Source* elige `Deploy from a branch`, rama `main`, carpeta `/ (root)`. Guarda.
4. Espera 1–2 minutos. Tu app estará en:
   `https://pabloromero01.github.io/poker-tracker/`

> Es importante que sea `https://`, porque el modo offline (service worker) y la instalación como app solo funcionan con conexión segura.

---

## 2. Instalarla en el iPhone

1. Abre esa URL **en Safari** (no vale Chrome en iOS para instalar).
2. Toca el botón de **Compartir** (el cuadrado con la flecha hacia arriba).
3. Baja y elige **Añadir a pantalla de inicio**.
4. Ponle nombre y toca *Añadir*.

Ya tienes el icono de la ficha de póker en la pantalla de inicio. Al abrirlo va a pantalla completa, sin barra de Safari, como una app normal. Y funciona sin cobertura, así que en casa de Pitu da igual que el wifi vaya mal.

En Android es igual pero con Chrome: menú de tres puntos → *Instalar aplicación*.

---

## 3. Cómo se usa

- **🃏 Partida**: eliges fecha, buy-in (5 €, 10 € u otro) y tocas los nombres de quienes juegan. Durante la partida cada jugador es una tarjeta:
  - Los **vivos** (verde con borde dorado) tienen botón **➕ Add-on** para meter otro buy-in sin estar eliminados.
  - Los **eliminados** (gris) tienen botón **💶 Recompra** para pagar otro buy-in y volver a la mesa.
  - Las eliminaciones se registran con los dos desplegables y el botón rojo. **↩ Deshacer** revierte la última acción, sea la que sea.
  - Al finalizar repartes el bote (por defecto todo al ganador) y se guarda.
- **📋 Historial**: secciones Todas / De 5 € / De 10 €. Toca una partida para ver clasificación, balances y eliminaciones.
- **📊 Estadísticas**: ranking con balance en euros (filtrable por buy-in), matriz cruzada de eliminaciones y la sección de némesis.
- **👥 Jugadores**: alta y baja. Los que ya tienen partidas no se pueden borrar.

---

## 4. Copias de seguridad y pasar datos entre móviles

Los datos viven en el dispositivo, no en un servidor. En **📊 Estadísticas** tienes abajo:

- **⬇ Exportar**: descarga un `.json` con todo.
- **⬆ Importar**: carga un `.json` y **sustituye** los datos actuales.

Así puedes pasar el historial de tu PC al móvil, o mandarle el fichero a un amigo por WhatsApp para que tenga las mismas estadísticas.

> ⚠ Dos avisos: si borras el historial de Safari con la opción de datos de sitios web, puedes perder los datos guardados — exporta de vez en cuando. Y como cada móvil tiene su copia, si dos personas registran partidas distintas, al importar una se pisa la otra. Lo suyo es que registre las partidas una sola persona (tú) y el resto importe el fichero para consultar.

Si algún día queréis que todos veáis lo mismo en tiempo real, hay que añadir un backend (Firebase o similar) — es el siguiente paso natural.
