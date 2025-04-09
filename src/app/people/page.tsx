import { Column, Heading, Text, Grid, Card } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import Image from "next/image";

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
  const boardMembers = [
    {
      id: 1,
      name: "Placeholder 1",
      role: "President",
      major: "Statistics & Data Science",
      favoriteTeam: "Los Angeles Dodgers",
      imagePath: "/images/team/alex.jpg"
    },
    {
      id: 2,
      name: "PLaceholder 2",
      role: "Vice President",
      major: "Computer Science",
      favoriteTeam: "Golden State Warriors",
      imagePath: "/images/team/jamie.jpg"
    },
    {
      id: 3,
      name: "PLaceholder 3",
      role: "Technical Director",
      major: "Mathematics",
      favoriteTeam: "UCSB Gauchos",
      imagePath: "/images/team/tyler.jpg"
    },
   
  ];

  return (
    <Column maxWidth="l" gap="xl">
      <Column gap="s">
        <Heading variant="display-strong-xl">Our Team</Heading>
        <Text variant="display-default-s" onBackground="neutral-weak">
          The experts behind Gaucho Sports Analytics
        </Text>
      </Column>

      <Grid columns={1} columnsSm={2} columnsMd={3} gap="m" style={{ height: "100%" }}>
      {boardMembers.map((member) => (
        <div key={member.id} style={{ height: "100%" }}>
          <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            {/* Image section */}
            <div style={{ position: "relative", width: "100%", height: "250px" }}>
              <Image
                src={member.imagePath}
                alt={`${member.name}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>

            {/* Text section */}
            <Column gap="xs" padding="s" style={{ flexGrow: 1 }}>
              <Text variant="label-strong-s">{member.name}</Text>
              <Text variant="label-default-xs">{member.role}</Text>
              <Text variant="label-default-xs">Major: {member.major}</Text>
              <Text variant="label-default-xs">Team: {member.favoriteTeam}</Text>
            </Column>
          </Card>
        </div>
      ))}
    </Grid>


      <Card>
        <Column gap="m" padding="m">
          <Heading variant="display-strong-s">Join Our Team</Heading>
          <Text variant="label-default-s">
            Interested in joining Gaucho Sports Analytics? We recruit new board members at the beginning of each academic year.
            Follow our social media channels for application announcements.
          </Text>
        </Column>
      </Card>
    </Column>
  );
}
