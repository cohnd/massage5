/* Shared page header: title bar, yellow stripe and navigation buttons.
   Every page includes it with one line where the header should appear:
     <script src="js/nav.js" data-title="Module 3"></script>
   data-title is the text after "Massage 5 - " in the title bar; leave it out
   to show just "Massage 5". */

/* Modules menu. To publish a module, change its page from
   "module-coming-soon.html" to the module's own file. */
const MODULES = [
  { name: "Module 1", page: "module-1.html" },
  { name: "Module 2", page: "module-2.html" },
  { name: "Module 3", page: "module-3.html" },
  { name: "Module 4", page: "module-coming-soon.html" },
  { name: "Module 5", page: "module-coming-soon.html" },
  { name: "Module 6", page: "module-coming-soon.html" },
  { name: "Module 7", page: "module-coming-soon.html" },
  { name: "Module 8", page: "module-coming-soon.html" },
  { name: "Module 9", page: "module-coming-soon.html" },
];

(function () {
  const script = document.currentScript;
  const title = script.dataset.title;

  const escape = (text) =>
    text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  const button = "background-color: #003865; color: #fff; padding: 12px 25px; text-decoration: none; border-radius: 4px; min-width: 150px; text-align: center;";
  const menuItem = "display: block; padding: 11px 15px; color: #003865; background-color: #ffffff; text-decoration: none; border-bottom: 1px solid #dddddd; font-size: 14px;";

  const moduleLinks = MODULES.map(
    (m) => `<a style="${menuItem}" href="${m.page}"> ${escape(m.name)} </a>`
  ).join(" ");

  script.insertAdjacentHTML("beforebegin", `
    <div style="background-color: #003865; color: #ffffff; padding: 30px; text-align: center;">
        <h2 style="margin: 5px 0 0; font-size: 36px;"><a style="color: #ffffff; text-decoration: none;" href="index.html">Massage 5</a>${title ? " - " + escape(title) : ""}</h2>
    </div>
    <div style="background-color: #ffcd00; line-height: 10px; height: 10px; min-height: 10px; width: 100%;">&nbsp;</div>
    <div style="background-color: #f1f6f9; padding: 20px 20px 15px; display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;"><a style="${button}" href="syllabus.html">📄 Syllabus</a> <a style="${button}" href="index.html">🏠 Home</a>
        <details style="position: relative; display: inline-block; min-width: 150px;">
            <summary style="background-color: #003865; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 4px; min-width: 150px; text-align: center; cursor: pointer; list-style: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px;">📦 Modules ▾</summary>
            <div style="position: absolute; top: 100%; left: 0px; width: 100%; min-width: 200px; background-color: #ffffff; border-radius: 0px 0px 4px 4px; z-index: 9999; overflow: hidden; border: 1px solid #003865;">${moduleLinks}</div>
        </details>
    </div>`);
})();
