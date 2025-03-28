import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  const title = "Projects - Gaucho Sports Analytics";
  const description = "Explore our innovative sports analytics projects at UCSB Athletics";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Projects() {
  return (
    <Column maxWidth="l" gap="xl">
      <Column gap="s">
        <Heading variant="display-strong-xl">Projects</Heading>
        <Text variant="display-default-s" onBackground="neutral-weak">
          Innovative sports analytics solutions for UCSB Athletics
        </Text>
      </Column>
      {/* Project content will go here */}
    </Column>
  );
} 