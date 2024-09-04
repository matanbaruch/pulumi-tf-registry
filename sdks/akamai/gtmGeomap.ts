// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GtmGeomap extends pulumi.CustomResource {
    /**
     * Get an existing GtmGeomap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GtmGeomapState, opts?: pulumi.CustomResourceOptions): GtmGeomap {
        return new GtmGeomap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'akamai:index/gtmGeomap:GtmGeomap';

    /**
     * Returns true if the given object is an instance of GtmGeomap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GtmGeomap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GtmGeomap.__pulumiType;
    }

    public readonly assignments!: pulumi.Output<outputs.GtmGeomapAssignment[] | undefined>;
    public readonly defaultDatacenters!: pulumi.Output<outputs.GtmGeomapDefaultDatacenter[]>;
    public readonly domain!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly waitOnComplete!: pulumi.Output<boolean | undefined>;

    /**
     * Create a GtmGeomap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GtmGeomapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GtmGeomapArgs | GtmGeomapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GtmGeomapState | undefined;
            resourceInputs["assignments"] = state ? state.assignments : undefined;
            resourceInputs["defaultDatacenters"] = state ? state.defaultDatacenters : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["waitOnComplete"] = state ? state.waitOnComplete : undefined;
        } else {
            const args = argsOrState as GtmGeomapArgs | undefined;
            if ((!args || args.defaultDatacenters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultDatacenters'");
            }
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            resourceInputs["assignments"] = args ? args.assignments : undefined;
            resourceInputs["defaultDatacenters"] = args ? args.defaultDatacenters : undefined;
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["waitOnComplete"] = args ? args.waitOnComplete : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GtmGeomap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GtmGeomap resources.
 */
export interface GtmGeomapState {
    assignments?: pulumi.Input<pulumi.Input<inputs.GtmGeomapAssignment>[]>;
    defaultDatacenters?: pulumi.Input<pulumi.Input<inputs.GtmGeomapDefaultDatacenter>[]>;
    domain?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    waitOnComplete?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a GtmGeomap resource.
 */
export interface GtmGeomapArgs {
    assignments?: pulumi.Input<pulumi.Input<inputs.GtmGeomapAssignment>[]>;
    defaultDatacenters: pulumi.Input<pulumi.Input<inputs.GtmGeomapDefaultDatacenter>[]>;
    domain: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    waitOnComplete?: pulumi.Input<boolean>;
}
