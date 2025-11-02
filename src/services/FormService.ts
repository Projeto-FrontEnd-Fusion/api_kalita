import { prisma } from "../db/prisma";
import { ServiceFormInput } from "../schemas/Form.schema";

/**
 * Limpa o telefone removendo tudo que não for número
 */
function cleanPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export async function createServiceForm(data: ServiceFormInput) {
  const cleanedPhone = cleanPhone(data.phone);

  const newForm = await prisma.serviceForm.create({
    data: {
      ...data,
      phone: cleanedPhone,
      status: "pending",
      assigned_photographer: null,
    },
  });

  return newForm;
}
