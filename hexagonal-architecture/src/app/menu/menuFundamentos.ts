import polimorfismo from "../fundamentos/polimorfismo";
import TerminalUtil from "../util/TerminalUtil";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos')

    const [indice] = await TerminalUtil.menu(['1. Polimorfismo', 'Voltar'])

    switch (indice) {
        case 0: await polimorfismo()
            break
        case 1: return
    }

    await menuFundamentos()
}