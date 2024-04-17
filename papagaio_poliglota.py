# -*- coding: utf-8 -*-

def main(): 
    while True:
        try: 
            # Entrada
            situacao = input()
            
            # Processamento & Saída
            if situacao == "as duas":
                print("caiu")

            elif situacao == "nenhuma":
                print("portugues")

            elif situacao == "esquerda":
                print("ingles")

            else: 
                print("frances")

        except EOFError:
            break

main()