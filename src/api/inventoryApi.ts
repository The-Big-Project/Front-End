/** @format */

import { AxiosError } from "axios";
import AXIOS from "../utils/axiosInstance";

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

type resultType = { data: inventoryItemType[]; documentCount: number };

interface InventoryResponse {
  status: "success" | "fail";
  result: resultType;
  message?: string;
}

export async function getInventoryItems(
  pageSize: number,
  pageNumber: number
): Promise<Readonly<resultType>> {
  try {
    const controller = new AbortController();
    const accessToken = sessionStorage.getItem("accessToken") as string;
    const { data, status } = await AXIOS.get<InventoryResponse>(
      `/inventory?pageNumber=${pageNumber}&pageSize=${pageSize}`,
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
    return data.result;
  } catch (e) {
    if (e instanceof AxiosError) console.error(e.message);
    return Promise.reject(e);
  }
}
