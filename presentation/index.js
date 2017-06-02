// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            DBs IN THE CLOUD (wip)
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            playing with RDBMs, thanks to containers ❤️
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="tertiary" caps>How it started</Heading>
          <Appear>
            <Text size={6} textColor="primary">containerized everything</Text>
          </Appear>
          <Appear>
            <Text size={6} textColor="primary">embraced swarm and kubernetes</Text>
          </Appear>
          <Appear>
            <Text size={6} textColor="primary">can get everything running, HA, at any provider, within minutes</Text>
          </Appear>
          <Appear>
            <Text size={5} textColor="tertiary">Wait, not everything!</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Objectives</Heading>
          <List ordered>
            <Appear>
              <ListItem textSize={30}>Is it easy to cluster a containerized RDBMS?</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Is cockroachdb ready for prime time?</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Which RDMS is faster/easier to use for my usual work?</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Can I beat Hosted Google DBs price/perf?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The setup</Heading>
          <List>
            <ListItem>Let's use Google Cloud (why not?)</ListItem>
            <ListItem>Stick to Golang (1.8.3)</ListItem>
            <ListItem>VM 1 vCPU, 3.75GB RAM, standard disk</ListItem>
            <ListItem>1 000 000 reqs</ListItem>
            <ListItem>50 concurrent goroutines</ListItem>
            <ListItem>Pluggable schemas, pluggable dbs</ListItem>
            <ListItem>AUTOMATED</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">The tested RDBMSs</Heading>
          <List>
            <Appear>
              <ListItem textSize={30}>Other MySQL bin compatible (percona, maria)</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Cockroachdb, because it's 100% golang and cloud native!</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Wait, might as well...</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <Appear>
              <ListItem textSize={30}>Postgres, everybody is talking about it</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Oracle, because it's expensive (and painful)</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>MS SQL server, because they just launched it on linux!</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>SQLite, because it's a good reference</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Hosted MySQL on GCP, because it's my usual pick</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Hosted Postgres on GCP, because it's new, and why not...</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Wait, might as well...</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>
            <Link textColor="tertiary" href="https://playwithsql-summary.surge.sh/" target="_blank">Results</Link>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>Objectives</Heading>
          <List ordered>
            <Appear>
              <ListItem textColor="primary" textSize={30}>Is it easy to cluster a containerized RDBMS?</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize={30}>Is cockroachdb ready for prime time?</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize={30}>Which RDMS is faster/easier to use for my usual work?</ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="primary" textSize={30}>Can I beat Hosted Google DBs price/perf?</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What's next?</Heading>
          <List>
            <ListItem textSize={30}>Increase stability</ListItem>
            <ListItem textSize={30}>More benchmarks</ListItem>
            <ListItem textSize={30}>Deploy HA DB cluster (galera, cockroachdb, postgres)</ListItem>
            <ListItem textSize={30}>Test different cloud storage (SSD, storage driver)</ListItem>
            <ListItem textSize={30}>Optimize DB configurations</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>Thanks!</Heading>
          <Image src="https://playwithsql-summary.surge.sh/img/gophersql.svg">test</Image>
        </Slide>
      </Deck>
    );
  }
}
