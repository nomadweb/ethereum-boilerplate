{
  "short_name": "Ethereum Boilerplate",
  "name": "Ethereum Boilerplate",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "android-chrome-192x192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable"
    },
    {
      "src": "androiimport { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            🦊 <Text strong>C O Z Y F O X</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="📄">
            <Text strong style={styles.text}>
              FOSS:{" "}
              <a
                href="https://github.com/bild96/cozyfox"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open source code meets open economies. Build resilient projects,
                better coordination, and positive-sum outcomes.
              </a>{" "}
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="🤖">
            <Text style={styles.text}>
              Building open Web3 technologies that support the goals of
              financial freedom, shared ownership, and collaborative
              determination.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              ℹ️ <Text strong>COMMUNICATION</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Reach me in{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://join.status.im/u/0x04c0749eb82c806866fa488e44f7486573b439239110c24fe189b810523d57c1927814fc756260655c42b82a7de07840a455c064268d90a4836eda239d9d6db3e3"
                >
                  STATUS
                </a>{" "}
                <Text code>
                  .it uses an open-source, peer-to-peer protocol, and end-to-end
                  encryption to protect your messages from third parties.
                </Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📧">
              <Text style={styles.text}>
                VIA{" "}
                <a target="_blank" rel="noopener noreferrer" href="t.me/bild96">
                  TELEGRAM
                </a>{" "}
                <Text code>
                  Instant messaging and digital distribution platform designed
                  for creating communities.
                </Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✉️">
              <Text style={styles.text}>
                OR Drop an{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:lpefq0mtz@relay.firefox.com?Subject=Hello%20again"
                >
                  E-Mail
                </a>{" "}
                <Text code>Like other human 😎.</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                GOOD LUCK 🌝 and be<Text strong> SAFE 😷</Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              💡 <Text strong> useful links 🤓</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="🧰">
              <Text style={styles.text}>
                Join{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gitcoin.co/townsquare/?cb=ref:10666"
                >
                  Gitcoin
                </a>{" "}
                .A community of 84,244 amazing open source developers working
                remotely to build in Web3.🔧<Text></Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="🏗️">
              <Text style={styles.text}>
                Try{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://buidlguidl.com"
                >
                  buidlguidl.
                </a>{" "}
                A curated group of Ethereum builders creating products,
                prototypes, and tutorials to enrich the web3 ecosystem.🔧
                <Text></Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
g",
      "sizes": "512x512"
    }
  ],
  "orientation": "portrait",
  "scope": "/",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
