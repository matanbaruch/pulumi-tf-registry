// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface EventDefinitionNotification {
    notificationId: string;
}

export interface EventDefinitionNotificationSettings {
    backlogSize?: number;
    gracePeriodMs?: number;
}

export interface ExtractorConverter {
    config: string;
    type: string;
}

export interface SidecarsSidecar {
    assignments: outputs.SidecarsSidecarAssignment[];
    nodeId: string;
}

export interface SidecarsSidecarAssignment {
    collectorId: string;
    configurationId: string;
}

