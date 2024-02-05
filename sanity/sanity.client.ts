import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'iizk8lea',
  dataset: 'production',
  apiVersion: '2024-01-30',
  useCdn: false,
};

const client = createClient(config);

export default client;
