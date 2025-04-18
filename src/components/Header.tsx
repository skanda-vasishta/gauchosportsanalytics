"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Flex, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";
import { routes } from "@/app/resources";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <Flex
      as="header"
      className={styles.position}
      zIndex={9}
      fillWidth
      padding="8"
      horizontal="space-between"
      vertical="center"
      background="surface"
      border="neutral-medium"
      borderStyle="solid"
      borderWidth={1}
      borderBottom="neutral-medium"
      shadow="s"
    >
      {/* Logo on the left */}
      <Flex vertical="center" gap="8">
        <a href="/">
          <Image 
            src="/images/logo.png" 
            alt="Gaucho Sports Analytics Logo" 
            width={50} 
            height={50}
            style={{ borderRadius: '8px' }}
          />
        </a>
        <Flex hide="s">
          <h3 style={{ fontWeight: 'bold', margin: 0 }}>Gaucho Sports Analytics</h3>
        </Flex>
      </Flex>

      {/* Navigation on the right */}
      <Flex 
        gap="4" 
        vertical="center" 
        textVariant="body-default-s"
        radius="m-4"
        padding="4"
      >
        {routes["/"] && (
          <ToggleButton
            prefixIcon="home"
            href="/"
            label="Home"
            selected={pathname === "/"}
          />
        )}
        {routes["/about"] && (
          <ToggleButton
            prefixIcon="person"
            href="/about"
            label="About"
            selected={pathname === "/about"}
          />
        )}
        {routes["/projects"] && (
          <ToggleButton
            prefixIcon="grid"
            href="/projects"
            label="Projects"
            selected={pathname.startsWith("/projects")}
          />
        )}
        {routes["/workshops"] && (
          <ToggleButton
            prefixIcon="book"
            href="/workshops"
            label="Workshops"
            selected={pathname.startsWith("/workshops")}
          />
        )}
        {routes["/people"] && (
          <ToggleButton
            prefixIcon="users"
            href="/people"
            label="People"
            selected={pathname.startsWith("/people")}
          />
        )}
      </Flex>
    </Flex>
  );
};
