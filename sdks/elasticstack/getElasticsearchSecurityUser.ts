// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getElasticsearchSecurityUser(args: GetElasticsearchSecurityUserArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticsearchSecurityUserResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("elasticstack:index/getElasticsearchSecurityUser:getElasticsearchSecurityUser", {
        "elasticsearchConnection": args.elasticsearchConnection,
        "username": args.username,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getElasticsearchSecurityUser.
 */
export interface GetElasticsearchSecurityUserArgs {
    /**
     * @deprecated Deprecated
     */
    elasticsearchConnection?: inputs.GetElasticsearchSecurityUserElasticsearchConnection;
    username: string;
}

/**
 * A collection of values returned by getElasticsearchSecurityUser.
 */
export interface GetElasticsearchSecurityUserResult {
    /**
     * @deprecated Deprecated
     */
    readonly elasticsearchConnection?: outputs.GetElasticsearchSecurityUserElasticsearchConnection;
    readonly email: string;
    readonly enabled: boolean;
    readonly fullName: string;
    readonly id: string;
    readonly metadata: string;
    readonly roles: string[];
    readonly username: string;
}
export function getElasticsearchSecurityUserOutput(args: GetElasticsearchSecurityUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticsearchSecurityUserResult> {
    return pulumi.output(args).apply((a: any) => getElasticsearchSecurityUser(a, opts))
}

/**
 * A collection of arguments for invoking getElasticsearchSecurityUser.
 */
export interface GetElasticsearchSecurityUserOutputArgs {
    /**
     * @deprecated Deprecated
     */
    elasticsearchConnection?: pulumi.Input<inputs.GetElasticsearchSecurityUserElasticsearchConnectionArgs>;
    username: pulumi.Input<string>;
}
