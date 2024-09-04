// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { EnvironmentArgs, EnvironmentState } from "./environment";
export type Environment = import("./environment").Environment;
export const Environment: typeof import("./environment").Environment = null as any;
utilities.lazyLoad(exports, ["Environment"], () => require("./environment"));

export { EscalationPolicyArgs, EscalationPolicyState } from "./escalationPolicy";
export type EscalationPolicy = import("./escalationPolicy").EscalationPolicy;
export const EscalationPolicy: typeof import("./escalationPolicy").EscalationPolicy = null as any;
utilities.lazyLoad(exports, ["EscalationPolicy"], () => require("./escalationPolicy"));

export { FunctionalityArgs, FunctionalityState } from "./functionality";
export type Functionality = import("./functionality").Functionality;
export const Functionality: typeof import("./functionality").Functionality = null as any;
utilities.lazyLoad(exports, ["Functionality"], () => require("./functionality"));

export { GetEnvironmentArgs, GetEnvironmentResult, GetEnvironmentOutputArgs } from "./getEnvironment";
export const getEnvironment: typeof import("./getEnvironment").getEnvironment = null as any;
export const getEnvironmentOutput: typeof import("./getEnvironment").getEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironment","getEnvironmentOutput"], () => require("./getEnvironment"));

export { GetFunctionalityArgs, GetFunctionalityResult, GetFunctionalityOutputArgs } from "./getFunctionality";
export const getFunctionality: typeof import("./getFunctionality").getFunctionality = null as any;
export const getFunctionalityOutput: typeof import("./getFunctionality").getFunctionalityOutput = null as any;
utilities.lazyLoad(exports, ["getFunctionality","getFunctionalityOutput"], () => require("./getFunctionality"));

export { GetIncidentRoleArgs, GetIncidentRoleResult, GetIncidentRoleOutputArgs } from "./getIncidentRole";
export const getIncidentRole: typeof import("./getIncidentRole").getIncidentRole = null as any;
export const getIncidentRoleOutput: typeof import("./getIncidentRole").getIncidentRoleOutput = null as any;
utilities.lazyLoad(exports, ["getIncidentRole","getIncidentRoleOutput"], () => require("./getIncidentRole"));

export { GetIngestUrlArgs, GetIngestUrlResult, GetIngestUrlOutputArgs } from "./getIngestUrl";
export const getIngestUrl: typeof import("./getIngestUrl").getIngestUrl = null as any;
export const getIngestUrlOutput: typeof import("./getIngestUrl").getIngestUrlOutput = null as any;
utilities.lazyLoad(exports, ["getIngestUrl","getIngestUrlOutput"], () => require("./getIngestUrl"));

export { GetPriorityArgs, GetPriorityResult, GetPriorityOutputArgs } from "./getPriority";
export const getPriority: typeof import("./getPriority").getPriority = null as any;
export const getPriorityOutput: typeof import("./getPriority").getPriorityOutput = null as any;
utilities.lazyLoad(exports, ["getPriority","getPriorityOutput"], () => require("./getPriority"));

export { GetRunbookArgs, GetRunbookResult, GetRunbookOutputArgs } from "./getRunbook";
export const getRunbook: typeof import("./getRunbook").getRunbook = null as any;
export const getRunbookOutput: typeof import("./getRunbook").getRunbookOutput = null as any;
utilities.lazyLoad(exports, ["getRunbook","getRunbookOutput"], () => require("./getRunbook"));

export { GetRunbookActionArgs, GetRunbookActionResult, GetRunbookActionOutputArgs } from "./getRunbookAction";
export const getRunbookAction: typeof import("./getRunbookAction").getRunbookAction = null as any;
export const getRunbookActionOutput: typeof import("./getRunbookAction").getRunbookActionOutput = null as any;
utilities.lazyLoad(exports, ["getRunbookAction","getRunbookActionOutput"], () => require("./getRunbookAction"));

