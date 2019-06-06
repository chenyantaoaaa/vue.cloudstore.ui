import convertMetadata from './ConvertMetadata'
let {
    baseType,
    dicEnum
} = convertMetadata;
/**
 * 入库
 */
export default {
    name: "wmsIn",
    attrs: {
        ratio: {
            type: baseType.decimal,
        },
    }
};