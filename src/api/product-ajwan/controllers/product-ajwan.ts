/**
 * product-ajwan controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::product-ajwan.product-ajwan');





import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product-ajwan.product-ajwan', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;

    // هنا بنستخدم Document Service API مع locale: '*'
    const deletedEntry = await strapi.documents('api::product-ajwan.product-ajwan').delete({
      documentId: id,
      locale: '*', // مهم علشان يحذف من كل اللغات
    });

    return deletedEntry;
  }
  }));