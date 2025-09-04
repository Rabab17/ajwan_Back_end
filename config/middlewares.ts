export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],
          'default-src': ["'self'"],
          'connect-src': ["'self'", 'https:'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '100mb',
      jsonLimit: '100mb',
      textLimit: '100mb',
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

];
