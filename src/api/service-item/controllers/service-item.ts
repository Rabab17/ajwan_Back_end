/**
 * service-item controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::service-item.service-item');

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::service-item.service-item', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;

    // هنا بنستخدم Document Service API مع locale: '*'
    const deletedEntry = await strapi.documents('api::service-item.service-item').delete({
      documentId: id,
      locale: '*', // مهم علشان يحذف من كل اللغات
    });

    return deletedEntry;
  },
}));
