// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ApiKeyArgs, ApiKeyState } from "./apiKey";
export type ApiKey = import("./apiKey").ApiKey;
export const ApiKey: typeof import("./apiKey").ApiKey = null as any;
utilities.lazyLoad(exports, ["ApiKey"], () => require("./apiKey"));

export { BoardArgs, BoardState } from "./board";
export type Board = import("./board").Board;
export const Board: typeof import("./board").Board = null as any;
utilities.lazyLoad(exports, ["Board"], () => require("./board"));

export { BurnAlertArgs, BurnAlertState } from "./burnAlert";
export type BurnAlert = import("./burnAlert").BurnAlert;
export const BurnAlert: typeof import("./burnAlert").BurnAlert = null as any;
utilities.lazyLoad(exports, ["BurnAlert"], () => require("./burnAlert"));

export { ColumnArgs, ColumnState } from "./column";
export type Column = import("./column").Column;
export const Column: typeof import("./column").Column = null as any;
utilities.lazyLoad(exports, ["Column"], () => require("./column"));

export { DatasetArgs, DatasetState } from "./dataset";
export type Dataset = import("./dataset").Dataset;
export const Dataset: typeof import("./dataset").Dataset = null as any;
utilities.lazyLoad(exports, ["Dataset"], () => require("./dataset"));

export { DatasetDefinitionArgs, DatasetDefinitionState } from "./datasetDefinition";
export type DatasetDefinition = import("./datasetDefinition").DatasetDefinition;
export const DatasetDefinition: typeof import("./datasetDefinition").DatasetDefinition = null as any;
utilities.lazyLoad(exports, ["DatasetDefinition"], () => require("./datasetDefinition"));

export { DerivedColumnArgs, DerivedColumnState } from "./derivedColumn";
export type DerivedColumn = import("./derivedColumn").DerivedColumn;
export const DerivedColumn: typeof import("./derivedColumn").DerivedColumn = null as any;
utilities.lazyLoad(exports, ["DerivedColumn"], () => require("./derivedColumn"));

export { EmailRecipientArgs, EmailRecipientState } from "./emailRecipient";
export type EmailRecipient = import("./emailRecipient").EmailRecipient;
export const EmailRecipient: typeof import("./emailRecipient").EmailRecipient = null as any;
utilities.lazyLoad(exports, ["EmailRecipient"], () => require("./emailRecipient"));

export { EnvironmentArgs, EnvironmentState } from "./environment";
export type Environment = import("./environment").Environment;
export const Environment: typeof import("./environment").Environment = null as any;
utilities.lazyLoad(exports, ["Environment"], () => require("./environment"));

export { GetAuthMetadataArgs, GetAuthMetadataResult, GetAuthMetadataOutputArgs } from "./getAuthMetadata";
export const getAuthMetadata: typeof import("./getAuthMetadata").getAuthMetadata = null as any;
export const getAuthMetadataOutput: typeof import("./getAuthMetadata").getAuthMetadataOutput = null as any;
utilities.lazyLoad(exports, ["getAuthMetadata","getAuthMetadataOutput"], () => require("./getAuthMetadata"));

export { GetColumnArgs, GetColumnResult, GetColumnOutputArgs } from "./getColumn";
export const getColumn: typeof import("./getColumn").getColumn = null as any;
export const getColumnOutput: typeof import("./getColumn").getColumnOutput = null as any;
utilities.lazyLoad(exports, ["getColumn","getColumnOutput"], () => require("./getColumn"));

export { GetColumnsArgs, GetColumnsResult, GetColumnsOutputArgs } from "./getColumns";
export const getColumns: typeof import("./getColumns").getColumns = null as any;
export const getColumnsOutput: typeof import("./getColumns").getColumnsOutput = null as any;
utilities.lazyLoad(exports, ["getColumns","getColumnsOutput"], () => require("./getColumns"));

export { GetDatasetArgs, GetDatasetResult, GetDatasetOutputArgs } from "./getDataset";
export const getDataset: typeof import("./getDataset").getDataset = null as any;
export const getDatasetOutput: typeof import("./getDataset").getDatasetOutput = null as any;
utilities.lazyLoad(exports, ["getDataset","getDatasetOutput"], () => require("./getDataset"));

