# personal-site-next

Personal landing page using React and Next.js.

### Usage:

```
git clone https://github.com/robgraeber/personal-site-next.git && cd personal-site-next
npm install
npm start
```

Env variables:  
`CONTACT_EMAIL`: Email to send contact form messages.  
`SENDGRID_API_KEY`: Sendgrid api key to send contact form emails.  
`PORT`: Sets the port the server listens on. <Defaults to 3000>

NPM Tasks:
`npm run dev`: Compiles + Watches for changes to recompile.  
`npm run build`: Compiles, minifies, and compresses the assets (for production).  
`npm start`: Runs npm build + starts server.
