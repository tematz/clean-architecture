import {terminal} from 'terminal-kit'

export default class TerminalUtil {
    static titulo(texto: string) {
        terminal.clear()
        terminal.magenta(`${texto}\n`)
        terminal.magenta(`-`.repeat(texto.length) + `\n`)
    }
}