// swaggerConfig.js
export default {
  swaggerDefinition: {
    openapi: "3.0.0", // Certifique-se de especificar a versão do OpenAPI
    info: {
      title: "QRCODE API",
      version: "1.0.0",
      description: "API for store and manage knowledge of TI team",
    },
    servers: [
      {
        url: "http://localhost:3005/api/",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Knowledge: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
            quantity_views: {
              type: "integer",
            },
            categories: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                  },
                  name: {
                    type: "string",
                  },
                  hexadecimal_color: {
                    type: "string",
                  },
                },
              },
            },
            additionalInformation: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                },
                applicability: {
                  type: "string",
                },
                references: {
                  type: "string",
                },
                importance_level: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
  apis: [
    "src/models/*.js",
    "src/utils/helpers/*.js",
    "src/api/routes/*.js",
    "src/api/controllers/knowledges/*.js",
  ],
};
