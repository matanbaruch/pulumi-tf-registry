// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnvserverIntranetipBinding extends pulumi.CustomResource {
    /**
     * Get an existing VpnvserverIntranetipBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnvserverIntranetipBindingState, opts?: pulumi.CustomResourceOptions): VpnvserverIntranetipBinding {
        return new VpnvserverIntranetipBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vpnvserverIntranetipBinding:VpnvserverIntranetipBinding';

    /**
     * Returns true if the given object is an instance of VpnvserverIntranetipBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnvserverIntranetipBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnvserverIntranetipBinding.__pulumiType;
    }

    public readonly intranetip!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly netmask!: pulumi.Output<string>;

    /**
     * Create a VpnvserverIntranetipBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnvserverIntranetipBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnvserverIntranetipBindingArgs | VpnvserverIntranetipBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnvserverIntranetipBindingState | undefined;
            resourceInputs["intranetip"] = state ? state.intranetip : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["netmask"] = state ? state.netmask : undefined;
        } else {
            const args = argsOrState as VpnvserverIntranetipBindingArgs | undefined;
            if ((!args || args.intranetip === undefined) && !opts.urn) {
                throw new Error("Missing required property 'intranetip'");
            }
            resourceInputs["intranetip"] = args ? args.intranetip : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["netmask"] = args ? args.netmask : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnvserverIntranetipBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnvserverIntranetipBinding resources.
 */
export interface VpnvserverIntranetipBindingState {
    intranetip?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    netmask?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpnvserverIntranetipBinding resource.
 */
export interface VpnvserverIntranetipBindingArgs {
    intranetip: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    netmask?: pulumi.Input<string>;
}
