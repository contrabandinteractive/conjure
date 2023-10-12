
/**
 * Set the OpenAPI API Key and Pinecone API info as follows:
 * forge variables set --encrypt OPEN_API_KEY your-key
 * forge variables set --encrypt PINECONE_INDEX_NAME your-key
 * forge variables set --encrypt PINECONE_ENV_NAME your-key
 * forge variables set --encrypt PINECONE_API_KEY your-key
 * export FORGE_USER_VAR_OPEN_API_KEY=your-key
 */
export const getOpenAPIKey = () => {
  return process.env.OPEN_API_KEY;
}

export const getPineconeIndexName = () => {
  return process.env.PINECONE_INDEX_NAME;
}

export const getPineconeEnvironment = () => {
  return process.env.PINECONE_ENV_NAME;
}

export const getPineconeApiKey = () => {
  return process.env.PINECONE_API_KEY;
}

export const getOpenAPIModel = () => {
  return 'gpt-3.5-turbo';
  // return 'gpt-4';
}

export const getSummarisationTtlMillis = () => {
  // The cleanup of summarisation data is triggered via an async event and the maximum delay
  // async event execution is 900 seconds so this becomes our maximum time to live (TTL) for
  // cached summarisation values.
  return 900 * 1000;
}
