---
layout: page
permalink: /thankyou/
title: thank you
description: A note of gratitude to the people who shaped my journey.
nav: true
nav_order: 5
---

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
{% for person in site.data.thankyou.people %}
  <div class="col">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">
          {% if person.url %}
            <a href="{{ person.url }}" target="_blank" rel="noopener noreferrer">{{ person.name }}</a>
          {% else %}
            {{ person.name }}
          {% endif %}
        </h5>
        {% if person.role %}
          <h6 class="card-subtitle mb-2 text-muted">{{ person.role }}</h6>
        {% endif %}
        <p class="card-text">{{ person.message }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>
