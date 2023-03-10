import { createHash } from "crypto";

export function toHash(text) {
    return createHash("sha512").update(text).digest("hex");
}
