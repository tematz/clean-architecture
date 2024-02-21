import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import TerminalUtil from "../util/TerminalUtil";
import Usuario from "@/core/usuario/model/Usuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioEmMemoria from "@/adapter/db/RepositorioUsuarioEmMemoria";


export default async function registrarUsuario() {
    TerminalUtil.titulo('Registrar Usuário')

    const nome = await TerminalUtil.campoRequerido('Nome: ', 'Neymar Jr')
    const email = await TerminalUtil.campoRequerido('Email: ', 'ney@gmail.com')
    const senha = await TerminalUtil.campoRequerido('Senha: ', '123456')

    const usuario: Usuario = { nome, email, senha }
    const repositorio = new RepositorioUsuarioEmMemoria()
    const provedorCripto = new SenhaCripto()
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto)

    await casoDeUso.executar(usuario)

    TerminalUtil.sucesso('Usuário registrado com sucesso')

    await TerminalUtil.esperarEnter()

    try {
        await casoDeUso.executar(usuario)
    } catch (error: any) {
        TerminalUtil.erro(error.message)
    } finally {
        await TerminalUtil.esperarEnter()
    }
}