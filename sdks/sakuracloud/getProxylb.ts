// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getProxylb(args?: GetProxylbArgs, opts?: pulumi.InvokeOptions): Promise<GetProxylbResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("sakuracloud:index/getProxylb:getProxylb", {
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getProxylb.
 */
export interface GetProxylbArgs {
    filter?: inputs.GetProxylbFilter;
    id?: string;
}

/**
 * A collection of values returned by getProxylb.
 */
export interface GetProxylbResult {
    readonly backendHttpKeepAlive: string;
    readonly bindPorts: outputs.GetProxylbBindPort[];
    readonly certificates: outputs.GetProxylbCertificate[];
    readonly description: string;
    readonly filter?: outputs.GetProxylbFilter;
    readonly fqdn: string;
    readonly gzip: boolean;
    readonly healthChecks: outputs.GetProxylbHealthCheck[];
    readonly iconId: string;
    readonly id: string;
    readonly name: string;
    readonly plan: number;
    readonly proxyNetworks: string[];
    readonly proxyProtocol: boolean;
    readonly region: string;
    readonly rules: outputs.GetProxylbRule[];
    readonly servers: outputs.GetProxylbServer[];
    readonly sorryServers: outputs.GetProxylbSorryServer[];
    readonly stickySession: boolean;
    readonly syslogs: outputs.GetProxylbSyslog[];
    readonly tags: string[];
    readonly timeout: number;
    readonly vip: string;
    readonly vipFailover: boolean;
}
export function getProxylbOutput(args?: GetProxylbOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProxylbResult> {
    return pulumi.output(args).apply((a: any) => getProxylb(a, opts))
}

/**
 * A collection of arguments for invoking getProxylb.
 */
export interface GetProxylbOutputArgs {
    filter?: pulumi.Input<inputs.GetProxylbFilterArgs>;
    id?: pulumi.Input<string>;
}
