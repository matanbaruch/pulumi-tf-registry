// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyEvpnTenant extends pulumi.CustomResource {
    /**
     * Get an existing PolicyEvpnTenant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyEvpnTenantState, opts?: pulumi.CustomResourceOptions): PolicyEvpnTenant {
        return new PolicyEvpnTenant(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyEvpnTenant:PolicyEvpnTenant';

    /**
     * Returns true if the given object is an instance of PolicyEvpnTenant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyEvpnTenant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyEvpnTenant.__pulumiType;
    }

    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    public readonly mappings!: pulumi.Output<outputs.PolicyEvpnTenantMapping[]>;
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
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyEvpnTenantTag[] | undefined>;
    /**
     * Policy path to overlay transport zone
     */
    public readonly transportZonePath!: pulumi.Output<string>;
    /**
     * Policy path to the vni pool used for Evpn in ROUTE-SERVER mode
     */
    public readonly vniPoolPath!: pulumi.Output<string>;

    /**
     * Create a PolicyEvpnTenant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyEvpnTenantArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyEvpnTenantArgs | PolicyEvpnTenantState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyEvpnTenantState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["mappings"] = state ? state.mappings : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["transportZonePath"] = state ? state.transportZonePath : undefined;
            resourceInputs["vniPoolPath"] = state ? state.vniPoolPath : undefined;
        } else {
            const args = argsOrState as PolicyEvpnTenantArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.mappings === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mappings'");
            }
            if ((!args || args.transportZonePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transportZonePath'");
            }
            if ((!args || args.vniPoolPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vniPoolPath'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["transportZonePath"] = args ? args.transportZonePath : undefined;
            resourceInputs["vniPoolPath"] = args ? args.vniPoolPath : undefined;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyEvpnTenant.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyEvpnTenant resources.
 */
export interface PolicyEvpnTenantState {
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    mappings?: pulumi.Input<pulumi.Input<inputs.PolicyEvpnTenantMapping>[]>;
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
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyEvpnTenantTag>[]>;
    /**
     * Policy path to overlay transport zone
     */
    transportZonePath?: pulumi.Input<string>;
    /**
     * Policy path to the vni pool used for Evpn in ROUTE-SERVER mode
     */
    vniPoolPath?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PolicyEvpnTenant resource.
 */
export interface PolicyEvpnTenantArgs {
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    mappings: pulumi.Input<pulumi.Input<inputs.PolicyEvpnTenantMapping>[]>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyEvpnTenantTag>[]>;
    /**
     * Policy path to overlay transport zone
     */
    transportZonePath: pulumi.Input<string>;
    /**
     * Policy path to the vni pool used for Evpn in ROUTE-SERVER mode
     */
    vniPoolPath: pulumi.Input<string>;
}
