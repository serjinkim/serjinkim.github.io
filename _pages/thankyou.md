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
  {% assign collapse_id = person.name | slugify %}
  <div class="col">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title mb-1">
          {% if person.url %}
            <a href="{{ person.url }}" target="_blank" rel="noopener noreferrer">{{ person.name }}</a>
          {% else %}
            {{ person.name }}
          {% endif %}
        </h5>
        {% if person.role %}
          <h6 class="card-subtitle text-muted">{{ person.role }}</h6>
        {% endif %}
        {% if person.message %}
          <button
            class="btn btn-link p-0 mt-2 text-decoration-none"
            style="font-size: 0.8rem; color: var(--global-text-color-light);"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#{{ collapse_id }}"
            aria-expanded="false"
          >
            <span class="show-text">read more ▾</span>
            <span class="hide-text" style="display:none;">close ▴</span>
          </button>
          <div class="collapse mt-2" id="{{ collapse_id }}">
            <p class="card-text" style="font-size: 0.9rem;">{{ person.message }}</p>
          </div>
        {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>

<script>
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(function (btn) {
    btn.addEventListener('shown.bs.collapse', function () {
      btn.querySelector('.show-text').style.display = 'none';
      btn.querySelector('.hide-text').style.display = 'inline';
    });
    btn.addEventListener('hidden.bs.collapse', function () {
      btn.querySelector('.show-text').style.display = 'inline';
      btn.querySelector('.hide-text').style.display = 'none';
    });
  });
</script>
