import axios from "axios";
import { safeParse } from "valibot";
import { DraftClientSchema } from "../Types/type";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addClient(data : ProductData) {
  try {
    const result = safeParse(DraftClientSchema, {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    });

    if (result.success) {
      const url = "http://localhost:4000/portafolio/client";
      await axios.post(url, {
        fullname: result.output.fullname,
        email: result.output.email,
        message: result.output.message,
      });
    } else {
      throw new Error("Invalid Data");
    }
  } catch (error) {
    console.log(error);
  }
}
