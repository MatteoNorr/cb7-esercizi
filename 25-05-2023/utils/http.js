const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint).then((res) => {
    try {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Errore nel GET");
    } catch (err) {
      console.log(err);
      document.body.append("ELEMENTO NON TROVATO");
    }
  });
  const data = await res;
  return data;
};

export const POST = async (endpoint, body) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    try {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Errore nel POST");
    } catch (err) {
      console.log(err);
      document.body.append("ELEMENTO NON AGGIUNTO");
    }
  });
  const data = await res;

  return data;
};

export const DELETE = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "DELETE",
  }).then((res) => {
    try {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Errore nel DELETE");
    } catch (err) {
      console.log(err);
      document.body.append("ELEMENTO NON ELIMINATO");
    }
  });

  const data = await res;
  return data;
};
