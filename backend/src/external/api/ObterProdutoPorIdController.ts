import { Express } from "express"

import ObterProdutoPorId from "@/core/produto/service/ObterProdutoPorId"

export default class ObterProdutoPorIdController {

    constructor(
        servidor: Express,
        casoDeUso: ObterProdutoPorId
    ) {
        servidor.post('/api/produtos/:id', async (req, resp) => {
            try {
                const produto = await casoDeUso.executar((req.params as any))

                resp.status(200).send(produto)

            } catch (erro: any) {
                resp.status(400).send(erro.message)
            }
        })
    }
}