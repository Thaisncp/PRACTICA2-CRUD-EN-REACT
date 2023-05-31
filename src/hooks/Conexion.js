const URL = "https://fakerestapi.azurewebsites.net"

export const Libros = async () => {
    const datos = await (await fetch(URL + "/api/v1/Books", {
        method: "GET"
    })).json();
    //console.log(datos);
    return datos;
}

export const ModificarLibro = async (id, data) => {
    const headers = {
        "Content-Type": "application/json",
    }; 
    const response = await fetch(`${URL}/api/v1/Books/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Datos editados:", result);
    return result;
};

export const GuardarLibro = async (data) => {
    const headers = {
      "Content-Type": "application/json"
    };
    const response = await fetch(URL + "/api/v1/Books", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    });
    const datos = await response.json();
    console.log(datos);
    return datos;
  };

  export const GetDatos = async (nroFila) => {
    const response = await fetch(URL + "/api/v1/Books/" + nroFila, {
        method: "GET",
    });
    const result = await response.json();
    console.log("Datos a editar:", result);
    return result;
};
  

export const ObtenerDatos = async(nroFila)=>{
    const datos = await (await fetch(URL + "/api/v1/Books" + nroFila, {
        method: "GET",
    })).json();
    console.log(datos);
    return datos;
}
