import request from 'supertest';
import { Express } from 'express';
import { HttpStatus } from '../../../src/core/types/http-statuses';
import { generateBasicAuthToken } from '../generate-admin-auth-token';
import { DRIVERS_PATH } from '../../../src/core/paths/path';
import { DriverViewModel } from '../../../src/drivers/types/driver-view-model';

/*Создаем функцию "getDriverById()", получающую данные о водителе по ID и возвращающую их, для целей тестирования.*/
export async function getDriverById(app: Express, driverId: string): Promise<DriverViewModel> {
  const driverResponse = await request(app)
    .get(`${DRIVERS_PATH}/${driverId}`)
    .set('Authorization', generateBasicAuthToken())
    .expect(HttpStatus.Ok);

  return driverResponse.body;
}
