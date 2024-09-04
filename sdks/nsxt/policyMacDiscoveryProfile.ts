// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyMacDiscoveryProfile extends pulumi.CustomResource {
    /**
     * Get an existing PolicyMacDiscoveryProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyMacDiscoveryProfileState, opts?: pulumi.CustomResourceOptions): PolicyMacDiscoveryProfile {
        return new PolicyMacDiscoveryProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyMacDiscoveryProfile:PolicyMacDiscoveryProfile';

    /**
     * Returns true if the given object is an instance of PolicyMacDiscoveryProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyMacDiscoveryProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyMacDiscoveryProfile.__pulumiType;
    }

    /**
     * Resource context
     */
    public readonly context!: pulumi.Output<outputs.PolicyMacDiscoveryProfileContext | undefined>;
    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    public readonly macChangeEnabled!: pulumi.Output<boolean | undefined>;
    public readonly macLearningEnabled!: pulumi.Output<boolean | undefined>;
    public readonly macLimit!: pulumi.Output<number | undefined>;
    public readonly macLimitPolicy!: pulumi.Output<string | undefined>;
    /**
     * NSX ID for this resource
     */
    public readonly nsxId!: pulumi.Output<string>;
    /**
     * Policy path for this resource
     */
    public /*out*/ readonly path!: pulumi.Output<string>;
    public readonly remoteOverlayMacLimit!: pulumi.Output<number | undefined>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyMacDiscoveryProfileTag[] | undefined>;
    public readonly unknownUnicastFloodingEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a PolicyMacDiscoveryProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyMacDiscoveryProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyMacDiscoveryProfileArgs | PolicyMacDiscoveryProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyMacDiscoveryProfileState | undefined;
            resourceInputs["context"] = state ? state.context : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["macChangeEnabled"] = state ? state.macChangeEnabled : undefined;
            resourceInputs["macLearningEnabled"] = state ? state.macLearningEnabled : undefined;
            resourceInputs["macLimit"] = state ? state.macLimit : undefined;
            resourceInputs["macLimitPolicy"] = state ? state.macLimitPolicy : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["remoteOverlayMacLimit"] = state ? state.remoteOverlayMacLimit : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["unknownUnicastFloodingEnabled"] = state ? state.unknownUnicastFloodingEnabled : undefined;
        } else {
            const args = argsOrState as PolicyMacDiscoveryProfileArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["context"] = args ? args.context : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["macChangeEnabled"] = args ? args.macChangeEnabled : undefined;
            resourceInputs["macLearningEnabled"] = args ? args.macLearningEnabled : undefined;
            resourceInputs["macLimit"] = args ? args.macLimit : undefined;
            resourceInputs["macLimitPolicy"] = args ? args.macLimitPolicy : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["remoteOverlayMacLimit"] = args ? args.remoteOverlayMacLimit : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["unknownUnicastFloodingEnabled"] = args ? args.unknownUnicastFloodingEnabled : undefined;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyMacDiscoveryProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyMacDiscoveryProfile resources.
 */
export interface PolicyMacDiscoveryProfileState {
    /**
     * Resource context
     */
    context?: pulumi.Input<inputs.PolicyMacDiscoveryProfileContext>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    macChangeEnabled?: pulumi.Input<boolean>;
    macLearningEnabled?: pulumi.Input<boolean>;
    macLimit?: pulumi.Input<number>;
    macLimitPolicy?: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Policy path for this resource
     */
    path?: pulumi.Input<string>;
    remoteOverlayMacLimit?: pulumi.Input<number>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyMacDiscoveryProfileTag>[]>;
    unknownUnicastFloodingEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a PolicyMacDiscoveryProfile resource.
 */
export interface PolicyMacDiscoveryProfileArgs {
    /**
     * Resource context
     */
    context?: pulumi.Input<inputs.PolicyMacDiscoveryProfileContext>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    macChangeEnabled?: pulumi.Input<boolean>;
    macLearningEnabled?: pulumi.Input<boolean>;
    macLimit?: pulumi.Input<number>;
    macLimitPolicy?: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    remoteOverlayMacLimit?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyMacDiscoveryProfileTag>[]>;
    unknownUnicastFloodingEnabled?: pulumi.Input<boolean>;
}
