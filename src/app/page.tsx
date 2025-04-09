"use client";

import { Column, Text } from "@/once-ui/components";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function Home() {
  return (
    <Column 
      maxWidth="l" 
      gap="xl" 
      horizontal="center" 
      vertical="center" 
      style={{ 
        minHeight: "80vh", 
        textAlign: "center", 
        transform: "translateY(-100px)" // Moves the content up slightly
      }}
    >
      <h1 style={{ fontSize: "8rem", fontWeight: "bold", lineHeight: "1.2" }}>
        <span style={{ color: "white" }}>Gaucho </span>  
        {/* <br />   */}
        <span style={{ color: "gold" }}>Sports Analytics</span>
      </h1>
      <Text 
        variant="body-default-m" 
        style={{ fontSize: "2rem", color: "grey", fontStyle: "italic" }}
      >
        <Typewriter
          options={{
            strings: ["UCSB's first-ever sports analytics club."],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 100,
          }}
        />
      </Text>
    </Column>
  );
}
