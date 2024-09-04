// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecretV2(args: GetSecretV2Args, opts?: pulumi.InvokeOptions): Promise<GetSecretV2Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("rancher2:index/getSecretV2:getSecretV2", {
        "clusterId": args.clusterId,
        "id": args.id,
        "name": args.name,
        "namespace": args.namespace,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecretV2.
 */
export interface GetSecretV2Args {
    clusterId: string;
    id?: string;
    name: string;
    namespace?: string;
}

/**
 * A collection of values returned by getSecretV2.
 */
export interface GetSecretV2Result {
    readonly annotations: {[key: string]: string};
    readonly clusterId: string;
    readonly data: {[key: string]: string};
    readonly id: string;
    readonly immutable: boolean;
    readonly labels: {[key: string]: string};
    readonly name: string;
    readonly namespace?: string;
    readonly resourceVersion: string;
    readonly type: string;
}
export function getSecretV2Output(args: GetSecretV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretV2Result> {
    return pulumi.output(args).apply((a: any) => getSecretV2(a, opts))
}

/**
 * A collection of arguments for invoking getSecretV2.
 */
export interface GetSecretV2OutputArgs {
    clusterId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
}
