// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cgnv6FixedNatAlgSip extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6FixedNatAlgSip resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6FixedNatAlgSipState, opts?: pulumi.CustomResourceOptions): Cgnv6FixedNatAlgSip {
        return new Cgnv6FixedNatAlgSip(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6FixedNatAlgSip:Cgnv6FixedNatAlgSip';

    /**
     * Returns true if the given object is an instance of Cgnv6FixedNatAlgSip.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6FixedNatAlgSip {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6FixedNatAlgSip.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.Cgnv6FixedNatAlgSipSamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6FixedNatAlgSip resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6FixedNatAlgSipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6FixedNatAlgSipArgs | Cgnv6FixedNatAlgSipState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6FixedNatAlgSipState | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6FixedNatAlgSipArgs | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6FixedNatAlgSip.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6FixedNatAlgSip resources.
 */
export interface Cgnv6FixedNatAlgSipState {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6FixedNatAlgSipSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6FixedNatAlgSip resource.
 */
export interface Cgnv6FixedNatAlgSipArgs {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6FixedNatAlgSipSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
