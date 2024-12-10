import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-8 xl:py-10 text-white">
            <div className="container mx-auto flex justify-between items-center relative w-full">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold xl:-ml-20">
                        Portfolio<span className="text-accent">.</span>RP
                    </h1>
                </Link>

                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8 absolute right-[-100px]">
                    <Nav right/>
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/*Mobile Nav*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
