// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AgentArgs, AgentState } from "./agent";
export type Agent = import("./agent").Agent;
export const Agent: typeof import("./agent").Agent = null as any;
utilities.lazyLoad(exports, ["Agent"], () => require("./agent"));

export { AlertMethodDiscordArgs, AlertMethodDiscordState } from "./alertMethodDiscord";
export type AlertMethodDiscord = import("./alertMethodDiscord").AlertMethodDiscord;
export const AlertMethodDiscord: typeof import("./alertMethodDiscord").AlertMethodDiscord = null as any;
utilities.lazyLoad(exports, ["AlertMethodDiscord"], () => require("./alertMethodDiscord"));

export { AlertMethodEmailArgs, AlertMethodEmailState } from "./alertMethodEmail";
export type AlertMethodEmail = import("./alertMethodEmail").AlertMethodEmail;
export const AlertMethodEmail: typeof import("./alertMethodEmail").AlertMethodEmail = null as any;
utilities.lazyLoad(exports, ["AlertMethodEmail"], () => require("./alertMethodEmail"));

export { AlertMethodJiraArgs, AlertMethodJiraState } from "./alertMethodJira";
export type AlertMethodJira = import("./alertMethodJira").AlertMethodJira;
export const AlertMethodJira: typeof import("./alertMethodJira").AlertMethodJira = null as any;
utilities.lazyLoad(exports, ["AlertMethodJira"], () => require("./alertMethodJira"));

export { AlertMethodMsteamsArgs, AlertMethodMsteamsState } from "./alertMethodMsteams";
export type AlertMethodMsteams = import("./alertMethodMsteams").AlertMethodMsteams;
export const AlertMethodMsteams: typeof import("./alertMethodMsteams").AlertMethodMsteams = null as any;
utilities.lazyLoad(exports, ["AlertMethodMsteams"], () => require("./alertMethodMsteams"));

export { AlertMethodOpsgenieArgs, AlertMethodOpsgenieState } from "./alertMethodOpsgenie";
export type AlertMethodOpsgenie = import("./alertMethodOpsgenie").AlertMethodOpsgenie;
export const AlertMethodOpsgenie: typeof import("./alertMethodOpsgenie").AlertMethodOpsgenie = null as any;
utilities.lazyLoad(exports, ["AlertMethodOpsgenie"], () => require("./alertMethodOpsgenie"));

export { AlertMethodPagerdutyArgs, AlertMethodPagerdutyState } from "./alertMethodPagerduty";
export type AlertMethodPagerduty = import("./alertMethodPagerduty").AlertMethodPagerduty;
export const AlertMethodPagerduty: typeof import("./alertMethodPagerduty").AlertMethodPagerduty = null as any;
utilities.lazyLoad(exports, ["AlertMethodPagerduty"], () => require("./alertMethodPagerduty"));

export { AlertMethodServicenowArgs, AlertMethodServicenowState } from "./alertMethodServicenow";
export type AlertMethodServicenow = import("./alertMethodServicenow").AlertMethodServicenow;
export const AlertMethodServicenow: typeof import("./alertMethodServicenow").AlertMethodServicenow = null as any;
utilities.lazyLoad(exports, ["AlertMethodServicenow"], () => require("./alertMethodServicenow"));

export { AlertMethodSlackArgs, AlertMethodSlackState } from "./alertMethodSlack";
export type AlertMethodSlack = import("./alertMethodSlack").AlertMethodSlack;
export const AlertMethodSlack: typeof import("./alertMethodSlack").AlertMethodSlack = null as any;
utilities.lazyLoad(exports, ["AlertMethodSlack"], () => require("./alertMethodSlack"));

export { AlertMethodWebhookArgs, AlertMethodWebhookState } from "./alertMethodWebhook";
export type AlertMethodWebhook = import("./alertMethodWebhook").AlertMethodWebhook;
export const AlertMethodWebhook: typeof import("./alertMethodWebhook").AlertMethodWebhook = null as any;
utilities.lazyLoad(exports, ["AlertMethodWebhook"], () => require("./alertMethodWebhook"));

export { AlertPolicyArgs, AlertPolicyState } from "./alertPolicy";
export type AlertPolicy = import("./alertPolicy").AlertPolicy;
export const AlertPolicy: typeof import("./alertPolicy").AlertPolicy = null as any;
utilities.lazyLoad(exports, ["AlertPolicy"], () => require("./alertPolicy"));

