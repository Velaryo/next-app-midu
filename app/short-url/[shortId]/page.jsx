import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';


export default async function ShortUrlRedirect ({ params }) {
  const prisma = new PrismaClient();
  const { shortId } = params;

  const data = await prisma.link.findUnique({
    where: { shortUrl: shortId },
  });

  prisma.$disconnect();

  // redireccion local.
  // aquí iria un /404
  if(!data) redirect('/')
 
  /*para q la URL sea detectado como
  externa, tiene que empezar con http*/
  return redirect(data.url)
}