export { GetScheduleArgs, GetScheduleResult, GetScheduleOutputArgs } from "./getSchedule";
export const getSchedule: typeof import("./getSchedule").getSchedule = null as any;
export const getScheduleOutput: typeof import("./getSchedule").getScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getSchedule","getScheduleOutput"], () => require("./getSchedule"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetServicesArgs, GetServicesResult, GetServicesOutputArgs } from "./getServices";
export const getServices: typeof import("./getServices").getServices = null as any;
export const getServicesOutput: typeof import("./getServices").getServicesOutput = null as any;
utilities.lazyLoad(exports, ["getServices","getServicesOutput"], () => require("./getServices"));

export { GetSeverityArgs, GetSeverityResult, GetSeverityOutputArgs } from "./getSeverity";
export const getSeverity: typeof import("./getSeverity").getSeverity = null as any;
export const getSeverityOutput: typeof import("./getSeverity").getSeverityOutput = null as any;
utilities.lazyLoad(exports, ["getSeverity","getSeverityOutput"], () => require("./getSeverity"));

export { GetSlackChannelArgs, GetSlackChannelResult, GetSlackChannelOutputArgs } from "./getSlackChannel";
export const getSlackChannel: typeof import("./getSlackChannel").getSlackChannel = null as any;
export const getSlackChannelOutput: typeof import("./getSlackChannel").getSlackChannelOutput = null as any;
utilities.lazyLoad(exports, ["getSlackChannel","getSlackChannelOutput"], () => require("./getSlackChannel"));

export { GetTaskListArgs, GetTaskListResult, GetTaskListOutputArgs } from "./getTaskList";
export const getTaskList: typeof import("./getTaskList").getTaskList = null as any;
export const getTaskListOutput: typeof import("./getTaskList").getTaskListOutput = null as any;
utilities.lazyLoad(exports, ["getTaskList","getTaskListOutput"], () => require("./getTaskList"));

export { GetTeamArgs, GetTeamResult, GetTeamOutputArgs } from "./getTeam";
export const getTeam: typeof import("./getTeam").getTeam = null as any;
export const getTeamOutput: typeof import("./getTeam").getTeamOutput = null as any;
utilities.lazyLoad(exports, ["getTeam","getTeamOutput"], () => require("./getTeam"));

