---
layout: about
title: about
permalink: /
subtitle: Distinguished Research Professor Emeritus, Department of Classics and Program in Indo-European Studies, University of California, Los Angeles

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

See the [publications](/publications/) page for a full list of books, articles, reviews and edited volumes, and the [talks](/talks/) page for conference papers and invited lectures since 1979.

<!-- Recently published: publication items from _news/ with a year label (forthcoming and in-press items are left out) -->

<h2>Recently published</h2>

{% assign recent = site.news | where: "kind", "publication" | sort: "date" | reverse %}
<ul class="cv-list">
{% for item in recent %}{% unless item.year_label == "Forthcoming" or item.year_label == "In press" %}
<li class="cv-entry"><div class="cv-label">{{ item.year_label }}</div><div>{{ item.content | remove: "<p>" | remove: "</p>" }}</div></li>
{% endunless %}{% endfor %}
</ul>

Forthcoming work and recent talks are listed under [news](/news/).
