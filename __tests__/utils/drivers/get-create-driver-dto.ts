import { CreateDriverInputDTO } from '../../../src/drivers/dto/create-driver.input-dto';

/*Создаем функцию "getCreateDriverDTO()", возвращающую DTO с корректными данными для создания водителя, для целей
тестирования.*/
export const getCreateDriverDTO = (): CreateDriverInputDTO => {
  return {
    name: 'Valentin',
    phoneNumber: '123-456-7890',
    email: 'valentin@example.com',
    vehicleMake: 'BMW',
    vehicleModel: 'X5',
    vehicleYear: 2021,
    vehicleLicensePlate: 'ABC-123',
    vehicleDescription: null,
    vehicleFeatures: [],
  };
};
