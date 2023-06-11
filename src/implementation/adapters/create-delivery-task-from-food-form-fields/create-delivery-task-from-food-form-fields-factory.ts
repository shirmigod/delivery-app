import type { Task } from '@domain/entities';
import type { GetTaskRepository } from '@domain/repositories';

import type { CreateDeliveryTaskFromFoodFormFieldsFactoryParams } from './create-delivery-task-from-food-form-fields-factory.types';

export function createDeliveryTaskFromFoodFormFieldsFactory({
  fields,
}: CreateDeliveryTaskFromFoodFormFieldsFactoryParams): GetTaskRepository {
  return () => {
    const deliveryTask: Task = {
      id: '2',
      type: 'deliver',
      status: 'pending',
      // TODO: use the actual field values for address or location
      address: {
        department: 'Suchitepequez',
        town: 'PuebloNuevo',
        village: 'Centro',
        address: "Raw's Home",
      },
      instruction: 'Entregar a direccion',
    };

    return Promise.resolve(deliveryTask);
  };
}
