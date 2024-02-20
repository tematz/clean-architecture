import Usuario from "@/core/usuario/model/Usuario";
import TerminalUtil from "../util/TerminalUtil";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";

export default async function registrarUsuario() {
    TerminalUtil.titulo('Registrar Usuário')

    const id = await TerminalUtil.campoRequerido('Id: ')
    const nome = await TerminalUtil.campoRequerido('Nome: ')
    const email = await TerminalUtil.campoRequerido('Email: ')
    const senha = await TerminalUtil.campoRequerido('Senha: ')

    const usuario: Usuario = { id, nome, email, senha }

    await new RegistrarUsuario().executar(usuario)

    TerminalUtil.sucesso('Usuário registrado com sucesso')

    await TerminalUtil.esperarEnter()
}