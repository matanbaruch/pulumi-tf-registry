// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRegionEnumerationVsphere(args: GetRegionEnumerationVsphereArgs, opts?: pulumi.InvokeOptions): Promise<GetRegionEnumerationVsphereResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vra:index/getRegionEnumerationVsphere:getRegionEnumerationVsphere", {
        "acceptSelfSignedCert": args.acceptSelfSignedCert,
        "dcId": args.dcId,
        "hostname": args.hostname,
        "id": args.id,
        "password": args.password,
        "username": args.username,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRegionEnumerationVsphere.
 */
export interface GetRegionEnumerationVsphereArgs {
    acceptSelfSignedCert?: boolean;
    dcId?: string;
    hostname: string;
    id?: string;
    password: string;
    username: string;
}

/**
 * A collection of values returned by getRegionEnumerationVsphere.
 */
export interface GetRegionEnumerationVsphereResult {
    readonly acceptSelfSignedCert?: boolean;
    readonly dcId?: string;
    readonly hostname: string;
    readonly id: string;
    readonly password: string;
    readonly regions: string[];
    readonly username: string;
}
export function getRegionEnumerationVsphereOutput(args: GetRegionEnumerationVsphereOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegionEnumerationVsphereResult> {
    return pulumi.output(args).apply((a: any) => getRegionEnumerationVsphere(a, opts))
}

/**
 * A collection of arguments for invoking getRegionEnumerationVsphere.
 */
export interface GetRegionEnumerationVsphereOutputArgs {
    acceptSelfSignedCert?: pulumi.Input<boolean>;
    dcId?: pulumi.Input<string>;
    hostname: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}
