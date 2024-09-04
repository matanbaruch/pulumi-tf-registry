// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIamInstanceProfile(args: GetIamInstanceProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetIamInstanceProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getIamInstanceProfile:getIamInstanceProfile", {
        "id": args.id,
        "name": args.name,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamInstanceProfile.
 */
export interface GetIamInstanceProfileArgs {
    id?: string;
    name: string;
}

/**
 * A collection of values returned by getIamInstanceProfile.
 */
export interface GetIamInstanceProfileResult {
    readonly arn: string;
    readonly createDate: string;
    readonly id: string;
    readonly name: string;
    readonly path: string;
    readonly roleArn: string;
    readonly roleId: string;
    readonly roleName: string;
}
export function getIamInstanceProfileOutput(args: GetIamInstanceProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamInstanceProfileResult> {
    return pulumi.output(args).apply((a: any) => getIamInstanceProfile(a, opts))
}

/**
 * A collection of arguments for invoking getIamInstanceProfile.
 */
export interface GetIamInstanceProfileOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
