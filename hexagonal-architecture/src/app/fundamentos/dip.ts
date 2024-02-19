import corrida from "@/core/fundamentos/corrida";
import TerminalUtil from "../util/TerminalUtil";

export default async function dip() {
    TerminalUtil.titulo('DIP')
    corrida()
    await TerminalUtil.esperarEnter()
}