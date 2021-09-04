export class Pais {
    cod_pais?: number;
    ide_pais: string;
    nom_pais: string;
    nac_pais: string;
    est_pais: string;
    constructor(ide_pais: string,
        nom_pais: string,
        nac_pais: string,
        est_pais: string) {
        this.ide_pais = ide_pais,
            this.nom_pais = nom_pais,
            this.nac_pais = nac_pais,
            this.est_pais = est_pais
    }
}
