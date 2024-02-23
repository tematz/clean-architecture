import Usuario from "../../core/usuario/model/Usuario";
import db from "./db";

export default class RepositorioUsuarioPg {

    async inserir(usuario: Usuario) {
        await db.query(`insert into usuarios
        (id, nome, email, senha)
        values ($1, $2, $3, $4)`,
            [usuario.id, usuario.nome, usuario.email, usuario.senha])
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        const usuario = await db.oneOrNone('select * from usuarios where email = $1', [email])
        if (!usuario) return null
        return usuario
    }
}