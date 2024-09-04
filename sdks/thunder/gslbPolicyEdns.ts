// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GslbPolicyEdns extends pulumi.CustomResource {
    /**
     * Get an existing GslbPolicyEdns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbPolicyEdnsState, opts?: pulumi.CustomResourceOptions): GslbPolicyEdns {
        return new GslbPolicyEdns(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbPolicyEdns:GslbPolicyEdns';

    /**
     * Returns true if the given object is an instance of GslbPolicyEdns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbPolicyEdns {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbPolicyEdns.__pulumiType;
    }

    /**
     * Use client subnet for geo-location
     */
    public readonly clientSubnetGeographic!: pulumi.Output<number | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbPolicyEdns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GslbPolicyEdnsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbPolicyEdnsArgs | GslbPolicyEdnsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbPolicyEdnsState | undefined;
            resourceInputs["clientSubnetGeographic"] = state ? state.clientSubnetGeographic : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbPolicyEdnsArgs | undefined;
            resourceInputs["clientSubnetGeographic"] = args ? args.clientSubnetGeographic : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbPolicyEdns.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbPolicyEdns resources.
 */
export interface GslbPolicyEdnsState {
    /**
     * Use client subnet for geo-location
     */
    clientSubnetGeographic?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbPolicyEdns resource.
 */
export interface GslbPolicyEdnsArgs {
    /**
     * Use client subnet for geo-location
     */
    clientSubnetGeographic?: pulumi.Input<number>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