export { BudgetAdjustmentArgs, BudgetAdjustmentState } from "./budgetAdjustment";
export type BudgetAdjustment = import("./budgetAdjustment").BudgetAdjustment;
export const BudgetAdjustment: typeof import("./budgetAdjustment").BudgetAdjustment = null as any;
utilities.lazyLoad(exports, ["BudgetAdjustment"], () => require("./budgetAdjustment"));

export { DirectAppdynamicsArgs, DirectAppdynamicsState } from "./directAppdynamics";
export type DirectAppdynamics = import("./directAppdynamics").DirectAppdynamics;
export const DirectAppdynamics: typeof import("./directAppdynamics").DirectAppdynamics = null as any;
utilities.lazyLoad(exports, ["DirectAppdynamics"], () => require("./directAppdynamics"));

export { DirectAzureMonitorArgs, DirectAzureMonitorState } from "./directAzureMonitor";
export type DirectAzureMonitor = import("./directAzureMonitor").DirectAzureMonitor;
export const DirectAzureMonitor: typeof import("./directAzureMonitor").DirectAzureMonitor = null as any;
utilities.lazyLoad(exports, ["DirectAzureMonitor"], () => require("./directAzureMonitor"));

export { DirectBigqueryArgs, DirectBigqueryState } from "./directBigquery";
export type DirectBigquery = import("./directBigquery").DirectBigquery;
export const DirectBigquery: typeof import("./directBigquery").DirectBigquery = null as any;
utilities.lazyLoad(exports, ["DirectBigquery"], () => require("./directBigquery"));

export { DirectCloudwatchArgs, DirectCloudwatchState } from "./directCloudwatch";
export type DirectCloudwatch = import("./directCloudwatch").DirectCloudwatch;
export const DirectCloudwatch: typeof import("./directCloudwatch").DirectCloudwatch = null as any;
utilities.lazyLoad(exports, ["DirectCloudwatch"], () => require("./directCloudwatch"));

export { DirectDatadogArgs, DirectDatadogState } from "./directDatadog";
export type DirectDatadog = import("./directDatadog").DirectDatadog;
export const DirectDatadog: typeof import("./directDatadog").DirectDatadog = null as any;
utilities.lazyLoad(exports, ["DirectDatadog"], () => require("./directDatadog"));

export { DirectDynatraceArgs, DirectDynatraceState } from "./directDynatrace";
export type DirectDynatrace = import("./directDynatrace").DirectDynatrace;
export const DirectDynatrace: typeof import("./directDynatrace").DirectDynatrace = null as any;
utilities.lazyLoad(exports, ["DirectDynatrace"], () => require("./directDynatrace"));

export { DirectGcmArgs, DirectGcmState } from "./directGcm";
export type DirectGcm = import("./directGcm").DirectGcm;
export const DirectGcm: typeof import("./directGcm").DirectGcm = null as any;
utilities.lazyLoad(exports, ["DirectGcm"], () => require("./directGcm"));

export { DirectHoneycombArgs, DirectHoneycombState } from "./directHoneycomb";
export type DirectHoneycomb = import("./directHoneycomb").DirectHoneycomb;
export const DirectHoneycomb: typeof import("./directHoneycomb").DirectHoneycomb = null as any;
utilities.lazyLoad(exports, ["DirectHoneycomb"], () => require("./directHoneycomb"));

export { DirectInfluxdbArgs, DirectInfluxdbState } from "./directInfluxdb";
export type DirectInfluxdb = import("./directInfluxdb").DirectInfluxdb;
export const DirectInfluxdb: typeof import("./directInfluxdb").DirectInfluxdb = null as any;
utilities.lazyLoad(exports, ["DirectInfluxdb"], () => require("./directInfluxdb"));

export { DirectInstanaArgs, DirectInstanaState } from "./directInstana";
export type DirectInstana = import("./directInstana").DirectInstana;
export const DirectInstana: typeof import("./directInstana").DirectInstana = null as any;
utilities.lazyLoad(exports, ["DirectInstana"], () => require("./directInstana"));

export { DirectLightstepArgs, DirectLightstepState } from "./directLightstep";
export type DirectLightstep = import("./directLightstep").DirectLightstep;
export const DirectLightstep: typeof import("./directLightstep").DirectLightstep = null as any;
utilities.lazyLoad(exports, ["DirectLightstep"], () => require("./directLightstep"));

export { DirectLogicMonitorArgs, DirectLogicMonitorState } from "./directLogicMonitor";
export type DirectLogicMonitor = import("./directLogicMonitor").DirectLogicMonitor;
export const DirectLogicMonitor: typeof import("./directLogicMonitor").DirectLogicMonitor = null as any;
utilities.lazyLoad(exports, ["DirectLogicMonitor"], () => require("./directLogicMonitor"));

