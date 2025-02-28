---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
paperurl: 'http://mariuspointeau.github.io/files/GameProgrammer_MariusPointeau_CV.pdf'
---

<br/><img src='/images/CV.png'>

{% include base_path %}

<!-- New style rendering if publication categories are defined -->
{% if site.cv_category %}
  {% for category in site.cv_category  %}
    {% assign title_shown = false %}
    {% for post in site.cv reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        <h2>{{ category[1].title }}</h2><hr />
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.cv reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}
