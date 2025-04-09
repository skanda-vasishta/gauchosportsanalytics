import { Column, Heading, Text, Card, Grid, Badge, Button } from "@/once-ui/components";
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
        <Heading variant="display-strong-xl" >Projects</Heading>
        <Text variant="display-default-s" onBackground="neutral-weak" style={{ color: "#FFD700" }}>
          Work with real-world sports teams
        </Text>
      </Column>
      
      <Card>
        <Column gap="m" padding="l">
          <Heading variant="display-strong-m" >Application Information</Heading>
          <Text>
            Applications for our current projects are now closed.
          </Text>
          <Text>
            Follow us on social media and join our discord to be notified when the next application cycle begins. We welcome students from all majors with an interest in sports analytics, no prior experience necessary!
          </Text>
          {/* <Text variant="label-strong-s">Next Application Window: Fall 2025</Text> */}
        </Column>
      </Card>

      <Column gap="m">
        <Heading variant="display-strong-m">Ongoing Projects</Heading>
        
        <Grid columns={1} columnsMd={2} gap="m">
          
          <Card>
            <Column gap="m" padding="l">
              <Badge color="red">Baseball</Badge>
              <Heading variant="display-strong-m" style={{ color: "#FFD700" }}>UCSB Gauchos Baseball Team</Heading>
              <Text>
                Developing pitch sequencing model along with advanced statistical metrics for UCSB Gauchos Baseball team. 
              </Text>
              {/* <Column gap="s">
                <Text variant="label-strong-s">Requirements:</Text>
                <Text>
                  - Experience with Python or R
                  - Knowledge of baseball metrics
                  - Statistical analysis skills
                </Text>
              </Column> */}
              <Button variant="secondary" disabled={true}>Applications Closed</Button>
            </Column>
          </Card>
          
          <Card>
            <Column gap="m" padding="l">
              <Badge color="blue">Basketball</Badge>
              <Heading variant="display-strong-m" style={{ color: "#FFD700" }} >UCSB Mens Basketball Team</Heading>
              <Text>
                Performing transfer portal player analysis for recruiment and developing metrics for in-game decisions and strategy.
              </Text>
              <Button variant="secondary" disabled={true}>Applications Closed</Button>
            </Column>
          </Card>
        </Grid>
      </Column>
      
      
      
     
    </Column>
  );
}