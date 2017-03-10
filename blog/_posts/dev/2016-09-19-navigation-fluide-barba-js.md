---
layout: post
title:  "Une navigation fluide avec Barba.js"
date:   2016-09-19 15:02:48 +0100
author: Joel Mercier
categories: dev
lead: "Barba.js permet de créer une navigation utilisant des transitions tout en améliorant les performances."
cover-img: barba-js.gif
---
[Barba.js](http://barbajs.org/){: target="_blank" rel="noopener"} est une petite librairie développée par Luigi de Rosa qui permet de facilement obtenir un effet très en vogue dans le webdesign moderne qui est une transition entre les différentes pages d'un site ou d'une application web.

## À quoi ça sert ?
Il n'y a pas si longtemps, créer une expérience utilisateur fluide et fonctionnelle sur un site avec une navigation en AJAX (chargeant le contenu d'une page de façon asynchrone donc) n'était pas chose aisée. La gestion de l'historique du navigateur n'était pas simple à implémenter et il fallait créer un objet `XMLHttpRequest` à chaque changement de page. De plus, l'écran blanc d'un changement de page classique n'est pas la meilleure expérience pour l'utilisateur car il est sorti du contexte et de l'identité visuelle du site qu'il visite.

## Qu'apporte Barba.js ?
La librairie apporte tous les outils afin de résoudre ces problèmes et de permettre un contrôle total des transitions avec une syntaxe moderne intégrant des nouveautés du langage javascript comme les promesses (`new Promise()`).
Sans nécessiter une configuration importante, Barba.js donne accès à un gestionnaire de transitions et de namespaces, l'API PushState qui permet de modifier dynamiquement l'historique du navigateur, des évènements lancés au clic d'un lien ou au chargement d'une nouvelle page ainsi qu'un système de cache. Le tout sans dépendances et en seulement 4kb minifié et gzippé, chapeau !

Un exemple d'évènement facilement accessible via Barba.js :
{% highlight js %}
Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
  // Ce code s'éxecute à chaque nouveau chargement de page afin de pouvoir éxecuter du code js correspondant à cette page. On reçoit en argument l'url et le namespace de l'ancienne et de la nouvelle page, on peut ainsi détécter quelle page est chargée comme ceci par exemple :

  var currentUrlArray = currentStatus.url.split('/');
  if($.inArray('about', currentUrlArray) > -1) {
    // Ce code s'éxecute si la page 'À propos' est chargée.
  }
});
{% endhighlight %}
