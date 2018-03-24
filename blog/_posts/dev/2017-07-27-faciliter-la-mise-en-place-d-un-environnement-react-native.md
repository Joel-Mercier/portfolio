---
layout: post
title: "Faciliter la mise en place d'un environnement de développement React Native"
date: 2017-07-26 19:02:48 +0100
author: Joel Mercier
categories: dev
lead: "Ignite permet de s'arracher quelques cheveux en moins lors de la mise en place d'un environnement de développement React Native et c'est déjà très bien !"
cover-img: ignite-cli@2x.jpg
---
Lors de mes rencontres avec des projets d'applications mobiles, ce qui m'a toujours dérangé est le manque de structure claire afin d'organiser les différentes parties du projet (écrans, composants, reducers, etc...) et l'instabilité des dépendances de développement de technologies aussi jeunes que React Native (heureusement que plusieurs géants du web comme Airbnb et Wix soutiennent beaucoup cette nouveauté dans le monde du développement mobile).

## Ignite à la rescousse !

C'est pour nous épargner une bonne parties de ces désagréments en tant que développeur qu'[Ignite](https://github.com/infinitered/ignite){: target="_blank" rel="noopener"}  intervient dans notre projet sous la form d'une CLI (Command Line Interface ou interface de ligne de commande).
Ainsi grâce à cet outil open source fourni par l'agence Infinite Red, on peut créer un projet en une simple ligne:

{% highlight bash %}
ignite new MaSuperAppli
{% endhighlight %}

Ce projet va contenir une structure pensée pour rapidement intégrér des outils grandement utilisés lors de développement avec React Native comme Redux, Redux-Sagas, React-Navigation, etc... et des "best-practices" comme la séparation de composants dit containers et de composants "bêtes", une séparation des données et de l'API, des tests, etc...

Par la suite si on souhaite ajouter un container, un composant, un redux ou une saga, il suffit simplement de taper la commande génératrice corresponsante qui contiendra la base de ce que vous souhaitez. Par exemple pour générer un écran d'accueil:

{% highlight bash %}
ignite g screen welcome
{% endhighlight %}

Un autre avantage apporté par cet outil est que les dépendances seront toujours compatibles entre elles avec les bonnes versions, garantissant un démarrage rapide du projet au lieu de tester si telle version de X est compatible avec telle version de Y.

Avec tout ceci, on commence son projet avec une structure claire et de bonnes pratiques déjà mises en place. Merci Ignite !

## Mais ce n'est pas tout !

En plus de nous proposer tout cela, Ignite gère également un système de boilerplate et de plugins qui nous permettent d'intégrer directement d'autres outils utiles lors de la création du projet. Par exemple, il est possible d'intégrer directement la librairie React-Native-Maps d'Airbnb qui permet de gérer l'utilisation de cartes interactives dans nos applications mobiles, d'inclure de l'internationalisation, des icônes, des librairies d'animation, etc...

{% highlight bash %}
ignite add maps
{% endhighlight %}

Et comme si tout cela ne suffisait pas encore, Ignite propose aussi des écrans de développement permettant de tester des APIs et des composants.

Que demande le peuple ?
