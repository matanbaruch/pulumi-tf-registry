// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getUserSecurityQuestions(args: GetUserSecurityQuestionsArgs, opts?: pulumi.InvokeOptions): Promise<GetUserSecurityQuestionsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("okta:index/getUserSecurityQuestions:getUserSecurityQuestions", {
        "id": args.id,
        "userId": args.userId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getUserSecurityQuestions.
 */
export interface GetUserSecurityQuestionsArgs {
    id?: string;
    userId: string;
}

/**
 * A collection of values returned by getUserSecurityQuestions.
 */
export interface GetUserSecurityQuestionsResult {
    readonly id: string;
    readonly questions: outputs.GetUserSecurityQuestionsQuestion[];
    readonly userId: string;
}
export function getUserSecurityQuestionsOutput(args: GetUserSecurityQuestionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserSecurityQuestionsResult> {
    return pulumi.output(args).apply((a: any) => getUserSecurityQuestions(a, opts))
}

/**
 * A collection of arguments for invoking getUserSecurityQuestions.
 */
export interface GetUserSecurityQuestionsOutputArgs {
    id?: pulumi.Input<string>;
    userId: pulumi.Input<string>;
}
