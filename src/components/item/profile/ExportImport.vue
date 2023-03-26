<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import SettingCard from "./SettingCard.vue";
import { ref } from "vue";
import {
  tambahkanHutang,
  tambahkanPemasukan,
  tambahkanPengeluaran,
  tambahkanPiutang,
  tambahkanRekening,
  getHutang,
  getPemasukan,
  getPengeluaran,
  getPiutang,
  getRekening,
} from "@/utils/databaseExportImport";

const { theme, themeClasses } = useThemeStore();

const dialog = ref(false);

const deactivateDialog = () => {
  dialog.value = false;
};

const btnExportClicked = () => {
  dialog.value = true;
};

async function exportFileCatatan() {
  let pemasukan = await getPemasukan();
  let pengeluaran = await getPengeluaran();
  let hasil = catatanObjectToCSV(pemasukan, pengeluaran);
  download("pemasukan.csv", "text/plain", hasil[0]);
  download("pengeluaran.csv", "text/plain", hasil[1]);
}

async function exportFileRekening() {
  let rekening = await getRekening();
  let hasil = rekeningObjectToCSV(rekening);
  download("rekening.csv", "text/plain", hasil);
}

async function exportFileHutang() {
  let hutang = await getHutang();
  let piutang = await getPiutang();
  console.log(hutang);
  console.log(piutang);
  let hasil = hutangObjectToCSV(hutang, piutang);
  download("hutang.csv", "text/plain", hasil[0]);
  download("piutang.csv", "text/plain", hasil[1]);
}

function catatanObjectToCSV(pemasukan: object, pengeluaran: object): Array<string> {
  let dataPemasukan = pemasukan["data"];
  let dataPengeluaran = pemasukan["data"];
  let finalPemasukan = "";
  let finalPengeluaran = "";
  finalPemasukan += "pemasukan,type,category,createdAt\n";
  finalPengeluaran += "pengeluaran,type,category,createdAt\n";
  for (let i = 0; i < Object.keys(dataPemasukan).length; i++) {
    finalPemasukan += `${dataPemasukan[i]["amount"]},${dataPemasukan[i]["type"]},${dataPemasukan[i]["category"]},${dataPemasukan[i]["createdAt"]}\n`;
    finalPengeluaran += `${dataPengeluaran[i]["amount"]},${dataPengeluaran[i]["type"]},${dataPengeluaran[i]["category"]},${dataPengeluaran[i]["createdAt"]}\n`;
  }
  return [finalPemasukan, finalPengeluaran];
}
function hutangObjectToCSV(hutang: object, piutang: object): Array<string> {
  let dataHutang = hutang["data"];
  let dataPiutang = piutang["data"];
  let finalHutang = "";
  let finalPiutang = "";
  finalHutang += "hutang,type,name,description,startDate,dueDate\n";
  finalPiutang += "piutang,type,name,description,startDate,dueDate\n";
  for (let i = 0; i < Object.keys(dataHutang).length; i++) {
    finalHutang += `${dataHutang[i]["amount"]},${dataHutang[i]["type"]},${dataHutang[i]["name"]},${dataHutang[i]["description"]},${dataHutang[i]["startDate"]},${dataHutang[i]["dueDate"]}\n`;
    finalPiutang += `${dataPiutang[i]["amount"]},${dataPiutang[i]["type"]},${dataPiutang[i]["name"]},${dataPiutang[i]["description"]},${dataPiutang[i]["startDate"]},${dataPiutang[i]["dueDate"]}\n`;
  }
  return [finalHutang, finalPiutang];
}
function rekeningObjectToCSV(rekening: object): string {
  let data = rekening["data"];
  let finalData = "";
  finalData += "rekening,accounrDecsription,nominal\n";
  for (let i = 0; i < Object.keys(data).length; i++) {
    finalData += `${data[i]["accountName"]},${data[i]["accounrDecsription"]},${data[i]["nominal"]}`;
    finalData += "\n";
  }
  return finalData;
}

function importFile(e: any) {
  const files = e.currentTarget.files;
  var data;
  Object.keys(files).forEach((i) => {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = (e) => {
      data = (<string>reader.result).split("\n");
      prosesData(data, i+1);
      console.log(data);
    };
    reader.readAsText(file);
  });
}

