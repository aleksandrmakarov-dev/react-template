// import { useQuery } from "@tanstack/react-query";

// // keys

// export const templateKeys = {
//   templates: {
//     root: ["template"],
//     id: (id: string) => [...templateKeys.templates.root, "id", id],
//     query: (params?: any) => [...templateKeys.templates.root, "query", params],
//   },
//   mutations: {
//     create: () => [...templateKeys.templates.root, "create"],
//     update: () => [...templateKeys.templates.root, "update"],
//     delete: () => [...templateKeys.templates.root, "delete"],
//   },
// };

// interface TemplateParams {}

// async function fetchTemplates(params: TemplateParams) {}

// export const useTemplate = (params: TemplateParams) => {
//   return useQuery({
//     queryKey: templateKeys.templates.query(),
//     queryFn: async () => {
//       return await fetchTemplates(params);
//     },
//   });
// };
