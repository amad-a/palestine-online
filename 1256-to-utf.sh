#!/bin/bash

walk_dir () {    
    for pathname in "$1"/*; do
        if [ -d "$pathname" ]; then
            walk_dir "$pathname"
        else
            case "$pathname" in
                *.html|*.htm|*shtml)
                    iconv -f CP1256 -t UTF-8 $pathname > temp.html
                    rm $pathname
                    mv temp.html $pathname
                    sed -i -e 's/charset=windows-1256/charset=utf-8/g' $pathname
                    printf '%s\n' "$pathname converted from windows-1256 to UTF-8"
            esac
        fi
    done
}

DOWNLOADING_DIR=./

walk_dir "$DOWNLOADING_DIR"