// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IotTopicRuleDestination extends pulumi.CustomResource {
    /**
     * Get an existing IotTopicRuleDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotTopicRuleDestinationState, opts?: pulumi.CustomResourceOptions): IotTopicRuleDestination {
        return new IotTopicRuleDestination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/iotTopicRuleDestination:IotTopicRuleDestination';

    /**
     * Returns true if the given object is an instance of IotTopicRuleDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotTopicRuleDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotTopicRuleDestination.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.IotTopicRuleDestinationTimeouts | undefined>;
    public readonly vpcConfiguration!: pulumi.Output<outputs.IotTopicRuleDestinationVpcConfiguration>;

    /**
     * Create a IotTopicRuleDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotTopicRuleDestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotTopicRuleDestinationArgs | IotTopicRuleDestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotTopicRuleDestinationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcConfiguration"] = state ? state.vpcConfiguration : undefined;
        } else {
            const args = argsOrState as IotTopicRuleDestinationArgs | undefined;
            if ((!args || args.vpcConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcConfiguration'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpcConfiguration"] = args ? args.vpcConfiguration : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotTopicRuleDestination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotTopicRuleDestination resources.
 */
export interface IotTopicRuleDestinationState {
    arn?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.IotTopicRuleDestinationTimeouts>;
    vpcConfiguration?: pulumi.Input<inputs.IotTopicRuleDestinationVpcConfiguration>;
}

/**
 * The set of arguments for constructing a IotTopicRuleDestination resource.
 */
export interface IotTopicRuleDestinationArgs {
    enabled?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.IotTopicRuleDestinationTimeouts>;
    vpcConfiguration: pulumi.Input<inputs.IotTopicRuleDestinationVpcConfiguration>;
}
