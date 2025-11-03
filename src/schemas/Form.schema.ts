import { z } from "zod";

// O Schema deve seguir todos as propiedades da documentação , está faltando status e assigned_photographer
// link da documentação : https://doc.clickup.com/9011496145/d/h/8cj116h-4451/10c5a561640e1ce

export const serviceFormSchema = z.object({
  full_name: z.string().min(3, "Nome completo é obrigatório."),
  email: z.email({ message: "E-mail inválido." }),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .max(15, "Telefone inválido"),
  photo_session_type: z.string().min(3, "Tipo de sessão é obrigatório."),
  message: z.string().min(5, "Mensagem é obrigatória."),
  status: z.string().optional(),
  assigned_photographer: z.string().nullable().default(null),
});

export type ServiceFormInput = z.infer<typeof serviceFormSchema>;
