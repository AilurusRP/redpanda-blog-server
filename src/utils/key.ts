import config from "src/privConfig";
import { createHash } from "crypto";

function getHash(authKey: string) {
    return createHash("sha512").update(authKey).digest("hex");
}

export function isKeyValid(key: string) {
    return getHash(key) === config.authKeyHash;
}
