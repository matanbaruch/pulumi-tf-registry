// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getManagementAgentManagementAgentDataSources(args: GetManagementAgentManagementAgentDataSourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementAgentManagementAgentDataSourcesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getManagementAgentManagementAgentDataSources:getManagementAgentManagementAgentDataSources", {
        "filters": args.filters,
        "id": args.id,
        "managementAgentId": args.managementAgentId,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getManagementAgentManagementAgentDataSources.
 */
export interface GetManagementAgentManagementAgentDataSourcesArgs {
    filters?: inputs.GetManagementAgentManagementAgentDataSourcesFilter[];
    id?: string;
    managementAgentId: string;
    name?: string;
}

/**
 * A collection of values returned by getManagementAgentManagementAgentDataSources.
 */
export interface GetManagementAgentManagementAgentDataSourcesResult {
    readonly dataSources: outputs.GetManagementAgentManagementAgentDataSourcesDataSource[];
    readonly filters?: outputs.GetManagementAgentManagementAgentDataSourcesFilter[];
    readonly id: string;
    readonly managementAgentId: string;
    readonly name?: string;
}
export function getManagementAgentManagementAgentDataSourcesOutput(args: GetManagementAgentManagementAgentDataSourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementAgentManagementAgentDataSourcesResult> {
    return pulumi.output(args).apply((a: any) => getManagementAgentManagementAgentDataSources(a, opts))
}

/**
 * A collection of arguments for invoking getManagementAgentManagementAgentDataSources.
 */
export interface GetManagementAgentManagementAgentDataSourcesOutputArgs {
    filters?: pulumi.Input<pulumi.Input<inputs.GetManagementAgentManagementAgentDataSourcesFilterArgs>[]>;
    id?: pulumi.Input<string>;
    managementAgentId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
