// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GslbGeoLocation extends pulumi.CustomResource {
    /**
     * Get an existing GslbGeoLocation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbGeoLocationState, opts?: pulumi.CustomResourceOptions): GslbGeoLocation {
        return new GslbGeoLocation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbGeoLocation:GslbGeoLocation';

    /**
     * Returns true if the given object is an instance of GslbGeoLocation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbGeoLocation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbGeoLocation.__pulumiType;
    }

    public readonly geoLocnMultipleAddresses!: pulumi.Output<outputs.GslbGeoLocationGeoLocnMultipleAddress[] | undefined>;
    /**
     * Specify geo-location name, section range is (1-15)
     */
    public readonly geoLocnObjName!: pulumi.Output<string>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbGeoLocation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GslbGeoLocationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbGeoLocationArgs | GslbGeoLocationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbGeoLocationState | undefined;
            resourceInputs["geoLocnMultipleAddresses"] = state ? state.geoLocnMultipleAddresses : undefined;
            resourceInputs["geoLocnObjName"] = state ? state.geoLocnObjName : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbGeoLocationArgs | undefined;
            if ((!args || args.geoLocnObjName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'geoLocnObjName'");
            }
            resourceInputs["geoLocnMultipleAddresses"] = args ? args.geoLocnMultipleAddresses : undefined;
            resourceInputs["geoLocnObjName"] = args ? args.geoLocnObjName : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbGeoLocation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbGeoLocation resources.
 */
export interface GslbGeoLocationState {
    geoLocnMultipleAddresses?: pulumi.Input<pulumi.Input<inputs.GslbGeoLocationGeoLocnMultipleAddress>[]>;
    /**
     * Specify geo-location name, section range is (1-15)
     */
    geoLocnObjName?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbGeoLocation resource.
 */
export interface GslbGeoLocationArgs {
    geoLocnMultipleAddresses?: pulumi.Input<pulumi.Input<inputs.GslbGeoLocationGeoLocnMultipleAddress>[]>;
    /**
     * Specify geo-location name, section range is (1-15)
     */
    geoLocnObjName: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
