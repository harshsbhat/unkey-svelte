import { UNKEY_ROOT_KEY } from "$env/static/private";
import { Unkey } from "@unkey/api";

export const unkey = new Unkey({ rootKey: UNKEY_ROOT_KEY });
