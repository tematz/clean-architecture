import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo('Registrar Usuário')

    const nome = await TerminalUtil.campoRequerido('Nome: ', 'Neymar Jr')
    const email = await TerminalUtil.campoRequerido('Email: ', 'ney@gmail.com')
    const senha = await TerminalUtil.campoRequerido('Senha: ', '123456')

    const usuario: Usuario = { nome, email, senha }

    await new RegistrarUsuario().executar(usuario)

    TerminalUtil.sucesso('Usuário registrado com sucesso')

    await TerminalUtil.esperarEnter()

    try {
        await new RegistrarUsuario().executar(usuario)
    } catch (error: any) {
        TerminalUtil.erro(error.message)
    } finally {
        await TerminalUtil.esperarEnter()
    }
}