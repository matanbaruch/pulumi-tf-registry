// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { DatabaseArgs, DatabaseState } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { DefaultPrivilegesArgs, DefaultPrivilegesState } from "./defaultPrivileges";
export type DefaultPrivileges = import("./defaultPrivileges").DefaultPrivileges;
export const DefaultPrivileges: typeof import("./defaultPrivileges").DefaultPrivileges = null as any;
utilities.lazyLoad(exports, ["DefaultPrivileges"], () => require("./defaultPrivileges"));

export { ExtensionArgs, ExtensionState } from "./extension";
export type Extension = import("./extension").Extension;
export const Extension: typeof import("./extension").Extension = null as any;
utilities.lazyLoad(exports, ["Extension"], () => require("./extension"));

export { FunctionArgs, FunctionState } from "./function";
export type Function = import("./function").Function;
export const Function: typeof import("./function").Function = null as any;
utilities.lazyLoad(exports, ["Function"], () => require("./function"));

export { GetSchemasArgs, GetSchemasResult, GetSchemasOutputArgs } from "./getSchemas";
export const getSchemas: typeof import("./getSchemas").getSchemas = null as any;
export const getSchemasOutput: typeof import("./getSchemas").getSchemasOutput = null as any;
utilities.lazyLoad(exports, ["getSchemas","getSchemasOutput"], () => require("./getSchemas"));

export { GetSequencesArgs, GetSequencesResult, GetSequencesOutputArgs } from "./getSequences";
export const getSequences: typeof import("./getSequences").getSequences = null as any;
export const getSequencesOutput: typeof import("./getSequences").getSequencesOutput = null as any;
utilities.lazyLoad(exports, ["getSequences","getSequencesOutput"], () => require("./getSequences"));

export { GetTablesArgs, GetTablesResult, GetTablesOutputArgs } from "./getTables";
export const getTables: typeof import("./getTables").getTables = null as any;
export const getTablesOutput: typeof import("./getTables").getTablesOutput = null as any;
utilities.lazyLoad(exports, ["getTables","getTablesOutput"], () => require("./getTables"));

export { GrantArgs, GrantState } from "./grant";
export type Grant = import("./grant").Grant;
export const Grant: typeof import("./grant").Grant = null as any;
utilities.lazyLoad(exports, ["Grant"], () => require("./grant"));

export { GrantRoleArgs, GrantRoleState } from "./grantRole";
export type GrantRole = import("./grantRole").GrantRole;
export const GrantRole: typeof import("./grantRole").GrantRole = null as any;
utilities.lazyLoad(exports, ["GrantRole"], () => require("./grantRole"));

export { PhysicalReplicationSlotArgs, PhysicalReplicationSlotState } from "./physicalReplicationSlot";
export type PhysicalReplicationSlot = import("./physicalReplicationSlot").PhysicalReplicationSlot;
export const PhysicalReplicationSlot: typeof import("./physicalReplicationSlot").PhysicalReplicationSlot = null as any;
utilities.lazyLoad(exports, ["PhysicalReplicationSlot"], () => require("./physicalReplicationSlot"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { PublicationArgs, PublicationState } from "./publication";
export type Publication = import("./publication").Publication;
export const Publication: typeof import("./publication").Publication = null as any;
utilities.lazyLoad(exports, ["Publication"], () => require("./publication"));

export { ReplicationSlotArgs, ReplicationSlotState } from "./replicationSlot";
export type ReplicationSlot = import("./replicationSlot").ReplicationSlot;
export const ReplicationSlot: typeof import("./replicationSlot").ReplicationSlot = null as any;
utilities.lazyLoad(exports, ["ReplicationSlot"], () => require("./replicationSlot"));

export { RoleArgs, RoleState } from "./role";
export type Role = import("./role").Role;
export const Role: typeof import("./role").Role = null as any;
utilities.lazyLoad(exports, ["Role"], () => require("./role"));

export { SchemaArgs, SchemaState } from "./schema";
export type Schema = import("./schema").Schema;
export const Schema: typeof import("./schema").Schema = null as any;
utilities.lazyLoad(exports, ["Schema"], () => require("./schema"));

export { ServerArgs, ServerState } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { SubscriptionArgs, SubscriptionState } from "./subscription";
export type Subscription = import("./subscription").Subscription;
export const Subscription: typeof import("./subscription").Subscription = null as any;
utilities.lazyLoad(exports, ["Subscription"], () => require("./subscription"));

export { UserMappingArgs, UserMappingState } from "./userMapping";
export type UserMapping = import("./userMapping").UserMapping;
export const UserMapping: typeof import("./userMapping").UserMapping = null as any;
utilities.lazyLoad(exports, ["UserMapping"], () => require("./userMapping"));


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
            case "postgresql:index/database:Database":
                return new Database(name, <any>undefined, { urn })
            case "postgresql:index/defaultPrivileges:DefaultPrivileges":
                return new DefaultPrivileges(name, <any>undefined, { urn })
            case "postgresql:index/extension:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "postgresql:index/function:Function":
                return new Function(name, <any>undefined, { urn })
            case "postgresql:index/grant:Grant":
                return new Grant(name, <any>undefined, { urn })
            case "postgresql:index/grantRole:GrantRole":
                return new GrantRole(name, <any>undefined, { urn })
            case "postgresql:index/physicalReplicationSlot:PhysicalReplicationSlot":
                return new PhysicalReplicationSlot(name, <any>undefined, { urn })
            case "postgresql:index/publication:Publication":
                return new Publication(name, <any>undefined, { urn })
            case "postgresql:index/replicationSlot:ReplicationSlot":
                return new ReplicationSlot(name, <any>undefined, { urn })
            case "postgresql:index/role:Role":
                return new Role(name, <any>undefined, { urn })
            case "postgresql:index/schema:Schema":
                return new Schema(name, <any>undefined, { urn })
            case "postgresql:index/server:Server":
                return new Server(name, <any>undefined, { urn })
            case "postgresql:index/subscription:Subscription":
                return new Subscription(name, <any>undefined, { urn })
            case "postgresql:index/userMapping:UserMapping":
                return new UserMapping(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("postgresql", "index/database", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/defaultPrivileges", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/extension", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/function", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/grant", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/grantRole", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/physicalReplicationSlot", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/publication", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/replicationSlot", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/role", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/schema", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/server", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/subscription", _module)
pulumi.runtime.registerResourceModule("postgresql", "index/userMapping", _module)
pulumi.runtime.registerResourcePackage("postgresql", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:postgresql") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
