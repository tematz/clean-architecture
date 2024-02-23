import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

// Na arquitetura hexagonal esta classe é um Adaptador!
// O adaptador NÃO faz parte do core da sua aplicação
export default class InverterSenhaCripto implements ProvedorCriptografia {
    criptografar(senha: string): string {
        return senha.split('').reverse().join('')
    }
}