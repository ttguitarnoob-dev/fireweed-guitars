import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import { useState } from "react"

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        "Home",
        "Guitars",
        "About",
        
      ];

    return (
        <Navbar classNames={{
            item: [
              "flex",
              "relative",
              "h-full",
              "items-center",
              "data-[active=true]:after:content-['']",
              "data-[active=true]:after:absolute",
              "data-[active=true]:after:bottom-0",
              "data-[active=true]:after:left-0",
              "data-[active=true]:after:right-0",
              "data-[active=true]:after:h-[2px]",
              "data-[active=true]:after:rounded-[2px]",
              "data-[active=true]:after:bg-primary",
            ],
          }} 
          onMenuOpenChange={setIsMenuOpen}
          >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">FireweedGuitars</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem >
            <Link color="foreground" href="/guitars">
              Guitars
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  "foreground"
                }
                className="w-full"
                href={`/${item.toLowerCase()}`}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    )
}