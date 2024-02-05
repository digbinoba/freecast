import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
// import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'freecast',

  projectId: 'iizk8lea',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
