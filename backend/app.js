import express from 'express';
import cors from 'cors';

export const configApp = () => {
  const app = express();

  app.use(cors({ origin: true }));
  app.use(express.json());

  // register api
  app.get('/', async (req, res) => {
    return res.status(200).json({
      success: [
        {
          name: 'We-Conect',
          title: 'We-Conect Home page',
          url: 'https://we-connect.com/',
        },
        {
          name: 'Google',
          title: 'Google Home page',
          url: 'https://google.de/',
        },
      ],
    });
  });

  return app;
};
