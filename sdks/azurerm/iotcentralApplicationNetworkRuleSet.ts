// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IotcentralApplicationNetworkRuleSet extends pulumi.CustomResource {
    /**
     * Get an existing IotcentralApplicationNetworkRuleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotcentralApplicationNetworkRuleSetState, opts?: pulumi.CustomResourceOptions): IotcentralApplicationNetworkRuleSet {
        return new IotcentralApplicationNetworkRuleSet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/iotcentralApplicationNetworkRuleSet:IotcentralApplicationNetworkRuleSet';

    /**
     * Returns true if the given object is an instance of IotcentralApplicationNetworkRuleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotcentralApplicationNetworkRuleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotcentralApplicationNetworkRuleSet.__pulumiType;
    }

    public readonly applyToDevice!: pulumi.Output<boolean | undefined>;
    public readonly defaultAction!: pulumi.Output<string | undefined>;
    public readonly iotcentralApplicationId!: pulumi.Output<string>;
    public readonly ipRules!: pulumi.Output<outputs.IotcentralApplicationNetworkRuleSetIpRule[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.IotcentralApplicationNetworkRuleSetTimeouts | undefined>;

    /**
     * Create a IotcentralApplicationNetworkRuleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotcentralApplicationNetworkRuleSetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotcentralApplicationNetworkRuleSetArgs | IotcentralApplicationNetworkRuleSetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotcentralApplicationNetworkRuleSetState | undefined;
            resourceInputs["applyToDevice"] = state ? state.applyToDevice : undefined;
            resourceInputs["defaultAction"] = state ? state.defaultAction : undefined;
            resourceInputs["iotcentralApplicationId"] = state ? state.iotcentralApplicationId : undefined;
            resourceInputs["ipRules"] = state ? state.ipRules : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IotcentralApplicationNetworkRuleSetArgs | undefined;
            if ((!args || args.iotcentralApplicationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'iotcentralApplicationId'");
            }
            resourceInputs["applyToDevice"] = args ? args.applyToDevice : undefined;
            resourceInputs["defaultAction"] = args ? args.defaultAction : undefined;
            resourceInputs["iotcentralApplicationId"] = args ? args.iotcentralApplicationId : undefined;
            resourceInputs["ipRules"] = args ? args.ipRules : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotcentralApplicationNetworkRuleSet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotcentralApplicationNetworkRuleSet resources.
 */
export interface IotcentralApplicationNetworkRuleSetState {
    applyToDevice?: pulumi.Input<boolean>;
    defaultAction?: pulumi.Input<string>;
    iotcentralApplicationId?: pulumi.Input<string>;
    ipRules?: pulumi.Input<pulumi.Input<inputs.IotcentralApplicationNetworkRuleSetIpRule>[]>;
    timeouts?: pulumi.Input<inputs.IotcentralApplicationNetworkRuleSetTimeouts>;
}

/**
 * The set of arguments for constructing a IotcentralApplicationNetworkRuleSet resource.
 */
export interface IotcentralApplicationNetworkRuleSetArgs {
    applyToDevice?: pulumi.Input<boolean>;
    defaultAction?: pulumi.Input<string>;
    iotcentralApplicationId: pulumi.Input<string>;
    ipRules?: pulumi.Input<pulumi.Input<inputs.IotcentralApplicationNetworkRuleSetIpRule>[]>;
    timeouts?: pulumi.Input<inputs.IotcentralApplicationNetworkRuleSetTimeouts>;
}
