import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import tekniskApiSidebar from './teknisk/sidebar';

const sidebars: SidebarsConfig = {
  apisidebar: [
    {
      type: 'category',
      label: 'Teknisk',
      items: tekniskApiSidebar,
    },
  ],
};

export default sidebars;