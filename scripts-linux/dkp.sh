#!/bin/bash

# Définir les URLs à ouvrir dans chaque onglet
url1="#"
url2="#"

# Chemin complet vers l'exécutable de Firefox Developer Edition
firefoxDevPath="/usr/local/firefox_dev/firefox"

# Lancer Firefox Developer Edition avec les onglets spécifiés
nohup "$firefoxDevPath" --new-tab "$url1" --new-tab "$url2" 

# Lancer VSCode
# Si vous voulez ouvrir VSCode sans dossier spécifique, utilisez simplement `code`.
nohup "code"

