// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDmsInstanceProfile(args: GetDmsInstanceProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetDmsInstanceProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getDmsInstanceProfile:getDmsInstanceProfile", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDmsInstanceProfile.
 */
export interface GetDmsInstanceProfileArgs {
    id: string;
}

/**
 * A collection of values returned by getDmsInstanceProfile.
 */
export interface GetDmsInstanceProfileResult {
    readonly availabilityZone: string;
    readonly description: string;
    readonly id: string;
    readonly instanceProfileArn: string;
    readonly instanceProfileCreationTime: string;
    readonly instanceProfileIdentifier: string;
    readonly instanceProfileName: string;
    readonly kmsKeyArn: string;
    readonly networkType: string;
    readonly publiclyAccessible: boolean;
    readonly subnetGroupIdentifier: string;
    readonly tags: outputs.GetDmsInstanceProfileTag[];
    readonly vpcSecurityGroups: string[];
}
export function getDmsInstanceProfileOutput(args: GetDmsInstanceProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDmsInstanceProfileResult> {
    return pulumi.output(args).apply((a: any) => getDmsInstanceProfile(a, opts))
}

/**
 * A collection of arguments for invoking getDmsInstanceProfile.
 */
export interface GetDmsInstanceProfileOutputArgs {
    id: pulumi.Input<string>;
}
