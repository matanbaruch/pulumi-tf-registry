// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getUserAdfsPublish(args: GetUserAdfsPublishArgs, opts?: pulumi.InvokeOptions): Promise<GetUserAdfsPublishResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortiadc:index/getUserAdfsPublish:getUserAdfsPublish", {
        "id": args.id,
        "mkey": args.mkey,
        "vdom": args.vdom,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUserAdfsPublish.
 */
export interface GetUserAdfsPublishArgs {
    id?: string;
    mkey: string;
    vdom?: string;
}

/**
 * A collection of values returned by getUserAdfsPublish.
 */
export interface GetUserAdfsPublishResult {
    readonly backendServerUrl: string;
    readonly externalUrl: string;
    readonly id: string;
    readonly mkey: string;
    readonly preauth: string;
    readonly proxy: string;
    readonly relyingParty: string;
    readonly status: string;
    readonly vdom?: string;
}
export function getUserAdfsPublishOutput(args: GetUserAdfsPublishOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserAdfsPublishResult> {
    return pulumi.output(args).apply((a: any) => getUserAdfsPublish(a, opts))
}

/**
 * A collection of arguments for invoking getUserAdfsPublish.
 */
export interface GetUserAdfsPublishOutputArgs {
    id?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
