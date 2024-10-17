import { ROOT_KEY } from "$env/static/private";
import { Unkey } from "@unkey/api";

export const unkey = new Unkey({ rootKey: ROOT_KEY });
