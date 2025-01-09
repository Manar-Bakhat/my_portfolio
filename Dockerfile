# Étape 1 : Base image avec Node.js pour développement
FROM node:18-alpine

# Étape 2 : Définir le dossier de travail dans le conteneur
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Étape 6 : Copier le reste des fichiers du projet
COPY . .

# Étape 7 : Exposer le port utilisé par Angular (par défaut 4200)
EXPOSE 4200

# Étape 8 : Lancer l'application Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
