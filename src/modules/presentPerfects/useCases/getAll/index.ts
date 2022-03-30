import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllPresentPerfectsUseCase } from "./UserCase";

class GetAllPresentPerfectsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GetAllPresentPerfectsUseCase);

    const PresentPerfect = await service.execute();

    return response.status(200).json(PresentPerfect);
  }
}

export { GetAllPresentPerfectsController };
