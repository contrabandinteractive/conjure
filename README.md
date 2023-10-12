# Conjure

You must have an Open AI API Key and Pinecone API Key, Environment and Index Names.

Get your Open AI API key here: https://openai.com/blog/openai-api

Get your Pinecone information here: https://docs.pinecone.io/docs/quickstart

## Demo Video

https://youtu.be/MJGEdGT8b2c

## Instructions

Obtain an Open AI API Key

Create a Pinecone.io account

Create an index on Pinecone

Obtain 3 details from Pinecone.io: the environment, API key, and Index name.

Install Atlassian Forge CLI

Configure your environmental variables:

`You can set these environment variables as such:`

`forge variables set --encrypt OPEN_API_KEY your-key`

`forge variables set --encrypt PINECONE_INDEX_NAME your-key`

`forge variables set --encrypt PINECONE_ENV_NAME your-key`

`forge variables set --encrypt PINECONE_API_KEY your-key`

`export FORGE_USER_VAR_OPEN_API_KEY=your-key`

`These are referenced in the src/config.ts file. You could potentially hardcode these values.`

Install the app here: https://developer.atlassian.com/console/install/445edbf6-0d34-4474-852d-b79a478add7b?signature=09d2d7e0b093e988de08fc574972117ca404fc164c3cc6f230817158eef8fe227eda283a61447a9650e8c043a7aa293b1dc6c6865cb0e57ee7ed39d75c27599f&product=confluence

Alternatively, you can grab the source code in this repo and run the following commands in the app folder:

`cd [app-folder]`
`yarn`
`cd static/llm-ui`
`yarn`
`yarn build`
`cd ../..`

`forge register`
`forge deploy`
`forge install`

Navigate to any Confluence page.

In the context byline near the top, click the "Upsert" link.

Your document is now in the database!

It's time to setup our chatbot.

[Install Flowise AI.](https://docs.flowiseai.com/getting-started)

Install the Chatflow template in this repo's main directory called "Conjure Chatbot Chatflow.json"

Add your credentials for Open AI and Pinecone to Flowise.

In Flowise, click the </> embed button.

Use this embed code to add your chatbot to any website!




