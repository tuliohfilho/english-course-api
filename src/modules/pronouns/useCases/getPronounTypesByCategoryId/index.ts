import { Response, Request } from "express";
import { container } from "tsyringe";

import { GetPronounTypesByCategoryIdUseCase } from "./UserCase";

class GetPronounTypesByCategoryIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { categoryId } = request.params;

    const service = container.resolve(GetPronounTypesByCategoryIdUseCase);

    const Pronoun = await service.execute(Number(categoryId));

    return response.status(200).json(Pronoun);
  }
}

export { GetPronounTypesByCategoryIdController };
