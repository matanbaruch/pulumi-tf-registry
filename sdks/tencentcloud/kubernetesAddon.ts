// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class KubernetesAddon extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesAddon resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesAddonState, opts?: pulumi.CustomResourceOptions): KubernetesAddon {
        return new KubernetesAddon(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/kubernetesAddon:KubernetesAddon';

    /**
     * Returns true if the given object is an instance of KubernetesAddon.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KubernetesAddon {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KubernetesAddon.__pulumiType;
    }

    /**
     * Name of addon.
     */
    public readonly addonName!: pulumi.Output<string>;
    /**
     * Version of addon.
     */
    public readonly addonVersion!: pulumi.Output<string | undefined>;
    /**
     * ID of cluster.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Status of addon.
     */
    public /*out*/ readonly phase!: pulumi.Output<string>;
    /**
     * Params of addon, base64 encoded json format.
     */
    public readonly rawValues!: pulumi.Output<string | undefined>;
    /**
     * Reason of addon failed.
     */
    public /*out*/ readonly reason!: pulumi.Output<string>;

    /**
     * Create a KubernetesAddon resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesAddonArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KubernetesAddonArgs | KubernetesAddonState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KubernetesAddonState | undefined;
            resourceInputs["addonName"] = state ? state.addonName : undefined;
            resourceInputs["addonVersion"] = state ? state.addonVersion : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["phase"] = state ? state.phase : undefined;
            resourceInputs["rawValues"] = state ? state.rawValues : undefined;
            resourceInputs["reason"] = state ? state.reason : undefined;
        } else {
            const args = argsOrState as KubernetesAddonArgs | undefined;
            if ((!args || args.addonName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addonName'");
            }
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            resourceInputs["addonName"] = args ? args.addonName : undefined;
            resourceInputs["addonVersion"] = args ? args.addonVersion : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["rawValues"] = args ? args.rawValues : undefined;
            resourceInputs["phase"] = undefined /*out*/;
            resourceInputs["reason"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KubernetesAddon.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KubernetesAddon resources.
 */
export interface KubernetesAddonState {
    /**
     * Name of addon.
     */
    addonName?: pulumi.Input<string>;
    /**
     * Version of addon.
     */
    addonVersion?: pulumi.Input<string>;
    /**
     * ID of cluster.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Status of addon.
     */
    phase?: pulumi.Input<string>;
    /**
     * Params of addon, base64 encoded json format.
     */
    rawValues?: pulumi.Input<string>;
    /**
     * Reason of addon failed.
     */
    reason?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KubernetesAddon resource.
 */
export interface KubernetesAddonArgs {
    /**
     * Name of addon.
     */
    addonName: pulumi.Input<string>;
    /**
     * Version of addon.
     */
    addonVersion?: pulumi.Input<string>;
    /**
     * ID of cluster.
     */
    clusterId: pulumi.Input<string>;
    /**
     * Params of addon, base64 encoded json format.
     */
    rawValues?: pulumi.Input<string>;
}
