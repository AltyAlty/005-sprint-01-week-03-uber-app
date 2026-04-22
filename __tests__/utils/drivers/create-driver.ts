import request from 'supertest';
import { DriverInputDto } from '../../../src/drivers/dto/driver.input-dto';
import { Express } from 'express';
import { HttpStatus } from '../../../src/core/types/http-statuses';
import { generateBasicAuthToken } from '../generate-admin-auth-token';
import { getDriverDto } from './get-driver-dto';
import { DRIVERS_PATH } from '../../../src/core/paths/path';
import { DriverViewModel } from '../../../src/drivers/types/driver-view-model';

/*Создаем функцию "createDriver()", создающую водителя и возвращающую данные о нем, для целей тестирования.*/
export async function createDriver(app: Express, driverDto?: DriverInputDto): Promise<DriverViewModel> {
  /*Получаем DTO с корректными данными водителя для целей тестирования.*/
  const defaultDriverData: DriverInputDto = getDriverDto();
  /*Разбавляем полученный DTO другими данными, если таковые были переданы.*/
  const testDriverData = { ...defaultDriverData, ...driverDto };

  const createdDriverResponse = await request(app)
    .post(DRIVERS_PATH)
    .set('Authorization', generateBasicAuthToken())
    .send(testDriverData)
    .expect(HttpStatus.Created);

  return createdDriverResponse.body;
}
