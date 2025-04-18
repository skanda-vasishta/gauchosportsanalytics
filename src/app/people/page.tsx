import { Column, Heading, Text, Card, Grid } from "@/once-ui/components";
import Image from "next/image";
// import { baseURL } from "@/app/resources";

const teamMembers = [
  {
    name: "Skanda Vasishta",
    major: "Computer Science",
    position: "Co-President",
    year: "Junior",
    image: "/images/logo.png",
  },
  {
    name: "Viraj Zaveri",
    major: "Computer Science",
    position: "Co-President",
    year: "Junior",
    image: "/images/logo.png",
  },
  {
    name: "Tanish Mendki",
    major: "Stats and Data Science + Psych and Brain Sciences",
    position: "Vice President",
    year: "Junior",
    image: "/images/logo.png",
  },
  {
    name: "Bhavya Sankarappan",
    major: "Stats and Data Science + Economics",
    position: "Finance Officer",
    year: "Junior",
    image: "/images/logo.png",
  },
  {
    name: "Satvik Talchuru",
    major: "Stats and Data Science + Economics",
    position: "Finance Officer",
    year: "Sophomore",
    image: "/images/logo.png",
  },
  {
    name: "Brian Kim",
    major: "Computer Science",
    position: "Outreach Officer",
    year: "Sophomore",
    image: "/images/logo.png",
  },
  {
    name: "Quinn Koster",
    major: "Computer Science",
    position: "Technical Officer",
    year: "Sophomore",
    image: "/images/logo.png",
  },
  {
    name: "Aaron Cao",
    major: "Computer Science",
    position: "Technical Officer",
    year: "Freshman",
    image: "/images/logo.png",
  },
];

export default function People() {
  return (
    <Column maxWidth="l" gap="xl">
      <Column gap="s">
        <Heading variant="display-strong-xl">Our Team</Heading>
        <Text variant="display-default-s" onBackground="neutral-weak" style={{ color: "#FFD700" }}>
          Meet the Gaucho Sports Analytics board!
        </Text>
      </Column>

      <Grid columns={4} tabletColumns={2} mobileColumns={1} gap="l">
        {teamMembers.map((member, index) => (
          <Card key={index} padding="m" radius="xl" shadow="m">
            <Column gap="s" fillWidth>
              <div style={{ width: '100%', height: '200px', position: 'relative' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
              <Heading variant="body-strong-m" align="center" >{member.name}</Heading>
              <Text variant="body-default-s" align="center" >{member.major}</Text>
              <Text variant="body-default-s" align="center" style={{ color: '#FFD700' }}>{member.position}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
                {member.year}
              </Text>
            </Column>
          </Card>
        ))}
      </Grid>
    </Column>
  );
}
