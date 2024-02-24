import CasoDeUso from "@/core/shared/CasoDeUso";
import Erros from "@/core/shared/Erros";
import Usuario from "@/core/usuario/model/Usuario";
import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia";
import RepositorioUsuario from "@/core/usuario/service/RepositorioUsuario";

export type Entrada = {
    email: string
    senha: string
}


export default class LoginUsuario implements CasoDeUso<Entrada, Usuario> {

    constructor(
        private repositorio: RepositorioUsuario,
        private provedorCripto: ProvedorCriptografia
    ) { }

    async executar(entrada: Entrada): Promise<Usuario> {

        const usuarioExistente = await this.repositorio.buscarPorEmail(entrada.email)

        if (!usuarioExistente) throw new Error(Erros.USUARIO_NAO_EXISTE)

        const mesmaSenha = this.provedorCripto.comparar(entrada.senha, usuarioExistente.senha!)

        if (!mesmaSenha) throw new Error(Erros.SENHA_INCORRETA)

        return { ...usuarioExistente, senha: undefined }
    }
}