module.exports = ({ env }) => ({
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        title: 'Ajwan API Docs',
        version: '1.0.0',
        description: 'API documentation for Ajwan project',
      },
    },
  },

  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
      
    },
  },
  
});



