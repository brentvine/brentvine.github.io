// Live search for the CV-derived list pages (publications, talks, students, teaching, news).
//
// Markup contract:
//   <div class="cv-search" data-filter-scope="#list-id">
//     <input type="search" data-filter-input>
//     <input type="checkbox" data-filter-flag="invited">   (optional)
//     <span data-filter-count></span>                      (optional)
//   </div>
//   Inside the scope: [data-filter-item] entries (optional data-flags="a b"),
//   [data-filter-group] wrappers hidden when none of their items match, and
//   a[data-filter-toc="group-id"] links hidden along with their group.
//
// Matching ignores case, accents, macrons and breathings, so "fames" finds
// "famēs" and "ορπετον" finds "ὄρπετον". A ?q= URL parameter pre-fills the box.
(function () {
  "use strict";

  function normalize(text) {
    return text
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .replace(/ς/g, "σ")
      .replace(/[‘’ʼ]/g, "'")
      .replace(/[“”]/g, '"')
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function setup(box) {
    var scope = document.querySelector(box.getAttribute("data-filter-scope"));
    var input = box.querySelector("[data-filter-input]");
    if (!scope || !input) return;

    var flagBoxes = Array.prototype.slice.call(box.querySelectorAll("[data-filter-flag]"));
    var count = box.querySelector("[data-filter-count]");
    var items = Array.prototype.slice.call(scope.querySelectorAll("[data-filter-item]"));
    var groups = Array.prototype.slice.call(scope.querySelectorAll("[data-filter-group]")).reverse(); // innermost first
    var tocLinks = Array.prototype.slice.call(document.querySelectorAll("a[data-filter-toc]"));
    var haystacks = items.map(function (item) {
      return normalize(item.textContent);
    });

    function apply() {
      var terms = normalize(input.value).trim().split(" ").filter(Boolean);
      var flags = flagBoxes
        .filter(function (cb) {
          return cb.checked;
        })
        .map(function (cb) {
          return cb.getAttribute("data-filter-flag");
        });
      var shown = 0;

      items.forEach(function (item, i) {
        var itemFlags = (item.getAttribute("data-flags") || "").split(" ");
        var ok =
          terms.every(function (t) {
            return haystacks[i].indexOf(t) !== -1;
          }) &&
          flags.every(function (f) {
            return itemFlags.indexOf(f) !== -1;
          });
        item.classList.toggle("cv-hidden", !ok);
        if (ok) shown++;
      });

      groups.forEach(function (group) {
        group.classList.toggle("cv-hidden", !group.querySelector("[data-filter-item]:not(.cv-hidden)"));
      });

      tocLinks.forEach(function (link) {
        var target = document.getElementById(link.getAttribute("data-filter-toc"));
        link.classList.toggle("cv-hidden", !!target && target.classList.contains("cv-hidden"));
      });

      if (count) {
        count.textContent = terms.length || flags.length ? shown + " of " + items.length + " shown" : items.length + " entries";
      }

      var url = new URL(window.location.href);
      if (input.value.trim()) url.searchParams.set("q", input.value.trim());
      else url.searchParams.delete("q");
      window.history.replaceState(null, "", url);
    }

    var initial = new URL(window.location.href).searchParams.get("q");
    if (initial) input.value = initial;

    input.addEventListener("input", apply);
    flagBoxes.forEach(function (cb) {
      cb.addEventListener("change", apply);
    });
    document.addEventListener("keydown", function (e) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (e.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(tag)) {
        e.preventDefault();
        input.focus();
      } else if (e.key === "Escape" && document.activeElement === input) {
        input.value = "";
        apply();
      }
    });
    apply();
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll(".cv-search[data-filter-scope]"), setup);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