export { GetDatasetsArgs, GetDatasetsResult, GetDatasetsOutputArgs } from "./getDatasets";
export const getDatasets: typeof import("./getDatasets").getDatasets = null as any;
export const getDatasetsOutput: typeof import("./getDatasets").getDatasetsOutput = null as any;
utilities.lazyLoad(exports, ["getDatasets","getDatasetsOutput"], () => require("./getDatasets"));

export { GetDerivedColumnArgs, GetDerivedColumnResult, GetDerivedColumnOutputArgs } from "./getDerivedColumn";
export const getDerivedColumn: typeof import("./getDerivedColumn").getDerivedColumn = null as any;
export const getDerivedColumnOutput: typeof import("./getDerivedColumn").getDerivedColumnOutput = null as any;
utilities.lazyLoad(exports, ["getDerivedColumn","getDerivedColumnOutput"], () => require("./getDerivedColumn"));

export { GetDerivedColumnsArgs, GetDerivedColumnsResult, GetDerivedColumnsOutputArgs } from "./getDerivedColumns";
export const getDerivedColumns: typeof import("./getDerivedColumns").getDerivedColumns = null as any;
export const getDerivedColumnsOutput: typeof import("./getDerivedColumns").getDerivedColumnsOutput = null as any;
utilities.lazyLoad(exports, ["getDerivedColumns","getDerivedColumnsOutput"], () => require("./getDerivedColumns"));

export { GetEnvironmentArgs, GetEnvironmentResult, GetEnvironmentOutputArgs } from "./getEnvironment";
export const getEnvironment: typeof import("./getEnvironment").getEnvironment = null as any;
export const getEnvironmentOutput: typeof import("./getEnvironment").getEnvironmentOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironment","getEnvironmentOutput"], () => require("./getEnvironment"));

export { GetEnvironmentsArgs, GetEnvironmentsResult, GetEnvironmentsOutputArgs } from "./getEnvironments";
export const getEnvironments: typeof import("./getEnvironments").getEnvironments = null as any;
export const getEnvironmentsOutput: typeof import("./getEnvironments").getEnvironmentsOutput = null as any;
utilities.lazyLoad(exports, ["getEnvironments","getEnvironmentsOutput"], () => require("./getEnvironments"));

export { GetQueryResultArgs, GetQueryResultResult, GetQueryResultOutputArgs } from "./getQueryResult";
export const getQueryResult: typeof import("./getQueryResult").getQueryResult = null as any;
export const getQueryResultOutput: typeof import("./getQueryResult").getQueryResultOutput = null as any;
utilities.lazyLoad(exports, ["getQueryResult","getQueryResultOutput"], () => require("./getQueryResult"));

export { GetQuerySpecificationArgs, GetQuerySpecificationResult, GetQuerySpecificationOutputArgs } from "./getQuerySpecification";
export const getQuerySpecification: typeof import("./getQuerySpecification").getQuerySpecification = null as any;
export const getQuerySpecificationOutput: typeof import("./getQuerySpecification").getQuerySpecificationOutput = null as any;
utilities.lazyLoad(exports, ["getQuerySpecification","getQuerySpecificationOutput"], () => require("./getQuerySpecification"));

export { GetRecipientArgs, GetRecipientResult, GetRecipientOutputArgs } from "./getRecipient";
export const getRecipient: typeof import("./getRecipient").getRecipient = null as any;
export const getRecipientOutput: typeof import("./getRecipient").getRecipientOutput = null as any;
utilities.lazyLoad(exports, ["getRecipient","getRecipientOutput"], () => require("./getRecipient"));

export { GetRecipientsArgs, GetRecipientsResult, GetRecipientsOutputArgs } from "./getRecipients";
export const getRecipients: typeof import("./getRecipients").getRecipients = null as any;
export const getRecipientsOutput: typeof import("./getRecipients").getRecipientsOutput = null as any;
utilities.lazyLoad(exports, ["getRecipients","getRecipientsOutput"], () => require("./getRecipients"));

