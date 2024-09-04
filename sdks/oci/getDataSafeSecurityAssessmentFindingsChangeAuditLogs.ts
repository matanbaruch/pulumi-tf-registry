// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDataSafeSecurityAssessmentFindingsChangeAuditLogs(args: GetDataSafeSecurityAssessmentFindingsChangeAuditLogsArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSafeSecurityAssessmentFindingsChangeAuditLogsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDataSafeSecurityAssessmentFindingsChangeAuditLogs:getDataSafeSecurityAssessmentFindingsChangeAuditLogs", {
        "filters": args.filters,
        "findingKey": args.findingKey,
        "findingTitle": args.findingTitle,
        "id": args.id,
        "isRiskDeferred": args.isRiskDeferred,
        "modifiedBy": args.modifiedBy,
        "securityAssessmentId": args.securityAssessmentId,
        "severity": args.severity,
        "timeUpdatedGreaterThanOrEqualTo": args.timeUpdatedGreaterThanOrEqualTo,
        "timeUpdatedLessThan": args.timeUpdatedLessThan,
        "timeValidUntilGreaterThanOrEqualTo": args.timeValidUntilGreaterThanOrEqualTo,
        "timeValidUntilLessThan": args.timeValidUntilLessThan,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDataSafeSecurityAssessmentFindingsChangeAuditLogs.
 */
export interface GetDataSafeSecurityAssessmentFindingsChangeAuditLogsArgs {
    filters?: inputs.GetDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter[];
    findingKey?: string;
    findingTitle?: string;
    id?: string;
    isRiskDeferred?: boolean;
    modifiedBy?: string;
    securityAssessmentId: string;
    severity?: string;
    timeUpdatedGreaterThanOrEqualTo?: string;
    timeUpdatedLessThan?: string;
    timeValidUntilGreaterThanOrEqualTo?: string;
    timeValidUntilLessThan?: string;
}

/**
 * A collection of values returned by getDataSafeSecurityAssessmentFindingsChangeAuditLogs.
 */
export interface GetDataSafeSecurityAssessmentFindingsChangeAuditLogsResult {
    readonly filters?: outputs.GetDataSafeSecurityAssessmentFindingsChangeAuditLogsFilter[];
    readonly findingKey?: string;
    readonly findingTitle?: string;
    readonly findingsChangeAuditLogCollections: outputs.GetDataSafeSecurityAssessmentFindingsChangeAuditLogsFindingsChangeAuditLogCollection[];
    readonly id: string;
    readonly isRiskDeferred?: boolean;
    readonly modifiedBy?: string;
    readonly securityAssessmentId: string;
    readonly severity?: string;
    readonly timeUpdatedGreaterThanOrEqualTo?: string;
    readonly timeUpdatedLessThan?: string;
    readonly timeValidUntilGreaterThanOrEqualTo?: string;
    readonly timeValidUntilLessThan?: string;
}
export function getDataSafeSecurityAssessmentFindingsChangeAuditLogsOutput(args: GetDataSafeSecurityAssessmentFindingsChangeAuditLogsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSafeSecurityAssessmentFindingsChangeAuditLogsResult> {
    return pulumi.output(args).apply((a: any) => getDataSafeSecurityAssessmentFindingsChangeAuditLogs(a, opts))
}

/**
 * A collection of arguments for invoking getDataSafeSecurityAssessmentFindingsChangeAuditLogs.
 */
export interface GetDataSafeSecurityAssessmentFindingsChangeAuditLogsOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetDataSafeSecurityAssessmentFindingsChangeAuditLogsFilterArgs>[]>;
    findingKey?: pulumi.Input<string>;
    findingTitle?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isRiskDeferred?: pulumi.Input<boolean>;
    modifiedBy?: pulumi.Input<string>;
    securityAssessmentId: pulumi.Input<string>;
    severity?: pulumi.Input<string>;
    timeUpdatedGreaterThanOrEqualTo?: pulumi.Input<string>;
    timeUpdatedLessThan?: pulumi.Input<string>;
    timeValidUntilGreaterThanOrEqualTo?: pulumi.Input<string>;
    timeValidUntilLessThan?: pulumi.Input<string>;
}