function catatanCSVToObject(data: Array<string>) {
  let listObj = [];
  let headers = data[0].split(",");
  for (let i = 1; i < data.length - 1; i++) {
    let obj = {};
    let currentline = data[i].split(",");
    obj[headers[1]] = currentline[1];
    obj["amount"] = parseInt(currentline[0]);
    for (let j=2;j < 3; j++) {
      obj[headers[j]] = currentline[j];
    }
    listObj.push(obj);
  }
  if (headers[0] === "pemasukan") {
    tambahkanPemasukan(listObj);
  }
  else {
    tambahkanPengeluaran(listObj);
  }
}
function hutangCSVToObject(data: Array<string>) {
  let listObj = [];
  let headers = data[0].split(",");
  for (let i = 1; i < data.length - 1; i++) {
    let obj = {};
    let currentline = data[i].split(",");
    obj[headers[1]] = currentline[1];
    obj["amount"] =parseInt(currentline[0]);
    for (let j=2;j < 6; j++) {
      obj[headers[j]] = currentline[j];
    }
    listObj.push(obj);
  }
  if (headers[0] === "hutang") {
    tambahkanHutang(listObj);
  }
  else {
    tambahkanPiutang(listObj);
  }
}
function rekeningCSVToObject(data: Array<string>) {
  let listObj = [];
  let headers = data[0].split(",");
  for (let i = 1; i < data.length - 1; i++) {
    let obj = {};
    let currentline = data[i].split(",");
    for (let j=0;j < 3; j++) {
      obj[headers[j]] = currentline[j];
      if (j==2) {
        obj[headers[j]] = parseInt(currentline[j]);
      }
    }
    listObj.push(obj);
  }
  tambahkanRekening(listObj);
}

function btnImportClicked() {
  document.querySelector("input")!.click();
}

function prosesData(object: Array<string>, urutan: string) {
  let headers = object[0].split(",");
  let type = headers[0];
  if (type === "hutang") {
    console.log("masuk")
    hutangCSVToObject(object);
  } else if (type === "piutang") {
    hutangCSVToObject(object);
  } else if (type === "rekening") {
    rekeningCSVToObject(object);
  } else if (type === "pemasukan") {
    catatanCSVToObject(object)
  } else if (type === "pengeluaran") {
    catatanCSVToObject(object)
  } else {
    alert(`File ke -${urutan} tidak valid`);
  }
}

function download(fileName: string, contentType: string, content: any) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
</script>
<template>
  <SettingCard :title="`Export/Import`">
    <v-dialog v-model="dialog" persistent width="480">
      <v-card :class="themeClasses.bgSecondary" class="rounded-lg">
        <div class="mb-4">
          <v-row class="p-4"
            ><v-btn @click="deactivateDialog" icon variant="flat">
              <img src="/src/assets/icons/Dell_fill.png" alt="exit" />
            </v-btn>
            <h3 class="text-center ml-36">Export CSV</h3></v-row
          >

          <div
            class="bg-color-white p-4 mx-4 rounded-lg flex flex-row align-center justify-between"
          >
            <v-column>
              <v-row class="justify-center"
                ><div class="mx-4">Export Rekening</div>
                <div class="mx-4">Export Hutang</div>
                <div class="mx-4">Export Catatan</div></v-row
              >
              <v-row class="justify-center mt-4">
                <v-btn
                  :class="themeClasses.bgMain"
                  @click="exportFileRekening"
                  class="text-xs mx-7"
                  >Rekening</v-btn
                >
                <v-btn
                  :class="themeClasses.bgMain"
                  @click="exportFileHutang"
                  class="text-xs mx-6"
                  >Hutang</v-btn
                >
                <v-btn
                  @click="exportFileCatatan"
                  class="text-xs mx-6"
                  :class="themeClasses.bgMain"
                  >Catatan</v-btn
                ></v-row
              ></v-column
            >
          </div>
        </div>
      </v-card>
    </v-dialog>
    <div class="flex flex-row space-x-4">
      <div class="flex-1 border-r pr-2 border-gray-400">
        <p>Export transaksi ke file csv</p>
        <v-btn
          @click="btnExportClicked"
          class="button mt-2 text-xs"
          :class="themeClasses.bgMain"
          >Export</v-btn
        >
      </div>
      <div class="flex-1">
        <p>Import transaksi dari file csv</p>
        <v-btn
          id="import"
          @click="btnImportClicked"
          class="button mt-2 text-xs"
          :class="themeClasses.bgMain"
          >Import</v-btn
        >
        <input hidden multiple type="file" accept=".csv" @change="importFile" />
      </div>
    </div>
  </SettingCard>
</template>
