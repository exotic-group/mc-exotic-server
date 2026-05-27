---
layout: default
title: Home
permalink: /
---

<div class="hero">
  <img src="{{ '/assets/images/tiger.png' | relative_url }}" alt="Exotic Server Mascot">
</div>

{% capture basics_content %}

<h2>Connecting</h2>

<p>Server address: <code>play.exoticservers.net</code> (or IP: <code>192.168.31.90</code>)</p>

<ul>
  <li><strong>Java Edition</strong> (1.21+): Add server in Multiplayer menu</li>
  <li><strong>Bedrock Edition</strong>: Coming soon</li>
</ul>

<p>Make sure you have the <a href="https://modrinth.com/modpack/exotic-pack">Exotic Pack (Client)</a> modpack installed.</p>

<h2>Basic Commands</h2>

{% include command.html cmd='/help' desc='Shows available commands.' %}
{% include command.html cmd='/home' desc='Teleport to your set home location.' %}
{% include command.html cmd='/sethome' desc='Set your home location to your current position.' %}
{% include command.html cmd='/spawn' desc='Teleport to the server spawn point.' %}
{% include command.html cmd='/tpa <player>' desc='Request to teleport to another player.' %}
{% include command.html cmd='/msg <player> <message>' desc='Send a private message to a player.' %}

{% endcapture %}
{% include collapsible.html title="Basics" content=basics_content %}

{% capture economy_content %}
<p>Our economy system is currently being set up. Stay tuned for:</p>
<ul>
  <li>Player shops and trading</li>
  <li>Server marketplace</li>
  <li>Currency and pricing details</li>
</ul>
{% endcapture %}
{% include collapsible.html title="Economy" content=economy_content wip="true" %}
