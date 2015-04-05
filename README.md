#learnyounode_ejercicios 
#Ejercios de nodeschool.io (LearnYounde)

APIDOC de node.js (learnyounode) file:///C:/Users/krlosh/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/_toc.html

##Tips del tutorial
Ejecutar tutorial learnyounode (Una vez instalado con npm)
- learnyounode run fileToRun.js (Ejecuta en entorno controlado )
- learnyounode verify fileToRun.js (Verifica ejemplo respecto a solución oficial. Comprueba que se usan las operaciones requeridas y el resultado de la operación en base a lo que se muestre por consola)

##Lecciones
* Ejercicio 1: Hola Mundo
* Ejercicio 2: Sumar (Conversión de cadena a numero y uso de argumentos pasados como parámetro)
* Ejercicio 3: ContarLineas fichero (Uso de librería FileSystem[fs] operaciones syncronas)
* Ejercicio 4: ContarLineas fichero (Uso de librería FileSystem[fs] operaciones asyncronas)
* Ejercicio 5: Ls filtrado (USo de filesystem y path. Ojo con foreach e ===)
* Ejercicio 6: LS filtrado modular (Introducción a los módulos, que se exportan con module.export ¿Qué hacer para exportar más de una funcion?)
* Ejercicio 7: Cliente http. (Uso de api http. Interesante como escuchar los eventos que provoca response)
* Ejercicio 8: Cliente http acumulativo (uso de liberías bl, pero no he conseguido que funcione la importación de bl -> Estaba mal instalado y por eso no lo encontraba. Instalándolo con npm install bl estando en el directorio "." si que funciona)
* Ejercicio 9: Recolector de peticiones que cuando acaben todas las muestre en orden en que se pidieron (OJO Vigilar orden)
* Ejercicio 10: Time server (Trabajo a bajo nivel con tcp y formateo de fechas con strftime)
* Ejercicio 11: Creación de un http server que devuelve siempre el mismo fichero. (Intersante el uso de los streams para enlazar con pipe una lectura con una escritura)
* Ejercicio 12: Crear un http server para convertir peticiones post en mayusculas (Interesante el uso de streams y la utilidad though2-map)
* Ejercicio 13: Crear un http server que convierte devuelve en json los devolviendo un tipo de conversion en función del servicio a que se invoque (Interesante conversiónde Date y uso de url parse)
