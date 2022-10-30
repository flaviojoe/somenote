import { Avatar, Drawer, IconButton, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { Icone, ListaMenu, MenuContainer, MenuVazio } from "./nav.style"
import MenuIcon from "@mui/icons-material/Menu"
import { Article, PersonAdd, ViewList } from "@mui/icons-material"
import Link from "next/link"

interface MenuProps {
    open: boolean,
    toogleMenu: (opcao: boolean) => void
}

const Menu = (props: MenuProps) => {
    return (
        <div>
            <MenuContainer>
                <IconButton onClick={() => props.toogleMenu(!props.open)}>
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Drawer open={props.open} onClose={() => props.toogleMenu(false)}>
                    <Icone>
                        <Link href="/">
                            <Avatar>
                                <ViewList />
                            </Avatar>
                        </Link>
                        <MenuVazio>Opções</MenuVazio>
                    </Icone>
                    <ListaMenu>
                        <ListItem button >
                            <ListItemIcon><PersonAdd /></ListItemIcon>
                            <ListItemText primary='Adicionar professor' />
                        </ListItem>
                        <Link href="/aulas">
                            <ListItem button >
                                <ListItemIcon><Article /></ListItemIcon>
                                <ListItemText primary='Listar alunos matriculados' />
                            </ListItem>
                        </Link>
                        <ListItem button >
                            <ListItemIcon><PersonAdd /></ListItemIcon>
                            <ListItemText primary='Adicionar professor' />
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon><PersonAdd /></ListItemIcon>
                            <ListItemText primary='Adicionar professor' />
                        </ListItem>
                    </ListaMenu>
                </Drawer>
                    
            </MenuContainer>
        </div>
    )
}

export default Menu;
