#!/bin/bash

echo 'Qual a sua idade?'
read IDADE

if [ "$IDADE" -ge "18" ]
then
echo 'Você é maior de idade'
else
echo 'Você não é maior de idade'
fi
