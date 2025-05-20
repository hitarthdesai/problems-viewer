import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  debug: true,
  schema: 'http://localhost:3000/api/graphql',
  documents: "src/graphql/fragments/*.graphql",
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: false,
};

export default config;