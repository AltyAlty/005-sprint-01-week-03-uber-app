import { Request, Response } from 'express';
import { HttpStatus } from '../../../core/types/http-statuses';
import { driversRepository } from '../../repositories/drivers.repository';
import { mapToDriverViewModel } from '../mappers/map-to-driver-view-model.util';

/*Создаем функцию-обработчик "getDriverListHandler()" для GET-запросов для получения данных по всем водителям.*/
export const getDriverListHandler = async (req: Request, res: Response) => {
  try {
    const drivers = await driversRepository.findAll();
    const driverViewModels = drivers.map(mapToDriverViewModel);
    res.send(driverViewModels);
  } catch (error: unknown) {
    console.log(error);
    res.sendStatus(HttpStatus.InternalServerError);
  }
};
