import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetAllPronounCategoriesUseCase } from "./UserCase";

class GetAllPronounCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(GetAllPronounCategoriesUseCase);

    const Pronoun = await service.execute();

    return response.status(200).json(Pronoun);
  }
}

export { GetAllPronounCategoriesController };
