import CasoDeUso from "@/core/shared/CasoDeUso";
import Usuario from "../model/Usuario";

export default class RegistrarUsuario implements CasoDeUso<Usuario, void {
    async executar(usuario: Usuario): Promise<void> {

    }
}