import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllOnPronounciationsUseCase } from "./UserCase";

class GetAllOnPronounciationsController {
  async handle(Request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GetAllOnPronounciationsUseCase);

    const OnPronounciations = await service.execute();

    return response.status(200).json(OnPronounciations);
  }
}

export { GetAllOnPronounciationsController };
