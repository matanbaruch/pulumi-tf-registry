// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getCatalogV2(args: GetCatalogV2Args, opts?: pulumi.InvokeOptions): Promise<GetCatalogV2Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("rancher2:index/getCatalogV2:getCatalogV2", {
        "clusterId": args.clusterId,
        "exponentialBackoffMaxRetries": args.exponentialBackoffMaxRetries,
        "exponentialBackoffMaxWait": args.exponentialBackoffMaxWait,
        "exponentialBackoffMinWait": args.exponentialBackoffMinWait,
        "id": args.id,
        "insecurePlainHttp": args.insecurePlainHttp,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getCatalogV2.
 */
export interface GetCatalogV2Args {
    clusterId: string;
    exponentialBackoffMaxRetries?: number;
    exponentialBackoffMaxWait?: number;
    exponentialBackoffMinWait?: number;
    id?: string;
    insecurePlainHttp?: boolean;
    name: string;
}

/**
 * A collection of values returned by getCatalogV2.
 */
export interface GetCatalogV2Result {
    readonly annotations: {[key: string]: string};
    readonly caBundle: string;
    readonly clusterId: string;
    readonly enabled: boolean;
    readonly exponentialBackoffMaxRetries: number;
    readonly exponentialBackoffMaxWait: number;
    readonly exponentialBackoffMinWait: number;
    readonly gitBranch: string;
    readonly gitRepo: string;
    readonly id: string;
    readonly insecure: boolean;
    readonly insecurePlainHttp?: boolean;
    readonly labels: {[key: string]: string};
    readonly name: string;
    readonly resourceVersion: string;
    readonly secretName: string;
    readonly secretNamespace: string;
    readonly serviceAccount: string;
    readonly serviceAccountNamespace: string;
    readonly url: string;
}
export function getCatalogV2Output(args: GetCatalogV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCatalogV2Result> {
    return pulumi.output(args).apply((a: any) => getCatalogV2(a, opts))
}

/**
 * A collection of arguments for invoking getCatalogV2.
 */
export interface GetCatalogV2OutputArgs {
    clusterId: pulumi.Input<string>;
    exponentialBackoffMaxRetries?: pulumi.Input<number>;
    exponentialBackoffMaxWait?: pulumi.Input<number>;
    exponentialBackoffMinWait?: pulumi.Input<number>;
    id?: pulumi.Input<string>;
    insecurePlainHttp?: pulumi.Input<boolean>;
    name: pulumi.Input<string>;
}
