import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllPresentPerfectTypesUseCase } from "./UserCase";

class GetAllPresentPerfectTypesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GetAllPresentPerfectTypesUseCase);

    const PresentPerfect = await service.execute();

    return response.status(200).json(PresentPerfect);
  }
}

export { GetAllPresentPerfectTypesController };
