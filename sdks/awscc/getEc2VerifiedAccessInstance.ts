// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEc2VerifiedAccessInstance(args: GetEc2VerifiedAccessInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2VerifiedAccessInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getEc2VerifiedAccessInstance:getEc2VerifiedAccessInstance", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEc2VerifiedAccessInstance.
 */
export interface GetEc2VerifiedAccessInstanceArgs {
    id: string;
}

/**
 * A collection of values returned by getEc2VerifiedAccessInstance.
 */
export interface GetEc2VerifiedAccessInstanceResult {
    readonly creationTime: string;
    readonly description: string;
    readonly fipsEnabled: boolean;
    readonly id: string;
    readonly lastUpdatedTime: string;
    readonly loggingConfigurations: outputs.GetEc2VerifiedAccessInstanceLoggingConfigurations;
    readonly tags: outputs.GetEc2VerifiedAccessInstanceTag[];
    readonly verifiedAccessInstanceId: string;
    readonly verifiedAccessTrustProviderIds: string[];
    readonly verifiedAccessTrustProviders: outputs.GetEc2VerifiedAccessInstanceVerifiedAccessTrustProvider[];
}
export function getEc2VerifiedAccessInstanceOutput(args: GetEc2VerifiedAccessInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2VerifiedAccessInstanceResult> {
    return pulumi.output(args).apply((a: any) => getEc2VerifiedAccessInstance(a, opts))
}

/**
 * A collection of arguments for invoking getEc2VerifiedAccessInstance.
 */
export interface GetEc2VerifiedAccessInstanceOutputArgs {
    id: pulumi.Input<string>;
}
