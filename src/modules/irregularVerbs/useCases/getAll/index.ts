import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllIrregularVerbsUseCase } from "./UserCase";

class GetAllIrregularVerbsController {
  async handle(Request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GetAllIrregularVerbsUseCase);

    const irregularVerbs = await service.execute();

    return response.status(200).json(irregularVerbs);
  }
}

export { GetAllIrregularVerbsController };
