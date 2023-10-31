import Link from "next/link";
import { Button } from "../ui/button";


const Hero = ({ }) => {
    return (
        <main
            className="flex flex-col items-center w-full bg-cover bg-center bg-no-repeat lg:py-[15rem] py-[11rem]"
        >
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center drop-shadow-lg ">
                Sample Blog Website
            </h1>
            <h4 className="scroll-m-20 text-xl mt-2 tracking-tight pt-2 drop-shadow-lg">
                Built with Nextjs 14, TailwindCSS + ShadCN, Sanity CMS, Clerk Auth
            </h4>
            <Link href="/blog" className="mt-[1rem]">
                <Button variant="outline">Blog</Button>
            </Link>
        </main>
    );
};

export default Hero;
