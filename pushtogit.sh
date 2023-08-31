#!/bin/bash

# Navigate to your repository directory if it's not the current directory
# cd /path/to/your/repo

# Add all changes
git add .

# Commit changes with a message
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# Push changes to the master branch
git push origin exercise-solutions
