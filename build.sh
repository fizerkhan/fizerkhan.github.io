#!/bin/sh
# Simple script to clean and copy folders from FizerKhan blog

# Configuration
FIZERKHAN_FOLDER=../fizerkhan.com

# Ask for confirmation
read -p 'Are you sure want to clean and copy folders (y/n)?' choice
if [[ ! $choice =~ ^[Yy]$ ]]
then
    echo 'Abort!!'
    exit 1
fi

# Clean Old Folder
echo 'Cleaning Folders...'
rm -rf dist/ app.yaml

# Copy new folder
echo 'Coping configuration file...'
cp -rf $FIZERKHAN_FOLDER/app.yaml .
echo 'Coping dist Folder...'
cp -rf $FIZERKHAN_FOLDER/dist .

echo 'DONE!!!'