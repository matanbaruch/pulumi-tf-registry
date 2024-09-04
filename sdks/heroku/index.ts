// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AccountFeatureArgs, AccountFeatureState } from "./accountFeature";
export type AccountFeature = import("./accountFeature").AccountFeature;
export const AccountFeature: typeof import("./accountFeature").AccountFeature = null as any;
utilities.lazyLoad(exports, ["AccountFeature"], () => require("./accountFeature"));

export { AddonArgs, AddonState } from "./addon";
export type Addon = import("./addon").Addon;
export const Addon: typeof import("./addon").Addon = null as any;
utilities.lazyLoad(exports, ["Addon"], () => require("./addon"));

export { AddonAttachmentArgs, AddonAttachmentState } from "./addonAttachment";
export type AddonAttachment = import("./addonAttachment").AddonAttachment;
export const AddonAttachment: typeof import("./addonAttachment").AddonAttachment = null as any;
utilities.lazyLoad(exports, ["AddonAttachment"], () => require("./addonAttachment"));

export { AppArgs, AppState } from "./app";
export type App = import("./app").App;
export const App: typeof import("./app").App = null as any;
utilities.lazyLoad(exports, ["App"], () => require("./app"));

export { AppConfigAssociationArgs, AppConfigAssociationState } from "./appConfigAssociation";
export type AppConfigAssociation = import("./appConfigAssociation").AppConfigAssociation;
export const AppConfigAssociation: typeof import("./appConfigAssociation").AppConfigAssociation = null as any;
utilities.lazyLoad(exports, ["AppConfigAssociation"], () => require("./appConfigAssociation"));

export { AppFeatureArgs, AppFeatureState } from "./appFeature";
export type AppFeature = import("./appFeature").AppFeature;
export const AppFeature: typeof import("./appFeature").AppFeature = null as any;
utilities.lazyLoad(exports, ["AppFeature"], () => require("./appFeature"));

export { AppReleaseArgs, AppReleaseState } from "./appRelease";
export type AppRelease = import("./appRelease").AppRelease;
export const AppRelease: typeof import("./appRelease").AppRelease = null as any;
utilities.lazyLoad(exports, ["AppRelease"], () => require("./appRelease"));

export { AppWebhookArgs, AppWebhookState } from "./appWebhook";
export type AppWebhook = import("./appWebhook").AppWebhook;
export const AppWebhook: typeof import("./appWebhook").AppWebhook = null as any;
utilities.lazyLoad(exports, ["AppWebhook"], () => require("./appWebhook"));

export { BuildArgs, BuildState } from "./build";
export type Build = import("./build").Build;
export const Build: typeof import("./build").Build = null as any;
utilities.lazyLoad(exports, ["Build"], () => require("./build"));

export { CertArgs, CertState } from "./cert";
export type Cert = import("./cert").Cert;
export const Cert: typeof import("./cert").Cert = null as any;
utilities.lazyLoad(exports, ["Cert"], () => require("./cert"));

export { CollaboratorArgs, CollaboratorState } from "./collaborator";
export type Collaborator = import("./collaborator").Collaborator;
export const Collaborator: typeof import("./collaborator").Collaborator = null as any;
utilities.lazyLoad(exports, ["Collaborator"], () => require("./collaborator"));

export { ConfigArgs, ConfigState } from "./config";
export type Config = import("./config").Config;
export const Config: typeof import("./config").Config = null as any;
utilities.lazyLoad(exports, ["Config"], () => require("./config"));

export { DomainArgs, DomainState } from "./domain";
export type Domain = import("./domain").Domain;
export const Domain: typeof import("./domain").Domain = null as any;
utilities.lazyLoad(exports, ["Domain"], () => require("./domain"));

export { DrainArgs, DrainState } from "./drain";
export type Drain = import("./drain").Drain;
export const Drain: typeof import("./drain").Drain = null as any;
utilities.lazyLoad(exports, ["Drain"], () => require("./drain"));

export { FormationArgs, FormationState } from "./formation";
export type Formation = import("./formation").Formation;
export const Formation: typeof import("./formation").Formation = null as any;
utilities.lazyLoad(exports, ["Formation"], () => require("./formation"));

