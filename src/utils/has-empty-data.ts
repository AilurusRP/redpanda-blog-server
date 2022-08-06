import { findKey } from "lodash";

export function hasEmptyData(data: any) {
    return findKey(data, value => !value);
}
