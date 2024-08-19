import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
// import { Component } from "path-to-your-component"
// import { ClerkProvider } from "@clerk/nextjs";


//we didn't add an import statment so it is not shown in the live website. 



export default function Home() {
  return (
     <div> 
      <p> 
        This is a protected page.
        <UserButton /> 
      </p>
     </div>
  
    
  );
}
