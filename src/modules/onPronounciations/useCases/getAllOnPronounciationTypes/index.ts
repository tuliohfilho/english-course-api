import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllOnPronounciationTypesUseCase } from "./UserCase";

class GetAllOnPronounciationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GetAllOnPronounciationTypesUseCase);

    const OnPronounciations = await service.execute();

    return response.status(200).json(OnPronounciations);
  }
}

export { GetAllOnPronounciationsController };
