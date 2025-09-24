
// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'local',
//       providerOptions: {
//         sizeLimit: 10000000, // 10 MB (غيّر الرقم حسب احتياجك)
//       },
//       // هنا بتحدد مجلد التخزين بدل الـ Temp
//       localServer: {
//         maxage: 300000,
//       },
//     },
//   },

//   email: {
//     config: {
//       provider: 'nodemailer',
//       providerOptions: {
//         host: env('SMTP_HOST', 'smtp.gmail.com'),
//         port: env.int('SMTP_PORT', 465),
//         secure: false, 
//         auth: {
//           user: env('SMTP_USER'),
//           pass: env('SMTP_PASS'),
//         },
//       },
//       settings: {
//         defaultFrom: env('SMTP_USER'),
//         defaultReplyTo: env('SMTP_USER'),
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
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





