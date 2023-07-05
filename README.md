# ¿Cómo empezar a trabajar sobre este repositorio?

En este ejercicio vamos a clonar un repositorio del perfil de GitHub de Ada. Para esto, tienen que haber asociado correctamente la llave SSH pública con su cuenta de GitHub personal. Una vez asegurado esto, un poco más arriba y a la derecha, van a encontrar un botón verde que muestra **<> Code**. Hagan click, seleccionen SSH y copien el link que les muestra GitHub.

Ya tienen el dato necesario para poder clonar el repositorio. Ahora, ejecuten la terminal en la ubicación dónde quieran descargar el repositorio, y ejecuten el comando:

- *git clone git@github.com:backend-ada/backend-m4-c2.git*

**¡Listo!** ya pueden empezar a trabajar sobre el proyecto clonado.

# Primeros pasos

Cuando trabajamos en proyectos cuyo hábitat natural es el Internet, siempre hay que tratar de viajar lo más ligero posible, porque todo dato que manipulemos y transportemos, implica uso del hardware que hace posible el Internet.
Teniendo esto en mente, vamos a subir a la nube de GitHub **sólamente lo esencial del proyecto**. Sabiendo que los módulos de NPM se pueden descargar de forma local muy fácilmente, es preferible **NO** subirlos a la nube, y dejar el trabajo de descarga y configuración a las personas que vayan a trabajar sobre el proyecto ¿no?
Es por esta razón que existe un archivo de configuración que nos permite decirle a GIT qué queremos ignorar, es decir, evitar que se agregue al índice que posteriormente será commiteado y pusheado.

- En la carpeta raíz del proyecto, creá un archivo .gitignore.
- Dentro, indicá qué archivos/carpetas querés ignorar, separadas por saltos de línea.

En nuestro caso, por ahora, queremos ignorar *node_modules*. Así que simplemente guardamos el archivo .gitignore con el contenido *node_modules*. Se van a dar cuenta que funcionó porque la carpeta *node_modules* se pone de color gris.

# ¿Cómo instalar todos los módulos necesarios?

La importancia del apartado dependencies y devDependencies del **package.json** ahora cobra más sentido. Cuando clonemos el repositorio, no va a estar subido con su respectivo *node_modules*. Eso quiere decir que vamos a necesitar instalar todas las dependecias que componen al proyecto para poder funcionar:

- npm i
- npm install

Ejecutando cualquiera de los comandos anteriores, el intérprete se encargará de **leer todas las dependencias** contenidas en el *package.json* e **instalarlas una por una**.

## Links de ayuda

- [¿Cómo clonar un repositorio?](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)
- [¿Cómo funciona NPM INSTALL y PACKAGE.JSON](https://www.adictosaltrabajo.com/2023/01/19/como-usar-npm-y-no-morir-en-el-intento/#package-json)