export { GetSloArgs, GetSloResult, GetSloOutputArgs } from "./getSlo";
export const getSlo: typeof import("./getSlo").getSlo = null as any;
export const getSloOutput: typeof import("./getSlo").getSloOutput = null as any;
utilities.lazyLoad(exports, ["getSlo","getSloOutput"], () => require("./getSlo"));

export { GetSlosArgs, GetSlosResult, GetSlosOutputArgs } from "./getSlos";
export const getSlos: typeof import("./getSlos").getSlos = null as any;
export const getSlosOutput: typeof import("./getSlos").getSlosOutput = null as any;
utilities.lazyLoad(exports, ["getSlos","getSlosOutput"], () => require("./getSlos"));

export { GetTriggerRecipientArgs, GetTriggerRecipientResult, GetTriggerRecipientOutputArgs } from "./getTriggerRecipient";
export const getTriggerRecipient: typeof import("./getTriggerRecipient").getTriggerRecipient = null as any;
export const getTriggerRecipientOutput: typeof import("./getTriggerRecipient").getTriggerRecipientOutput = null as any;
utilities.lazyLoad(exports, ["getTriggerRecipient","getTriggerRecipientOutput"], () => require("./getTriggerRecipient"));

export { MarkerArgs, MarkerState } from "./marker";
export type Marker = import("./marker").Marker;
export const Marker: typeof import("./marker").Marker = null as any;
utilities.lazyLoad(exports, ["Marker"], () => require("./marker"));

export { MarkerSettingArgs, MarkerSettingState } from "./markerSetting";
export type MarkerSetting = import("./markerSetting").MarkerSetting;
export const MarkerSetting: typeof import("./markerSetting").MarkerSetting = null as any;
utilities.lazyLoad(exports, ["MarkerSetting"], () => require("./markerSetting"));

export { MsteamsRecipientArgs, MsteamsRecipientState } from "./msteamsRecipient";
export type MsteamsRecipient = import("./msteamsRecipient").MsteamsRecipient;
export const MsteamsRecipient: typeof import("./msteamsRecipient").MsteamsRecipient = null as any;
utilities.lazyLoad(exports, ["MsteamsRecipient"], () => require("./msteamsRecipient"));

export { MsteamsWorkflowRecipientArgs, MsteamsWorkflowRecipientState } from "./msteamsWorkflowRecipient";
export type MsteamsWorkflowRecipient = import("./msteamsWorkflowRecipient").MsteamsWorkflowRecipient;
export const MsteamsWorkflowRecipient: typeof import("./msteamsWorkflowRecipient").MsteamsWorkflowRecipient = null as any;
utilities.lazyLoad(exports, ["MsteamsWorkflowRecipient"], () => require("./msteamsWorkflowRecipient"));

