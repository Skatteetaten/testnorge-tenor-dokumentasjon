import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import publiseringSidebar from "./publisering/sidebar";
import soekSidebar from "./soek/sidebar";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "teknisk/index",
      label: "Teknisk",
    },
    {
      type: "doc",
      id: "teknisk/konfigurasjon",
      label: "Konfigurasjon - JSON",
    },
    {
      type: "category",
      label: "Publisering API",
      items: publiseringSidebar,
    },
    {
      type: "category",
      label: "Søk API",
      items: soekSidebar,
    },
  ],
};

export default sidebar.apisidebar;

