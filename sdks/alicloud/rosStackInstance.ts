// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RosStackInstance extends pulumi.CustomResource {
    /**
     * Get an existing RosStackInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RosStackInstanceState, opts?: pulumi.CustomResourceOptions): RosStackInstance {
        return new RosStackInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/rosStackInstance:RosStackInstance';

    /**
     * Returns true if the given object is an instance of RosStackInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RosStackInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RosStackInstance.__pulumiType;
    }

    public readonly operationDescription!: pulumi.Output<string | undefined>;
    public readonly operationPreferences!: pulumi.Output<string | undefined>;
    public readonly parameterOverrides!: pulumi.Output<outputs.RosStackInstanceParameterOverride[] | undefined>;
    public readonly retainStacks!: pulumi.Output<boolean | undefined>;
    public readonly stackGroupName!: pulumi.Output<string>;
    public readonly stackInstanceAccountId!: pulumi.Output<string>;
    public readonly stackInstanceRegionId!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeoutInMinutes!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.RosStackInstanceTimeouts | undefined>;

    /**
     * Create a RosStackInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RosStackInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RosStackInstanceArgs | RosStackInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RosStackInstanceState | undefined;
            resourceInputs["operationDescription"] = state ? state.operationDescription : undefined;
            resourceInputs["operationPreferences"] = state ? state.operationPreferences : undefined;
            resourceInputs["parameterOverrides"] = state ? state.parameterOverrides : undefined;
            resourceInputs["retainStacks"] = state ? state.retainStacks : undefined;
            resourceInputs["stackGroupName"] = state ? state.stackGroupName : undefined;
            resourceInputs["stackInstanceAccountId"] = state ? state.stackInstanceAccountId : undefined;
            resourceInputs["stackInstanceRegionId"] = state ? state.stackInstanceRegionId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeoutInMinutes"] = state ? state.timeoutInMinutes : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as RosStackInstanceArgs | undefined;
            if ((!args || args.stackGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stackGroupName'");
            }
            if ((!args || args.stackInstanceAccountId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stackInstanceAccountId'");
            }
            if ((!args || args.stackInstanceRegionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stackInstanceRegionId'");
            }
            resourceInputs["operationDescription"] = args ? args.operationDescription : undefined;
            resourceInputs["operationPreferences"] = args ? args.operationPreferences : undefined;
            resourceInputs["parameterOverrides"] = args ? args.parameterOverrides : undefined;
            resourceInputs["retainStacks"] = args ? args.retainStacks : undefined;
            resourceInputs["stackGroupName"] = args ? args.stackGroupName : undefined;
            resourceInputs["stackInstanceAccountId"] = args ? args.stackInstanceAccountId : undefined;
            resourceInputs["stackInstanceRegionId"] = args ? args.stackInstanceRegionId : undefined;
            resourceInputs["timeoutInMinutes"] = args ? args.timeoutInMinutes : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RosStackInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RosStackInstance resources.
 */
export interface RosStackInstanceState {
    operationDescription?: pulumi.Input<string>;
    operationPreferences?: pulumi.Input<string>;
    parameterOverrides?: pulumi.Input<pulumi.Input<inputs.RosStackInstanceParameterOverride>[]>;
    retainStacks?: pulumi.Input<boolean>;
    stackGroupName?: pulumi.Input<string>;
    stackInstanceAccountId?: pulumi.Input<string>;
    stackInstanceRegionId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeoutInMinutes?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RosStackInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a RosStackInstance resource.
 */
export interface RosStackInstanceArgs {
    operationDescription?: pulumi.Input<string>;
    operationPreferences?: pulumi.Input<string>;
    parameterOverrides?: pulumi.Input<pulumi.Input<inputs.RosStackInstanceParameterOverride>[]>;
    retainStacks?: pulumi.Input<boolean>;
    stackGroupName: pulumi.Input<string>;
    stackInstanceAccountId: pulumi.Input<string>;
    stackInstanceRegionId: pulumi.Input<string>;
    timeoutInMinutes?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RosStackInstanceTimeouts>;
}
