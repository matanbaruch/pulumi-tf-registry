// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { DashboardArgs, DashboardState } from "./dashboard";
export type Dashboard = import("./dashboard").Dashboard;
export const Dashboard: typeof import("./dashboard").Dashboard = null as any;
utilities.lazyLoad(exports, ["Dashboard"], () => require("./dashboard"));

export { FrameworkArgs, FrameworkState } from "./framework";
export type Framework = import("./framework").Framework;
export const Framework: typeof import("./framework").Framework = null as any;
utilities.lazyLoad(exports, ["Framework"], () => require("./framework"));

export { FrameworkitemArgs, FrameworkitemState } from "./frameworkitem";
export type Frameworkitem = import("./frameworkitem").Frameworkitem;
export const Frameworkitem: typeof import("./frameworkitem").Frameworkitem = null as any;
utilities.lazyLoad(exports, ["Frameworkitem"], () => require("./frameworkitem"));

export { GetUserGroupArgs, GetUserGroupResult, GetUserGroupOutputArgs } from "./getUserGroup";
export const getUserGroup: typeof import("./getUserGroup").getUserGroup = null as any;
export const getUserGroupOutput: typeof import("./getUserGroup").getUserGroupOutput = null as any;
utilities.lazyLoad(exports, ["getUserGroup","getUserGroupOutput"], () => require("./getUserGroup"));

export { GroupArgs, GroupState } from "./group";
export type Group = import("./group").Group;
export const Group: typeof import("./group").Group = null as any;
utilities.lazyLoad(exports, ["Group"], () => require("./group"));

export { LibraryitemArgs, LibraryitemState } from "./libraryitem";
export type Libraryitem = import("./libraryitem").Libraryitem;
export const Libraryitem: typeof import("./libraryitem").Libraryitem = null as any;
utilities.lazyLoad(exports, ["Libraryitem"], () => require("./libraryitem"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { QuestionArgs, QuestionState } from "./question";
export type Question = import("./question").Question;
export const Question: typeof import("./question").Question = null as any;
utilities.lazyLoad(exports, ["Question"], () => require("./question"));

export { RuleArgs, RuleState } from "./rule";
export type Rule = import("./rule").Rule;
export const Rule: typeof import("./rule").Rule = null as any;
utilities.lazyLoad(exports, ["Rule"], () => require("./rule"));

export { UserGroupArgs, UserGroupState } from "./userGroup";
export type UserGroup = import("./userGroup").UserGroup;
export const UserGroup: typeof import("./userGroup").UserGroup = null as any;
utilities.lazyLoad(exports, ["UserGroup"], () => require("./userGroup"));

export { UserGroupMembershipArgs, UserGroupMembershipState } from "./userGroupMembership";
export type UserGroupMembership = import("./userGroupMembership").UserGroupMembership;
export const UserGroupMembership: typeof import("./userGroupMembership").UserGroupMembership = null as any;
utilities.lazyLoad(exports, ["UserGroupMembership"], () => require("./userGroupMembership"));

export { WidgetArgs, WidgetState } from "./widget";
export type Widget = import("./widget").Widget;
export const Widget: typeof import("./widget").Widget = null as any;
utilities.lazyLoad(exports, ["Widget"], () => require("./widget"));


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
            case "jupiterone:index/dashboard:Dashboard":
                return new Dashboard(name, <any>undefined, { urn })
            case "jupiterone:index/framework:Framework":
                return new Framework(name, <any>undefined, { urn })
            case "jupiterone:index/frameworkitem:Frameworkitem":
                return new Frameworkitem(name, <any>undefined, { urn })
            case "jupiterone:index/group:Group":
                return new Group(name, <any>undefined, { urn })
            case "jupiterone:index/libraryitem:Libraryitem":
                return new Libraryitem(name, <any>undefined, { urn })
            case "jupiterone:index/question:Question":
                return new Question(name, <any>undefined, { urn })
            case "jupiterone:index/rule:Rule":
                return new Rule(name, <any>undefined, { urn })
            case "jupiterone:index/userGroup:UserGroup":
                return new UserGroup(name, <any>undefined, { urn })
            case "jupiterone:index/userGroupMembership:UserGroupMembership":
                return new UserGroupMembership(name, <any>undefined, { urn })
            case "jupiterone:index/widget:Widget":
                return new Widget(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("jupiterone", "index/dashboard", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/framework", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/frameworkitem", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/group", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/libraryitem", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/question", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/rule", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/userGroup", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/userGroupMembership", _module)
pulumi.runtime.registerResourceModule("jupiterone", "index/widget", _module)
pulumi.runtime.registerResourcePackage("jupiterone", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:jupiterone") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
