import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {schemaTypes} from './schemaTypes'
/* import {structure} from './structure'
 */
export default defineConfig({
  name: 'default',
  title: 'mjbeers_photography',

  projectId: '1ypfs60t',
  dataset: 'production',

  basePath: '/admin',

  plugins: [structureTool(/* {structure} */), visionTool(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
