#!/bin/bash

# Function to create a new branch for exercise solutions
create_branch() {
    git checkout -b exercise-solutions
}

# Function to structure exercise solutions
structure_solutions() {
    local day=$1
    mkdir -p "solutions/day-$day"
    touch "solutions/day-$day/level1.js"
}

# Function to commit exercise solutions
commit_solutions() {
    local day=$1
    git add "solutions/day-$day/level1.js"
    git commit -m "chore: exercise level1 complete for day-$day"
    git push origin exercise-solutions
}

# Function to update the fork
update_fork() {
    git checkout master
    git remote -v | grep -q 'upstream' || git remote add upstream git@github.com:Asabeneh/30-Days-Of-React.git
    git fetch upstream
    git merge upstream/master master
    git push origin master
}

# Main execution with menu
echo "Select an option:"
echo "1. Create a new branch for exercise solutions"
echo "2. Structure exercise solutions for a specific day"
echo "3. Commit exercise solutions for a specific day"
echo "4. Update the fork from the original repository"
read -p "Enter your choice (1/2/3/4): " choice

case $choice in
    1)
        create_branch
        ;;
    2)
        read -p "Enter the day number (e.g., 01, 02, ...): " day
        structure_solutions $day
        ;;
    3)
        read -p "Enter the day number (e.g., 01, 02, ...): " day
        commit_solutions $day
        ;;
    4)
        update_fork
        ;;
    *)
        echo "Invalid choice."
        ;;
esac