export { GetAddonArgs, GetAddonResult, GetAddonOutputArgs } from "./getAddon";
export const getAddon: typeof import("./getAddon").getAddon = null as any;
export const getAddonOutput: typeof import("./getAddon").getAddonOutput = null as any;
utilities.lazyLoad(exports, ["getAddon","getAddonOutput"], () => require("./getAddon"));

export { GetAppArgs, GetAppResult, GetAppOutputArgs } from "./getApp";
export const getApp: typeof import("./getApp").getApp = null as any;
export const getAppOutput: typeof import("./getApp").getAppOutput = null as any;
utilities.lazyLoad(exports, ["getApp","getAppOutput"], () => require("./getApp"));

export { GetPipelineArgs, GetPipelineResult, GetPipelineOutputArgs } from "./getPipeline";
export const getPipeline: typeof import("./getPipeline").getPipeline = null as any;
export const getPipelineOutput: typeof import("./getPipeline").getPipelineOutput = null as any;
utilities.lazyLoad(exports, ["getPipeline","getPipelineOutput"], () => require("./getPipeline"));

export { GetSpaceArgs, GetSpaceResult, GetSpaceOutputArgs } from "./getSpace";
export const getSpace: typeof import("./getSpace").getSpace = null as any;
export const getSpaceOutput: typeof import("./getSpace").getSpaceOutput = null as any;
utilities.lazyLoad(exports, ["getSpace","getSpaceOutput"], () => require("./getSpace"));

export { GetSpacePeeringInfoArgs, GetSpacePeeringInfoResult, GetSpacePeeringInfoOutputArgs } from "./getSpacePeeringInfo";
export const getSpacePeeringInfo: typeof import("./getSpacePeeringInfo").getSpacePeeringInfo = null as any;
export const getSpacePeeringInfoOutput: typeof import("./getSpacePeeringInfo").getSpacePeeringInfoOutput = null as any;
utilities.lazyLoad(exports, ["getSpacePeeringInfo","getSpacePeeringInfoOutput"], () => require("./getSpacePeeringInfo"));

export { GetTeamArgs, GetTeamResult, GetTeamOutputArgs } from "./getTeam";
export const getTeam: typeof import("./getTeam").getTeam = null as any;
export const getTeamOutput: typeof import("./getTeam").getTeamOutput = null as any;
utilities.lazyLoad(exports, ["getTeam","getTeamOutput"], () => require("./getTeam"));

export { GetTeamMembersArgs, GetTeamMembersResult, GetTeamMembersOutputArgs } from "./getTeamMembers";
export const getTeamMembers: typeof import("./getTeamMembers").getTeamMembers = null as any;
export const getTeamMembersOutput: typeof import("./getTeamMembers").getTeamMembersOutput = null as any;
utilities.lazyLoad(exports, ["getTeamMembers","getTeamMembersOutput"], () => require("./getTeamMembers"));

export { PipelineArgs, PipelineState } from "./pipeline";
export type Pipeline = import("./pipeline").Pipeline;
export const Pipeline: typeof import("./pipeline").Pipeline = null as any;
utilities.lazyLoad(exports, ["Pipeline"], () => require("./pipeline"));

export { PipelineConfigVarArgs, PipelineConfigVarState } from "./pipelineConfigVar";
export type PipelineConfigVar = import("./pipelineConfigVar").PipelineConfigVar;
export const PipelineConfigVar: typeof import("./pipelineConfigVar").PipelineConfigVar = null as any;
utilities.lazyLoad(exports, ["PipelineConfigVar"], () => require("./pipelineConfigVar"));

