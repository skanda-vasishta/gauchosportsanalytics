import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  const title = "People - Gaucho Sports Analytics";
  const description = "Meet the team behind UCSB's sports analytics platform";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/people`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function People() {
  return (
    <Column maxWidth="l" gap="xl">
      <Column gap="s">
        <Heading variant="display-strong-xl">Our Team</Heading>
        <Text variant="display-default-s" onBackground="neutral-weak">
          Coming soon
        </Text>
      </Column>
      {/* Team member content will go here */}
    </Column>
  );
} 