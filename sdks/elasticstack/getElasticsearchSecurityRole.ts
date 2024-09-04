// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElasticsearchSecurityRole(args: GetElasticsearchSecurityRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchSecurityRoleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("elasticstack:index/getElasticsearchSecurityRole:getElasticsearchSecurityRole", {
        "elasticsearchConnection": args.elasticsearchConnection,
        "name": args.name,
        "runAs": args.runAs,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchSecurityRole.
 */
export interface GetElasticsearchSecurityRoleArgs {
    /**
     * @deprecated Deprecated
     */
    elasticsearchConnection?: inputs.GetElasticsearchSecurityRoleElasticsearchConnection;
    name: string;
    runAs?: string[];
}

/**
 * A collection of values returned by getElasticsearchSecurityRole.
 */
export interface GetElasticsearchSecurityRoleResult {
    readonly applications: outputs.GetElasticsearchSecurityRoleApplication[];
    readonly clusters: string[];
    /**
     * @deprecated Deprecated
     */
    readonly elasticsearchConnection?: outputs.GetElasticsearchSecurityRoleElasticsearchConnection;
    readonly global: string;
    readonly id: string;
    readonly indices: outputs.GetElasticsearchSecurityRoleIndex[];
    readonly metadata: string;
    readonly name: string;
    readonly runAs?: string[];
}
export function getElasticsearchSecurityRoleOutput(args: GetElasticsearchSecurityRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchSecurityRoleResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchSecurityRole(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchSecurityRole.
 */
export interface GetElasticsearchSecurityRoleOutputArgs {
    /**
     * @deprecated Deprecated
     */
    elasticsearchConnection?: pulumi.Input<inputs.GetElasticsearchSecurityRoleElasticsearchConnectionArgs>;
    name: pulumi.Input<string>;
    runAs?: pulumi.Input<pulumi.Input<string>[]>;
}