export { PagerdutyRecipientArgs, PagerdutyRecipientState } from "./pagerdutyRecipient";
export type PagerdutyRecipient = import("./pagerdutyRecipient").PagerdutyRecipient;
export const PagerdutyRecipient: typeof import("./pagerdutyRecipient").PagerdutyRecipient = null as any;
utilities.lazyLoad(exports, ["PagerdutyRecipient"], () => require("./pagerdutyRecipient"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { QueryArgs, QueryState } from "./query";
export type Query = import("./query").Query;
export const Query: typeof import("./query").Query = null as any;
utilities.lazyLoad(exports, ["Query"], () => require("./query"));

export { QueryAnnotationArgs, QueryAnnotationState } from "./queryAnnotation";
export type QueryAnnotation = import("./queryAnnotation").QueryAnnotation;
export const QueryAnnotation: typeof import("./queryAnnotation").QueryAnnotation = null as any;
utilities.lazyLoad(exports, ["QueryAnnotation"], () => require("./queryAnnotation"));

export { SlackRecipientArgs, SlackRecipientState } from "./slackRecipient";
export type SlackRecipient = import("./slackRecipient").SlackRecipient;
export const SlackRecipient: typeof import("./slackRecipient").SlackRecipient = null as any;
utilities.lazyLoad(exports, ["SlackRecipient"], () => require("./slackRecipient"));

export { SloArgs, SloState } from "./slo";
export type Slo = import("./slo").Slo;
export const Slo: typeof import("./slo").Slo = null as any;
utilities.lazyLoad(exports, ["Slo"], () => require("./slo"));

export { TriggerArgs, TriggerState } from "./trigger";
export type Trigger = import("./trigger").Trigger;
export const Trigger: typeof import("./trigger").Trigger = null as any;
utilities.lazyLoad(exports, ["Trigger"], () => require("./trigger"));

export { WebhookRecipientArgs, WebhookRecipientState } from "./webhookRecipient";
export type WebhookRecipient = import("./webhookRecipient").WebhookRecipient;
export const WebhookRecipient: typeof import("./webhookRecipient").WebhookRecipient = null as any;
utilities.lazyLoad(exports, ["WebhookRecipient"], () => require("./webhookRecipient"));


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
            case "honeycombio:index/apiKey:ApiKey":
                return new ApiKey(name, <any>undefined, { urn })
            case "honeycombio:index/board:Board":
                return new Board(name, <any>undefined, { urn })
            case "honeycombio:index/burnAlert:BurnAlert":
                return new BurnAlert(name, <any>undefined, { urn })
            case "honeycombio:index/column:Column":
                return new Column(name, <any>undefined, { urn })
            case "honeycombio:index/dataset:Dataset":
                return new Dataset(name, <any>undefined, { urn })
            case "honeycombio:index/datasetDefinition:DatasetDefinition":
                return new DatasetDefinition(name, <any>undefined, { urn })
            case "honeycombio:index/derivedColumn:DerivedColumn":
                return new DerivedColumn(name, <any>undefined, { urn })
            case "honeycombio:index/emailRecipient:EmailRecipient":
                return new EmailRecipient(name, <any>undefined, { urn })
            case "honeycombio:index/environment:Environment":
                return new Environment(name, <any>undefined, { urn })
            case "honeycombio:index/marker:Marker":
                return new Marker(name, <any>undefined, { urn })
            case "honeycombio:index/markerSetting:MarkerSetting":
                return new MarkerSetting(name, <any>undefined, { urn })
            case "honeycombio:index/msteamsRecipient:MsteamsRecipient":
                return new MsteamsRecipient(name, <any>undefined, { urn })
            case "honeycombio:index/msteamsWorkflowRecipient:MsteamsWorkflowRecipient":
                return new MsteamsWorkflowRecipient(name, <any>undefined, { urn })
            case "honeycombio:index/pagerdutyRecipient:PagerdutyRecipient":
                return new PagerdutyRecipient(name, <any>undefined, { urn })
            case "honeycombio:index/query:Query":
                return new Query(name, <any>undefined, { urn })
            case "honeycombio:index/queryAnnotation:QueryAnnotation":
                return new QueryAnnotation(name, <any>undefined, { urn })
            case "honeycombio:index/slackRecipient:SlackRecipient":
                return new SlackRecipient(name, <any>undefined, { urn })
            case "honeycombio:index/slo:Slo":
                return new Slo(name, <any>undefined, { urn })
            case "honeycombio:index/trigger:Trigger":
                return new Trigger(name, <any>undefined, { urn })
            case "honeycombio:index/webhookRecipient:WebhookRecipient":
                return new WebhookRecipient(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("honeycombio", "index/apiKey", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/board", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/burnAlert", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/column", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/dataset", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/datasetDefinition", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/derivedColumn", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/emailRecipient", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/environment", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/marker", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/markerSetting", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/msteamsRecipient", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/msteamsWorkflowRecipient", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/pagerdutyRecipient", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/query", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/queryAnnotation", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/slackRecipient", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/slo", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/trigger", _module)
pulumi.runtime.registerResourceModule("honeycombio", "index/webhookRecipient", _module)
pulumi.runtime.registerResourcePackage("honeycombio", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:honeycombio") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
