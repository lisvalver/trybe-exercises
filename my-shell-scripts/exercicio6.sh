#!/bin/bash

CAMINH0=$1

echo $CAMINHO

if [ -d $CAMINHO ]
    then
        echo 'É um diretório'

elif [ -f $CAMINHO ]
    then
        echo 'É um arquivo'        
else
    echo 'Outro tipo de arquivo'
fi


#/home/lisvalver/Documentos/Trybe/Shell_Script/video/video.txt