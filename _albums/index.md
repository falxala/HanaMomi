---
layout: default
title: Albums
---

<section id="main_content" class="inner">
<br><br>
<h1>{{ "Hello World!" | downcase }}</h1>
	<caption>hogehoge</caption>
</section>


<ul>
{% for album in site.image %}
   {% unless album.title == "Albums" %}
  <li><a href="{{ site.url }}{{ album.url }}">{{ album.title }}</a></li>
  {% endunless %}
{% endfor %}
</ul>
