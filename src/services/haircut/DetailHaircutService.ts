import prismaClient from "../../prisma";


interface DatailRequest {
  haircut_id: string;
}


class DetailHaircutService {
  async execute({ haircut_id }: DatailRequest) {

    const haircut = await prismaClient.haircut.findFirst({
      where: {
        id: haircut_id
      }
    })

    return haircut;
  }
}

export { DetailHaircutService }