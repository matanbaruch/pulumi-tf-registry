// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VpnvserverVpnurlpolicyBinding extends pulumi.CustomResource {
    /**
     * Get an existing VpnvserverVpnurlpolicyBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnvserverVpnurlpolicyBindingState, opts?: pulumi.CustomResourceOptions): VpnvserverVpnurlpolicyBinding {
        return new VpnvserverVpnurlpolicyBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/vpnvserverVpnurlpolicyBinding:VpnvserverVpnurlpolicyBinding';

    /**
     * Returns true if the given object is an instance of VpnvserverVpnurlpolicyBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnvserverVpnurlpolicyBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnvserverVpnurlpolicyBinding.__pulumiType;
    }

    public readonly bindpoint!: pulumi.Output<string>;
    public readonly gotopriorityexpression!: pulumi.Output<string>;
    public readonly groupextraction!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly policy!: pulumi.Output<string>;
    public readonly priority!: pulumi.Output<number>;
    public readonly secondary!: pulumi.Output<boolean>;

    /**
     * Create a VpnvserverVpnurlpolicyBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnvserverVpnurlpolicyBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpnvserverVpnurlpolicyBindingArgs | VpnvserverVpnurlpolicyBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpnvserverVpnurlpolicyBindingState | undefined;
            resourceInputs["bindpoint"] = state ? state.bindpoint : undefined;
            resourceInputs["gotopriorityexpression"] = state ? state.gotopriorityexpression : undefined;
            resourceInputs["groupextraction"] = state ? state.groupextraction : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["secondary"] = state ? state.secondary : undefined;
        } else {
            const args = argsOrState as VpnvserverVpnurlpolicyBindingArgs | undefined;
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            resourceInputs["bindpoint"] = args ? args.bindpoint : undefined;
            resourceInputs["gotopriorityexpression"] = args ? args.gotopriorityexpression : undefined;
            resourceInputs["groupextraction"] = args ? args.groupextraction : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["secondary"] = args ? args.secondary : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpnvserverVpnurlpolicyBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpnvserverVpnurlpolicyBinding resources.
 */
export interface VpnvserverVpnurlpolicyBindingState {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    groupextraction?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    policy?: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    secondary?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a VpnvserverVpnurlpolicyBinding resource.
 */
export interface VpnvserverVpnurlpolicyBindingArgs {
    bindpoint?: pulumi.Input<string>;
    gotopriorityexpression?: pulumi.Input<string>;
    groupextraction?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    policy: pulumi.Input<string>;
    priority?: pulumi.Input<number>;
    secondary?: pulumi.Input<boolean>;
}
