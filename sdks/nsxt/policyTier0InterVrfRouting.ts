// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyTier0InterVrfRouting extends pulumi.CustomResource {
    /**
     * Get an existing PolicyTier0InterVrfRouting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyTier0InterVrfRoutingState, opts?: pulumi.CustomResourceOptions): PolicyTier0InterVrfRouting {
        return new PolicyTier0InterVrfRouting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyTier0InterVrfRouting:PolicyTier0InterVrfRouting';

    /**
     * Returns true if the given object is an instance of PolicyTier0InterVrfRouting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyTier0InterVrfRouting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyTier0InterVrfRouting.__pulumiType;
    }

    /**
     * Import / export BGP routes
     */
    public readonly bgpRouteLeakings!: pulumi.Output<outputs.PolicyTier0InterVrfRoutingBgpRouteLeaking[] | undefined>;
    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Policy path for the Gateway
     */
    public readonly gatewayPath!: pulumi.Output<string>;
    /**
     * NSX ID for this resource
     */
    public readonly nsxId!: pulumi.Output<string>;
    /**
     * Policy path for this resource
     */
    public /*out*/ readonly path!: pulumi.Output<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * Advertise subnet to target peers as static routes
     */
    public readonly staticRouteAdvertisement!: pulumi.Output<outputs.PolicyTier0InterVrfRoutingStaticRouteAdvertisement | undefined>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyTier0InterVrfRoutingTag[] | undefined>;
    /**
     * Policy path to tier0/vrf belongs to the same parent tier0
     */
    public readonly targetPath!: pulumi.Output<string>;

    /**
     * Create a PolicyTier0InterVrfRouting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyTier0InterVrfRoutingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyTier0InterVrfRoutingArgs | PolicyTier0InterVrfRoutingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyTier0InterVrfRoutingState | undefined;
            resourceInputs["bgpRouteLeakings"] = state ? state.bgpRouteLeakings : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["gatewayPath"] = state ? state.gatewayPath : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["staticRouteAdvertisement"] = state ? state.staticRouteAdvertisement : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["targetPath"] = state ? state.targetPath : undefined;
        } else {
            const args = argsOrState as PolicyTier0InterVrfRoutingArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.gatewayPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayPath'");
            }
            if ((!args || args.targetPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetPath'");
            }
            resourceInputs["bgpRouteLeakings"] = args ? args.bgpRouteLeakings : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["gatewayPath"] = args ? args.gatewayPath : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["staticRouteAdvertisement"] = args ? args.staticRouteAdvertisement : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["targetPath"] = args ? args.targetPath : undefined;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyTier0InterVrfRouting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyTier0InterVrfRouting resources.
 */
export interface PolicyTier0InterVrfRoutingState {
    /**
     * Import / export BGP routes
     */
    bgpRouteLeakings?: pulumi.Input<pulumi.Input<inputs.PolicyTier0InterVrfRoutingBgpRouteLeaking>[]>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * Policy path for the Gateway
     */
    gatewayPath?: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Policy path for this resource
     */
    path?: pulumi.Input<string>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * Advertise subnet to target peers as static routes
     */
    staticRouteAdvertisement?: pulumi.Input<inputs.PolicyTier0InterVrfRoutingStaticRouteAdvertisement>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyTier0InterVrfRoutingTag>[]>;
    /**
     * Policy path to tier0/vrf belongs to the same parent tier0
     */
    targetPath?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyTier0InterVrfRouting resource.
 */
export interface PolicyTier0InterVrfRoutingArgs {
    /**
     * Import / export BGP routes
     */
    bgpRouteLeakings?: pulumi.Input<pulumi.Input<inputs.PolicyTier0InterVrfRoutingBgpRouteLeaking>[]>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    /**
     * Policy path for the Gateway
     */
    gatewayPath: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Advertise subnet to target peers as static routes
     */
    staticRouteAdvertisement?: pulumi.Input<inputs.PolicyTier0InterVrfRoutingStaticRouteAdvertisement>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyTier0InterVrfRoutingTag>[]>;
    /**
     * Policy path to tier0/vrf belongs to the same parent tier0
     */
    targetPath: pulumi.Input<string>;
}
