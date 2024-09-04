// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getComputeInstanceGroupManager(args?: GetComputeInstanceGroupManagerArgs, opts?: pulumi.InvokeOptions): Promise<GetComputeInstanceGroupManagerResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("google:index/getComputeInstanceGroupManager:getComputeInstanceGroupManager", {
        "id": args.id,
        "name": args.name,
        "project": args.project,
        "selfLink": args.selfLink,
        "zone": args.zone,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getComputeInstanceGroupManager.
 */
export interface GetComputeInstanceGroupManagerArgs {
    id?: string;
    name?: string;
    project?: string;
    selfLink?: string;
    zone?: string;
}

/**
 * A collection of values returned by getComputeInstanceGroupManager.
 */
export interface GetComputeInstanceGroupManagerResult {
    readonly allInstancesConfigs: outputs.GetComputeInstanceGroupManagerAllInstancesConfig[];
    readonly autoHealingPolicies: outputs.GetComputeInstanceGroupManagerAutoHealingPolicy[];
    readonly baseInstanceName: string;
    readonly creationTimestamp: string;
    readonly description: string;
    readonly fingerprint: string;
    readonly id: string;
    readonly instanceGroup: string;
    readonly instanceLifecyclePolicies: outputs.GetComputeInstanceGroupManagerInstanceLifecyclePolicy[];
    readonly listManagedInstancesResults: string;
    readonly name?: string;
    readonly namedPorts: outputs.GetComputeInstanceGroupManagerNamedPort[];
    readonly operation: string;
    readonly project?: string;
    readonly selfLink?: string;
    readonly statefulDisks: outputs.GetComputeInstanceGroupManagerStatefulDisk[];
    readonly statefulExternalIps: outputs.GetComputeInstanceGroupManagerStatefulExternalIp[];
    readonly statefulInternalIps: outputs.GetComputeInstanceGroupManagerStatefulInternalIp[];
    readonly statuses: outputs.GetComputeInstanceGroupManagerStatus[];
    readonly targetPools: string[];
    readonly targetSize: number;
    readonly updatePolicies: outputs.GetComputeInstanceGroupManagerUpdatePolicy[];
    readonly versions: outputs.GetComputeInstanceGroupManagerVersion[];
    readonly waitForInstances: boolean;
    readonly waitForInstancesStatus: string;
    readonly zone?: string;
}
export function getComputeInstanceGroupManagerOutput(args?: GetComputeInstanceGroupManagerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetComputeInstanceGroupManagerResult> {
    return pulumi.output(args).apply((a: any) => getComputeInstanceGroupManager(a, opts))
}

/**
 * A collection of arguments for invoking getComputeInstanceGroupManager.
 */
export interface GetComputeInstanceGroupManagerOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    zone?: pulumi.Input<string>;
}
