import { Column, Heading, Text, Card, Grid, Badge, Button, Link } from "@/once-ui/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {
  const title = "Workshops - Gaucho Sports Analytics";
  const description = "Explore our sports analytics workshops and educational resources";

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
  // Workshop data array - sorted in chronological order (newest first)
  const workshops = [
    {
      id: 1,
      title: "Intro to Exploratory Data Analysis with Python",
      // date: "January 23, 2025",
      description: "Learn exploratory data analysis and visualization with Python libraries",
      topics: ["Python", "Pandas", "Numpy", "MatPlotLib", "Seaborn"],
      category: "January 2025",
      color: "blue",
      materialLink: "https://drive.google.com/drive/u/3/folders/1LIUUUupWLIvFb4hvH9tiMY7GC83TfePz"
    },
    {
      id: 2,
      title: "Introduction to Machine Learning",
      // date: "January 30, 2025",
      description: "Predict the number of yards gained by a running back using machine learning models",
      topics: ["Python", "Machine Learning", "Scikit-Learn "],
      category: "January 2025",
      color: "red",
      materialLink: "https://drive.google.com/drive/folders/1xT6a9YG7Xh5hQ70hTidxgmrQUVOjGvmP?usp=drive_link"
    },
  ];

  return (
    <Column maxWidth="l" gap="xl">
      <Column gap="s">
        <Heading variant="display-strong-xl">Workshops</Heading>
        <Text variant="display-default-s" onBackground="neutral-weak"  style={{ color: "#FFD700" }}>
          Learn data science and machine learning skills
        </Text>
      </Column>
{/*       
      <Column gap="m">
        <Text>
          Our workshops provide hands-on learning experiences in various aspects of sports analytics. 
          All workshop materials remain available even after the session is complete.
        </Text>
      </Column> */}
      
      <Column gap="l">
        {workshops.map((workshop) => (
          <Card key={workshop.id}>
            <Column gap="m" padding="l">
              <Column gap="s">
                <Badge color={workshop.color}>{workshop.category}</Badge>
                {/* <Text variant="label-default-s">{workshop.date}</Text> */}
              </Column>
              
              <Heading variant="display-strong-m"  style={{ color: "#FFD700" }}>{workshop.title}</Heading>
              
              <Text>{workshop.description}</Text>
              
              <Column gap="s">
                <Text variant="label-strong-s">Topics Covered:</Text>
                <Text>{workshop.topics.join(", ")}</Text>
              </Column>
              
              <Button as="a" href={workshop.materialLink}>
                View Materials
              </Button>
            </Column>
          </Card>
        ))}
      </Column>
      
      <Card>
        <Column gap="m" padding="l">
          <Heading variant="display-strong-m">Upcoming Workshops</Heading>
          <Text>
            We're always planning new workshops to help you grow your sports analytics skills.
            Join our Discord server and follow our social media to be notified about upcoming events.
          </Text>
          {/* <Text>
            Have a workshop topic suggestion? Reach out to us through the contact form!
          </Text> */}
        </Column>
      </Card>
    </Column>
  );
}