import React from "react";
import whatsNew from "spcr-whats-new";
import { MARKETPLACE_VERSION } from "../../../constants";

const changelogDetails = (
  <>
    <h2>0.6.1</h2>
    <ul>
      <li>Fixed Readme pages sometimes missing scrollbar{" "}
        <a href="https://github.com/spicetify/spicetify-marketplace/issues/113">(#113)</a>
      </li>
      <li>General improvements</li>
    </ul>
    <h2>0.6.0</h2>
    <ul>
      <li>Patched{" "}
        <a href="https://github.com/spicetify/spicetify-marketplace/commit/6636908f86be91b84e381c2a2424a37b394b5119">createPortal</a>
        {" "} error that makes Marketplace unable to start
      </li>
      <li>You can now preview snippets&apos; content by clicking on its card!{" "}
        <a href="https://github.com/spicetify/spicetify-marketplace/pull/225">(#225)</a>
      </li>
      <li>Snippets now have preview images, and you can add your own also{" "}
        <a href="https://github.com/spicetify/spicetify-marketplace/pull/226">(#226)</a>
      </li>
      <li>General improvements</li>
    </ul>
  </>
);

export default whatsNew(
  "marketplace",
  // This semver version is only used to trigger the Changelog modal and must be bumped simutaneously as MARKETPLACE_VERSION
  "1.0.0",
  {
    title: `✨ Marketplace v${MARKETPLACE_VERSION}`,
    content: changelogDetails,
    isLarge: true,
  },
);