// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision(args: GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision:getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision", {
        "executionId": args.executionId,
        "id": args.id,
        "managedDatabaseId": args.managedDatabaseId,
        "opcNamedCredentialId": args.opcNamedCredentialId,
        "sqlObjectId": args.sqlObjectId,
        "sqlTuningAdvisorTaskId": args.sqlTuningAdvisorTaskId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.
 */
export interface GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionArgs {
    executionId: string;
    id?: string;
    managedDatabaseId: string;
    opcNamedCredentialId?: string;
    sqlObjectId: string;
    sqlTuningAdvisorTaskId: string;
}

/**
 * A collection of values returned by getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.
 */
export interface GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionResult {
    readonly executionId: string;
    readonly id: string;
    readonly managedDatabaseId: string;
    readonly modifieds: outputs.GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionModified[];
    readonly opcNamedCredentialId?: string;
    readonly originals: outputs.GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOriginal[];
    readonly sqlObjectId: string;
    readonly sqlTuningAdvisorTaskId: string;
}
export function getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOutput(args: GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparision.
 */
export interface GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksExecutionPlanStatsComparisionOutputArgs {
    executionId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    managedDatabaseId: pulumi.Input<string>;
    opcNamedCredentialId?: pulumi.Input<string>;
    sqlObjectId: pulumi.Input<string>;
    sqlTuningAdvisorTaskId: pulumi.Input<string>;
}
