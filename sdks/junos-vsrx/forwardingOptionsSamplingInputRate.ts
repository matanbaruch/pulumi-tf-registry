// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ForwardingOptionsSamplingInputRate extends pulumi.CustomResource {
    /**
     * Get an existing ForwardingOptionsSamplingInputRate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ForwardingOptionsSamplingInputRateState, opts?: pulumi.CustomResourceOptions): ForwardingOptionsSamplingInputRate {
        return new ForwardingOptionsSamplingInputRate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'junos-vsrx:index/forwardingOptionsSamplingInputRate:ForwardingOptionsSamplingInputRate';

    /**
     * Returns true if the given object is an instance of ForwardingOptionsSamplingInputRate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ForwardingOptionsSamplingInputRate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ForwardingOptionsSamplingInputRate.__pulumiType;
    }

    /**
     * xpath is: config.Groups.V_input. Ratio of packets to be sampled (1 out of N)
     */
    public readonly rate!: pulumi.Output<string | undefined>;
    public readonly resourceName!: pulumi.Output<string>;

    /**
     * Create a ForwardingOptionsSamplingInputRate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ForwardingOptionsSamplingInputRateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ForwardingOptionsSamplingInputRateArgs | ForwardingOptionsSamplingInputRateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ForwardingOptionsSamplingInputRateState | undefined;
            resourceInputs["rate"] = state ? state.rate : undefined;
            resourceInputs["resourceName"] = state ? state.resourceName : undefined;
        } else {
            const args = argsOrState as ForwardingOptionsSamplingInputRateArgs | undefined;
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["rate"] = args ? args.rate : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ForwardingOptionsSamplingInputRate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ForwardingOptionsSamplingInputRate resources.
 */
export interface ForwardingOptionsSamplingInputRateState {
    /**
     * xpath is: config.Groups.V_input. Ratio of packets to be sampled (1 out of N)
     */
    rate?: pulumi.Input<string>;
    resourceName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ForwardingOptionsSamplingInputRate resource.
 */
export interface ForwardingOptionsSamplingInputRateArgs {
    /**
     * xpath is: config.Groups.V_input. Ratio of packets to be sampled (1 out of N)
     */
    rate?: pulumi.Input<string>;
    resourceName: pulumi.Input<string>;
}
