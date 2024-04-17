# -*- coding: utf-8 -*-

def main(): 
    while True:
        try: 
            # Entrada
            dna = input()
            codigo_genetico = input()

            # Processamento & Saida
            if contem(dna, codigo_genetico):
                print("Resistente")
            else: 
                print("Nao resistente")

        except EOFError:
            break


def contem(frase, palavra):

    tam_frase = len(frase)
    tam_palavra = len(palavra)
    for pos in range((tam_frase-tam_palavra)+1):
        if frase[pos] == palavra[0]:
            fatia = substring(frase, pos, tam_palavra)
            if fatia == palavra:
                return True

    return False


def substring(frase, pos, tamanho):

    fatia = ''
    for i in range(pos, pos+tamanho):
        fatia += frase[i]

    return fatia

main()