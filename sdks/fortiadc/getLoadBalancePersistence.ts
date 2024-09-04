// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getLoadBalancePersistence(args: GetLoadBalancePersistenceArgs, opts?: pulumi.InvokeOptions): Promise<GetLoadBalancePersistenceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getLoadBalancePersistence:getLoadBalancePersistence", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getLoadBalancePersistence.
 */
export interface GetLoadBalancePersistenceArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getLoadBalancePersistence.
 */
export interface GetLoadBalancePersistenceResult {
    readonly avpno: string;
    readonly cookieCustomAttr: string;
    readonly cookieCustomAttrVal: string;
    readonly cookieDomain: string;
    readonly cookieHttponly: string;
    readonly cookieSamesite: string;
    readonly cookieSecure: string;
    readonly id: string;
    readonly ipv4Maskbits: string;
    readonly ipv6Maskbits: string;
    readonly iso8583BitmapRelation: string;
    readonly keyvalueRelation: string;
    readonly keyword: string;
    readonly matchAcrossServers: string;
    readonly mkey: string;
    readonly overrideConnectionLimit: string;
    readonly radiusAttributeRelation: string;
    readonly sessKwType: string;
    readonly timeout: string;
    readonly type: string;
    readonly vdom?: string;
}
export function getLoadBalancePersistenceOutput(args: GetLoadBalancePersistenceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLoadBalancePersistenceResult> {
    return pulumi.output(args).apply((a: any) => getLoadBalancePersistence(a, opts))
}

/**
 * A collection of arguments for invoking getLoadBalancePersistence.
 */
export interface GetLoadBalancePersistenceOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
