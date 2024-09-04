// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SolutionLandingZone extends pulumi.CustomResource {
    /**
     * Get an existing SolutionLandingZone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SolutionLandingZoneState, opts?: pulumi.CustomResourceOptions): SolutionLandingZone {
        return new SolutionLandingZone(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcd:index/solutionLandingZone:SolutionLandingZone';

    /**
     * Returns true if the given object is an instance of SolutionLandingZone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SolutionLandingZone {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SolutionLandingZone.__pulumiType;
    }

    /**
     * Catalog definition for storing executable .ISO files
     */
    public readonly catalog!: pulumi.Output<outputs.SolutionLandingZoneCatalog>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    public readonly org!: pulumi.Output<string | undefined>;
    /**
     * State reports RDE state
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * VDC definition
     */
    public readonly vdcs!: pulumi.Output<outputs.SolutionLandingZoneVdc[]>;

    /**
     * Create a SolutionLandingZone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SolutionLandingZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SolutionLandingZoneArgs | SolutionLandingZoneState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SolutionLandingZoneState | undefined;
            resourceInputs["catalog"] = state ? state.catalog : undefined;
            resourceInputs["org"] = state ? state.org : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["vdcs"] = state ? state.vdcs : undefined;
        } else {
            const args = argsOrState as SolutionLandingZoneArgs | undefined;
            if ((!args || args.catalog === undefined) && !opts.urn) {
                throw new Error("Missing required property 'catalog'");
            }
            if ((!args || args.vdcs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vdcs'");
            }
            resourceInputs["catalog"] = args ? args.catalog : undefined;
            resourceInputs["org"] = args ? args.org : undefined;
            resourceInputs["vdcs"] = args ? args.vdcs : undefined;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SolutionLandingZone.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SolutionLandingZone resources.
 */
export interface SolutionLandingZoneState {
    /**
     * Catalog definition for storing executable .ISO files
     */
    catalog?: pulumi.Input<inputs.SolutionLandingZoneCatalog>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
    /**
     * State reports RDE state
     */
    state?: pulumi.Input<string>;
    /**
     * VDC definition
     */
    vdcs?: pulumi.Input<pulumi.Input<inputs.SolutionLandingZoneVdc>[]>;
}

/**
 * The set of arguments for constructing a SolutionLandingZone resource.
 */
export interface SolutionLandingZoneArgs {
    /**
     * Catalog definition for storing executable .ISO files
     */
    catalog: pulumi.Input<inputs.SolutionLandingZoneCatalog>;
    /**
     * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across
     * different organizations
     */
    org?: pulumi.Input<string>;
    /**
     * VDC definition
     */
    vdcs: pulumi.Input<pulumi.Input<inputs.SolutionLandingZoneVdc>[]>;
}
