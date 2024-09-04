// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Cgnv6FixedNatAlgRtsp extends pulumi.CustomResource {
    /**
     * Get an existing Cgnv6FixedNatAlgRtsp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Cgnv6FixedNatAlgRtspState, opts?: pulumi.CustomResourceOptions): Cgnv6FixedNatAlgRtsp {
        return new Cgnv6FixedNatAlgRtsp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/cgnv6FixedNatAlgRtsp:Cgnv6FixedNatAlgRtsp';

    /**
     * Returns true if the given object is an instance of Cgnv6FixedNatAlgRtsp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cgnv6FixedNatAlgRtsp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cgnv6FixedNatAlgRtsp.__pulumiType;
    }

    public readonly samplingEnables!: pulumi.Output<outputs.Cgnv6FixedNatAlgRtspSamplingEnable[] | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Cgnv6FixedNatAlgRtsp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Cgnv6FixedNatAlgRtspArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Cgnv6FixedNatAlgRtspArgs | Cgnv6FixedNatAlgRtspState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Cgnv6FixedNatAlgRtspState | undefined;
            resourceInputs["samplingEnables"] = state ? state.samplingEnables : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as Cgnv6FixedNatAlgRtspArgs | undefined;
            resourceInputs["samplingEnables"] = args ? args.samplingEnables : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cgnv6FixedNatAlgRtsp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Cgnv6FixedNatAlgRtsp resources.
 */
export interface Cgnv6FixedNatAlgRtspState {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6FixedNatAlgRtspSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cgnv6FixedNatAlgRtsp resource.
 */
export interface Cgnv6FixedNatAlgRtspArgs {
    samplingEnables?: pulumi.Input<pulumi.Input<inputs.Cgnv6FixedNatAlgRtspSamplingEnable>[]>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
