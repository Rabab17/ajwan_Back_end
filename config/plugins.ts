// module.exports = ({ env }) => ({
//   documentation: {
//     enabled: true,
//     config: {
//       openapi: '3.0.0',
//       info: {
//         title: 'Ajwan API Docs',
//         version: '1.0.0',
//         description: 'API documentation for Ajwan project',
//       },
//     },
//   },

//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {
//           resource_type: 'image',
//             optimization: false,
//           // نلف العملية بـ try/catch
//           async beforeUpload(file) {
//             try {
//               // مفيش معالجة هنا لكن ممكن تحطي أي تحقق
//               return file;
//             } catch (err) {
//               strapi.log.warn(`Upload warning: ${err.message}`);
//               return file;
//             }
//           },
//           async afterUpload(file) {
//             // برضو نتأكد أن العملية مكملة
//             try {
//               return file;
//             } catch (err) {
//               strapi.log.warn(`Upload completed with warning: ${err.message}`);
//               return file;
//             }
//           },
//         },
//         delete: {},
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 10000000, // 10 MB (غيّر الرقم حسب احتياجك)
      },
      // هنا بتحدد مجلد التخزين بدل الـ Temp
      localServer: {
        maxage: 300000,
      },
    },
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 465),
        secure: false, 
        auth: {
          user: env('SMTP_USER'),
          pass: env('SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_USER'),
        defaultReplyTo: env('SMTP_USER'),
      },
    },
  },
});




