import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <p>langing page</p>
        <SignInButton>sign in</SignInButton>
        <Button> click me </Button>
      </div>
    </main>
  );
}
