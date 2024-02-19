import TerminalUtil from "../util/TerminalUtil";

export default async function polimorfismo() {
    TerminalUtil.titulo('Polimorfismo')

    const tipoCarro = await TerminalUtil.selecao('Tipo de Carro?', ['Ferrari', 'Fusca'])

    while (true) {
        TerminalUtil.limpar()
        const continuar = await TerminalUtil.confirmacao('Deseja continuar?')
        if (!continuar) return
    }
}