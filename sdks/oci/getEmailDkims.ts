// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getEmailDkims(args: GetEmailDkimsArgs, opts?: pulumi.InvokeOptions): Promise<GetEmailDkimsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getEmailDkims:getEmailDkims", {
        "emailDomainId": args.emailDomainId,
        "filters": args.filters,
        "id": args.id,
        "name": args.name,
        "state": args.state,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getEmailDkims.
 */
export interface GetEmailDkimsArgs {
    emailDomainId: string;
    filters?: inputs.GetEmailDkimsFilter[];
    id?: string;
    name?: string;
    state?: string;
}

/**
 * A collection of values returned by getEmailDkims.
 */
export interface GetEmailDkimsResult {
    readonly dkimCollections: outputs.GetEmailDkimsDkimCollection[];
    readonly emailDomainId: string;
    readonly filters?: outputs.GetEmailDkimsFilter[];
    readonly id?: string;
    readonly name?: string;
    readonly state?: string;
}
export function getEmailDkimsOutput(args: GetEmailDkimsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEmailDkimsResult> {
    return pulumi.output(args).apply((a: any) => getEmailDkims(a, opts))
}

/**
 * A collection of arguments for invoking getEmailDkims.
 */
export interface GetEmailDkimsOutputArgs {
    emailDomainId: pulumi.Input<string>;
    filters?: pulumi.Input<pulumi.Input<inputs.GetEmailDkimsFilterArgs>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
}
