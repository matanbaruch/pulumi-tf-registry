// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVoiceidDomain(args: GetVoiceidDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetVoiceidDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getVoiceidDomain:getVoiceidDomain", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVoiceidDomain.
 */
export interface GetVoiceidDomainArgs {
    id: string;
}

/**
 * A collection of values returned by getVoiceidDomain.
 */
export interface GetVoiceidDomainResult {
    readonly description: string;
    readonly domainId: string;
    readonly id: string;
    readonly name: string;
    readonly serverSideEncryptionConfiguration: outputs.GetVoiceidDomainServerSideEncryptionConfiguration;
    readonly tags: outputs.GetVoiceidDomainTag[];
}
export function getVoiceidDomainOutput(args: GetVoiceidDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVoiceidDomainResult> {
    return pulumi.output(args).apply((a: any) => getVoiceidDomain(a, opts))
}

/**
 * A collection of arguments for invoking getVoiceidDomain.
 */
export interface GetVoiceidDomainOutputArgs {
    id: pulumi.Input<string>;
}