export { GetTeamsArgs, GetTeamsResult, GetTeamsOutputArgs } from "./getTeams";
export const getTeams: typeof import("./getTeams").getTeams = null as any;
export const getTeamsOutput: typeof import("./getTeams").getTeamsOutput = null as any;
utilities.lazyLoad(exports, ["getTeams","getTeamsOutput"], () => require("./getTeams"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { IncidentRoleArgs, IncidentRoleState } from "./incidentRole";
export type IncidentRole = import("./incidentRole").IncidentRole;
export const IncidentRole: typeof import("./incidentRole").IncidentRole = null as any;
utilities.lazyLoad(exports, ["IncidentRole"], () => require("./incidentRole"));

export { OnCallScheduleArgs, OnCallScheduleState } from "./onCallSchedule";
export type OnCallSchedule = import("./onCallSchedule").OnCallSchedule;
export const OnCallSchedule: typeof import("./onCallSchedule").OnCallSchedule = null as any;
utilities.lazyLoad(exports, ["OnCallSchedule"], () => require("./onCallSchedule"));

export { PriorityArgs, PriorityState } from "./priority";
export type Priority = import("./priority").Priority;
export const Priority: typeof import("./priority").Priority = null as any;
utilities.lazyLoad(exports, ["Priority"], () => require("./priority"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { RunbookArgs, RunbookState } from "./runbook";
export type Runbook = import("./runbook").Runbook;
export const Runbook: typeof import("./runbook").Runbook = null as any;
utilities.lazyLoad(exports, ["Runbook"], () => require("./runbook"));

export { ServiceArgs, ServiceState } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { ServiceDependencyArgs, ServiceDependencyState } from "./serviceDependency";
export type ServiceDependency = import("./serviceDependency").ServiceDependency;
export const ServiceDependency: typeof import("./serviceDependency").ServiceDependency = null as any;
utilities.lazyLoad(exports, ["ServiceDependency"], () => require("./serviceDependency"));

export { SeverityArgs, SeverityState } from "./severity";
export type Severity = import("./severity").Severity;
export const Severity: typeof import("./severity").Severity = null as any;
utilities.lazyLoad(exports, ["Severity"], () => require("./severity"));

export { SignalRuleArgs, SignalRuleState } from "./signalRule";
export type SignalRule = import("./signalRule").SignalRule;
export const SignalRule: typeof import("./signalRule").SignalRule = null as any;
utilities.lazyLoad(exports, ["SignalRule"], () => require("./signalRule"));

export { StatusUpdateTemplateArgs, StatusUpdateTemplateState } from "./statusUpdateTemplate";
export type StatusUpdateTemplate = import("./statusUpdateTemplate").StatusUpdateTemplate;
export const StatusUpdateTemplate: typeof import("./statusUpdateTemplate").StatusUpdateTemplate = null as any;
utilities.lazyLoad(exports, ["StatusUpdateTemplate"], () => require("./statusUpdateTemplate"));

export { TaskListArgs, TaskListState } from "./taskList";
export type TaskList = import("./taskList").TaskList;
export const TaskList: typeof import("./taskList").TaskList = null as any;
utilities.lazyLoad(exports, ["TaskList"], () => require("./taskList"));

export { TeamArgs, TeamState } from "./team";
export type Team = import("./team").Team;
export const Team: typeof import("./team").Team = null as any;
utilities.lazyLoad(exports, ["Team"], () => require("./team"));


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
            case "firehydrant:index/environment:Environment":
                return new Environment(name, <any>undefined, { urn })
            case "firehydrant:index/escalationPolicy:EscalationPolicy":
                return new EscalationPolicy(name, <any>undefined, { urn })
            case "firehydrant:index/functionality:Functionality":
                return new Functionality(name, <any>undefined, { urn })
            case "firehydrant:index/incidentRole:IncidentRole":
                return new IncidentRole(name, <any>undefined, { urn })
            case "firehydrant:index/onCallSchedule:OnCallSchedule":
                return new OnCallSchedule(name, <any>undefined, { urn })
            case "firehydrant:index/priority:Priority":
                return new Priority(name, <any>undefined, { urn })
            case "firehydrant:index/runbook:Runbook":
                return new Runbook(name, <any>undefined, { urn })
            case "firehydrant:index/service:Service":
                return new Service(name, <any>undefined, { urn })
            case "firehydrant:index/serviceDependency:ServiceDependency":
                return new ServiceDependency(name, <any>undefined, { urn })
            case "firehydrant:index/severity:Severity":
                return new Severity(name, <any>undefined, { urn })
            case "firehydrant:index/signalRule:SignalRule":
                return new SignalRule(name, <any>undefined, { urn })
            case "firehydrant:index/statusUpdateTemplate:StatusUpdateTemplate":
                return new StatusUpdateTemplate(name, <any>undefined, { urn })
            case "firehydrant:index/taskList:TaskList":
                return new TaskList(name, <any>undefined, { urn })
            case "firehydrant:index/team:Team":
                return new Team(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("firehydrant", "index/environment", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/escalationPolicy", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/functionality", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/incidentRole", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/onCallSchedule", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/priority", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/runbook", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/service", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/serviceDependency", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/severity", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/signalRule", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/statusUpdateTemplate", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/taskList", _module)
pulumi.runtime.registerResourceModule("firehydrant", "index/team", _module)
pulumi.runtime.registerResourcePackage("firehydrant", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:firehydrant") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
