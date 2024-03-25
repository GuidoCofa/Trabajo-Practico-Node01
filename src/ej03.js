import Alumno from './models/alumno.js';
const alumno1 = new Alumno('alumno1', '12345678A', 20);
const alumno2 = new Alumno('alumno2', '87654321B', 22);
const alumno3 = new Alumno('alumno3', '13579246C', 25);

console.log(alumno1.toString());
console.log(alumno2.toString());
console.log(alumno3.toString());