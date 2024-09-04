// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnglobalVpnportalthemeBinding extends pulumi.CustomResource {
    /**
     * Get an existing VpnglobalVpnportalthemeBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnglobalVpnportalthemeBindingState, opts?: pulumi.CustomResourceOptions): VpnglobalVpnportalthemeBinding {
        return new VpnglobalVpnportalthemeBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vpnglobalVpnportalthemeBinding:VpnglobalVpnportalthemeBinding';

    /**
     * Returns true if the given object is an instance of VpnglobalVpnportalthemeBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnglobalVpnportalthemeBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnglobalVpnportalthemeBinding.__pulumiType;
    }

    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly portaltheme!: pulumi.Output<string>;

    /**
     * Create a VpnglobalVpnportalthemeBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnglobalVpnportalthemeBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnglobalVpnportalthemeBindingArgs | VpnglobalVpnportalthemeBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnglobalVpnportalthemeBindingState | undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["portaltheme"] = state ? state.portaltheme : undefined;
        } else {
            const args = argsOrState as VpnglobalVpnportalthemeBindingArgs | undefined;
            if ((!args || args.portaltheme === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portaltheme'");
            }
            resourceInputs["gotopriorityexpression"] = args ? args.gotopriorityexpression : undefined;
            resourceInputs["portaltheme"] = args ? args.portaltheme : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnglobalVpnportalthemeBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnglobalVpnportalthemeBinding resources.
 */
export interface VpnglobalVpnportalthemeBindingState {
    gotopriorityexpression?: pulumi.Input<string>;
    portaltheme?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpnglobalVpnportalthemeBinding resource.
 */
export interface VpnglobalVpnportalthemeBindingArgs {
    gotopriorityexpression?: pulumi.Input<string>;
    portaltheme: pulumi.Input<string>;
}
