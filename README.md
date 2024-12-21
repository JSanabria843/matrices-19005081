# matrices-19005081

Primera parte:
1.1

![imagen 1](https://github.com/user-attachments/assets/1c48887c-4352-481c-9853-00eb5fa57e64)

A+B = [ 2+1  3+5] 
      [4+0  1+2]
      
A+B =        [3  8]
             [4  3]

1.2 Segunda parte

![imagen2](https://github.com/user-attachments/assets/c351f368-b93d-4bc0-a747-2c91563baeb1)

A+B =      [1+9  2+8  3+7]
	         [4+6  5+5  6+4]
	         [7+3  8+2  9+1]

A+B =  [10  10  10]
	     [10  10  10]
	     [10  10  10]

 
1.3 Demuestre que (A + B) + C = A + (B + C):

![imagen3](https://github.com/user-attachments/assets/c7b5187e-4848-4d27-9457-a95f000348e0)

Calcular (A+B) +C 
A+B  =  [1+4    0+(-1) ]         =     [5     -1]
	      [-2+2    3+0    ]		   [0      3]
       
Se suma (A+B) +C
(A+B) +C =   [5   -1]        +      [3      2]        = [5+3      -1+2  ]
	           [0    3] 	            [-1     1]	        [0+(-1)    3+1]

            (A+B) +C = [8     1]
	               [ -1  4]	

Se calcula A + (B+C)

Sumamos:

B+C = [4     -1]      +     [3      2]   =      [4+3       -1+2]
      [2      0]	    [-1     1]	        [2+(-1)    0+1]
			B+C=  [7     1]
			      [1     1]

  Terminamos sumando A+(B+C)
  
A+ (B+C)   =   [1    0]     +    [7     1]      =    [1+7      0+1]
	       [-2  3]           [1      1] 	     [-2+1    3+1]

	     A+(B+C) = [8    1]
		       [-1   4]
(A+B)+C = A+(B+C)

1.4 Cuarta parte.

![imagen4](https://github.com/user-attachments/assets/211dfd20-7b18-4370-9a8c-ce904026669e)

R//No es posible sumar estas matrices pues tienen distintas dimensiones. 

Segunda parte algoritmos utilizando matrices función  “rotar(matriz)” :

Script:
Primer obtenemos el valor del input que coloque el usuario, luego utilizamos trim para eliminar espacios innecesarios, Split para dividir el texto en un array de filas y .map para convertir cada valor en un número.
Con fetch enviamos una petición al servidor http.
 URL /rotar: El endpoint del servidor donde se procesará la matriz.
Método POST: La matriz se envía en el cuerpo de la petición HTTP.
 headers: { 'Content-Type': 'application/json' }: Indica que se está enviando datos en formato JSON.
  body: JSON.stringify({ matrix }): Convierte la matriz en un objeto JSON para enviarlo al servidor.
El servidor nos devuelve el json con la matriz rotada, se guarda la respuesta en la variable data. 
Función formatMatrix()
matrix.map(row => row.join(" ")):
•	Itera sobre cada fila de la matriz.
•	row.join(" "): Convierte cada fila (array de números) en una cadena de texto con los números separados por espacios.


![1](https://github.com/user-attachments/assets/8f862ec8-7ede-443c-96b3-f7b9a0371625)


2.codigo NodeJs
const express = require('express'): Importa el framework Express, que facilita la creación de servidores y manejo de rutas.
const app = express(): Inicializa la aplicación de Express.
const path = require('path'): Importa el módulo path de Node.js, que permite trabajar con rutas de archivos.
const port = 3000: Define el puerto en el que correrá el servidor.


Middlewares:
express.json(): Es un middleware integrado en Express que permite parsear (convertir) los cuerpos de las peticiones con formato JSON.
Esto permite que el servidor pueda leer el JSON enviado en el cuerpo de una petición POST.
express.static(): Sirve archivos estáticos (HTML, CSS, JavaScript, imágenes) desde una carpeta específica.
path.join(__dirname, 'public'):
__dirname: Obtiene la ruta actual del archivo.
path.join(): Crea una ruta segura compatible con cualquier sistema operativo.
La carpeta public debe contener los archivos HTML, CSS y JS que el cliente (navegador) utilizará.
Función para rotar la matriz: 
const n = matrix.length:
Obtiene el tamaño de la matriz (número de filas/columnas).
Crea una matriz vacía n x n con valores iniciales de 0.
Array.from(): Genera un array a partir de un objeto iterable.
Ruta y método POST:
app.post('/rotar', ...): Define un endpoint para manejar peticiones POST en la ruta /rotar.
El middleware express.json() permite acceder al cuerpo de la petición como un objeto.
Extrae el valor de matrix del JSON enviado por el cliente.
Verifica que matrix sea un arreglo (matriz válida).
Si no lo es, responde con un código 400 y un mensaje de error.
Llamada a la función rotarMatriz():
Rota la matriz utilizando la función previamente definida.
res.json({ result });  Envía la matriz rotada como un objeto JSON.


![2](https://github.com/user-attachments/assets/7719050b-3c9a-4f1a-81ac-a0af2a7a183b)

Funcionalidad:

![rotar matrices](https://github.com/user-attachments/assets/4c684d25-bcc3-424d-86c4-d53f25622edd)

2. Desarrolla una función llamada “multiplicar(matrizA,matrizB)” 

2.1. Condición Inicial: La cantidad de columnas de la primera tabla debe coincidir con la
cantidad de filas de la segunda tabla. Si no cumplen esta condición, el programa debe
mostrar un mensaje en consola que indique que las tablas no son compatibles para la
operación y la función debe retornar un arreglo vacío.

![error multiplicacin](https://github.com/user-attachments/assets/67dd9a36-54ce-4d16-a20d-d589624b848a)


2.2. Combinación de Valores:

![multiplicacioncorrecta](https://github.com/user-attachments/assets/2d505de0-b084-4823-a0ef-0c27b5243662)

![3](https://github.com/user-attachments/assets/8eb66889-f3de-44fc-b9c6-49a980ff75bb)

Primero declaramos la función multiplicarMatrices como asíncrona. 
Luego obtenemos los valoresque ingresa el usuario. 
Una vez tenemos estos valores convertimos las matridces de texto en arreglos bidimensionales. 
Cuando esto ya se haya realizado enviamos las matrices al servidor
Convertimos la respuesta del servidor en un objeto de JavaScript.
Luego mostramos el resultado o manejamos los errores con nuestro ciclo if.  


Server.js

![4](https://github.com/user-attachments/assets/4cc0a9bd-44d2-4df4-b179-f5eb32f59145)

const express = require('express'): Importa el framework Express, que permite manejar rutas, peticiones HTTP y respuestas de manera sencilla.
const app = express(): Crea una instancia de la aplicación de Express.
const path = require('path'): Importa el módulo path, que facilita manejar rutas de archivos.
const port = 3000: Define el puerto en el que se ejecutará el servidor (puedes acceder al servidor en http://localhost:3000).
app.use(express.json()); Este middleware permite que el servidor parsee (interprete) el cuerpo de las peticiones HTTP en formato JSON.
app.use(express.static(path.join(__dirname, 'public'))); express.static(): Permite servir archivos estáticos (HTML, CSS, JS, imágenes, etc.).
path.join(__dirname, 'public'):
__dirname: Ruta actual del archivo.
'public': Es la carpeta donde estarán tus archivos de frontend.
La función multiply realiza la multiplicación de dos matrices dadas. 
  if (colsA !== rowsB) {
    console.log("Las matrices no son compatibles para la multiplicación.");
    return [];
  } Para multiplicar dos matrices:
El número de columnas de la matriz A debe coincidir con el número de filas de la matriz B.
Si esta condición no se cumple, la función devuelve un arreglo vacío.
  for (let i = 0; i < rowsA; i++) {          // Itera sobre las filas de A
    for (let j = 0; j < colsB; j++) {        // Itera sobre las columnas de B
      for (let k = 0; k < colsA; k++) {      // Itera sobre columnas de A / filas de B
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
El servidor recibe las matrices del cliente y devuelve el resultado de la multiplicación.
app.post('/multiply', (req, res) => {
  const { matrixA, matrixB } = req.body;
Validacion del formato:
   if (!Array.isArray(matrixA) || !Array.isArray(matrixB)) {
    return res.status(400).json({ error: "Formato de matriz inválido" });
  }
Si alguna de las matrices no es un arreglo, el servidor responde con un código 400 (Bad Request).
Luego llamamos a la función multiply que guarda el resultado si las 2 matrices se pueden multiplicar, si la matriz esta vacia devuelve error, si todo es correcto devuelve el resultado como JSON.
app.listen(): Inicia el servidor en el puerto 3000.
El servidor está listo para recibir peticiones en http://localhost:3000.




