// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AlertArgs, AlertState } from "./alert";
export type Alert = import("./alert").Alert;
export const Alert: typeof import("./alert").Alert = null as any;
utilities.lazyLoad(exports, ["Alert"], () => require("./alert"));

export { AlertingRuleArgs, AlertingRuleState } from "./alertingRule";
export type AlertingRule = import("./alertingRule").AlertingRule;
export const AlertingRule: typeof import("./alertingRule").AlertingRule = null as any;
utilities.lazyLoad(exports, ["AlertingRule"], () => require("./alertingRule"));

export { DashboardArgs, DashboardState } from "./dashboard";
export type Dashboard = import("./dashboard").Dashboard;
export const Dashboard: typeof import("./dashboard").Dashboard = null as any;
utilities.lazyLoad(exports, ["Dashboard"], () => require("./dashboard"));

export { EventQueryArgs, EventQueryState } from "./eventQuery";
export type EventQuery = import("./eventQuery").EventQuery;
export const EventQuery: typeof import("./eventQuery").EventQuery = null as any;
utilities.lazyLoad(exports, ["EventQuery"], () => require("./eventQuery"));

export { GetStreamArgs, GetStreamResult, GetStreamOutputArgs } from "./getStream";
export const getStream: typeof import("./getStream").getStream = null as any;
export const getStreamOutput: typeof import("./getStream").getStreamOutput = null as any;
utilities.lazyLoad(exports, ["getStream","getStreamOutput"], () => require("./getStream"));

export { InferredServiceRuleArgs, InferredServiceRuleState } from "./inferredServiceRule";
export type InferredServiceRule = import("./inferredServiceRule").InferredServiceRule;
export const InferredServiceRule: typeof import("./inferredServiceRule").InferredServiceRule = null as any;
utilities.lazyLoad(exports, ["InferredServiceRule"], () => require("./inferredServiceRule"));

export { MetricConditionArgs, MetricConditionState } from "./metricCondition";
export type MetricCondition = import("./metricCondition").MetricCondition;
export const MetricCondition: typeof import("./metricCondition").MetricCondition = null as any;
utilities.lazyLoad(exports, ["MetricCondition"], () => require("./metricCondition"));

export { MetricDashboardArgs, MetricDashboardState } from "./metricDashboard";
export type MetricDashboard = import("./metricDashboard").MetricDashboard;
export const MetricDashboard: typeof import("./metricDashboard").MetricDashboard = null as any;
utilities.lazyLoad(exports, ["MetricDashboard"], () => require("./metricDashboard"));

