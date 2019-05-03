---
layout: default
title: Home
image: /images/logo.jpg
---

<section id="main_content" class="inner">
	<h1>Welcome to My Homepage!</h1>
	<h2>今はまだ工事中で～す!</h2>
	<h3>このホームページの目的</h3>
	<li>ウェブポートフォリオの作成</li>
	<li>描いた作品の展示</li>
	<li>なんかの実験とか</li>
	<br>
	<h4>・・・</h4>
	<h4>(フォントとかサイズとか配置とかビミョ～だね！)</h4>
	<br>
	<hr>
	<h3>link</h3>
	{% if site.twitter.username %}
	  <h3 align="left"> <a href="https://twitter.com/{{ site.twitter_username }}"
	  id="project_tagline2" target="_blank">Twitter</a></h3>
	  {% endif %}
	  {% if site.pixiv_userid %}
	  <h3 align="left"> <a href="https://www.pixiv.net/member.php?id={{ site.pixiv_userid }}"
	  id="project_tagline2" target="_blank">Pixiv</a></h3>
	 {% endif %}
</section>