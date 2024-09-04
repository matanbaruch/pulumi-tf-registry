// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDestinationOfRedirectedTraffic(args: GetDestinationOfRedirectedTrafficArgs, opts?: pulumi.InvokeOptions): Promise<GetDestinationOfRedirectedTrafficResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aci:index/getDestinationOfRedirectedTraffic:getDestinationOfRedirectedTraffic", {
        "annotation": args.annotation,
        "description": args.description,
        "destName": args.destName,
        "id": args.id,
        "ip": args.ip,
        "ip2": args.ip2,
        "mac": args.mac,
        "nameAlias": args.nameAlias,
        "podId": args.podId,
        "relationVnsRsRedirectHealthGroup": args.relationVnsRsRedirectHealthGroup,
        "serviceRedirectPolicyDn": args.serviceRedirectPolicyDn,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDestinationOfRedirectedTraffic.
 */
export interface GetDestinationOfRedirectedTrafficArgs {
    annotation?: string;
    description?: string;
    destName?: string;
    id?: string;
    ip: string;
    ip2?: string;
    mac?: string;
    nameAlias?: string;
    podId?: string;
    relationVnsRsRedirectHealthGroup?: string;
    serviceRedirectPolicyDn: string;
}

/**
 * A collection of values returned by getDestinationOfRedirectedTraffic.
 */
export interface GetDestinationOfRedirectedTrafficResult {
    readonly annotation: string;
    readonly description: string;
    readonly destName: string;
    readonly id: string;
    readonly ip: string;
    readonly ip2: string;
    readonly mac: string;
    readonly nameAlias: string;
    readonly podId: string;
    readonly relationVnsRsRedirectHealthGroup: string;
    readonly serviceRedirectPolicyDn: string;
}
export function getDestinationOfRedirectedTrafficOutput(args: GetDestinationOfRedirectedTrafficOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDestinationOfRedirectedTrafficResult> {
    return pulumi.output(args).apply((a: any) => getDestinationOfRedirectedTraffic(a, opts))
}

/**
 * A collection of arguments for invoking getDestinationOfRedirectedTraffic.
 */
export interface GetDestinationOfRedirectedTrafficOutputArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    destName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    ip: pulumi.Input<string>;
    ip2?: pulumi.Input<string>;
    mac?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    podId?: pulumi.Input<string>;
    relationVnsRsRedirectHealthGroup?: pulumi.Input<string>;
    serviceRedirectPolicyDn: pulumi.Input<string>;
}
