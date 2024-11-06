import apiClient from "./apiClient"

export const reqGetHouse = (params) => {
  const id = params.id;
  const searchParam = new URLSearchParams(params).toString()
  return apiClient.get(`/house${id ? `/${id}` : ''}?${searchParam}`);
}
