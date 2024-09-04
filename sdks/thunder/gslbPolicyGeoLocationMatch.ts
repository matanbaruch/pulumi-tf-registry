// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GslbPolicyGeoLocationMatch extends pulumi.CustomResource {
    /**
     * Get an existing GslbPolicyGeoLocationMatch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbPolicyGeoLocationMatchState, opts?: pulumi.CustomResourceOptions): GslbPolicyGeoLocationMatch {
        return new GslbPolicyGeoLocationMatch(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbPolicyGeoLocationMatch:GslbPolicyGeoLocationMatch';

    /**
     * Returns true if the given object is an instance of GslbPolicyGeoLocationMatch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbPolicyGeoLocationMatch {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbPolicyGeoLocationMatch.__pulumiType;
    }

    /**
     * 'global': Global Geo-location; 'policy': Policy Geo-location;
     */
    public readonly geoTypeOverlap!: pulumi.Output<string | undefined>;
    /**
     * 'global': Global Geo-location; 'policy': Policy Geo-location;
     */
    public readonly matchFirst!: pulumi.Output<string | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable overlap mode to do longest match
     */
    public readonly overlap!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbPolicyGeoLocationMatch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GslbPolicyGeoLocationMatchArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbPolicyGeoLocationMatchArgs | GslbPolicyGeoLocationMatchState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbPolicyGeoLocationMatchState | undefined;
            resourceInputs["geoTypeOverlap"] = state ? state.geoTypeOverlap : undefined;
            resourceInputs["matchFirst"] = state ? state.matchFirst : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["overlap"] = state ? state.overlap : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbPolicyGeoLocationMatchArgs | undefined;
            resourceInputs["geoTypeOverlap"] = args ? args.geoTypeOverlap : undefined;
            resourceInputs["matchFirst"] = args ? args.matchFirst : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["overlap"] = args ? args.overlap : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbPolicyGeoLocationMatch.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbPolicyGeoLocationMatch resources.
 */
export interface GslbPolicyGeoLocationMatchState {
    /**
     * 'global': Global Geo-location; 'policy': Policy Geo-location;
     */
    geoTypeOverlap?: pulumi.Input<string>;
    /**
     * 'global': Global Geo-location; 'policy': Policy Geo-location;
     */
    matchFirst?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable overlap mode to do longest match
     */
    overlap?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbPolicyGeoLocationMatch resource.
 */
export interface GslbPolicyGeoLocationMatchArgs {
    /**
     * 'global': Global Geo-location; 'policy': Policy Geo-location;
     */
    geoTypeOverlap?: pulumi.Input<string>;
    /**
     * 'global': Global Geo-location; 'policy': Policy Geo-location;
     */
    matchFirst?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Enable overlap mode to do longest match
     */
    overlap?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
