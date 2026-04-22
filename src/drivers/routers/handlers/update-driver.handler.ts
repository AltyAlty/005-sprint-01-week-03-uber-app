import { Request, Response } from 'express';
import { HttpStatus } from '../../../core/types/http-statuses';
import { driversRepository } from '../../repositories/drivers.repository';
import { DriverInputDto } from '../../dto/driver.input-dto';
import { createErrorMessages } from '../../../core/middlewares/validation/input-validation-result.middleware';

/*Создаем функцию-обработчик "updateDriverHandler()" для PUT-запросов для изменения данных водителя по id при помощи
URI-параметров.*/
export const updateDriverHandler = async (req: Request<{ id: string }, {}, DriverInputDto, {}>, res: Response) => {
  try {
    const id = req.params.id;
    const driver = driversRepository.findById(id);

    if (!driver) {
      res.status(HttpStatus.NotFound).send(createErrorMessages([{ field: 'id', message: 'Driver not found' }]));
      return;
    }

    await driversRepository.update(id, req.body);
    res.sendStatus(HttpStatus.NoContent);
  } catch (error: unknown) {
    console.log(error);
    res.sendStatus(HttpStatus.InternalServerError);
  }
};
