// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cgnv6StatefulFirewallAlgSip extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6StatefulFirewallAlgSip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6StatefulFirewallAlgSipState, opts?: pulumi.CustomResourceOptions): Cgnv6StatefulFirewallAlgSip {
        return new Cgnv6StatefulFirewallAlgSip(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6StatefulFirewallAlgSip:Cgnv6StatefulFirewallAlgSip';

    /**
     * Returns true if the given object is an instance of Cgnv6StatefulFirewallAlgSip.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6StatefulFirewallAlgSip {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6StatefulFirewallAlgSip.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.Cgnv6StatefulFirewallAlgSipSamplingEnable[] | undefined>;
    /**
     * 'disable': Disable ALG;
     */
    public readonly sipValue!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6StatefulFirewallAlgSip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6StatefulFirewallAlgSipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6StatefulFirewallAlgSipArgs | Cgnv6StatefulFirewallAlgSipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6StatefulFirewallAlgSipState | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["sipValue"] = state ? state.sipValue : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6StatefulFirewallAlgSipArgs | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["sipValue"] = args ? args.sipValue : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6StatefulFirewallAlgSip.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6StatefulFirewallAlgSip resources.
 */
export interface Cgnv6StatefulFirewallAlgSipState {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6StatefulFirewallAlgSipSamplingEnable>[]>;
    /**
     * 'disable': Disable ALG;
     */
    sipValue?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6StatefulFirewallAlgSip resource.
 */
export interface Cgnv6StatefulFirewallAlgSipArgs {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6StatefulFirewallAlgSipSamplingEnable>[]>;
    /**
     * 'disable': Disable ALG;
     */
    sipValue?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
