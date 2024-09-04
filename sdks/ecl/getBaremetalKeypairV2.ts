// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getBaremetalKeypairV2(args: GetBaremetalKeypairV2Args, opts?: pulumi.InvokeOptions): Promise<GetBaremetalKeypairV2Result> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("ecl:index/getBaremetalKeypairV2:getBaremetalKeypairV2", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBaremetalKeypairV2.
 */
export interface GetBaremetalKeypairV2Args {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getBaremetalKeypairV2.
 */
export interface GetBaremetalKeypairV2Result {
    readonly fingerprint: string;
    readonly id: string;
    readonly name: string;
    readonly publicKey: string;
}
export function getBaremetalKeypairV2Output(args: GetBaremetalKeypairV2OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBaremetalKeypairV2Result> {
    return pulumi.output(args).apply((a: any) => getBaremetalKeypairV2(a, opts))
}

/**
 * A collection of arguments for invoking getBaremetalKeypairV2.
 */
export interface GetBaremetalKeypairV2OutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
