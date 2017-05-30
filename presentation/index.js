// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
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


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Benchmarking DBs in the cloud
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            how do containerized DBs perform compare to eachother?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>How it started</Heading>
          <Appear>
            <Heading size={6} textColor="secondary">golang dev with MySQL backend</Heading>
          </Appear>
          <Appear>
            <Text size={4} textColor="secondary">let's benchmark!</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The benchmark</Heading>
          <List>
            <ListItem>Let's use Google Cloud (why not?)</ListItem>
            <ListItem>Stick to Golang (1.8.3)</ListItem>
            <ListItem>VM 1 vCPU, 3.75GB RAM, standard disk</ListItem>
            <ListItem>10000 reqs (to be increased)</ListItem>
            <ListItem>50 concurrent reqs</ListItem>
            <ListItem>Pluggable schemas, pluggable dbs</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Wait, might as well...</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Might as well compare with...</Heading>
          <List>
            <Appear>
              <ListItem textSize={30}>other MySQL bin compatible (percona, maria)</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Postgres, everybody is talking about it</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Oracle, because it's expensive (painful impl)</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>MS SQL server, because they just launched it on linux!</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>SQLite, because it's a good reference</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30}>Cockroachdb, because it's 100% golang and cloud native!</ListItem>
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
            <Quote>Wait, might as well also compare if there is any difference between Kubernetes and Swarm</Quote>
            <Cite>Me</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="secondary" caps>
            <Link href="https://playwithsql-summary.surge.sh/" target="_blank">Results</Link>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What's next?</Heading>
          <List>
            <ListItem textSize={30}>Increase stability</ListItem>
            <ListItem textSize={30}>Deploy clustered DBs (galera, cockroachdb, postgres)</ListItem>
            <ListItem textSize={30}>Test different cloud storage (SSD, storage driver)</ListItem>
            <ListItem textSize={30}>Optimize DB configurations (any DBA?)</ListItem>
            <ListItem textSize={30}>Gather contributors!</ListItem>
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
