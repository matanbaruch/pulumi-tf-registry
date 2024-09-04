// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getAutostoppingRuleVm(args: GetAutostoppingRuleVmArgs, opts?: pulumi.InvokeOptions): Promise<GetAutostoppingRuleVmResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("harness:index/getAutostoppingRuleVm:getAutostoppingRuleVm", {
        "cloudConnectorId": args.cloudConnectorId,
        "customDomains": args.customDomains,
        "depends": args.depends,
        "filter": args.filter,
        "https": args.https,
        "id": args.id,
        "idleTimeMins": args.idleTimeMins,
        "name": args.name,
        "tcps": args.tcps,
        "useSpot": args.useSpot,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getAutostoppingRuleVm.
 */
export interface GetAutostoppingRuleVmArgs {
    cloudConnectorId: string;
    customDomains?: string[];
    depends?: inputs.GetAutostoppingRuleVmDepend[];
    filter: inputs.GetAutostoppingRuleVmFilter;
    https?: inputs.GetAutostoppingRuleVmHttp[];
    id?: string;
    idleTimeMins?: number;
    name: string;
    tcps?: inputs.GetAutostoppingRuleVmTcp[];
    useSpot?: boolean;
}

/**
 * A collection of values returned by getAutostoppingRuleVm.
 */
export interface GetAutostoppingRuleVmResult {
    readonly cloudConnectorId: string;
    readonly customDomains?: string[];
    readonly depends?: outputs.GetAutostoppingRuleVmDepend[];
    readonly filter: outputs.GetAutostoppingRuleVmFilter;
    readonly https?: outputs.GetAutostoppingRuleVmHttp[];
    readonly id: string;
    readonly identifier: number;
    readonly idleTimeMins?: number;
    readonly name: string;
    readonly tcps?: outputs.GetAutostoppingRuleVmTcp[];
    readonly useSpot?: boolean;
}
export function getAutostoppingRuleVmOutput(args: GetAutostoppingRuleVmOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAutostoppingRuleVmResult> {
    return pulumi.output(args).apply((a: any) => getAutostoppingRuleVm(a, opts))
}

/**
 * A collection of arguments for invoking getAutostoppingRuleVm.
 */
export interface GetAutostoppingRuleVmOutputArgs {
    cloudConnectorId: pulumi.Input<string>;
    customDomains?: pulumi.Input<pulumi.Input<string>[]>;
    depends?: pulumi.Input<pulumi.Input<inputs.GetAutostoppingRuleVmDependArgs>[]>;
    filter: pulumi.Input<inputs.GetAutostoppingRuleVmFilterArgs>;
    https?: pulumi.Input<pulumi.Input<inputs.GetAutostoppingRuleVmHttpArgs>[]>;
    id?: pulumi.Input<string>;
    idleTimeMins?: pulumi.Input<number>;
    name: pulumi.Input<string>;
    tcps?: pulumi.Input<pulumi.Input<inputs.GetAutostoppingRuleVmTcpArgs>[]>;
    useSpot?: pulumi.Input<boolean>;
}
