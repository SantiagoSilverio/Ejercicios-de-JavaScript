
const contarPalabras = () => {
    const texto = document.getElementById("texto1").value;
    const palabra = document.getElementById("palabra1").value;
    const resultadoDiv = document.getElementById("resultado1");
  
    if (typeof texto !== 'string' || typeof palabra !== 'string') {
      resultadoDiv.textContent = "Error: Ambos parámetros deben ser cadenas de texto.";
      return;
    }
  
    const repeticiones = texto.toLowerCase().split(palabra.toLowerCase()).length - 1;
    resultadoDiv.textContent = `La palabra "${palabra}" se repite ${repeticiones} veces en el texto.`;
  };

  const eliminarPatron = () => {
    const texto = document.getElementById("texto2").value;
    const patron = document.getElementById("patron2").value;
    const resultadoDiv = document.getElementById("resultado2");
  
    if (typeof texto !== 'string' || typeof patron !== 'string') {
      resultadoDiv.textContent = "Error: Ambos parámetros deben ser cadenas de texto.";
      return;
    }
  
    const regex = new RegExp(patron, 'g');
    const textoModificado = texto.replace(regex, '');
    resultadoDiv.textContent = `Texto resultante: ${textoModificado}`;
  };

  const convertirBase = () => {
    const numero = document.getElementById("numero3").value;
    const baseOrigen = parseInt(document.getElementById("baseOrigen3").value);
    const baseDestino = parseInt(document.getElementById("baseDestino3").value);
    const resultadoDiv = document.getElementById("resultado3");
  
    const resultado = (() => {
      if (typeof numero !== 'string' || typeof baseOrigen !== 'number' || typeof baseDestino !== 'number') {
        return "Error: Parámetros inválidos. 'numero' debe ser una cadena, y 'baseOrigen' y 'baseDestino' deben ser números.";
      }
      if (baseOrigen < 2 || baseOrigen > 36 || baseDestino < 2 || baseDestino > 36) {
        return "Error: Las bases deben estar entre 2 y 36.";
      }
      const decimal = parseInt(numero, baseOrigen);
      if (isNaN(decimal)) {
        return "Error: El número no es válido para la base de origen.";
      }
      return baseDestino === 10 ? decimal.toString() : decimal.toString(baseDestino).toUpperCase();
    })();
  
    resultadoDiv.textContent = `Resultado (base ${baseDestino}): ${resultado}`;
  };

  const calcularAnios = () => {
    const fechaInput = document.getElementById("fecha4");
    const resultadoDiv = document.getElementById("resultado4");
  
    const fechaStr = fechaInput.value;
    const fecha = new Date(fechaStr);
  
    const resultado = (() => {
      if (!(fecha instanceof Date) || isNaN(fecha)) {
        return "Error: Ingresa una fecha válida.";
      }
      const hoy = new Date();
      let anios = hoy.getFullYear() - fecha.getFullYear();
      let meses = hoy.getMonth() - fecha.getMonth();
      let dias = hoy.getDate() - fecha.getDate();
  
      if (dias < 0) {
        const diasUltimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        dias += diasUltimoMes;
        meses--;
      }
      if (meses < 0) {
        meses += 12;
        anios--;
      }
  
      return `Han pasado ${anios} años, ${meses} meses y ${dias} días.`;
    })();
    resultadoDiv.textContent = resultado;
  };
  
  const contarVocalesConsonantes = () => {
    const texto = document.getElementById("texto5").value.toLowerCase(); 
    const resultadoDiv = document.getElementById("resultado5");
  
    if (typeof texto !== 'string') {
      resultadoDiv.textContent = "Error: Ingresa una cadena de texto.";
      return;
    }
  

    const textoLimpio = texto.replace(/[^a-zñ]/g, ''); 
  
    const vocales = (textoLimpio.match(/[aeiouáéíóúü]/g) || []).length;
    const consonantes = (textoLimpio.match(/[bcdfghjklmnñpqrstvwxyz]/g) || []).length;
  
    resultadoDiv.textContent = `Vocales: ${vocales}, Consonantes: ${consonantes}`;
  };
  
  


const eliminarDuplicados = () => {
    const arregloInput = document.getElementById("arreglo6").value;
    const resultadoDiv = document.getElementById("resultado6");
  
    try {

      const elementos = arregloInput.split(',').map(item => item.trim()).filter(item => item !== ''); 
  

      const conjunto = new Set(elementos);
  

      const arregloSinDuplicados = Array.from(conjunto); 
  
      resultadoDiv.textContent = `Arreglo sin duplicados: [${arregloSinDuplicados.join(", ")}]`;
    } catch (error) {
      resultadoDiv.textContent = "Error: Ingresa elementos separados por comas.";
    }
  };
  
  

  const calcularPromedio = () => {
    const arregloInput = document.getElementById("arreglo7").value;
    const resultadoDiv = document.getElementById("resultado7");
  
    try {
      const arreglo = JSON.parse(`[${arregloInput}]`);
      if (!arreglo.every(Number.isFinite)) {
        throw new Error("El arreglo debe contener solo números.");
      }
      const promedio = arreglo.reduce((sum, num) => sum + num, 0) / arreglo.length;
      resultadoDiv.textContent = `Promedio: ${promedio}`;
    } catch (error) {
      resultadoDiv.textContent = `Error: ${error.message}`; 
    }
  };
  