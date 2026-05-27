---
layout: default
title: Início
permalink: /
---

<div class="hero">
  <img src="{{ '/assets/images/tigre-bg.png' | relative_url }}" alt="Mascote do Exotic Server">
</div>

{% capture intro_content %}

<h1>Bem-vindo ao Exotic Server!</h1>
<h2>Endereço do servidor: <a class="orange-text copy-link" href="play.exoticservers.net">play.exoticservers.net</a></h2>

<p><strong>Java Edition</strong> (26.1+)</p>

<p>Baixe e instale o modpack <a href="{{ '/assets/Exotic-Pack.mrpack' | relative_url }}">Exotic Pack (Client)</a>
 usando o Launcher <a href="https://modrinth.com/" target="_blank" class="plum-text">Modrinth</a>.</p>

<p> O nosso modpack tem foco em <strong class="plum-text"> Vanilla+ </strong>, inclui principalmente mods para melhorar a performance e o visual do jogo como o <strong class="turquoise-text">Voxy, Continuity, Entity Model Features, etc</strong>.
  Quality of Life como <strong class="turquoise-text">Xaero's Maps, Zoomify, Trash Slot</strong> e Alguns mods de gameplay e geração de mundo e biomas, como o <strong class="turquoise-text">Tectonic, Terralith, Friends & Foes, Ecologics</strong>.  </p>

{% endcapture %}
{% include collapsible.html title="Introdução" content=intro_content open="true" %}

{% capture commands_content %}

{% include command.html cmd='/help' desc='Mostra os comandos disponíveis.' %}
{% include command.html cmd='/home set &lt;nome home&gt;' desc='Cria um TP para sua casa de acordo com o nome' %}
{% include command.html cmd='/home &lt;nome home&gt;' desc='Teleporta para sua /home definida, se nenhum nome for informado, teleporta para a home padrão' %}
{% include command.html cmd='/home delete &lt;nome home&gt;' desc='Deleta a home especificada.' %}
{% include command.html cmd='/home list' desc='Lista suas homes.' %}
{% include command.html cmd='/warp *' desc='similar ao home em sintaxe para TPs do servidor.' %}
{% include command.html cmd='/spawn' desc='Teleporta ao spawn do servidor.' %}
{% include command.html cmd='/tpa &lt;jogador&gt;' desc='Solicita teleporte seu para outro jogador.' %}
{% include command.html cmd='/tpahere &lt;jogador&gt;' desc='Solicita teleporte de outro jogador para sua localização.' %}
{% include command.html cmd='/tpa accept' desc='Aceita pedido de TP de outro Jogador.' %}
{% include command.html cmd='/tpa deny' desc='Recusa pedido de TP de outro Jogador.' %}
{% include command.html cmd='Claim de Terreno' desc='Para realizar o claim de terreno é necessário usar uma enxada de ouro.' %}
<a href="https://wiki.blazing-coop.net/flan/user_guides/Getting-Started" class="turquoise-text">Tutorial Claim</a>

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
