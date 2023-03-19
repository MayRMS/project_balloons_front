
# Frontend-BALLOONS

### ¿Qué es Balloons?


‘Balloons’, o globos, representa algo que nos aporta felicidad pero al mismo tiempo tiene que ser cuidado dada su fragilidad, y esta app se basa en ese concepto.

 This is the second part of the final project for the GeeksHubs Academy FullStack Developer bootcamp that consists of creating the frontend part for a totaly functional application. 

# RESUMEN

- Este proyecto consiste en la creación de un Front para el proyecto final del bootcamp Full Stack Developer que imparte GeeksHubs Academy.

Si bien ya hay apps que solventen este tipo de dificultades, no hay ninguna(a priori) que aun el cuidado tanto de niños como de mascotas, uniendo profesionales en pedagogía infantil y estudiantes de veterinaria, comportamiento animal, etc, facilitamos el acceso a los usuarios con una interfaz efectiva y simple, y permitimos a jóvenes que necesitan compaginar sus estudios que tengan contacto con aquello a lo que se van a dedicar de una forma totalmente real.
A veces la cantidad de posibilidades o lo poco intuitivo de las mismas, generan un rechazo en su uso, por lo que se intentará que esta sea asequible para usuarios de todo tipo, incluido gente con poca relación con las tecnologías: por ejemplo, hay gente de más edad que necesita, por problemas de distinta índole, que alguien cuide o pasee a sus mascotas, pero no se relacionan del todo bien con las tecnologías. De este modo tendrán la posibilidad de hacerlo fácilmente.

Las funcionalidades que se requerirán para esta primera comprobación radican en la consulta de datos por parte del usuario, el login, register, 
y algunas otras que desarrollaremos de manera más concreta en los siguientes apartados.
El proyecto consiste en poner en práctica los conocimientos adquiridos durante todo el Bootcamp y principalmente la implementación 
de REACT.
Se ha intentado sacar el máximo provecho a las opciones que nos proporciona React, tan solo contamos con 3 vistas, a las que aplicaremos multitud de componentes para que se adecúen a nuestras necesidades, como formularios dinámicos, hooks, inputs que se despliegan en lugar de llevarnos a otras vistas, etc.

**Tecnologias Usadas**

