import { backendUrl } from "@/Constants.vue";

const api = backendUrl;

async function tambahkanRekening(listObj: Array<object>) {
  try {
    for (let i = 0; i < listObj.length; i++) {
      const response = await fetch(`${api}/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(listObj[i]),
      });
      const data = await response.json();

      if (response.status !== 201) throw new Error(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

async function tambahkanHutang(listObj: Array<object>) {
  try {
    for (let i = 0; i < listObj.length; i++) {
      const response = await fetch(`${api}/debts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(listObj[i]),
      });
      const data = await response.json();

      if (response.status !== 201) throw new Error(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

async function tambahkanPiutang(listObj: Array<object>) {
  try {
    for (let i = 0; i < listObj.length; i++) {
      const response = await fetch(`${api}/debts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(listObj[i]),
      });
      const data = await response.json();

      if (response.status !== 201) throw new Error(data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

async function tambahkanPemasukan(listObj: Array<object>) {
  try {
    for (let i = 0; i < listObj.length; i++) {
      const response = await fetch(`${api}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(listObj[i]),
      });
      const data = await response.json();

      if (response.status !== 201) throw new Error(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

async function tambahkanPengeluaran(listObj: Array<object>) {
  try {
    for (let i = 0; i < listObj.length; i++) {
      const response = await fetch(`${api}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(listObj[i]),
      });
      const data = await response.json();

      if (response.status !== 201) throw new Error(data.message);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

async function getRekening() {
  try {
    const response = await fetch(`${api}/accounts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
async function getPengeluaran() {
  try {
    const response = await fetch(`${api}/transactions`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
async function getPemasukan() {
  try {
    const response = await fetch(`${api}/transactions`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
async function getHutang() {
  try {
    const response = await fetch(`${api}/debts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
async function getPiutang() {
  try {
    const response = await fetch(`${api}/debts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

export {
  tambahkanRekening,
  tambahkanHutang,
  tambahkanPiutang,
  tambahkanPemasukan,
  tambahkanPengeluaran,
  getRekening,
  getPengeluaran,
  getPemasukan,
  getHutang,
  getPiutang,
};
