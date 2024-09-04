// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { GetActionArgs, GetActionResult, GetActionOutputArgs } from "./getAction";
export const getAction: typeof import("./getAction").getAction = null as any;
export const getActionOutput: typeof import("./getAction").getActionOutput = null as any;
utilities.lazyLoad(exports, ["getAction","getActionOutput"], () => require("./getAction"));

export { GetActionsArgs, GetActionsResult, GetActionsOutputArgs } from "./getActions";
export const getActions: typeof import("./getActions").getActions = null as any;
export const getActionsOutput: typeof import("./getActions").getActionsOutput = null as any;
utilities.lazyLoad(exports, ["getActions","getActionsOutput"], () => require("./getActions"));

export { GetGroupArgs, GetGroupResult, GetGroupOutputArgs } from "./getGroup";
export const getGroup: typeof import("./getGroup").getGroup = null as any;
export const getGroupOutput: typeof import("./getGroup").getGroupOutput = null as any;
utilities.lazyLoad(exports, ["getGroup","getGroupOutput"], () => require("./getGroup"));

export { GetGroupsArgs, GetGroupsResult, GetGroupsOutputArgs } from "./getGroups";
export const getGroups: typeof import("./getGroups").getGroups = null as any;
export const getGroupsOutput: typeof import("./getGroups").getGroupsOutput = null as any;
utilities.lazyLoad(exports, ["getGroups","getGroupsOutput"], () => require("./getGroups"));

export { GetPlansArgs, GetPlansResult, GetPlansOutputArgs } from "./getPlans";
export const getPlans: typeof import("./getPlans").getPlans = null as any;
export const getPlansOutput: typeof import("./getPlans").getPlansOutput = null as any;
utilities.lazyLoad(exports, ["getPlans","getPlansOutput"], () => require("./getPlans"));

export { GetRegionsArgs, GetRegionsResult, GetRegionsOutputArgs } from "./getRegions";
export const getRegions: typeof import("./getRegions").getRegions = null as any;
export const getRegionsOutput: typeof import("./getRegions").getRegionsOutput = null as any;
utilities.lazyLoad(exports, ["getRegions","getRegionsOutput"], () => require("./getRegions"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServersArgs, GetServersResult, GetServersOutputArgs } from "./getServers";
export const getServers: typeof import("./getServers").getServers = null as any;
export const getServersOutput: typeof import("./getServers").getServersOutput = null as any;
utilities.lazyLoad(exports, ["getServers","getServersOutput"], () => require("./getServers"));

export { GetTemplateArgs, GetTemplateResult, GetTemplateOutputArgs } from "./getTemplate";
export const getTemplate: typeof import("./getTemplate").getTemplate = null as any;
export const getTemplateOutput: typeof import("./getTemplate").getTemplateOutput = null as any;
utilities.lazyLoad(exports, ["getTemplate","getTemplateOutput"], () => require("./getTemplate"));

export { GetTemplatesArgs, GetTemplatesResult, GetTemplatesOutputArgs } from "./getTemplates";
export const getTemplates: typeof import("./getTemplates").getTemplates = null as any;
export const getTemplatesOutput: typeof import("./getTemplates").getTemplatesOutput = null as any;
utilities.lazyLoad(exports, ["getTemplates","getTemplatesOutput"], () => require("./getTemplates"));

export { GroupArgs, GroupState } from "./group";
export type Group = import("./group").Group;
export const Group: typeof import("./group").Group = null as any;
utilities.lazyLoad(exports, ["Group"], () => require("./group"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { ServerArgs, ServerState } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));


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
            case "seeweb:index/group:Group":
                return new Group(name, <any>undefined, { urn })
            case "seeweb:index/server:Server":
                return new Server(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("seeweb", "index/group", _module)
pulumi.runtime.registerResourceModule("seeweb", "index/server", _module)
pulumi.runtime.registerResourcePackage("seeweb", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:seeweb") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
