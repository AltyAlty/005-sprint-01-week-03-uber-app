import request from 'supertest';
import { Express } from 'express';
import { HttpStatus } from '../../../src/core/types/http-statuses';
import { generateBasicAuthToken } from '../generate-admin-auth-token';
import { RIDES_PATH } from '../../../src/core/paths/path';
import { RideViewModel } from '../../../src/rides/types/ride-view-model';

/*Создаем функцию "getRideById()", получающую данные о поездке по ID и возвращающую их, для целей тестирования.*/
export async function getRideById<R = RideViewModel>(
  app: Express,
  rideId: string,
  expectedStatus?: HttpStatus,
): Promise<R> {
  const testStatus = expectedStatus ?? HttpStatus.Ok;

  const getResponse = await request(app)
    .get(`${RIDES_PATH}/${rideId}`)
    .set('Authorization', generateBasicAuthToken())
    .expect(testStatus);

  return getResponse.body;
}
