import { Column, Heading, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  const title = "Workshops - Gaucho Sports Analytics";
  const description = "Sports analytics workshops and training sessions for UCSB Athletics";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/workshops`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Workshops() {
  return (
    <Column maxWidth="l" gap="xl">
      <Column gap="s">
        <Heading variant="display-strong-xl">Workshops</Heading>
        <Text variant="display-default-s" onBackground="neutral-weak">
          Training and educational sessions on sports analytics
        </Text>
      </Column>
      {/* Workshop content will go here */}
    </Column>
  );
} 