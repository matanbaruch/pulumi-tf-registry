// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getActiongroupconfig(args?: GetActiongroupconfigArgs, opts?: pulumi.InvokeOptions): Promise<GetActiongroupconfigResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("avi:index/getActiongroupconfig:getActiongroupconfig", {
        "id": args.id,
        "name": args.name,
        "tenantRef": args.tenantRef,
        "uuid": args.uuid,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getActiongroupconfig.
 */
export interface GetActiongroupconfigArgs {
    id?: string;
    name?: string;
    tenantRef?: string;
    uuid?: string;
}

/**
 * A collection of values returned by getActiongroupconfig.
 */
export interface GetActiongroupconfigResult {
    readonly actionScriptConfigRef: string;
    readonly autoscaleTriggerNotification: string;
    readonly configpbAttributes: outputs.GetActiongroupconfigConfigpbAttribute[];
    readonly description: string;
    readonly emailConfigRef: string;
    readonly externalOnly: string;
    readonly id: string;
    readonly level: string;
    readonly name: string;
    readonly snmpTrapProfileRef: string;
    readonly syslogConfigRef: string;
    readonly tenantRef: string;
    readonly uuid: string;
}
export function getActiongroupconfigOutput(args?: GetActiongroupconfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetActiongroupconfigResult> {
    return pulumi.output(args).apply((a: any) => getActiongroupconfig(a, opts))
}

/**
 * A collection of arguments for invoking getActiongroupconfig.
 */
export interface GetActiongroupconfigOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
