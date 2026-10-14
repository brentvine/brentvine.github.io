---
layout: page
permalink: /talks/
title: talks
description: Conference papers, invited lectures and seminars, most recent first.
nav: true
nav_order: 3
---

<!-- _pages/talks.md: entries live in _data/talks.yml (generated from the CV, oldest first) -->

{% assign talks = site.data.talks.talks | reverse %}
{% assign decades = "" | split: "" %}
{% for talk in talks %}
{% assign decade = talk.year | divided_by: 10 | times: 10 | append: "s" %}
{% unless decades contains decade %}{% assign decades = decades | push: decade %}{% endunless %}
{% endfor %}

<div class="cv-search" data-filter-scope="#talks-list">
  <input type="search" data-filter-input placeholder="Search talks (title, venue, place, year…)" aria-label="Search talks">
  <label><input type="checkbox" data-filter-flag="invited"> invited &amp; plenary only</label>
  <span class="cv-search-count" data-filter-count></span>
</div>

<nav class="cv-toc">
{% for decade in decades %}
  <a href="#talks-{{ decade }}" data-filter-toc="talks-{{ decade }}">{{ decade }}</a>
{% endfor %}
</nav>

<div id="talks-list">
{% for decade in decades %}
  <section class="cv-section" id="talks-{{ decade }}" data-filter-group>
    <h2>{{ decade }}</h2>
    <ul class="cv-list">
    {% for talk in talks %}
      {% assign talk_decade = talk.year | divided_by: 10 | times: 10 | append: "s" %}
      {% if talk_decade == decade %}
      <li class="cv-entry" data-filter-item{% if talk.invited %} data-flags="invited"{% endif %}>
        <div class="cv-label">{{ talk.year }}</div>
        <div>
          {{ talk.html }}
          {% if talk.subs %}
            <ul class="cv-sub">
            {% for sub in talk.subs %}<li>{{ sub }}</li>{% endfor %}
            </ul>
          {% endif %}
        </div>
      </li>
      {% endif %}
    {% endfor %}
    </ul>
  </section>
{% endfor %}
</div>

<script src="{{ '/assets/js/list-filter.js' | relative_url | bust_file_cache }}"></script>