export { PagerdutyDestinationArgs, PagerdutyDestinationState } from "./pagerdutyDestination";
export type PagerdutyDestination = import("./pagerdutyDestination").PagerdutyDestination;
export const PagerdutyDestination: typeof import("./pagerdutyDestination").PagerdutyDestination = null as any;
utilities.lazyLoad(exports, ["PagerdutyDestination"], () => require("./pagerdutyDestination"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { SamlGroupMappingsArgs, SamlGroupMappingsState } from "./samlGroupMappings";
export type SamlGroupMappings = import("./samlGroupMappings").SamlGroupMappings;
export const SamlGroupMappings: typeof import("./samlGroupMappings").SamlGroupMappings = null as any;
utilities.lazyLoad(exports, ["SamlGroupMappings"], () => require("./samlGroupMappings"));

export { ServicenowDestinationArgs, ServicenowDestinationState } from "./servicenowDestination";
export type ServicenowDestination = import("./servicenowDestination").ServicenowDestination;
export const ServicenowDestination: typeof import("./servicenowDestination").ServicenowDestination = null as any;
utilities.lazyLoad(exports, ["ServicenowDestination"], () => require("./servicenowDestination"));

export { SlackDestinationArgs, SlackDestinationState } from "./slackDestination";
export type SlackDestination = import("./slackDestination").SlackDestination;
export const SlackDestination: typeof import("./slackDestination").SlackDestination = null as any;
utilities.lazyLoad(exports, ["SlackDestination"], () => require("./slackDestination"));

export { SnoozeRuleArgs, SnoozeRuleState } from "./snoozeRule";
export type SnoozeRule = import("./snoozeRule").SnoozeRule;
export const SnoozeRule: typeof import("./snoozeRule").SnoozeRule = null as any;
utilities.lazyLoad(exports, ["SnoozeRule"], () => require("./snoozeRule"));

export { StreamArgs, StreamState } from "./stream";
export type Stream = import("./stream").Stream;
export const Stream: typeof import("./stream").Stream = null as any;
utilities.lazyLoad(exports, ["Stream"], () => require("./stream"));

export { StreamConditionArgs, StreamConditionState } from "./streamCondition";
export type StreamCondition = import("./streamCondition").StreamCondition;
export const StreamCondition: typeof import("./streamCondition").StreamCondition = null as any;
utilities.lazyLoad(exports, ["StreamCondition"], () => require("./streamCondition"));

export { StreamDashboardArgs, StreamDashboardState } from "./streamDashboard";
export type StreamDashboard = import("./streamDashboard").StreamDashboard;
export const StreamDashboard: typeof import("./streamDashboard").StreamDashboard = null as any;
utilities.lazyLoad(exports, ["StreamDashboard"], () => require("./streamDashboard"));

export { UserRoleBindingArgs, UserRoleBindingState } from "./userRoleBinding";
export type UserRoleBinding = import("./userRoleBinding").UserRoleBinding;
export const UserRoleBinding: typeof import("./userRoleBinding").UserRoleBinding = null as any;
utilities.lazyLoad(exports, ["UserRoleBinding"], () => require("./userRoleBinding"));

export { WebhookDestinationArgs, WebhookDestinationState } from "./webhookDestination";
export type WebhookDestination = import("./webhookDestination").WebhookDestination;
export const WebhookDestination: typeof import("./webhookDestination").WebhookDestination = null as any;
utilities.lazyLoad(exports, ["WebhookDestination"], () => require("./webhookDestination"));


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
            case "lightstep:index/alert:Alert":
                return new Alert(name, <any>undefined, { urn })
            case "lightstep:index/alertingRule:AlertingRule":
                return new AlertingRule(name, <any>undefined, { urn })
            case "lightstep:index/dashboard:Dashboard":
                return new Dashboard(name, <any>undefined, { urn })
            case "lightstep:index/eventQuery:EventQuery":
                return new EventQuery(name, <any>undefined, { urn })
            case "lightstep:index/inferredServiceRule:InferredServiceRule":
                return new InferredServiceRule(name, <any>undefined, { urn })
            case "lightstep:index/metricCondition:MetricCondition":
                return new MetricCondition(name, <any>undefined, { urn })
            case "lightstep:index/metricDashboard:MetricDashboard":
                return new MetricDashboard(name, <any>undefined, { urn })
            case "lightstep:index/pagerdutyDestination:PagerdutyDestination":
                return new PagerdutyDestination(name, <any>undefined, { urn })
            case "lightstep:index/samlGroupMappings:SamlGroupMappings":
                return new SamlGroupMappings(name, <any>undefined, { urn })
            case "lightstep:index/servicenowDestination:ServicenowDestination":
                return new ServicenowDestination(name, <any>undefined, { urn })
            case "lightstep:index/slackDestination:SlackDestination":
                return new SlackDestination(name, <any>undefined, { urn })
            case "lightstep:index/snoozeRule:SnoozeRule":
                return new SnoozeRule(name, <any>undefined, { urn })
            case "lightstep:index/stream:Stream":
                return new Stream(name, <any>undefined, { urn })
            case "lightstep:index/streamCondition:StreamCondition":
                return new StreamCondition(name, <any>undefined, { urn })
            case "lightstep:index/streamDashboard:StreamDashboard":
                return new StreamDashboard(name, <any>undefined, { urn })
            case "lightstep:index/userRoleBinding:UserRoleBinding":
                return new UserRoleBinding(name, <any>undefined, { urn })
            case "lightstep:index/webhookDestination:WebhookDestination":
                return new WebhookDestination(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("lightstep", "index/alert", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/alertingRule", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/dashboard", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/eventQuery", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/inferredServiceRule", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/metricCondition", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/metricDashboard", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/pagerdutyDestination", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/samlGroupMappings", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/servicenowDestination", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/slackDestination", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/snoozeRule", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/stream", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/streamCondition", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/streamDashboard", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/userRoleBinding", _module)
pulumi.runtime.registerResourceModule("lightstep", "index/webhookDestination", _module)
pulumi.runtime.registerResourcePackage("lightstep", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:lightstep") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
