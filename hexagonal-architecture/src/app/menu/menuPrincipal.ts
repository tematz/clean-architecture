import TerminalUtil from "@/util/TerminalUtil";
import { terminal } from "terminal-kit";

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const resposta = await terminal.singleColumnMenu(['1. Fundamentos', 'Sair']).promise

    switch(resposta.selectedIndex) {
        case 1: process.exit(0)
    }

    menuPrincipal()
}