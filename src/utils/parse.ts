const parseNominal = (nominal: number) => {
  if (nominal == 0) return "Rp0";
  let nom: string = "";
  while (nominal > 0) {
    if (nominal < 1000) nom = nominal + nom;
    else if (nominal % 1000 > 0) nom = "." + (nominal % 1000) + nom;
    else nom = ".000" + nom;
    nominal = Math.round(nominal / 1000);
  }
  return "Rp" + nom;
}

const parseToDueDate = (dueDate: Date) => {
  const utc = new Date()
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          timeZone: "Asia/Jakarta",
        }).split("/");
  const localTime = `${utc[2]}-${utc[0]}-${utc[1]}`;
  const diff = new Date(dueDate).getTime() - new Date(localTime).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days < 0) {
    return "Terlewat";
  } else if (days === 0) {
    return "Hari ini";
  } else {
    if (days == 1) return "Besok";
    else if (days == 2) return "Lusa";
    else if (days > 2 && days < 7) {
      return days + " hari lagi";
    } else {
      if (days < 30)
      return Math.floor(days / 7) + " minggu lagi";
      else {
        if (days < 365) return Math.floor(days / 30) + " bulan lagi";
        else return Math.floor(days / 365) + " tahun lagi";
      }
    }
  }
}

const parseToToday = (createdAt: Date) => {
  const utc = new Date()
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          timeZone: "Asia/Jakarta",
        }).split("/");
  const localTime = `${utc[2]}-${utc[0]}-${utc[1]}`;
  const diff = new Date(createdAt).getTime() - new Date(localTime).getTime();
  const days = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)));

  if (days == 0) 
    return "Hari ini";
  else {
    if (days == 1) return "Kemarin";
    else if (days == 2) return "Kemarin lusa";
    else if (days < 7) {
      return days + " hari yang lalu";
    } else {
      if (days < 30)
      return Math.floor(days / 7) + " minggu yang lalu";
      else {
        if (days < 365) return Math.floor(days / 30) + " bulan yang lalu";
        else return Math.floor(days / 365) + " tahun yang lalu";
      }
    }
  }
  
}

export { parseNominal, parseToDueDate, parseToToday };
