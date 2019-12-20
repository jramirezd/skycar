# **SKYCARS**
![LOGO](https://github.com/jramirezd/skycar/blob/header/z-image/logo.png)
## TARGET
Skycars es un proyecto simple para la compra y venta de coches entre usuarios. La idea es facilitar los contactos entre personas que quieren comprar y otras que quieren vender. 

Es importante que la web sea responsive y que permita ser vista desde cualquier plataforma.

La lógica de búsqueda es premiar los anuncios con mejor estado. Mientras mas campos tiene rellenado mejor es su score, por lo tanto los anuncios de más calidad siempre irán primero.


## TECHNOLOGIES
| Transversal      | Server-side | Client-side | Testing            |
| ---------------- | ----------- | ----------- | -------------      |
| Javascript (ES6) | Firebase    | NEXTJS      | Jest(NEXT STEP)    |
| HTML             |             | CSS3        | Enzime(NEXT STEP)  |
|                  |             | SASS        |                    |

### UML Diagram (User Cases)
El usuario en la versión Beta (Y peta).
Puede, registrarse, logearse, recuperar password, cambiarla.
Puede publicar un vehículo, y editarlo.
Puede guardarlo en favoritos y ver sus favoritos.
Podrá ver las request que tiene un anuncio. 

## Technical description:
La idea principal y inicial del proyecto es crear una base para cualquier proyecto simple de leads en nextjs (Boilerplate).
Es por ello que la extructura está ideada para poder crecer de la forma más fácil posible.

Es por ello que se ha utilizado una extructura de archivos y scss escalable. 

### ITCSS
La idea que perseguimos es mejorar la mantenibilidad del código con una estructura más sensata y acorde con el proyecto.
Simple y bueno 2 veces bueno.

Ordenaremos la estructura de menos específico a más específico, separando los componentes para evitar tocar a la vez los mismos archivos, evitando así problemas de merge. 

![ITCSS](https://github.com/jramirezd/skycar/blob/header/z-image/ITCS.png)

### DATA MODEL
El modelo de datos es el siguiente:
![BBDD](https://github.com/jramirezd/skycar/blob/header/z-images/BBDD.png)

## DESIGN (screenshots)
![Browse](https://github.com/jramirezd/skycar/blob/header/z-images/Browse.png)

### NEXT STEP
- Actualizar BBDD.
- Test y más test.
- Validar los formularios.
- Conectar con API para traer todas las características del vehiculo y poder listarlas, sin que el usuario tenga que rellenarlas. 
- Actualizar los enlaces 
- Actualizar el score de los listados para ordenar por ello.
