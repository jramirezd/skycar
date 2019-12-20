# **SKYCARS**
![Hook](/z-images/giphy.gif)
## TARGET
Skycars es un proyecto simple para la compra y venta de coches entre usuarios. La idea es facilitar los contactos entre personas que quieren comprar y otras que quieren vender. 

Es importante que la web sea responsive y que permita ser vista desde cualquier plataforma.


## TECHNOLOGIES
| Transversal      | Server-side | Client-side | Testing            |
| ---------------- | ----------- | ----------- | -------------      |
| Javascript (ES6) | Firebase    | NEXTJS      | Jest(NEXT STEP)    |
| HTML             |             | CSS3        | Enzime(NEXT STEP)  |
|                  |             | SASS        |                    |
## Functional description:
In this application users can login first and having done that they can add their books by typing ISBN code. Also, they can check books from another people and reserve it.
Users can manage if they want to refuse or accept to lend the book.
Users can control who hava their lent books.
### UML Diagram (User Cases)
![UML Diagram](https://github.com/rafelolmos/HookTheBook/blob/develop/src/images/UML%20Diagram.png)
## Technical description:
La idea principal y inicial del proyecto es crear una base para cualquier proyecto simple de leads en nextjs (Boilerplate).
Es por ello que la extructura está ideada para poder crecer de la forma más fácil posible.

Es por ello que se ha utilizado una extructura de archivos y scss escalable. 

### ITCSS
La idea que perseguimos es mejorar la mantenibilidad del código con una estructura más sensata y acorde con el proyecto.
Simple y bueno 2 veces bueno.

Ordenaremos la estructura de menos específico a más específico, separando los componentes para evitar tocar a la vez los mismos archivos, evitando así problemas de merge. 

![ITCSS](/z-images/ITCS.png)

### DATA MODEL
El modelo de datos es el siguiente:
![BBDD](/z-images/BBDD.png)
### BLOCK MODEL
## DESIGN (screenshots)
![Browse](/z-images/Browse.png)

