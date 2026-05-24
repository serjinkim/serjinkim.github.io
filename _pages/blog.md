---
layout: page
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">
  <ul class="post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}
    {% for post in postlist %}
      <li>
        <h3>
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <p class="post-meta">
          {{ post.date | date: '%B %d, %Y' }}
          {% if post.tags.size > 0 %}
            &middot;
            {% for tag in post.tags %}
              <a href="{{ '/blog/tag/' | append: tag | relative_url }}">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
            {% endfor %}
          {% endif %}
        </p>
        {% if post.description %}
          <p>{{ post.description }}</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</div>
