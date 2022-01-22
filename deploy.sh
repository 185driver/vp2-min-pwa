#!/usr/bin/env bash

# Usage: ./deploy.sh <app_domain> 2>&1

# Assumptions:
# - Production source maps are already deleted.
# - The project directory follows an <app_domain> format.

set -e

app_domain=$1

rsync -azv --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r ./docs/.vuepress/dist/ <output>

echo "Project upload completed."
