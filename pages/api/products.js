import products from '../../db.json';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
    try {
      const { method } = req
    
      switch (method) {
        case 'GET':
          // Get data from your database
          res.status(200).json({products});
          break        
        default:
          res.setHeader('Allow', ['GET'])
          res.status(405).end(`Método ${method} não suportado`)
      }

    }
    catch(err) {
      res.status(500).json({statusCode: 500, message: err.message})
    }
}