![js2](https://user-images.githubusercontent.com/114490860/224815744-fae6f0fb-795c-4a0b-b7ed-4a7a2941bc3a.png)![react2](https://user-images.githubusercontent.com/114490860/224815806-d54163b1-b624-44fe-a05b-a57a3358b26b.png)![redux](https://user-images.githubusercontent.com/114490860/224816086-a19996cf-2d35-473f-954d-c892d779f46c.png)

### Flow y vistas del usuario: Explicación

**Flow Usuario 1: USER**

1. Al entrar a la vista inicial sin estar logueados, nos mostrará el login, en el cual podremos loguearnos como User, Carer (profesional) o bien ir al registro.
2. En este caso entraremos al loguin como User, es decir, alguien que entra para crear ofertas y encontrar cuidadores que se adecuen a sus necesidades. Una vez introducidos los campos correctamente se nos redireccionaria a la vista "userHome", que difiere de la que obtendríamos de estar logueados como cuidadores.
3. Si no estuviésemos registrados ingresaríamos al link que se nos indica, en este, podemos registrarnos como usuarios o, una vez más, como profesionales . Cada opción nos derivará a un formulario de registro distinto, y una vez registrados, de nuevo volveremos al loguin para poder acceder.
4. Al loguearnos la página entenderá segun el usuario que ha de mostrar el Home de uno u otro. En el caso del usuario, nos traerá en tarjetas todos los perfiles de cuidadores de que disponga la aplicación (con un detalle estético), y dos botones, que irán cambiando según en que parte del home del usuario estemos. Por el momento se mostrarán: Crear Oferta y Mis Ofertas.
5. Mis Ofertas: en estas encontramos todas las que hemos creado, con un botón en cada una que permite que se desplieguen aquellos cuidadores inscritos en la misma, con su email para que podamos contactarles. Se verán en colores distintos si tenemos o no algún inscritoEn este caso los botones son: Ver perfiles y Crear Oferta.
6. Crear Oferta: nos renderiza un formulario para realizar una oferta de forma fácil e intuitiva, que pasará a formar parte de la colección explicada en el punto anterior.
7. El usuario podrá en todo momento desloguearse desde el botón del header, que permanece en todo momento visible, a excepción de en register.

**Flow Usuario 2: CARER**

1. Al entras a la vista inicial como ya hemos dicho, no estando logueados, pasaremos a introducir los datos como Carer (profesional) o bien ir si aún no lo somos, podemos ir al registro.
2. Como en el caso anterior, al completar los campos correctamente se nos redireccionaria a la vista "carerHome", que mostrará elementos distintos a la de usuario.
3. Si no estuviésemos registrados ingresaríamos al link que se nos indica, el cual es dinámico y se adapta a la petición introduciéndo campos distintos para uno y otro.
4. Al loguearnos como cuidadores, la página muestra el Home que le corresponde. En el caso del cuidador, nos traerá en tarjetas todas la ofertas de que disponga la aplicación, y un botón para inscribirnos en las mismas y puedan contactarnos.Además mostraremos otro botón durante todo el tiempo que irá cambiando según en que parte del home del cuidador estemos: Ofertas en las que me he inscrito.
5. Ofertas en las que me he inscrito: en estas encontramos todas aquellas en las que, en la otra vista, hemos dado al botón de inscribirse.
6.El usuario podrá en todo momento desloguearse desde el botón del header, que permanece en todo momento visible, a excepción de en register.

# ¡Este es el resultado!

### Vista Login.
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/user_Login.png)
Responsive
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/login_Responsive.png)

### Vista Registro de USERS.
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/registerUser.png)
Responsive
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/register_Responsive.png)
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/registerUser_Responsive.png)


### Vista Home/ Principal de USERS
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/userOffers_allDetail_UserHome.png)
Responsive
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/allOffers_UserHomeResponsive.png)

![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/offers_Detail.png)

### Vista Home/ Mis Ofertas de USERS
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/userOffers_UserHomeResponsive.png)

### Vista Home/ Mis Ofertas con despliegue de Inscritos de USERS
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/userOffers_regProfiles_UserHome.png)
Responsive
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/userOffers_regProfiles_UserHomeResponsive.png)

![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/userOffers_showProfiles_UserHome.png)

### Vista Home/ Formulario Crear Oferta de USERS
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/createOffers_UserHome.png)
Responsive
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/createOffers_UserHomeResponsive.png)

### Vista Registro de CARERS.
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/registerCarer.png)
Responsive
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/registerCarer_Responsive.png)

### Vista Home/ Principal de CARERS(CON BOTÓN PARA INSCRIBIRNOS)
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/allOffers_carerHome.png)
Responsive
![image](https://github.com/MayRMS/project_balloons_front/blob/main/img/allOffers_carerHome_Responsive.png)



## Instalación
***
Para correrlo en local:
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
$ npm start
```

**Cuestiones a mejorar**
Ordenados de mayor a menor complejidad.
- Mejor implementacion de la comunicación entre usuarios con un sistema de mensajes en la aplicación, comentarios sobre usuarios y recomendaciones, etc.
- Realizar una búsqueda por filtro según tarifa, localidad, tipo de cuidador... para faciliatar el halazgo de cuidadores que se adecún a las necesidades mucho más rápido.
- Poder modificar los perfiles y borrar ofertas.

**Agradecimientos**
- Dar las gracias al equipo de <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> por los conocimientos adquiridos y su ayuda en el desempeño de este proyecto.

**Code realizado por <a href="https://www.linkedin.com/in/maria-rms/">María Ruiz de Molina Sierra</a>**

