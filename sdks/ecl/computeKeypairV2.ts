// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ComputeKeypairV2 extends pulumi.CustomResource {
    /**
     * Get an existing ComputeKeypairV2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeKeypairV2State, opts?: pulumi.CustomResourceOptions): ComputeKeypairV2 {
        return new ComputeKeypairV2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ecl:index/computeKeypairV2:ComputeKeypairV2';

    /**
     * Returns true if the given object is an instance of ComputeKeypairV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeKeypairV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeKeypairV2.__pulumiType;
    }

    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly privateKey!: pulumi.Output<string>;
    public readonly publicKey!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;

    /**
     * Create a ComputeKeypairV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ComputeKeypairV2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeKeypairV2Args | ComputeKeypairV2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeKeypairV2State | undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
        } else {
            const args = argsOrState as ComputeKeypairV2Args | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["fingerprint"] = undefined /*out*/;
            resourceInputs["privateKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeKeypairV2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeKeypairV2 resources.
 */
export interface ComputeKeypairV2State {
    fingerprint?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    privateKey?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeKeypairV2 resource.
 */
export interface ComputeKeypairV2Args {
    name?: pulumi.Input<string>;
    publicKey?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
