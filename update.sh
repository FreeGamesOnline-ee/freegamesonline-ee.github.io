#!/bin/bash
#!/bin/bash

# Controlla se 'tree' è installato
if ! command -v tree &> /dev/null; then
    echo "Errore: il comando 'tree' non è installato. Per favore, installalo prima di eseguire questo script."
    exit 1
fi

tree

# Messaggio di conferma in italiano
echo "Tutti i file modificati saranno pubblicati sul repository GitHub (eccetto quelli specificati in .gitignore)."
read -p "Vuoi continuare? (s/n): " conferma

# Convalida la risposta
case "$conferma" in
    [sS]) 
        echo "Procedo con le operazioni..."
        ;;
    [nN]) 
        echo "Operazione annullata dall'utente."
        exit 0
        ;;
    *)  
        echo "Risposta non valida. Operazione annullata."
        exit 1
        ;;
esac



git add .
git commit -m "update"
git push -f origin main