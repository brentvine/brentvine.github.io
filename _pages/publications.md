---
layout: page
permalink: /publications/
title: publications
description: Books, articles, reviews and edited volumes, in chronological order within each category.
nav: true
nav_order: 2
---

<!-- _pages/publications.md: entries live in _data/publications.yml (generated from the CV); styles in assets/css/main.scss -->

<div class="cv-search" data-filter-scope="#publications-list">
  <input type="search" data-filter-input placeholder="Search publications (title, journal, word, year…)" aria-label="Search publications">
  <span class="cv-search-count" data-filter-count></span>
</div>

<nav class="cv-toc">
{% for section in site.data.publications.sections %}
  <a href="#{{ section.title | slugify }}" data-filter-toc="{{ section.title | slugify }}">{{ section.title }}</a>
{% endfor %}
</nav>

<div id="publications-list">
{% for section in site.data.publications.sections %}
  <section class="cv-section" id="{{ section.title | slugify }}" data-filter-group>
    <h2>{{ section.title }}</h2>
    {% assign current_sub = nil %}
    <ul class="cv-list">
    {% for pub in section.entries %}
      {% if pub.sub and pub.sub != current_sub %}
        {% unless current_sub == nil %}</ul></div>{% else %}</ul>{% endunless %}
        {% assign current_sub = pub.sub %}
        <div data-filter-group><h3>{{ pub.sub }}</h3><ul class="cv-list">
      {% endif %}
      <li class="cv-entry" data-filter-item>
        <div class="cv-label">{{ pub.label }}</div>
        <div>
          <div class="cv-citation">{{ pub.citation }}</div>
          {% for note in pub.notes %}<div class="cv-sub-title">{{ note }}</div>{% endfor %}
          {% if pub.reviews %}
            <div class="cv-sub-title">Reviewed by:</div>
            <ul class="cv-sub cv-meta">
            {% for review in pub.reviews %}<li>{{ review }}</li>{% endfor %}
            </ul>
          {% endif %}
          {% if pub.pdf or pub.academia %}
            <div class="cv-links">
              {% if pub.pdf %}<a href="{{ pub.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>{% endif %}
              {% if pub.academia %}<a href="https://www.academia.edu/{{ pub.academia }}/" target="_blank" rel="noopener">academia.edu</a>{% endif %}
            </div>
          {% endif %}
        </div>
      </li>
    {% endfor %}
    </ul>
    {% unless current_sub == nil %}</div>{% endunless %}
  </section>
{% endfor %}
</div>

<script src="{{ '/assets/js/list-filter.js' | relative_url | bust_file_cache }}"></script>
