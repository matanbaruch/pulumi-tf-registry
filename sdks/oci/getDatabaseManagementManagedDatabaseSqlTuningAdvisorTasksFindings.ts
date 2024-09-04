// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings(args: GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings:getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings", {
        "beginExecId": args.beginExecId,
        "endExecId": args.endExecId,
        "filters": args.filters,
        "findingFilter": args.findingFilter,
        "id": args.id,
        "indexHashFilter": args.indexHashFilter,
        "managedDatabaseId": args.managedDatabaseId,
        "opcNamedCredentialId": args.opcNamedCredentialId,
        "searchPeriod": args.searchPeriod,
        "sqlTuningAdvisorTaskId": args.sqlTuningAdvisorTaskId,
        "statsHashFilter": args.statsHashFilter,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.
 */
export interface GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsArgs {
    beginExecId?: string;
    endExecId?: string;
    filters?: inputs.GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter[];
    findingFilter?: string;
    id?: string;
    indexHashFilter?: string;
    managedDatabaseId: string;
    opcNamedCredentialId?: string;
    searchPeriod?: string;
    sqlTuningAdvisorTaskId: string;
    statsHashFilter?: string;
}

/**
 * A collection of values returned by getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.
 */
export interface GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsResult {
    readonly beginExecId?: string;
    readonly endExecId?: string;
    readonly filters?: outputs.GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilter[];
    readonly findingFilter?: string;
    readonly id: string;
    readonly indexHashFilter?: string;
    readonly managedDatabaseId: string;
    readonly opcNamedCredentialId?: string;
    readonly searchPeriod?: string;
    readonly sqlTuningAdvisorTaskFindingCollections: outputs.GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsSqlTuningAdvisorTaskFindingCollection[];
    readonly sqlTuningAdvisorTaskId: string;
    readonly statsHashFilter?: string;
}
export function getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsOutput(args: GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsResult> {
    return pulumi.output(args).apply((a: any) => getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings(a, opts))
}

/**
 * A collection of arguments for invoking getDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindings.
 */
export interface GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsOutputArgs {
    beginExecId?: pulumi.Input<string>;
    endExecId?: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetDatabaseManagementManagedDatabaseSqlTuningAdvisorTasksFindingsFilterArgs>[]>;
    findingFilter?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    indexHashFilter?: pulumi.Input<string>;
    managedDatabaseId: pulumi.Input<string>;
    opcNamedCredentialId?: pulumi.Input<string>;
    searchPeriod?: pulumi.Input<string>;
    sqlTuningAdvisorTaskId: pulumi.Input<string>;
    statsHashFilter?: pulumi.Input<string>;
}
