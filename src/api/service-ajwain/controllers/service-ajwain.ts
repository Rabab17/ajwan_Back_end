/**
 * service-ajwain controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::service-ajwain.service-ajwain');






import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::service-ajwain.service-ajwain', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;

    // هنا بنستخدم Document Service API مع locale: '*'
    const deletedEntry = await strapi.documents('api::service-ajwain.service-ajwain').delete({
      documentId: id,
      locale: '*', // مهم علشان يحذف من كل اللغات
    });

    return deletedEntry;
  },
}));

