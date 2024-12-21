async function rotarMatriz() {
    const inputMatrix = document.getElementById("inputMatrix").value;
  
    // Convertir el texto a una matriz bidimensional
    const matrix = inputMatrix
      .trim()
      .split("\n")
      .map(row => row.trim().split(" ").map(Number));
  
    // Enviar la matriz al servidor para rotarla
    try {
      const response = await fetch('/rotar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matrix })
      });
  
      const data = await response.json();
      document.getElementById("outputMatrix").innerText = formatMatrix(data.result);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al rotar la matriz.");
    }
  }
  
  function formatMatrix(matrix) {
    return matrix.map(row => row.join(" ")).join("\n");
  }
  