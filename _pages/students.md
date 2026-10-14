---
layout: page
permalink: /students/
title: students
description: Completed doctoral dissertations directed or read (dissertations in progress are not listed).
nav: true
nav_order: 4
---

<!-- _pages/students.md: entries live in _data/students.yml (generated from the CV) -->

<div class="cv-search" data-filter-scope="#students-list">
  <input type="search" data-filter-input placeholder="Search dissertations (name, title, department, year…)" aria-label="Search dissertations">
  <span class="cv-search-count" data-filter-count></span>
</div>

<nav class="cv-toc">
{% for group in site.data.students.groups %}
  <a href="#{{ group.role | slugify }}" data-filter-toc="{{ group.role | slugify }}">{{ group.role }} ({{ group.entries | size }})</a>
{% endfor %}
</nav>

<div id="students-list">
{% for group in site.data.students.groups %}
  <section class="cv-section" id="{{ group.role | slugify }}" data-filter-group>
    <h2>{% if group.role == "Director" %}Dissertation director{% else %}Dissertation reader{% endif %}</h2>
    <ul class="cv-list">
    {% for s in group.entries %}
      <li class="cv-entry" data-filter-item>
        <div class="cv-label">{{ s.year }}</div>
        <div>
          <strong>{{ s.name }}</strong>{% if s.co_director %}<span class="cv-badge">co-director</span>{% endif %}
          <div>{{ s.title }}</div>
          <div class="cv-meta">{{ s.institution }}</div>
        </div>
      </li>
    {% endfor %}
    </ul>
  </section>
{% endfor %}
</div>

<script src="{{ '/assets/js/list-filter.js' | relative_url | bust_file_cache }}"></script>
