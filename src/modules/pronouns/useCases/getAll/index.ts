import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllPronounsUseCase } from "./UserCase";

class GetAllPronounsController {
  async handle(Request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GetAllPronounsUseCase);

    const Pronoun = await service.execute();

    return response.status(200).json(Pronoun);
  }
}

export { GetAllPronounsController };
