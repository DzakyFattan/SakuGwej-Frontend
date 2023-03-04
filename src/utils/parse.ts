function parseNominal (nominal: number) {
    if (nominal == 0) 
        return "Rp0"
    let nom: string = ""
    while (nominal > 0) {
        if (nominal < 1000) 
            nom = nominal + nom
        else if ((nominal%1000) > 0)
            nom = "." + (nominal%1000) + nom
        else 
            nom = ".000" + nom
        nominal = Math.round(nominal/1000)
    }
    return "Rp"+nom
}

export { parseNominal }