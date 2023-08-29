import {
  Result,
  StatusType,
  Ticket,
  TicketSchemaMongo,
} from "@partiaf/entities";
import { getModel, Collection } from "@partiaf/constant-definitions";

interface Query {
  status: StatusType;
  search?: string;
}

export const getAllTicketsByStore = async (
  page: number,
  limit: number,
  uuid: string
): Promise<Result<Ticket>> => {
  const model = getModel<Ticket>(Collection.TICKETS, TicketSchemaMongo);

  const query: { store: string; status?: StatusType } = {
    store: uuid,
    status: { $in: [StatusType.ACTIVE, StatusType.INACTIVE] } as any,
  };

  const actualPage = +page || 1;
  const pageSize = +limit || 15;
  const skip = (actualPage - 1) * pageSize;

  const count = await model.countDocuments({
    status: { $in: [StatusType.ACTIVE, StatusType.INACTIVE] },
  });

  const tickets = await model.find(query).skip(skip).limit(pageSize);

  const pages = Math.ceil(count / pageSize);

  const hasPreviousPage = actualPage > 1;
  const previousPage = hasPreviousPage ? actualPage - 1 : actualPage;
  const hasNextPage = actualPage < pages;
  const nextPage = hasNextPage ? actualPage + 1 : actualPage;

  return {
    count,
    items: tickets,
    pageInfo: {
      page: actualPage,
      pages,
      hasNextPage,
      hasPreviousPage,
      nextPage,
      previousPage,
    },
  };
};