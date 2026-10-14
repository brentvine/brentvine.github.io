---
layout: page
title: news
permalink: /news/
description: Recent talks and publications.
nav: true
nav_order: 6
---

<!-- _pages/news.md: one inline item per file in _news/ (front matter: date for ordering, year_label shown, kind: talk|publication) -->

<div class="cv-search" data-filter-scope="#news-list">
  <input type="search" data-filter-input placeholder="Search news" aria-label="Search news">
  <label><input type="checkbox" data-filter-flag="talk"> talks</label>
  <label><input type="checkbox" data-filter-flag="publication"> publications</label>
  <span class="cv-search-count" data-filter-count></span>
</div>

{% assign news = site.news | sort: "date" | reverse %}

<ul class="cv-list" id="news-list">
{% for item in news %}
  <li class="cv-entry" data-filter-item data-flags="{{ item.kind }}">
    <div class="cv-label">{% if item.year_label %}{{ item.year_label }}{% else %}{{ item.date | date: "%Y" }}{% endif %}</div>
    <div>
      <span class="cv-badge cv-badge-lead">{{ item.kind }}</span>
      {{ item.content | remove: "<p>" | remove: "</p>" }}
    </div>
  </li>
{% endfor %}
</ul>

<script src="{{ '/assets/js/list-filter.js' | relative_url | bust_file_cache }}"></script>
