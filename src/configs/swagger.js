import swaggerJSDoc from 'swagger-jsdoc'

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation for Project Manage Task Company',
        version: '1.0.0',
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'auth-token-bearer'
          },
        },
      },
      security: [{
        BearerAuth: []
      }],
      servers: [
        {
          url: "http://localhost:7612/",
          description: "Local Server"
        }
      ]
    },
    // Đường dẫn đến các file chứa chú thích API
    apis: ['./src/routes/*.js', './src/routes/SA routes/*.js'],
};

const openapiSpecification = swaggerJSDoc(options);

export default openapiSpecification;