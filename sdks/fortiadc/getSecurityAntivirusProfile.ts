// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSecurityAntivirusProfile(args: GetSecurityAntivirusProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetSecurityAntivirusProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getSecurityAntivirusProfile:getSecurityAntivirusProfile", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSecurityAntivirusProfile.
 */
export interface GetSecurityAntivirusProfileArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getSecurityAntivirusProfile.
 */
export interface GetSecurityAntivirusProfileResult {
    readonly analyticsDb: string;
    readonly analyticsMaxUpload: string;
    readonly avBlockLog: string;
    readonly avVirusLog: string;
    readonly comments: string;
    readonly emulator: string;
    readonly ftgdAnalytics: string;
    readonly id: string;
    readonly mkey: string;
    readonly options: string;
    readonly oversize: string;
    readonly oversizeLimit: string;
    readonly scanBzip2: string;
    readonly streamingContentBypass: string;
    readonly uncompNestLimit: string;
    readonly uncompSizeLimit: string;
    readonly vdom?: string;
}
export function getSecurityAntivirusProfileOutput(args: GetSecurityAntivirusProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecurityAntivirusProfileResult> {
    return pulumi.output(args).apply((a: any) => getSecurityAntivirusProfile(a, opts))
}

/**
 * A collection of arguments for invoking getSecurityAntivirusProfile.
 */
export interface GetSecurityAntivirusProfileOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
