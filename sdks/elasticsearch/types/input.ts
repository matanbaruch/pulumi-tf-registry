// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface KibanaAlertAction {
    /**
     * The type of the action, e.g. `.index`, `.webhook`, etc.
     */
    actionTypeId: pulumi.Input<string>;
    /**
     * When to execute the action, e.g. `threshold met` or `recovered`.
     */
    group?: pulumi.Input<string>;
    /**
     * The identifier of the saved action object, a UUID.
     */
    id: pulumi.Input<string>;
    /**
     * Key value pairs passed to the action executor, e.g. a Mustache formatted `message`.
     */
    params?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface KibanaAlertConditions {
    aggregationField?: pulumi.Input<string>;
    aggregationType?: pulumi.Input<string>;
    groupBy?: pulumi.Input<string>;
    indices: pulumi.Input<pulumi.Input<string>[]>;
    termField?: pulumi.Input<string>;
    termSize?: pulumi.Input<number>;
    thresholdComparator: pulumi.Input<string>;
    thresholds: pulumi.Input<pulumi.Input<number>[]>;
    timeField: pulumi.Input<string>;
    timeWindowSize: pulumi.Input<number>;
    timeWindowUnit: pulumi.Input<string>;
}

export interface KibanaAlertSchedule {
    /**
     * Specifies the interval in seconds, minutes, hours or days at which the alert should execute, e.g. 10s, 5m, 1h.
     */
    interval: pulumi.Input<string>;
}

export interface OpendistroIsmPolicyMappingTimeouts {
    create?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface OpendistroRoleIndexPermission {
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    documentLevelSecurity?: pulumi.Input<string>;
    fieldLevelSecurities?: pulumi.Input<pulumi.Input<string>[]>;
    indexPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    maskedFields?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface OpendistroRoleTenantPermission {
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    tenantPatterns?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface OpensearchAuditConfigAudit {
    disabledRestCategories?: pulumi.Input<pulumi.Input<string>[]>;
    disabledTransportCategories?: pulumi.Input<pulumi.Input<string>[]>;
    enableRest?: pulumi.Input<boolean>;
    enableTransport?: pulumi.Input<boolean>;
    excludeSensitiveHeaders?: pulumi.Input<boolean>;
    ignoreRequests?: pulumi.Input<pulumi.Input<string>[]>;
    ignoreUsers?: pulumi.Input<pulumi.Input<string>[]>;
    logRequestBody?: pulumi.Input<boolean>;
    resolveBulkRequests?: pulumi.Input<boolean>;
    resolveIndices?: pulumi.Input<boolean>;
}

export interface OpensearchAuditConfigCompliance {
    enabled?: pulumi.Input<boolean>;
    externalConfig?: pulumi.Input<boolean>;
    internalConfig?: pulumi.Input<boolean>;
    readIgnoreUsers?: pulumi.Input<pulumi.Input<string>[]>;
    readMetadataOnly?: pulumi.Input<boolean>;
    readWatchedFields?: pulumi.Input<pulumi.Input<inputs.OpensearchAuditConfigComplianceReadWatchedField>[]>;
    writeIgnoreUsers?: pulumi.Input<pulumi.Input<string>[]>;
    writeLogDiffs?: pulumi.Input<boolean>;
    writeMetadataOnly?: pulumi.Input<boolean>;
    writeWatchedIndices?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface OpensearchAuditConfigComplianceReadWatchedField {
    fields: pulumi.Input<pulumi.Input<string>[]>;
    index: pulumi.Input<string>;
}

export interface OpensearchIsmPolicyMappingTimeouts {
    create?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface OpensearchRoleIndexPermission {
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    documentLevelSecurity?: pulumi.Input<string>;
    fieldLevelSecurities?: pulumi.Input<pulumi.Input<string>[]>;
    indexPatterns?: pulumi.Input<pulumi.Input<string>[]>;
    maskedFields?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface OpensearchRoleTenantPermission {
    allowedActions?: pulumi.Input<pulumi.Input<string>[]>;
    tenantPatterns?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface XpackRoleApplication {
    application: pulumi.Input<string>;
    privileges?: pulumi.Input<pulumi.Input<string>[]>;
    resources?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface XpackRoleIndex {
    fieldSecurity?: pulumi.Input<inputs.XpackRoleIndexFieldSecurity>;
    names: pulumi.Input<pulumi.Input<string>[]>;
    privileges: pulumi.Input<pulumi.Input<string>[]>;
    query?: pulumi.Input<string>;
}

export interface XpackRoleIndexFieldSecurity {
    excepts?: pulumi.Input<pulumi.Input<string>[]>;
    grants?: pulumi.Input<pulumi.Input<string>[]>;
}
