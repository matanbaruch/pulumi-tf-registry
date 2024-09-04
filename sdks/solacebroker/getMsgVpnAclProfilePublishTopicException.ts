// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMsgVpnAclProfilePublishTopicException(args: GetMsgVpnAclProfilePublishTopicExceptionArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnAclProfilePublishTopicExceptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebroker:index/getMsgVpnAclProfilePublishTopicException:getMsgVpnAclProfilePublishTopicException", {
        "aclProfileName": args.aclProfileName,
        "msgVpnName": args.msgVpnName,
        "publishTopicException": args.publishTopicException,
        "publishTopicExceptionSyntax": args.publishTopicExceptionSyntax,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnAclProfilePublishTopicException.
 */
export interface GetMsgVpnAclProfilePublishTopicExceptionArgs {
    aclProfileName: string;
    msgVpnName: string;
    publishTopicException: string;
    publishTopicExceptionSyntax: string;
}

/**
 * A collection of values returned by getMsgVpnAclProfilePublishTopicException.
 */
export interface GetMsgVpnAclProfilePublishTopicExceptionResult {
    readonly aclProfileName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly msgVpnName: string;
    readonly publishTopicException: string;
    readonly publishTopicExceptionSyntax: string;
}
export function getMsgVpnAclProfilePublishTopicExceptionOutput(args: GetMsgVpnAclProfilePublishTopicExceptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnAclProfilePublishTopicExceptionResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnAclProfilePublishTopicException(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnAclProfilePublishTopicException.
 */
export interface GetMsgVpnAclProfilePublishTopicExceptionOutputArgs {
    aclProfileName: pulumi.Input<string>;
    msgVpnName: pulumi.Input<string>;
    publishTopicException: pulumi.Input<string>;
    publishTopicExceptionSyntax: pulumi.Input<string>;
}
