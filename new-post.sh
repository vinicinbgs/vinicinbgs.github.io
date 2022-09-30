#!bin/sh

echo "Title:"
read TITLE

echo "Slug: (input empty will use folder name)"
read SLUG

echo "Description"
read DESCRIPTION

REPLACE_SPACE_TO_DASH="${TITLE// /-}"
FOLDER=$(echo $REPLACE_SPACE_TO_DASH | awk '{print tolower($0)}') # UPPERCASE TO LOWECASE

PATH="content/posts/${FOLDER}"
FILEPATH="${PATH}/index.mdx"
DATE=$(/bin/date '+%Y-%m-%d')

/bin/mkdir $PATH

if [[ -z $SLUG ]]; then
    SLUG=$FOLDER
fi;

echo "---
title: '${TITLE}'
date: ${DATE}
slug: '/${SLUG}'
description: '${DESCRIPTION}'
tags: 
  - example
--- 
#### SUMMARY
- 1. [Example](#example)
---
# <a name=\"example\"></a> Example
" > $FILEPATH