---
layout: post
title:  "Vers un comportement natif avec le manifest.json"
date:   2016-09-24 11:02:48 +0100
author: Joel Mercier
categories: dev
lead: "Voici des exemples de fonctionnalités que l'on peut obtenir grâce au fichier manifest.json pour n'importe quel site."
cover-img: manifest-json.gif
---
Avec l'arrivée du concept de PWA (Progressive Web Applications), fortement initié par Google lors de son évènement Google IO dédié aux développeurs, est apparu le besoin de donner un comportement d'application native aux PWA. Voici des exemples de fonctionnalités que l'on peut obtenir grâce au fichier `manifest.json` pour n'importe quel site.

## Qu'est ce que c'est ?
Il s'agit d'un simple fichier json que l'on intègrera de la façon suivante `<link rel="manifest" href="/manifest.json">`. Il permet d'indiquer le comportement à utiliser par votre application web lorsqu'elle est utilisée comme une application native, installée sur l'écran d'accueil de votre smartphone par exemple.

## Les propriétés du manifest.json
Passons maintenant au contenu de ce fameux fichier json et quels effets ont ses différents champs:

 - `name` vous permet d'indiquer le nom complet de votre application.
 - `description` correspond à une description générale de votre application.
 - `short_name` nom raccourci de l'application dans les cas où l'espace est insuffisant
 - `theme_color` vous permet de renseigner la couleur principale utilisée. Le navigateur va ainsi colorer certains éléments automatiquement pour créer une meilleure éxpérience utilisateur comme la barre de notification sur Android.
 - `background_color` comme `theme_color` mais pour la couleur de fond de votre application.
 - `display` indique comment le navigateur doit présenter votre application. Ainsi la valeur `fullscreen` permet par exemple de ne montrer aucune interface du navigateur comme la barre de recherche ou les onglets.
 - `orientation` permet de préciser si l'application doit être lancée en mode paysage (`landscape`) ou en mode portrait (`portrait`).
 - `start_url` dit au navigateur quelle url de votre application lancer à l'ouverture.
 - `scope` permet de limiter à quelle partie de votre application s'applique le `manifest.json`. Toute page en dehors de cette partie s'ouvrira de façon classique dans le navigateur.
 - `dir` permet de spécifier le sens de lecture du texte, soit de droite à gauche pour l'arabe par exemple (`rtl`), soit de fauche à droite ('ltr');
 - `lang` renseigne la langue utilisée pour les valeurs `name` et `short_name`.
 - `icons` est un tableau permettant de spécifier des icônes à utiliser durant le chargement de l'application ainsi que leurs dimensions et types.

## Un écran d'accueil automatique et autres fonctionnalités
L'utilisation des clés `name`, `background_color` et `icons` permet à Chrome de générer un splash screen simple avec l'icône, la couleur de fond et le titre renseignés. De plus, si vous combinez l'utilisation de ce fichier json avec un service worker (afin de créer un cache ou de proposer des fonctionnalités offline par exemple), Chrome va afficher un petit bandeau invitant l'utilisateur à ajouter votre application à l'écran de son smartphone en un clic.
D'autres versions de votre application (applications natives via Google Play ou l'App Store par exemple) peuvent également être spécifiées dans votre fichier json.

Retrouvez toute la [référence du fichier](https://developer.mozilla.org/fr/docs/Web/Manifest){: target="_blank" rel="noopener"} `manifest.json` et voici le fichier de mon portfolio personnel:

{% highlight json %}
{
  "name": "Portfolio de Joel Mercier, développeur web",
  "short_name": "Portfolio de Joel Mercier",
  "theme_color": "#eb6361",
  "background_color": "#fdfdfd",
  "display": "fullscreen",
  "scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "/img/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "dir": "ltr",
  "lang": "fr-FR"
}
{% endhighlight %}
