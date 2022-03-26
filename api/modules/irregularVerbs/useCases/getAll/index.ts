import { VercelRequest, VercelResponse } from "@vercel/node";
import { container } from "tsyringe";

import { GetAllIrregularVerbsUseCase } from "./UserCase";

class GetAllIrregularVerbsController {
  async handle(
    Request: VercelRequest,
    response: VercelResponse
  ): Promise<VercelResponse> {
    const service = container.resolve(GetAllIrregularVerbsUseCase);

    const irregularVerbs = await service.execute();

    return response.status(200).json(irregularVerbs);
  }
}

export { GetAllIrregularVerbsController };
