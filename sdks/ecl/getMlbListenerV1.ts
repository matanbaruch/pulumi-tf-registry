// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMlbListenerV1(args?: GetMlbListenerV1Args, opts?: pulumi.InvokeOptions): Promise<GetMlbListenerV1Result> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecl:index/getMlbListenerV1:getMlbListenerV1", {
        "configurationStatus": args.configurationStatus,
        "description": args.description,
        "id": args.id,
        "ipAddress": args.ipAddress,
        "loadBalancerId": args.loadBalancerId,
        "name": args.name,
        "operationStatus": args.operationStatus,
        "port": args.port,
        "protocol": args.protocol,
        "tags": args.tags,
        "tenantId": args.tenantId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMlbListenerV1.
 */
export interface GetMlbListenerV1Args {
    configurationStatus?: string;
    description?: string;
    id?: string;
    ipAddress?: string;
    loadBalancerId?: string;
    name?: string;
    operationStatus?: string;
    port?: number;
    protocol?: string;
    tags?: {[key: string]: string};
    tenantId?: string;
}

/**
 * A collection of values returned by getMlbListenerV1.
 */
export interface GetMlbListenerV1Result {
    readonly configurationStatus: string;
    readonly description: string;
    readonly id: string;
    readonly ipAddress: string;
    readonly loadBalancerId: string;
    readonly name: string;
    readonly operationStatus: string;
    readonly port: number;
    readonly protocol: string;
    readonly tags: {[key: string]: string};
    readonly tenantId: string;
}
export function getMlbListenerV1Output(args?: GetMlbListenerV1OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMlbListenerV1Result> {
    return pulumi.output(args).apply((a: any) => getMlbListenerV1(a, opts))
}

/**
 * A collection of arguments for invoking getMlbListenerV1.
 */
export interface GetMlbListenerV1OutputArgs {
    configurationStatus?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ipAddress?: pulumi.Input<string>;
    loadBalancerId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    operationStatus?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    protocol?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tenantId?: pulumi.Input<string>;
}
