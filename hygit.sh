#!/bin/bash
if [ "$@" ]
then
git add .
git commit -m "$@"
git push origin master
else
echo "type a commit message Between \" \""
fi
#Small script to add commit push
