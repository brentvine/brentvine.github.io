---
layout: page
permalink: /publications/
title: publications
description: Books, articles, reviews and edited volumes, in chronological order within each category.
nav: true
nav_order: 2
---

<!-- _pages/publications.md: entries live in _data/publications.yml (generated from the CV) -->

<style>
  .pub-toc { display: flex; flex-wrap: wrap; gap: 0.25rem 1.25rem; margin-bottom: 2rem; }
  .pub-section { margin-bottom: 2.5rem; }
  .pub-section h2 { font-size: 1.5rem; margin-bottom: 1rem; }
  .pub-section h3 { font-size: 1.1rem; font-style: italic; margin: 1.25rem 0 0.5rem; }
  .pub-list { list-style: none; padding-left: 0; margin: 0; }
  .pub-entry { display: grid; grid-template-columns: 6.5rem 1fr; gap: 0.75rem; padding: 0.6rem 0; border-bottom: 1px solid var(--global-divider-color); }
  .pub-label { font-weight: 600; color: var(--global-theme-color); white-space: nowrap; }
  .pub-links { margin-top: 0.3rem; }
  .pub-links a { display: inline-block; font-size: 0.75rem; padding: 0.05rem 0.5rem; margin-right: 0.35rem; border: 1px solid var(--global-text-color-light); border-radius: 3px; color: var(--global-text-color); }
  .pub-links a:hover { border-color: var(--global-theme-color); color: var(--global-theme-color); text-decoration: none; }
  .pub-sub { margin: 0.35rem 0 0 1rem; padding-left: 0; list-style: none; font-size: 0.9rem; color: var(--global-text-color-light); }
  .pub-sub-title { font-size: 0.85rem; font-style: italic; color: var(--global-text-color-light); margin-top: 0.35rem; }
  @media (max-width: 576px) { .pub-entry { grid-template-columns: 1fr; gap: 0.1rem; } }
</style>

<nav class="pub-toc">
{% for section in site.data.publications.sections %}
  <a href="#{{ section.title | slugify }}">{{ section.title }}</a>
{% endfor %}
</nav>

<div class="publications">
{% for section in site.data.publications.sections %}
  <section class="pub-section" id="{{ section.title | slugify }}">
    <h2>{{ section.title }}</h2>
    {% assign current_sub = nil %}
    <ul class="pub-list">
    {% for pub in section.entries %}
      {% if pub.sub and pub.sub != current_sub %}
        {% assign current_sub = pub.sub %}
        </ul><h3>{{ pub.sub }}</h3><ul class="pub-list">
      {% endif %}
      <li class="pub-entry">
        <div class="pub-label">{{ pub.label }}</div>
        <div>
          <div class="pub-citation">{{ pub.citation }}</div>
          {% for note in pub.notes %}<div class="pub-sub-title">{{ note }}</div>{% endfor %}
          {% if pub.reviews %}
            <div class="pub-sub-title">Reviewed by:</div>
            <ul class="pub-sub">
            {% for review in pub.reviews %}<li>{{ review }}</li>{% endfor %}
            </ul>
          {% endif %}
          {% if pub.pdf or pub.academia %}
            <div class="pub-links">
              {% if pub.pdf %}<a href="{{ pub.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>{% endif %}
              {% if pub.academia %}<a href="https://www.academia.edu/{{ pub.academia }}/" target="_blank" rel="noopener">academia.edu</a>{% endif %}
            </div>
          {% endif %}
        </div>
      </li>
    {% endfor %}
    </ul>
  </section>
{% endfor %}
</div>