export { DirectNewrelicArgs, DirectNewrelicState } from "./directNewrelic";
export type DirectNewrelic = import("./directNewrelic").DirectNewrelic;
export const DirectNewrelic: typeof import("./directNewrelic").DirectNewrelic = null as any;
utilities.lazyLoad(exports, ["DirectNewrelic"], () => require("./directNewrelic"));

export { DirectPingdomArgs, DirectPingdomState } from "./directPingdom";
export type DirectPingdom = import("./directPingdom").DirectPingdom;
export const DirectPingdom: typeof import("./directPingdom").DirectPingdom = null as any;
utilities.lazyLoad(exports, ["DirectPingdom"], () => require("./directPingdom"));

export { DirectRedshiftArgs, DirectRedshiftState } from "./directRedshift";
export type DirectRedshift = import("./directRedshift").DirectRedshift;
export const DirectRedshift: typeof import("./directRedshift").DirectRedshift = null as any;
utilities.lazyLoad(exports, ["DirectRedshift"], () => require("./directRedshift"));

export { DirectSplunkArgs, DirectSplunkState } from "./directSplunk";
export type DirectSplunk = import("./directSplunk").DirectSplunk;
export const DirectSplunk: typeof import("./directSplunk").DirectSplunk = null as any;
utilities.lazyLoad(exports, ["DirectSplunk"], () => require("./directSplunk"));

export { DirectSplunkObservabilityArgs, DirectSplunkObservabilityState } from "./directSplunkObservability";
export type DirectSplunkObservability = import("./directSplunkObservability").DirectSplunkObservability;
export const DirectSplunkObservability: typeof import("./directSplunkObservability").DirectSplunkObservability = null as any;
utilities.lazyLoad(exports, ["DirectSplunkObservability"], () => require("./directSplunkObservability"));

export { DirectSumologicArgs, DirectSumologicState } from "./directSumologic";
export type DirectSumologic = import("./directSumologic").DirectSumologic;
export const DirectSumologic: typeof import("./directSumologic").DirectSumologic = null as any;
utilities.lazyLoad(exports, ["DirectSumologic"], () => require("./directSumologic"));

export { DirectThousandeyesArgs, DirectThousandeyesState } from "./directThousandeyes";
export type DirectThousandeyes = import("./directThousandeyes").DirectThousandeyes;
export const DirectThousandeyes: typeof import("./directThousandeyes").DirectThousandeyes = null as any;
utilities.lazyLoad(exports, ["DirectThousandeyes"], () => require("./directThousandeyes"));

export { GetAwsIamRoleExternalIdArgs, GetAwsIamRoleExternalIdResult, GetAwsIamRoleExternalIdOutputArgs } from "./getAwsIamRoleExternalId";
export const getAwsIamRoleExternalId: typeof import("./getAwsIamRoleExternalId").getAwsIamRoleExternalId = null as any;
export const getAwsIamRoleExternalIdOutput: typeof import("./getAwsIamRoleExternalId").getAwsIamRoleExternalIdOutput = null as any;
utilities.lazyLoad(exports, ["getAwsIamRoleExternalId","getAwsIamRoleExternalIdOutput"], () => require("./getAwsIamRoleExternalId"));

