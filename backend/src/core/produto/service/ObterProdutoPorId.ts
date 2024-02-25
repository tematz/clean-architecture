import CasoDeUso from "@/core/shared/CasoDeUso";
import Produto from "../model/Produto";

export default class ObterProdutoPorId implements CasoDeUso<string, Produto> {

    async executar(id: string): Promise<Produto> {

        return { id, nome: 'Produto 1', preco: 10.00 }
    }
}