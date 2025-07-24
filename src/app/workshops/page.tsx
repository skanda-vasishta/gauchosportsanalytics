import { Column, Heading, Text, Card, Grid, Badge, Button } from "@/once-ui/components";
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
    {
      id: 3,
      title: "Super Bowl Competition",
      description: "Predict the winner of the Super Bowl based on historic data",
      topics: ["Python", "Machine Learning", "Data Science "],
      category: "February 2025",
      color: "blue",
      materialLink: "https://drive.google.com/drive/u/1/folders/1-I1cfPcKaLN4SSBy8Rf2pMEkn6313taX"
    },
    {
      id: 4,
      title: "Datathon",
      description: "Along with Data Science UCSB and ACM @UCSB, we co-hosted a two day datathon with a sports analytics track!",
      topics: [ "Data Science "],
      category: "February 2025",
      color: "blue",
      materialLink: "https://dataorbit-2025.devpost.com/"
    },
    {
      id: 5,
      title: "Introduction to Deep Learning",
      // date: "January 30, 2025",
      description: "Classify images of sports using neural networks",
      topics: ["Python", "Deep Learning", "PyTorch "],
      category: "March 2025",
      color: "red",
      materialLink: "https://drive.google.com/drive/folders/1R5GwVoIfBQkEbyxDMOGMbQeNeTZU2zyj?usp=sharing"
    },
    {
      id: 6,
      title: "Guest Speaker Panel with Dean Oliver and Jeremy Dumalig",
      // date: "January 30, 2025",
      description: "Dean Oliver is a Project Specialist, Sports Statistics @ ESPN, former Assistant Coach for the Washington Wizards, and inventor of Player Winning Percentage (PW%) metric. Jeremy Dumalig is a Basketball Operations Assistant @ Brooklyn Nets, with hands-on experience in applying analytics to player performance and team strategy",
      topics: ["Basketball Analytics"],
      category: "April 2025",
      color: "blue",
      materialLink: "https://docs.google.com/presentation/d/1OmwY251IVNdbIrt9yG9GrSaLSvlBL0SrHSV7FFVdV1w/edit?usp=sharing"
    },
  ];

  
  return (
    <Column maxWidth="l" gap="xl">
      <Column gap="s">
        <Heading variant="display-strong-xl">Workshops and Meetings</Heading>
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
      <Heading variant="display-strong-m">2024-25 Meetings</Heading>

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
              
              <Button href={workshop.materialLink}>
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