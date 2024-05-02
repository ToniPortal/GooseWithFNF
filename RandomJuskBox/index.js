const fs = require("fs-extra");
const path = require("path");

const sourceDir = "./music"; // Chemin vers le dossier de musique source
const targetDir = "C:/Users/g2r/Documents/Github/FnfGoose/MyDesktopGooseMods/Assets/Sound/NotEmbedded"; // Chemin vers le dossier cible
const delay = 60000; // Délai en millisecondes (par exemple, 60000 pour une minute)

// Fonction pour copier un fichier MP3 aléatoire
function copyRandomMP3() {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error("Erreur lors de la lecture du dossier de musique :", err);
      return;
    }

    // Filtrer les fichiers pour ne garder que les fichiers MP3
    const mp3Files = files.filter((file) => file.endsWith(".mp3"));

    if (mp3Files.length === 0) {
      console.error("Aucun fichier MP3 trouvé dans le dossier de musique.");
      return;
    }

    // Choisir un fichier MP3 aléatoire
    const randomMP3 = mp3Files[Math.floor(Math.random() * mp3Files.length)];
    const sourcePath = path.join(sourceDir, randomMP3);
    const targetPath1 = path.join(targetDir, "Honk1.mp3");
    const targetPath2 = path.join(targetDir, "Honk2.mp3");
    const targetPath3 = path.join(targetDir, "Honk3.mp3");
    const targetPath4 = path.join(targetDir, "Honk4.mp3");

    // Copier le fichier MP3 aléatoire vers le dossier cible
    fs.copyFile(sourcePath, targetPath1, (err) => {
      if (err) {
        console.error(`Erreur lors de la copie du fichier ${randomMP3} :`, err);
      } else {
        console.log(`Fichier ${randomMP3} copié avec succès.`);
      }
    });

    // Copier le fichier MP3 aléatoire vers le dossier cible
    fs.copyFile(sourcePath, targetPath2, (err) => {
      if (err) {
        console.error(`Erreur lors de la copie du fichier ${randomMP3} :`, err);
      } else {
        console.log(`Fichier ${randomMP3} copié avec succès.`);
      }
    });

    // Copier le fichier MP3 aléatoire vers le dossier cible
    fs.copyFile(sourcePath, targetPath3, (err) => {
      if (err) {
        console.error(`Erreur lors de la copie du fichier ${randomMP3} :`, err);
      } else {
        console.log(`Fichier ${randomMP3} copié avec succès.`);
      }
    });

    // Copier le fichier MP3 aléatoire vers le dossier cible
    fs.copyFile(sourcePath, targetPath4, (err) => {
      if (err) {
        console.error(`Erreur lors de la copie du fichier ${randomMP3} :`, err);
      } else {
        console.log(`Fichier ${randomMP3} copié avec succès.`);
      }
    });
  });
}

// Copier un fichier MP3 aléatoire initialement
copyRandomMP3();

// Planifier la copie périodique des fichiers MP3 aléatoires
setInterval(copyRandomMP3, delay);
