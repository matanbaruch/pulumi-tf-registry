// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBlueprintDefinition(args: GetBlueprintDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetBlueprintDefinitionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getBlueprintDefinition:getBlueprintDefinition", {
        "id": args.id,
        "name": args.name,
        "scopeId": args.scopeId,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBlueprintDefinition.
 */
export interface GetBlueprintDefinitionArgs {
    id?: string;
    name: string;
    scopeId: string;
    timeouts?: inputs.GetBlueprintDefinitionTimeouts;
}

/**
 * A collection of values returned by getBlueprintDefinition.
 */
export interface GetBlueprintDefinitionResult {
    readonly description: string;
    readonly displayName: string;
    readonly id: string;
    readonly lastModified: string;
    readonly name: string;
    readonly scopeId: string;
    readonly targetScope: string;
    readonly timeCreated: string;
    readonly timeouts?: outputs.GetBlueprintDefinitionTimeouts;
    readonly versions: string[];
}
export function getBlueprintDefinitionOutput(args: GetBlueprintDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBlueprintDefinitionResult> {
    return pulumi.output(args).apply((a: any) => getBlueprintDefinition(a, opts))
}

/**
 * A collection of arguments for invoking getBlueprintDefinition.
 */
export interface GetBlueprintDefinitionOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    scopeId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GetBlueprintDefinitionTimeoutsArgs>;
}
