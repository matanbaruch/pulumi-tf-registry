// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FrontdoorRulesEngine extends pulumi.CustomResource {
    /**
     * Get an existing FrontdoorRulesEngine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FrontdoorRulesEngineState, opts?: pulumi.CustomResourceOptions): FrontdoorRulesEngine {
        return new FrontdoorRulesEngine(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/frontdoorRulesEngine:FrontdoorRulesEngine';

    /**
     * Returns true if the given object is an instance of FrontdoorRulesEngine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FrontdoorRulesEngine {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FrontdoorRulesEngine.__pulumiType;
    }

    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly frontdoorName!: pulumi.Output<string>;
    public /*out*/ readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.FrontdoorRulesEngineRule[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.FrontdoorRulesEngineTimeouts | undefined>;

    /**
     * Create a FrontdoorRulesEngine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FrontdoorRulesEngineArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FrontdoorRulesEngineArgs | FrontdoorRulesEngineState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FrontdoorRulesEngineState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["frontdoorName"] = state ? state.frontdoorName : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FrontdoorRulesEngineArgs | undefined;
            if ((!args || args.frontdoorName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'frontdoorName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["frontdoorName"] = args ? args.frontdoorName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["location"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FrontdoorRulesEngine.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FrontdoorRulesEngine resources.
 */
export interface FrontdoorRulesEngineState {
    enabled?: pulumi.Input<boolean>;
    frontdoorName?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.FrontdoorRulesEngineRule>[]>;
    timeouts?: pulumi.Input<inputs.FrontdoorRulesEngineTimeouts>;
}

/**
 * The set of arguments for constructing a FrontdoorRulesEngine resource.
 */
export interface FrontdoorRulesEngineArgs {
    enabled?: pulumi.Input<boolean>;
    frontdoorName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.FrontdoorRulesEngineRule>[]>;
    timeouts?: pulumi.Input<inputs.FrontdoorRulesEngineTimeouts>;
}