export { ProjectArgs, ProjectState } from "./project";
export type Project = import("./project").Project;
export const Project: typeof import("./project").Project = null as any;
utilities.lazyLoad(exports, ["Project"], () => require("./project"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { RoleBindingArgs, RoleBindingState } from "./roleBinding";
export type RoleBinding = import("./roleBinding").RoleBinding;
export const RoleBinding: typeof import("./roleBinding").RoleBinding = null as any;
utilities.lazyLoad(exports, ["RoleBinding"], () => require("./roleBinding"));

export { ServiceArgs, ServiceState } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { SloArgs, SloState } from "./slo";
export type Slo = import("./slo").Slo;
export const Slo: typeof import("./slo").Slo = null as any;
utilities.lazyLoad(exports, ["Slo"], () => require("./slo"));


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
            case "nobl9:index/agent:Agent":
                return new Agent(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodDiscord:AlertMethodDiscord":
                return new AlertMethodDiscord(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodEmail:AlertMethodEmail":
                return new AlertMethodEmail(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodJira:AlertMethodJira":
                return new AlertMethodJira(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodMsteams:AlertMethodMsteams":
                return new AlertMethodMsteams(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodOpsgenie:AlertMethodOpsgenie":
                return new AlertMethodOpsgenie(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodPagerduty:AlertMethodPagerduty":
                return new AlertMethodPagerduty(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodServicenow:AlertMethodServicenow":
                return new AlertMethodServicenow(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodSlack:AlertMethodSlack":
                return new AlertMethodSlack(name, <any>undefined, { urn })
            case "nobl9:index/alertMethodWebhook:AlertMethodWebhook":
                return new AlertMethodWebhook(name, <any>undefined, { urn })
            case "nobl9:index/alertPolicy:AlertPolicy":
                return new AlertPolicy(name, <any>undefined, { urn })
            case "nobl9:index/budgetAdjustment:BudgetAdjustment":
                return new BudgetAdjustment(name, <any>undefined, { urn })
            case "nobl9:index/directAppdynamics:DirectAppdynamics":
                return new DirectAppdynamics(name, <any>undefined, { urn })
            case "nobl9:index/directAzureMonitor:DirectAzureMonitor":
                return new DirectAzureMonitor(name, <any>undefined, { urn })
            case "nobl9:index/directBigquery:DirectBigquery":
                return new DirectBigquery(name, <any>undefined, { urn })
            case "nobl9:index/directCloudwatch:DirectCloudwatch":
                return new DirectCloudwatch(name, <any>undefined, { urn })
            case "nobl9:index/directDatadog:DirectDatadog":
                return new DirectDatadog(name, <any>undefined, { urn })
            case "nobl9:index/directDynatrace:DirectDynatrace":
                return new DirectDynatrace(name, <any>undefined, { urn })
            case "nobl9:index/directGcm:DirectGcm":
                return new DirectGcm(name, <any>undefined, { urn })
            case "nobl9:index/directHoneycomb:DirectHoneycomb":
                return new DirectHoneycomb(name, <any>undefined, { urn })
            case "nobl9:index/directInfluxdb:DirectInfluxdb":
                return new DirectInfluxdb(name, <any>undefined, { urn })
            case "nobl9:index/directInstana:DirectInstana":
                return new DirectInstana(name, <any>undefined, { urn })
            case "nobl9:index/directLightstep:DirectLightstep":
                return new DirectLightstep(name, <any>undefined, { urn })
            case "nobl9:index/directLogicMonitor:DirectLogicMonitor":
                return new DirectLogicMonitor(name, <any>undefined, { urn })
            case "nobl9:index/directNewrelic:DirectNewrelic":
                return new DirectNewrelic(name, <any>undefined, { urn })
            case "nobl9:index/directPingdom:DirectPingdom":
                return new DirectPingdom(name, <any>undefined, { urn })
            case "nobl9:index/directRedshift:DirectRedshift":
                return new DirectRedshift(name, <any>undefined, { urn })
            case "nobl9:index/directSplunk:DirectSplunk":
                return new DirectSplunk(name, <any>undefined, { urn })
            case "nobl9:index/directSplunkObservability:DirectSplunkObservability":
                return new DirectSplunkObservability(name, <any>undefined, { urn })
            case "nobl9:index/directSumologic:DirectSumologic":
                return new DirectSumologic(name, <any>undefined, { urn })
            case "nobl9:index/directThousandeyes:DirectThousandeyes":
                return new DirectThousandeyes(name, <any>undefined, { urn })
            case "nobl9:index/project:Project":
                return new Project(name, <any>undefined, { urn })
            case "nobl9:index/roleBinding:RoleBinding":
                return new RoleBinding(name, <any>undefined, { urn })
            case "nobl9:index/service:Service":
                return new Service(name, <any>undefined, { urn })
            case "nobl9:index/slo:Slo":
                return new Slo(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("nobl9", "index/agent", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodDiscord", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodEmail", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodJira", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodMsteams", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodOpsgenie", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodPagerduty", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodServicenow", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodSlack", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertMethodWebhook", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/alertPolicy", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/budgetAdjustment", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directAppdynamics", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directAzureMonitor", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directBigquery", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directCloudwatch", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directDatadog", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directDynatrace", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directGcm", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directHoneycomb", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directInfluxdb", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directInstana", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directLightstep", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directLogicMonitor", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directNewrelic", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directPingdom", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directRedshift", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directSplunk", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directSplunkObservability", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directSumologic", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/directThousandeyes", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/project", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/roleBinding", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/service", _module)
pulumi.runtime.registerResourceModule("nobl9", "index/slo", _module)
pulumi.runtime.registerResourcePackage("nobl9", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:nobl9") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
