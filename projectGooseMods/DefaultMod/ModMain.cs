using System;
using System.IO;
using GooseShared;
using SamEngine;

namespace DefaultMod
{
    public class ModEntryPoint : IMod
    {
        // Gets called automatically, passes in a class that contains pointers to
        // useful functions we need to interface with the goose.
        void IMod.Init()
        {
            // Subscribe to whatever events we want
            InjectionPoints.PostTickEvent += PostTick;

            // Start watching the file
            FileWatcher fileWatcher = new FileWatcher(API.Goose);
            fileWatcher.WatchFile();
        }

        public void PostTick(GooseEntity g)
        {
            // Do whatever you want here.

        }
    }

    public class FileWatcher
    {
        private string filePath = @"C:\Goose\goose_signal.txt"; // Chemin vers le fichier à surveiller
        private GooseEntity goose;
        private API.GooseFunctionPointers goose1;

        public FileWatcher(GooseEntity goose)
        {
            this.goose = goose;
        }

        public FileWatcher(API.GooseFunctionPointers goose1)
        {
            this.goose1 = goose1;
        }

        public void WatchFile()
        {
            FileSystemWatcher watcher = new FileSystemWatcher();
            watcher.Path = Path.GetDirectoryName(filePath);
            watcher.Filter = Path.GetFileName(filePath);
            watcher.NotifyFilter = NotifyFilters.LastWrite;
            watcher.Changed += OnFileChanged;
            watcher.EnableRaisingEvents = true;

            Console.WriteLine("Waiting for changes in file...");
            Console.ReadLine(); // Attente infinie pour garder l'application en cours d'exécution
        }

        private void OnFileChanged(object sender, FileSystemEventArgs e)
        {
            Console.WriteLine($"File {e.FullPath} has been changed.");

            // Lecture du fichier et déplacement du goose si le fichier est lu
            string content = File.ReadAllText(e.FullPath);
            if (content.Trim() == "goose_signal")
            {
                Console.WriteLine("File content matches. Moving goose to (400, 400).");
                goose1.playHonckSound();
            }
            else
            {
                Console.WriteLine("File content does not match.");
            }
        }
    }
}
