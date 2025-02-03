import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ChevronDown, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { DropdownMenu } from "./ui/dropdown-menu";
import { DropdownMenuContent } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
// import { PenBox } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { FileText } from "lucide-react";
import { checkUser } from "@/lib/checkUser";

const Header=async ()=> {
  await checkUser()
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="">
          <Image
            src="/logo.png"
            alt="logo"
            className="h-12 py-1 w-auto object-contain"
            width={200}
            height={60}
          />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industries Insight</span>
              </Button>
            </Link>
         

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarIcon className="h-4 w-4" />
                {/* <span className="hidden md:block"></span> */}
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>

              {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
              <DropdownMenuItem>
                <Link
                  href={"/ai-cover-letter"}
                  className="flex items-center gap-2"
                >
                  <PenBox className="h-4 w-4" />
                  <span>Cover Letter</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/interview"} className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          <SignedOut>
            <SignInButton >
                <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
                elements:{
                    avatarBox:'w-10 h-10',
                    userButtonPopoverCard:'shadow-xl',
                    userPreviewMainIdentifier:'font-semibolder'
                }
                
            }} afterSignOutUrl="/" />
            
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
