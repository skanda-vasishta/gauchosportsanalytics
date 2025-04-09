"use client";

import { usePathname } from "next/navigation";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes } from "@/app/resources";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
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
        </Flex>
      </Flex>
    </>
  );
};
