#!/bin/bash

echo 'Qual seu nome?'
read NOME
echo 'Qual sua idade?'
read IDADE

echo 'Seu nome é' $NOME ', tem' $IDADE 'anos de idade.'

echo 'Usuário:'
USUARIO= whoami
$USUARIO

echo 'Diretório:'
LOCAL= pwd
$LOCAL