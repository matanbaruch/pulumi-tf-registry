// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim(args: GetMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimArgs, opts?: pulumi.InvokeOptions): Promise<GetMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("solacebrokerappliance:index/getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim:getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim", {
        "msgVpnName": args.msgVpnName,
        "oauthJwtClaimName": args.oauthJwtClaimName,
        "restConsumerName": args.restConsumerName,
        "restDeliveryPointName": args.restDeliveryPointName,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim.
 */
export interface GetMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimArgs {
    msgVpnName: string;
    oauthJwtClaimName: string;
    restConsumerName: string;
    restDeliveryPointName: string;
}

/**
 * A collection of values returned by getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim.
 */
export interface GetMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly msgVpnName: string;
    readonly oauthJwtClaimName: string;
    readonly oauthJwtClaimValue: string;
    readonly restConsumerName: string;
    readonly restDeliveryPointName: string;
}
export function getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimOutput(args: GetMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResult> {
    return pulumi.output(args).apply((a: any) => getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim(a, opts))
}

/**
 * A collection of arguments for invoking getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim.
 */
export interface GetMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimOutputArgs {
    msgVpnName: pulumi.Input<string>;
    oauthJwtClaimName: pulumi.Input<string>;
    restConsumerName: pulumi.Input<string>;
    restDeliveryPointName: pulumi.Input<string>;
}
