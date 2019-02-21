---
layout: default
title: Gallery
---

<h1>{{ "Hello World!" }}</h1>

<section id="main_content" class="inner">
	<h1>Sample</h1>
	<br>
	<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/logo.jpg" class="swipe" rel="group1" title="test_text"><img src="{{site.baseurl}}/images/t_logo.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
		<li>
			<a href="{{site.baseurl}}/images/0003.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0003.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>		
		
	</ul>
		<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
	</ul>
	

	<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
	</ul>
	<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
	</ul>
	<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
	</ul>
	<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
	</ul>
	<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
	</ul>
	<ul class="box-list">
		<li>
			<a href="{{site.baseurl}}/images/0001.png" class="swipe" rel="group1" 
			title="test_text"><img src="{{site.baseurl}}/images/t_0001.jpg" alt="sample" /></a>
			<h3>Title</h3>
		</li>
	</ul>
	
</section>

<ul>
{% for gallery in site.gallery %}
   {% unless gallery.title == "Gallery" %}
  <li><a href="{{ site.url }}{{ gallery.url }}">{{ gallery.title }}</a></li>
  <br><br>
  {% endunless %}
{% endfor %}
</ul>
