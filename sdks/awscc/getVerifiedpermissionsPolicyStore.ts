// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getVerifiedpermissionsPolicyStore(args: GetVerifiedpermissionsPolicyStoreArgs, opts?: pulumi.InvokeOptions): Promise<GetVerifiedpermissionsPolicyStoreResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getVerifiedpermissionsPolicyStore:getVerifiedpermissionsPolicyStore", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getVerifiedpermissionsPolicyStore.
 */
export interface GetVerifiedpermissionsPolicyStoreArgs {
    id: string;
}

/**
 * A collection of values returned by getVerifiedpermissionsPolicyStore.
 */
export interface GetVerifiedpermissionsPolicyStoreResult {
    readonly arn: string;
    readonly description: string;
    readonly id: string;
    readonly policyStoreId: string;
    readonly schema: outputs.GetVerifiedpermissionsPolicyStoreSchema;
    readonly validationSettings: outputs.GetVerifiedpermissionsPolicyStoreValidationSettings;
}
export function getVerifiedpermissionsPolicyStoreOutput(args: GetVerifiedpermissionsPolicyStoreOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVerifiedpermissionsPolicyStoreResult> {
    return pulumi.output(args).apply((a: any) => getVerifiedpermissionsPolicyStore(a, opts))
}

/**
 * A collection of arguments for invoking getVerifiedpermissionsPolicyStore.
 */
export interface GetVerifiedpermissionsPolicyStoreOutputArgs {
    id: pulumi.Input<string>;
}
