/** @format */

import { AxiosError } from "axios";
import AXIOS from "../utils/axiosInstance";
import { refreshToken } from "./userApi";

export type inventoryItemType = {
  createdAt: Date;
  amountType: "quantity" | "weight";
  specialCalculation?: (inPrice: number, outPrice: number) => number;
  images?: string[];
  name: object;
  label: string;
  description: string;
  inPrice: number;
  outPrice: number;
  expectedExpiryDate: Date;
  origin: string;
  phoneNumber: Array<string>;
  quantity: number;
  sold: number;
};

type resultType = inventoryItemType[];

interface InventoryResponse {
  status: "success" | "fail";
  result?: resultType;
  count?: string;
  message?: string;
}

export async function getInventoryItems(
  pageSize: number,
  pageNumber: number,
  searchQuery: string
): Promise<Readonly<{ count: string; result: resultType }>> {
  try {
    const controller = new AbortController();
    const accessToken = sessionStorage.getItem("accessToken") as string;
    const { data, status } = await AXIOS.get<InventoryResponse>(
      `/inventory?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${searchQuery}`,
      {
        timeout: 60000,
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!data) throw new Error("Operation failed");
    if (status.toString().startsWith("40"))
      throw new Error(`Error | message: ${data?.message} | code: ${status}`);

    controller.abort();
    return { count: data.count as string, result: data.result as resultType };
  } catch (e) {
    if (e instanceof AxiosError) {
      const errorMessage = e.response?.data.message;
      if (errorMessage === "jwt expired") refreshToken();
      return Promise.reject(errorMessage);
    }
    return Promise.reject(e);
  }
}
