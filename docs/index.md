---
layout: default
title: Início
permalink: /
---

<div class="hero">
  <img src="{{ '/assets/images/tiger.png' | relative_url }}" alt="Mascote do Exotic Server">
</div>

{% capture intro_content %}

<p>Endereço do servidor: <code>play.exoticservers.net</code></p>

<ul>
  <li><strong>Java Edition</strong> (1.21+): Adicione o servidor no menu Multijogador</li>
  <li><strong>Bedrock Edition</strong>: Em breve</li>
</ul>

<p>Baixe e instale o modpack <a href="{{ '/assets/Exotic-Pack.mrpack' | relative_url }}">Exotic Pack (Client)</a>.</p>

{% endcapture %}
{% include collapsible.html title="Introdução" content=intro_content open="true" %}

{% capture commands_content %}

{% include command.html cmd='/help' desc='Mostra os comandos disponíveis.' %}
{% include command.html cmd='/home' desc='Teleporta para sua casa definida.' %}
{% include command.html cmd='/sethome' desc='Define sua casa na posição atual.' %}
{% include command.html cmd='/spawn' desc='Teleporta ao spawn do servidor.' %}
{% include command.html cmd='/tpa &lt;jogador&gt;' desc='Solicita teleporte para outro jogador.' %}
{% include command.html cmd='/msg &lt;jogador&gt; &lt;mensagem&gt;' desc='Envia uma mensagem privada para um jogador.' %}

{% endcapture %}
{% include collapsible.html title="Comandos Básicos" content=commands_content %}

{% capture economy_content %}
<p>Nosso sistema de economia está sendo configurado. Em breve:</p>
<ul>
  <li>Lojas de jogadores e comércio</li>
  <li>Mercado do servidor</li>
  <li>Detalhes de moeda e preços</li>
</ul>
{% endcapture %}
{% include collapsible.html title="Economia" content=economy_content wip="true" %}
