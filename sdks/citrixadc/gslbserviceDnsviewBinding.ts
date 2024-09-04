// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GslbserviceDnsviewBinding extends pulumi.CustomResource {
    /**
     * Get an existing GslbserviceDnsviewBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbserviceDnsviewBindingState, opts?: pulumi.CustomResourceOptions): GslbserviceDnsviewBinding {
        return new GslbserviceDnsviewBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/gslbserviceDnsviewBinding:GslbserviceDnsviewBinding';

    /**
     * Returns true if the given object is an instance of GslbserviceDnsviewBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbserviceDnsviewBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbserviceDnsviewBinding.__pulumiType;
    }

    public readonly servicename!: pulumi.Output<string>;
    public readonly viewip!: pulumi.Output<string>;
    public readonly viewname!: pulumi.Output<string>;

    /**
     * Create a GslbserviceDnsviewBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GslbserviceDnsviewBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbserviceDnsviewBindingArgs | GslbserviceDnsviewBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbserviceDnsviewBindingState | undefined;
            resourceInputs["servicename"] = state ? state.servicename : undefined;
            resourceInputs["viewip"] = state ? state.viewip : undefined;
            resourceInputs["viewname"] = state ? state.viewname : undefined;
        } else {
            const args = argsOrState as GslbserviceDnsviewBindingArgs | undefined;
            if ((!args || args.servicename === undefined) && !opts.urn) {
                throw new Error("Missing required property 'servicename'");
            }
            if ((!args || args.viewname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'viewname'");
            }
            resourceInputs["servicename"] = args ? args.servicename : undefined;
            resourceInputs["viewip"] = args ? args.viewip : undefined;
            resourceInputs["viewname"] = args ? args.viewname : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbserviceDnsviewBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbserviceDnsviewBinding resources.
 */
export interface GslbserviceDnsviewBindingState {
    servicename?: pulumi.Input<string>;
    viewip?: pulumi.Input<string>;
    viewname?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbserviceDnsviewBinding resource.
 */
export interface GslbserviceDnsviewBindingArgs {
    servicename: pulumi.Input<string>;
    viewip?: pulumi.Input<string>;
    viewname: pulumi.Input<string>;
}
