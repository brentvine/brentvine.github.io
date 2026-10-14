---
layout: page
permalink: /teaching/
title: teaching
description: Courses taught at UCLA, Princeton, Yale and elsewhere.
nav: true
nav_order: 5
---

<!-- _pages/teaching.md: courses live in _data/teaching.yml (generated from the CV) -->

<div class="cv-search" data-filter-scope="#teaching-list">
  <input type="search" data-filter-input placeholder="Search courses (Latin, Sanskrit, meter…)" aria-label="Search courses">
  <span class="cv-search-count" data-filter-count></span>
</div>

<div id="teaching-list">
{% for group in site.data.teaching.groups %}
  <section class="cv-section" id="{{ group.title | slugify }}" data-filter-group>
    <h2>{{ group.title }}</h2>
    <ul class="cv-columns">
    {% for course in group.courses %}<li data-filter-item>{{ course }}</li>
    {% endfor %}
    </ul>
  </section>
{% endfor %}
</div>

<script src="{{ '/assets/js/list-filter.js' | relative_url | bust_file_cache }}"></script>
