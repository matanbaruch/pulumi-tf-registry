// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LogicAppIntegrationAccountMap extends pulumi.CustomResource {
    /**
     * Get an existing LogicAppIntegrationAccountMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogicAppIntegrationAccountMapState, opts?: pulumi.CustomResourceOptions): LogicAppIntegrationAccountMap {
        return new LogicAppIntegrationAccountMap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/logicAppIntegrationAccountMap:LogicAppIntegrationAccountMap';

    /**
     * Returns true if the given object is an instance of LogicAppIntegrationAccountMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LogicAppIntegrationAccountMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LogicAppIntegrationAccountMap.__pulumiType;
    }

    public readonly content!: pulumi.Output<string>;
    public readonly integrationAccountName!: pulumi.Output<string>;
    public readonly mapType!: pulumi.Output<string>;
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.LogicAppIntegrationAccountMapTimeouts | undefined>;

    /**
     * Create a LogicAppIntegrationAccountMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogicAppIntegrationAccountMapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LogicAppIntegrationAccountMapArgs | LogicAppIntegrationAccountMapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LogicAppIntegrationAccountMapState | undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["integrationAccountName"] = state ? state.integrationAccountName : undefined;
            resourceInputs["mapType"] = state ? state.mapType : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LogicAppIntegrationAccountMapArgs | undefined;
            if ((!args || args.content === undefined) && !opts.urn) {
                throw new Error("Missing required property 'content'");
            }
            if ((!args || args.integrationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'integrationAccountName'");
            }
            if ((!args || args.mapType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mapType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["content"] = args ? args.content : undefined;
            resourceInputs["integrationAccountName"] = args ? args.integrationAccountName : undefined;
            resourceInputs["mapType"] = args ? args.mapType : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LogicAppIntegrationAccountMap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LogicAppIntegrationAccountMap resources.
 */
export interface LogicAppIntegrationAccountMapState {
    content?: pulumi.Input<string>;
    integrationAccountName?: pulumi.Input<string>;
    mapType?: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogicAppIntegrationAccountMapTimeouts>;
}

/**
 * The set of arguments for constructing a LogicAppIntegrationAccountMap resource.
 */
export interface LogicAppIntegrationAccountMapArgs {
    content: pulumi.Input<string>;
    integrationAccountName: pulumi.Input<string>;
    mapType: pulumi.Input<string>;
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.LogicAppIntegrationAccountMapTimeouts>;
}
