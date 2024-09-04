// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AppdataDsourceArgs, AppdataDsourceState } from "./appdataDsource";
export type AppdataDsource = import("./appdataDsource").AppdataDsource;
export const AppdataDsource: typeof import("./appdataDsource").AppdataDsource = null as any;
utilities.lazyLoad(exports, ["AppdataDsource"], () => require("./appdataDsource"));

export { DatabasePostgresqlArgs, DatabasePostgresqlState } from "./databasePostgresql";
export type DatabasePostgresql = import("./databasePostgresql").DatabasePostgresql;
export const DatabasePostgresql: typeof import("./databasePostgresql").DatabasePostgresql = null as any;
utilities.lazyLoad(exports, ["DatabasePostgresql"], () => require("./databasePostgresql"));

export { EnvironmentArgs, EnvironmentState } from "./environment";
export type Environment = import("./environment").Environment;
export const Environment: typeof import("./environment").Environment = null as any;
utilities.lazyLoad(exports, ["Environment"], () => require("./environment"));

export { OracleDsourceArgs, OracleDsourceState } from "./oracleDsource";
export type OracleDsource = import("./oracleDsource").OracleDsource;
export const OracleDsource: typeof import("./oracleDsource").OracleDsource = null as any;
utilities.lazyLoad(exports, ["OracleDsource"], () => require("./oracleDsource"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { VdbArgs, VdbState } from "./vdb";
export type Vdb = import("./vdb").Vdb;
export const Vdb: typeof import("./vdb").Vdb = null as any;
utilities.lazyLoad(exports, ["Vdb"], () => require("./vdb"));

export { VdbGroupArgs, VdbGroupState } from "./vdbGroup";
export type VdbGroup = import("./vdbGroup").VdbGroup;
export const VdbGroup: typeof import("./vdbGroup").VdbGroup = null as any;
utilities.lazyLoad(exports, ["VdbGroup"], () => require("./vdbGroup"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "delphix:index/appdataDsource:AppdataDsource":
                return new AppdataDsource(name, <any>undefined, { urn })
            case "delphix:index/databasePostgresql:DatabasePostgresql":
                return new DatabasePostgresql(name, <any>undefined, { urn })
            case "delphix:index/environment:Environment":
                return new Environment(name, <any>undefined, { urn })
            case "delphix:index/oracleDsource:OracleDsource":
                return new OracleDsource(name, <any>undefined, { urn })
            case "delphix:index/vdb:Vdb":
                return new Vdb(name, <any>undefined, { urn })
            case "delphix:index/vdbGroup:VdbGroup":
                return new VdbGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("delphix", "index/appdataDsource", _module)
pulumi.runtime.registerResourceModule("delphix", "index/databasePostgresql", _module)
pulumi.runtime.registerResourceModule("delphix", "index/environment", _module)
pulumi.runtime.registerResourceModule("delphix", "index/oracleDsource", _module)
pulumi.runtime.registerResourceModule("delphix", "index/vdb", _module)
pulumi.runtime.registerResourceModule("delphix", "index/vdbGroup", _module)
pulumi.runtime.registerResourcePackage("delphix", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:delphix") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
