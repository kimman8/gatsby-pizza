"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphQLResolverMap = void 0;
var lodash_1 = require("lodash");
var normalize_1 = require("./normalize");
var resolveReferences_1 = require("./resolveReferences");
function getGraphQLResolverMap(typeMap, pluginConfig, context) {
    var resolvers = {};
    Object.keys(typeMap.objects).forEach(function (typeName) {
        var objectType = typeMap.objects[typeName];
        var fieldNames = Object.keys(objectType.fields);
        // Add raw resolvers
        resolvers[objectType.name] = fieldNames
            .map(function (fieldName) { return (__assign({ fieldName: fieldName }, objectType.fields[fieldName])); })
            .filter(function (field) { return field.aliasFor; })
            .reduce(function (fields, field) {
            fields[field.fieldName] = { resolve: getRawResolver(field, pluginConfig, context) };
            return fields;
        }, resolvers[objectType.name] || {});
        // Add resolvers for lists, referenes and unions
        resolvers[objectType.name] = fieldNames
            .map(function (fieldName) { return (__assign({ fieldName: fieldName }, objectType.fields[fieldName])); })
            .filter(function (field) {
            return field.isList ||
                field.isReference ||
                typeMap.unions[normalize_1.getTypeName(field.namedType.name.value)];
        })
            .reduce(function (fields, field) {
            var targetField = objectType.isDocument
                ? normalize_1.getConflictFreeFieldName(field.fieldName)
                : field.fieldName;
            fields[targetField] = { resolve: getResolver(field) };
            return fields;
        }, resolvers[objectType.name] || {});
    });
    return resolvers;
}
exports.getGraphQLResolverMap = getGraphQLResolverMap;
function getRawResolver(field, pluginConfig, context) {
    var fieldName = field.fieldName;
    var aliasName = '_' + lodash_1.camelCase("raw " + fieldName);
    return function (obj, args) {
        var raw = "_" + lodash_1.camelCase("raw_data_" + (field.aliasFor || fieldName));
        var value = obj[raw] || obj[aliasName] || obj[field.aliasFor || fieldName] || obj[fieldName];
        return args.resolveReferences
            ? resolveReferences_1.resolveReferences(value, context, {
                maxDepth: args.resolveReferences.maxDepth,
                overlayDrafts: pluginConfig.overlayDrafts,
            })
            : value;
    };
}
function getResolver(field) {
    return function (source, args, context) {
        if (field.isList) {
            var items = source[field.fieldName] || [];
            return items && Array.isArray(items)
                ? items.map(function (item) { return maybeResolveReference(item, context.nodeModel); })
                : [];
        }
        var item = source[field.fieldName];
        return maybeResolveReference(item, context.nodeModel);
    };
}
function maybeResolveReference(item, nodeModel) {
    if (item && typeof item._ref === 'string') {
        return nodeModel.getNodeById({ id: item._ref });
    }
    if (item && typeof item._type === 'string' && !item.internal) {
        return __assign(__assign({}, item), { internal: { type: normalize_1.getTypeName(item._type) } });
    }
    return item;
}
//# sourceMappingURL=getGraphQLResolverMap.js.map