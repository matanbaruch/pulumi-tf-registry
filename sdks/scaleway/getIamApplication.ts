// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getIamApplication(args?: GetIamApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetIamApplicationResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("scaleway:index/getIamApplication:getIamApplication", {
        "applicationId": args.applicationId,
        "id": args.id,
        "name": args.name,
        "organizationId": args.organizationId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getIamApplication.
 */
export interface GetIamApplicationArgs {
    applicationId?: string;
    id?: string;
    name?: string;
    organizationId?: string;
}

/**
 * A collection of values returned by getIamApplication.
 */
export interface GetIamApplicationResult {
    readonly applicationId?: string;
    readonly createdAt: string;
    readonly description: string;
    readonly editable: boolean;
    readonly id: string;
    readonly name?: string;
    readonly organizationId?: string;
    readonly tags: string[];
    readonly updatedAt: string;
}
export function getIamApplicationOutput(args?: GetIamApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIamApplicationResult> {
    return pulumi.output(args).apply((a: any) => getIamApplication(a, opts))
}

/**
 * A collection of arguments for invoking getIamApplication.
 */
export interface GetIamApplicationOutputArgs {
    applicationId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
}
