# Reto 04: Encuentra-al-asesino

## Problema

Una persona ha sido **asesinada en la noche de Halloween** 🔪. Usando un hechizo 🧙‍♀️, hemos conseguido escuchar su último **susurro** pero es muy debíl y no nos permite identificar quién pudo ser el asesino.

La información que nos proporciona:

**whisper:** cadena de texto que representa lo que la víctima intentó decir antes de morir

**suspects:** lista de cadenas que representa los **nombres de todos los sospechosos.**

Hay que tener que el susurro whisper tiene algunas reglas:

- Cada ~ representa una letra incierta en el susurro.
- Cada posición del susurro es una posición del nombre del asesino.
- La longitud del whisper no siempre representa la longitud completa del nombre, ya que la víctima pudo haber muerto antes de terminar de decirlo.
- Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.

¡Tu objetivo es descubrir quién pudo ser el asesino! Debes devolver:

- Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
- Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
- Si ningún nombre encaja, retorna una cadena vacía ("").

Las mayúsculas y minúsculas de las letras no importan.

```js
const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

findTheKiller(whisper3, suspects3); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval']

findTheKiller(whisper4, suspects4); // -> ''
```