export { PipelineCouplingArgs, PipelineCouplingState } from "./pipelineCoupling";
export type PipelineCoupling = import("./pipelineCoupling").PipelineCoupling;
export const PipelineCoupling: typeof import("./pipelineCoupling").PipelineCoupling = null as any;
utilities.lazyLoad(exports, ["PipelineCoupling"], () => require("./pipelineCoupling"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { ReviewAppConfigArgs, ReviewAppConfigState } from "./reviewAppConfig";
export type ReviewAppConfig = import("./reviewAppConfig").ReviewAppConfig;
export const ReviewAppConfig: typeof import("./reviewAppConfig").ReviewAppConfig = null as any;
utilities.lazyLoad(exports, ["ReviewAppConfig"], () => require("./reviewAppConfig"));

export { SlugArgs, SlugState } from "./slug";
export type Slug = import("./slug").Slug;
export const Slug: typeof import("./slug").Slug = null as any;
utilities.lazyLoad(exports, ["Slug"], () => require("./slug"));

export { SpaceArgs, SpaceState } from "./space";
export type Space = import("./space").Space;
export const Space: typeof import("./space").Space = null as any;
utilities.lazyLoad(exports, ["Space"], () => require("./space"));

export { SpaceAppAccessArgs, SpaceAppAccessState } from "./spaceAppAccess";
export type SpaceAppAccess = import("./spaceAppAccess").SpaceAppAccess;
export const SpaceAppAccess: typeof import("./spaceAppAccess").SpaceAppAccess = null as any;
utilities.lazyLoad(exports, ["SpaceAppAccess"], () => require("./spaceAppAccess"));

export { SpaceInboundRulesetArgs, SpaceInboundRulesetState } from "./spaceInboundRuleset";
export type SpaceInboundRuleset = import("./spaceInboundRuleset").SpaceInboundRuleset;
export const SpaceInboundRuleset: typeof import("./spaceInboundRuleset").SpaceInboundRuleset = null as any;
utilities.lazyLoad(exports, ["SpaceInboundRuleset"], () => require("./spaceInboundRuleset"));

export { SpacePeeringConnectionAccepterArgs, SpacePeeringConnectionAccepterState } from "./spacePeeringConnectionAccepter";
export type SpacePeeringConnectionAccepter = import("./spacePeeringConnectionAccepter").SpacePeeringConnectionAccepter;
export const SpacePeeringConnectionAccepter: typeof import("./spacePeeringConnectionAccepter").SpacePeeringConnectionAccepter = null as any;
utilities.lazyLoad(exports, ["SpacePeeringConnectionAccepter"], () => require("./spacePeeringConnectionAccepter"));

export { SpaceVpnConnectionArgs, SpaceVpnConnectionState } from "./spaceVpnConnection";
export type SpaceVpnConnection = import("./spaceVpnConnection").SpaceVpnConnection;
export const SpaceVpnConnection: typeof import("./spaceVpnConnection").SpaceVpnConnection = null as any;
utilities.lazyLoad(exports, ["SpaceVpnConnection"], () => require("./spaceVpnConnection"));

export { SslArgs, SslState } from "./ssl";
export type Ssl = import("./ssl").Ssl;
export const Ssl: typeof import("./ssl").Ssl = null as any;
utilities.lazyLoad(exports, ["Ssl"], () => require("./ssl"));

export { TeamCollaboratorArgs, TeamCollaboratorState } from "./teamCollaborator";
export type TeamCollaborator = import("./teamCollaborator").TeamCollaborator;
export const TeamCollaborator: typeof import("./teamCollaborator").TeamCollaborator = null as any;
utilities.lazyLoad(exports, ["TeamCollaborator"], () => require("./teamCollaborator"));

export { TeamMemberArgs, TeamMemberState } from "./teamMember";
export type TeamMember = import("./teamMember").TeamMember;
export const TeamMember: typeof import("./teamMember").TeamMember = null as any;
utilities.lazyLoad(exports, ["TeamMember"], () => require("./teamMember"));


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
            case "heroku:index/accountFeature:AccountFeature":
                return new AccountFeature(name, <any>undefined, { urn })
            case "heroku:index/addon:Addon":
                return new Addon(name, <any>undefined, { urn })
            case "heroku:index/addonAttachment:AddonAttachment":
                return new AddonAttachment(name, <any>undefined, { urn })
            case "heroku:index/app:App":
                return new App(name, <any>undefined, { urn })
            case "heroku:index/appConfigAssociation:AppConfigAssociation":
                return new AppConfigAssociation(name, <any>undefined, { urn })
            case "heroku:index/appFeature:AppFeature":
                return new AppFeature(name, <any>undefined, { urn })
            case "heroku:index/appRelease:AppRelease":
                return new AppRelease(name, <any>undefined, { urn })
            case "heroku:index/appWebhook:AppWebhook":
                return new AppWebhook(name, <any>undefined, { urn })
            case "heroku:index/build:Build":
                return new Build(name, <any>undefined, { urn })
            case "heroku:index/cert:Cert":
                return new Cert(name, <any>undefined, { urn })
            case "heroku:index/collaborator:Collaborator":
                return new Collaborator(name, <any>undefined, { urn })
            case "heroku:index/config:Config":
                return new Config(name, <any>undefined, { urn })
            case "heroku:index/domain:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "heroku:index/drain:Drain":
                return new Drain(name, <any>undefined, { urn })
            case "heroku:index/formation:Formation":
                return new Formation(name, <any>undefined, { urn })
            case "heroku:index/pipeline:Pipeline":
                return new Pipeline(name, <any>undefined, { urn })
            case "heroku:index/pipelineConfigVar:PipelineConfigVar":
                return new PipelineConfigVar(name, <any>undefined, { urn })
            case "heroku:index/pipelineCoupling:PipelineCoupling":
                return new PipelineCoupling(name, <any>undefined, { urn })
            case "heroku:index/reviewAppConfig:ReviewAppConfig":
                return new ReviewAppConfig(name, <any>undefined, { urn })
            case "heroku:index/slug:Slug":
                return new Slug(name, <any>undefined, { urn })
            case "heroku:index/space:Space":
                return new Space(name, <any>undefined, { urn })
            case "heroku:index/spaceAppAccess:SpaceAppAccess":
                return new SpaceAppAccess(name, <any>undefined, { urn })
            case "heroku:index/spaceInboundRuleset:SpaceInboundRuleset":
                return new SpaceInboundRuleset(name, <any>undefined, { urn })
            case "heroku:index/spacePeeringConnectionAccepter:SpacePeeringConnectionAccepter":
                return new SpacePeeringConnectionAccepter(name, <any>undefined, { urn })
            case "heroku:index/spaceVpnConnection:SpaceVpnConnection":
                return new SpaceVpnConnection(name, <any>undefined, { urn })
            case "heroku:index/ssl:Ssl":
                return new Ssl(name, <any>undefined, { urn })
            case "heroku:index/teamCollaborator:TeamCollaborator":
                return new TeamCollaborator(name, <any>undefined, { urn })
            case "heroku:index/teamMember:TeamMember":
                return new TeamMember(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("heroku", "index/accountFeature", _module)
pulumi.runtime.registerResourceModule("heroku", "index/addon", _module)
pulumi.runtime.registerResourceModule("heroku", "index/addonAttachment", _module)
pulumi.runtime.registerResourceModule("heroku", "index/app", _module)
pulumi.runtime.registerResourceModule("heroku", "index/appConfigAssociation", _module)
pulumi.runtime.registerResourceModule("heroku", "index/appFeature", _module)
pulumi.runtime.registerResourceModule("heroku", "index/appRelease", _module)
pulumi.runtime.registerResourceModule("heroku", "index/appWebhook", _module)
pulumi.runtime.registerResourceModule("heroku", "index/build", _module)
pulumi.runtime.registerResourceModule("heroku", "index/cert", _module)
pulumi.runtime.registerResourceModule("heroku", "index/collaborator", _module)
pulumi.runtime.registerResourceModule("heroku", "index/config", _module)
pulumi.runtime.registerResourceModule("heroku", "index/domain", _module)
pulumi.runtime.registerResourceModule("heroku", "index/drain", _module)
pulumi.runtime.registerResourceModule("heroku", "index/formation", _module)
pulumi.runtime.registerResourceModule("heroku", "index/pipeline", _module)
pulumi.runtime.registerResourceModule("heroku", "index/pipelineConfigVar", _module)
pulumi.runtime.registerResourceModule("heroku", "index/pipelineCoupling", _module)
pulumi.runtime.registerResourceModule("heroku", "index/reviewAppConfig", _module)
pulumi.runtime.registerResourceModule("heroku", "index/slug", _module)
pulumi.runtime.registerResourceModule("heroku", "index/space", _module)
pulumi.runtime.registerResourceModule("heroku", "index/spaceAppAccess", _module)
pulumi.runtime.registerResourceModule("heroku", "index/spaceInboundRuleset", _module)
pulumi.runtime.registerResourceModule("heroku", "index/spacePeeringConnectionAccepter", _module)
pulumi.runtime.registerResourceModule("heroku", "index/spaceVpnConnection", _module)
pulumi.runtime.registerResourceModule("heroku", "index/ssl", _module)
pulumi.runtime.registerResourceModule("heroku", "index/teamCollaborator", _module)
pulumi.runtime.registerResourceModule("heroku", "index/teamMember", _module)
pulumi.runtime.registerResourcePackage("heroku", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:heroku") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
