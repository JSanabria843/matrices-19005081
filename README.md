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




