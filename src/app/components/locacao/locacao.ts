export interface Locacao {
	id?: string,
    idCliente: string,
    idCarro: string,
    carro: any;
    cliente: any,
    qtdDias:  number,
    dtIni: string,
    dtFim?: string,
    multa?: string,
    total: any
}
