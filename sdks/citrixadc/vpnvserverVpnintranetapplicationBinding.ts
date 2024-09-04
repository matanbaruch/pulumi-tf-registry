// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnvserverVpnintranetapplicationBinding extends pulumi.CustomResource {
    /**
     * Get an existing VpnvserverVpnintranetapplicationBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnvserverVpnintranetapplicationBindingState, opts?: pulumi.CustomResourceOptions): VpnvserverVpnintranetapplicationBinding {
        return new VpnvserverVpnintranetapplicationBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vpnvserverVpnintranetapplicationBinding:VpnvserverVpnintranetapplicationBinding';

    /**
     * Returns true if the given object is an instance of VpnvserverVpnintranetapplicationBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnvserverVpnintranetapplicationBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnvserverVpnintranetapplicationBinding.__pulumiType;
    }

    public readonly intranetapplication!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a VpnvserverVpnintranetapplicationBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnvserverVpnintranetapplicationBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnvserverVpnintranetapplicationBindingArgs | VpnvserverVpnintranetapplicationBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnvserverVpnintranetapplicationBindingState | undefined;
            resourceInputs["intranetapplication"] = state ? state.intranetapplication : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as VpnvserverVpnintranetapplicationBindingArgs | undefined;
            if ((!args || args.intranetapplication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'intranetapplication'");
            }
            resourceInputs["intranetapplication"] = args ? args.intranetapplication : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnvserverVpnintranetapplicationBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnvserverVpnintranetapplicationBinding resources.
 */
export interface VpnvserverVpnintranetapplicationBindingState {
    intranetapplication?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpnvserverVpnintranetapplicationBinding resource.
 */
export interface VpnvserverVpnintranetapplicationBindingArgs {
    intranetapplication: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
