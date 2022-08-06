import config from "src/privConfig";

export function isKeyValid(key: string) {
    return key === config.authKey;
}
